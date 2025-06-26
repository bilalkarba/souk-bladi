
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Product, products, cooperatives } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, Building, Plus, Minus } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [cooperative, setCooperative] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Find cooperative
      const foundCooperative = cooperatives.find(c => c.id === foundProduct.cooperativeId);
      setCooperative(foundCooperative);
      
      // Find related products (same category, excluding current)
      const related = products
        .filter(p => p.category.fr === foundProduct.category.fr && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    } else {
      // Product not found
      navigate('/products');
    }
  }, [productId, navigate]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 text-morocco-terracotta"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className={`h-4 w-4 ${language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'}`} />
          {language === 'fr' ? 'Retour' : 'رجوع'}
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={language === 'fr' ? product.name.fr : product.name.ar}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <div className={`text-sm font-medium text-morocco-terracotta mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? product.category.fr : product.category.ar}
            </div>
            
            <h1 className={`text-3xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? product.name.fr : product.name.ar}
            </h1>
            
            <div className={`text-2xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {product.price} {t('currency')}
            </div>
            
            <div className="mb-6">
              <h3 className={`font-semibold mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'fr' ? 'Description' : 'الوصف'}
              </h3>
              <p className={`text-gray-700 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'fr' ? product.description.fr : product.description.ar}
              </p>
            </div>
            
            {cooperative && (
              <div className="mb-8">
                <h3 className={`font-semibold mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'fr' ? 'Coopérative' : 'التعاونية'}
                </h3>
                
                <Link 
                  to={`/cooperatives/${cooperative.id}`}
                  className="flex items-center text-morocco-indigo hover:underline"
                >
                  <Building className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                  <span className={`${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'fr' ? cooperative.name.fr : cooperative.name.ar}
                  </span>
                </Link>
              </div>
            )}
            
            <div className="flex items-center mb-6">
              <Button
                variant="outline"
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="border-morocco-terracotta text-morocco-terracotta"
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <span className="mx-4 w-8 text-center">{quantity}</span>
              
              <Button
                variant="outline"
                size="icon"
                onClick={increaseQuantity}
                className="border-morocco-terracotta text-morocco-terracotta"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <Button 
              className="w-full py-6 bg-morocco-terracotta hover:bg-morocco-clay text-white"
              onClick={handleAddToCart}
            >
              <ShoppingCart className={`h-5 w-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {t('product.addToCart')}
            </Button>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className={`text-2xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? 'Produits Similaires' : 'منتجات مشابهة'}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
