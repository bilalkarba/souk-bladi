
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/data/products';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from './LanguageContext';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  
  const addToCart = (product: Product, quantity = 1) => {
    setItems(prevItems => {
      // Check if product already exists in cart
      const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex !== -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        
        toast({
          title: language === 'fr' ? 'Produit mis à jour' : 'تم تحديث المنتج',
          description: language === 'fr' 
            ? `Quantité mise à jour: ${updatedItems[existingItemIndex].quantity}` 
            : `الكمية المحدثة: ${updatedItems[existingItemIndex].quantity}`,
        });
        
        return updatedItems;
      } else {
        // Add new item to cart
        toast({
          title: language === 'fr' ? 'Produit ajouté' : 'تمت إضافة المنتج',
          description: language === 'fr' 
            ? `${product.name.fr} ajouté au panier` 
            : `تمت إضافة ${product.name.ar} إلى السلة`,
        });
        
        return [...prevItems, { product, quantity }];
      }
    });
  };
  
  const removeFromCart = (productId: string) => {
    setItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.product.id !== productId);
      
      toast({
        title: language === 'fr' ? 'Produit retiré' : 'تمت إزالة المنتج',
        description: language === 'fr' 
          ? 'Le produit a été retiré du panier' 
          : 'تمت إزالة المنتج من السلة',
      });
      
      return updatedItems;
    });
  };
  
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };
  
  const clearCart = () => {
    setItems([]);
    toast({
      title: language === 'fr' ? 'Panier vidé' : 'تم تفريغ السلة',
      description: language === 'fr' 
        ? 'Tous les produits ont été retirés du panier' 
        : 'تمت إزالة جميع المنتجات من السلة',
    });
  };
  
  // Calculate total number of items
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  // Calculate total price
  const totalPrice = items.reduce((total, item) => 
    total + (item.product.price * item.quantity), 0);
  
  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
