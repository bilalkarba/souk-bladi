
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={language === 'fr' ? product.name.fr : product.name.ar}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      
      <CardContent className="p-4">
        <div className={`text-sm font-medium text-morocco-terracotta mb-1 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {language === 'fr' ? product.category.fr : product.category.ar}
        </div>
        
        <Link to={`/products/${product.id}`}>
          <h3 className={`font-semibold mb-2 hover:text-morocco-terracotta transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'fr' ? product.name.fr : product.name.ar}
          </h3>
        </Link>
        
        <div className={`mt-2 text-lg font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
          {product.price} {t('currency')}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-morocco-terracotta hover:bg-morocco-clay text-white"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {t('product.addToCart')}
        </Button>
      </CardFooter>
      
      {product.featured && (
        <div className="absolute top-2 right-2 bg-morocco-saffron text-white text-xs font-semibold px-2 py-1 rounded">
          {language === 'fr' ? 'Vedette' : 'مميز'}
        </div>
      )}
    </Card>
  );
};

export default ProductCard;
