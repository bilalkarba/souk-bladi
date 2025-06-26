
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cooperative, cooperatives, products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const CooperativeDetail = () => {
  const { cooperativeId } = useParams<{ cooperativeId: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [cooperative, setCooperative] = useState<Cooperative | null>(null);
  const [cooperativeProducts, setCooperativeProducts] = useState([]);

  useEffect(() => {
    const foundCooperative = cooperatives.find(c => c.id === cooperativeId);
    
    if (foundCooperative) {
      setCooperative(foundCooperative);
      
      // Find products from this cooperative
      const coopProducts = products.filter(p => p.cooperativeId === cooperativeId);
      setCooperativeProducts(coopProducts);
    } else {
      // Cooperative not found
      navigate('/cooperatives');
    }
  }, [cooperativeId, navigate]);

  if (!cooperative) {
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
          className="mb-6 text-morocco-indigo"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className={`h-4 w-4 ${language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'}`} />
          {language === 'fr' ? 'Retour' : 'رجوع'}
        </Button>
        
        {/* Cooperative Header */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="aspect-video">
            <img 
              src={cooperative.image} 
              alt={language === 'fr' ? cooperative.name.fr : cooperative.name.ar}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'} text-morocco-indigo`} />
              <span className={`${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'fr' ? cooperative.location.fr : cooperative.location.ar}
              </span>
            </div>
            
            <h1 className={`text-3xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? cooperative.name.fr : cooperative.name.ar}
            </h1>
            
            <div className={`prose max-w-none ${language === 'ar' ? 'font-arabic' : ''}`}>
              <p className="text-gray-700">
                {language === 'fr' ? cooperative.description.fr : cooperative.description.ar}
              </p>
            </div>
          </div>
        </div>
        
        {/* Cooperative Products */}
        {cooperativeProducts.length > 0 && (
          <div>
            <h2 className={`text-2xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? 'Produits de cette coopérative' : 'منتجات هذه التعاونية'}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cooperativeProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CooperativeDetail;
