
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import { products } from '@/data/products';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Products = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = products;
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      const categoryMap: { [key: string]: string } = {
        'oils': 'Huiles',
        'carpets': 'Tapis',
        'food': 'Alimentaire',
        'cosmetics': 'Cosmétiques',
        'pottery': 'Poterie',
      };
      filtered = filtered.filter(product => 
        product.category.fr === categoryMap[selectedCategory]
      );
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.fr.toLowerCase().includes(query) || 
        product.name.ar.toLowerCase().includes(query) || 
        product.description.fr.toLowerCase().includes(query) || 
        product.description.ar.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Page Header */}
        <div className="bg-morocco-sand/10 pattern-bg py-10">
          <div className="container mx-auto px-4">
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? 'Nos Produits' : 'منتجاتنا'}
            </h1>
            
            <p className={`text-lg text-gray-700 max-w-2xl ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' 
                ? 'Découvrez notre sélection de produits artisanaux fabriqués par des coopératives locales.'
                : 'اكتشف مجموعتنا من المنتجات الحرفية المصنوعة من قبل التعاونيات المحلية.'}
            </p>
          </div>
        </div>
        
        {/* Products Section */}
        <div className="container mx-auto px-4 py-8">
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="relative mb-6">
              <Search className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-3 h-5 w-5 text-gray-400`} />
              <Input
                placeholder={language === 'fr' ? 'Rechercher des produits...' : 'البحث عن المنتجات...'}
                className={`pl-10 ${language === 'ar' ? 'pr-10 pl-4 font-arabic' : ''}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className={`text-lg text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'fr' 
                  ? 'Aucun produit ne correspond à votre recherche.'
                  : 'لا توجد منتجات تطابق بحثك.'}
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
