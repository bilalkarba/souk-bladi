
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="text-center px-4">
        <h1 className={`text-8xl font-bold text-morocco-terracotta mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
          404
        </h1>
        <p className={`text-2xl text-gray-700 mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {language === 'fr' 
            ? 'Oups! Page non trouvée' 
            : 'عفوا! الصفحة غير موجودة'}
        </p>
        <Button 
          className="bg-morocco-terracotta hover:bg-morocco-clay text-white"
          asChild
        >
          <Link to="/" className="flex items-center">
            <Home className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
            {language === 'fr' ? 'Retour à l\'accueil' : 'العودة إلى الصفحة الرئيسية'}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
