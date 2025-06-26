
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Cooperative } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CooperativeCardProps {
  cooperative: Cooperative;
}

const CooperativeCard: React.FC<CooperativeCardProps> = ({ cooperative }) => {
  const { language, t } = useLanguage();

  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <div className="aspect-video overflow-hidden">
        <img 
          src={cooperative.image} 
          alt={language === 'fr' ? cooperative.name.fr : cooperative.name.ar}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <CardContent className="p-6">
        <div className={`text-sm font-medium text-gray-500 mb-1 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {language === 'fr' ? cooperative.location.fr : cooperative.location.ar}
        </div>
        
        <h3 className={`text-xl font-semibold mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {language === 'fr' ? cooperative.name.fr : cooperative.name.ar}
        </h3>
        
        <p className={`text-gray-600 mb-4 line-clamp-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {language === 'fr' ? cooperative.description.fr : cooperative.description.ar}
        </p>
        
        <Button
          className="mt-2 bg-morocco-indigo hover:bg-morocco-navy text-white"
          asChild
        >
          <Link to={`/cooperatives/${cooperative.id}`}>
            {t('home.view')}
          </Link>
        </Button>
      </CardContent>
      
      {cooperative.featured && (
        <div className="absolute top-2 right-2 bg-morocco-indigo text-white text-xs font-semibold px-2 py-1 rounded-full">
          {language === 'fr' ? 'À la une' : 'مميزة'}
        </div>
      )}
    </Card>
  );
};

export default CooperativeCard;
