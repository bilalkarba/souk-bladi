
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ArrowRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { language, t } = useLanguage();
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Page Header */}
        <div className="bg-morocco-sand/10 pattern-bg py-10">
          <div className="container mx-auto px-4">
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? 'Votre Panier' : 'سلة مشترياتك'}
            </h1>
          </div>
        </div>
        
        {/* Cart Content */}
        <div className="container mx-auto px-4 py-12">
          {items.length === 0 ? (
            // Empty Cart
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-100">
                <ShoppingCart className="h-10 w-10 text-gray-500" />
              </div>
              
              <h2 className={`text-2xl font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'fr' ? 'Votre panier est vide' : 'سلة مشترياتك فارغة'}
              </h2>
              
              <p className={`text-gray-600 mb-8 max-w-md mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'fr' 
                  ? 'Il semble que vous n\'ayez pas encore ajouté d\'articles à votre panier.' 
                  : 'يبدو أنك لم تضف أي منتجات إلى سلة مشترياتك بعد.'}
              </p>
              
              <Button 
                className="bg-morocco-terracotta hover:bg-morocco-clay text-white"
                asChild
              >
                <Link to="/products" className="inline-flex items-center">
                  {language === 'fr' ? 'Commencer vos achats' : 'ابدأ التسوق'}
                  <ArrowRight className={`h-4 w-4 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Link>
              </Button>
            </div>
          ) : (
            // Cart with items
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 border-b">
                    <div className="flex justify-between items-center">
                      <h2 className={`text-xl font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>
                        {language === 'fr' ? 'Articles dans votre panier' : 'المنتجات في سلتك'}
                      </h2>
                      <Button 
                        variant="ghost" 
                        className="text-red-500 hover:text-red-700"
                        onClick={clearCart}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        {language === 'fr' ? 'Vider le panier' : 'تفريغ السلة'}
                      </Button>
                    </div>
                  </div>
                  
                  <ul className="divide-y">
                    {items.map((item) => (
                      <li key={item.product.id} className="p-6 flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <Link to={`/products/${item.product.id}`} className="flex-shrink-0">
                          <div className="w-24 h-24 rounded overflow-hidden">
                            <img 
                              src={item.product.image} 
                              alt={language === 'fr' ? item.product.name.fr : item.product.name.ar}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </Link>
                        
                        {/* Product Details */}
                        <div className="flex-grow flex flex-col sm:flex-row justify-between">
                          <div>
                            <Link to={`/products/${item.product.id}`}>
                              <h3 className={`text-lg font-medium hover:text-morocco-terracotta ${language === 'ar' ? 'font-arabic' : ''}`}>
                                {language === 'fr' ? item.product.name.fr : item.product.name.ar}
                              </h3>
                            </Link>
                            <p className={`text-sm text-gray-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                              {language === 'fr' ? item.product.category.fr : item.product.category.ar}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4 sm:mt-0">
                            {/* Quantity Controls */}
                            <div className="flex items-center mr-4">
                              <Button
                                variant="outline" 
                                size="icon"
                                className="h-8 w-8 border-morocco-terracotta text-morocco-terracotta"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              
                              <span className="mx-2 w-6 text-center">{item.quantity}</span>
                              
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 border-morocco-terracotta text-morocco-terracotta"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            
                            {/* Price and Remove */}
                            <div className="flex items-center">
                              <div className={`font-semibold mr-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                                {item.product.price * item.quantity} {t('currency')}
                              </div>
                              
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-400 hover:text-red-500"
                                onClick={() => removeFromCart(item.product.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className={`text-xl font-semibold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'fr' ? 'Résumé de la commande' : 'ملخص الطلب'}
                  </h2>
                  
                  <div className="space-y-4">
                    <div className={`flex justify-between ${language === 'ar' ? 'font-arabic' : ''}`}>
                      <span className="text-gray-600">
                        {language === 'fr' ? 'Sous-total' : 'المجموع الفرعي'}
                      </span>
                      <span>{totalPrice} {t('currency')}</span>
                    </div>
                    
                    <div className={`flex justify-between ${language === 'ar' ? 'font-arabic' : ''}`}>
                      <span className="text-gray-600">
                        {language === 'fr' ? 'Livraison' : 'الشحن'}
                      </span>
                      <span>
                        {language === 'fr' ? 'Calculé à l\'étape suivante' : 'يحسب في الخطوة التالية'}
                      </span>
                    </div>
                    
                    <div className="border-t my-4 pt-4">
                      <div className={`flex justify-between text-lg font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>
                        <span>{language === 'fr' ? 'Total' : 'المجموع'}</span>
                        <span>{totalPrice} {t('currency')}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-morocco-terracotta hover:bg-morocco-clay text-white"
                    >
                      {language === 'fr' ? 'Passer à la caisse' : 'الدفع الآن'}
                    </Button>
                    
                    <Link 
                      to="/products"
                      className={`block text-center mt-4 text-morocco-terracotta hover:underline ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {language === 'fr' ? 'Continuer vos achats' : 'مواصلة التسوق'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
