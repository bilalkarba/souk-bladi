
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CooperativeCard from '@/components/CooperativeCard';
import { cooperatives } from '@/data/products';

const Cooperatives = () => {
  const { language } = useLanguage();

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Page Header */}
        <div className="bg-morocco-sand/10 pattern-bg py-10">
          <div className="container mx-auto px-4">
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? 'Nos Coopératives' : 'تعاونياتنا'}
            </h1>
            
            <p className={`text-lg text-gray-700 max-w-2xl ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' 
                ? 'Découvrez les coopératives locales et les artisans qui produisent nos produits exceptionnels.'
                : 'اكتشف التعاونيات المحلية والحرفيين الذين ينتجون منتجاتنا الاستثنائية.'}
            </p>
          </div>
        </div>
        
        {/* Cooperatives Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cooperatives.map(cooperative => (
              <CooperativeCard key={cooperative.id} cooperative={cooperative} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cooperatives;
