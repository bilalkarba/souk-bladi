
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/products';
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  const { language } = useLanguage();

  return (
    <div className={`flex flex-wrap gap-2 mb-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          className={`
            ${selectedCategory === category.id 
              ? 'bg-morocco-terracotta hover:bg-morocco-clay text-white' 
              : 'border-morocco-terracotta text-morocco-terracotta hover:bg-morocco-terracotta hover:text-white'}
            ${language === 'ar' ? 'font-arabic' : ''}
          `}
          onClick={() => onSelectCategory(category.id)}
        >
          {language === 'fr' ? category.name.fr : category.name.ar}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
