
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import CooperativeCard from '@/components/CooperativeCard';
import { products, cooperatives } from '@/data/products';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const { language, t } = useLanguage();
  
  const featuredProducts = products.filter(product => product.featured);
  const featuredCooperatives = cooperatives.filter(coop => coop.featured);

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Featured Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className={`text-3xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('home.featured')}
              </h2>
              
              <Button 
                variant="ghost" 
                className="text-morocco-terracotta hover:text-morocco-clay"
                asChild
              >
                <Link to="/products" className="flex items-center">
                  {language === 'fr' ? 'Voir tous les produits' : 'عرض جميع المنتجات'}
                  <ArrowRight className={`h-4 w-4 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Cooperatives Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className={`text-3xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('home.cooperatives')}
              </h2>
              
              <Button 
                variant="ghost" 
                className="text-morocco-indigo hover:text-morocco-navy"
                asChild
              >
                <Link to="/cooperatives" className="flex items-center">
                  {language === 'fr' ? 'Voir toutes les coopératives' : 'عرض جميع التعاونيات'}
                  <ArrowRight className={`h-4 w-4 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCooperatives.map(cooperative => (
                <CooperativeCard key={cooperative.id} cooperative={cooperative} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Join CTA Section */}
        <section className="py-16 bg-morocco-terracotta text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-3xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? 'Rejoignez notre communauté' : 'انضم إلى مجتمعنا'}
            </h2>
            
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' 
                ? 'Vous êtes une coopérative ou un artisan ? Inscrivez-vous pour vendre vos produits sur notre plateforme et accédez à un marché plus large.'
                : 'هل أنت تعاونية أو حرفي؟ سجل لبيع منتجاتك على منصتنا والوصول إلى سوق أوسع.'}
            </p>
            
            <Button 
              className="bg-white text-morocco-terracotta hover:bg-gray-100 px-8 py-3 text-lg"
              asChild
            >
              <Link to="/join">
                {language === 'fr' ? 'Rejoindre en tant que vendeur' : 'انضم كبائع'}
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
