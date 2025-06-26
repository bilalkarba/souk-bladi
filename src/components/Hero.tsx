
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { language, t } = useLanguage();

  return (
    <div className={`relative bg-morocco-sand/10 overflow-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="absolute inset-0 pattern-bg opacity-50"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {t('app.name')}
            </h1>
            
            <p 
              className={`text-xl md:text-2xl text-gray-700 mb-8 ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {t('app.tagline')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-morocco-terracotta hover:bg-morocco-clay text-white px-6 py-3 text-lg"
                asChild
              >
                <Link to="/products">
                  {t('home.discover')}
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-morocco-terracotta text-morocco-terracotta hover:bg-morocco-terracotta hover:text-white px-6 py-3 text-lg"
                asChild
              >
                <Link to="/join">
                  {t('home.joinCTA')}
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800&auto=format" 
                  alt="Moroccan Artisans"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white p-3 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&auto=format" 
                  alt="Moroccan Crafts"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-4 w-full moroccan-border"></div>
    </div>
  );
};

export default Hero;
