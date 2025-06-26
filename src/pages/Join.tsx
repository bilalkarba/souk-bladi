
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const Join = () => {
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert(language === 'fr' 
      ? 'Votre demande a été soumise. Nous vous contacterons bientôt pour les prochaines étapes!' 
      : 'تم تقديم طلبك. سنتواصل معك قريبًا للخطوات التالية!');
  };

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Page Header */}
        <div className="bg-morocco-sand/10 pattern-bg py-10">
          <div className="container mx-auto px-4">
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? 'Rejoindre notre Marketplace' : 'انضم إلى منصتنا'}
            </h1>
            
            <p className={`text-lg text-gray-700 max-w-2xl ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' 
                ? 'Vous êtes une coopérative ou un artisan? Rejoignez notre plateforme pour vendre vos produits et atteindre de nouveaux clients.' 
                : 'هل أنت تعاونية أو حرفي؟ انضم إلى منصتنا لبيع منتجاتك والوصول إلى عملاء جدد.'}
            </p>
          </div>
        </div>
        
        {/* Join Form */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className={`text-2xl font-semibold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? 'Formulaire de demande' : 'نموذج الطلب'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className={`text-lg font-medium mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'fr' ? 'Informations de base' : 'المعلومات الأساسية'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="org-name" 
                      className={`block mb-2 text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {language === 'fr' ? 'Nom de l\'organisation' : 'اسم المنظمة'}
                    </label>
                    <Input 
                      id="org-name" 
                      placeholder={language === 'fr' ? 'Nom de votre coopérative ou entreprise' : 'اسم تعاونيتك أو مشروعك'} 
                      className={language === 'ar' ? 'font-arabic' : ''}
                      required 
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="org-type" 
                      className={`block mb-2 text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {language === 'fr' ? 'Type d\'organisation' : 'نوع المنظمة'}
                    </label>
                    <Select>
                      <SelectTrigger id="org-type" className={language === 'ar' ? 'font-arabic' : ''}>
                        <SelectValue placeholder={language === 'fr' ? 'Sélectionnez un type' : 'اختر نوعًا'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cooperative">
                          {language === 'fr' ? 'Coopérative' : 'تعاونية'}
                        </SelectItem>
                        <SelectItem value="artisan">
                          {language === 'fr' ? 'Artisan Individuel' : 'حرفي فردي'}
                        </SelectItem>
                        <SelectItem value="small-business">
                          {language === 'fr' ? 'Petite Entreprise' : 'مشروع صغير'}
                        </SelectItem>
                        <SelectItem value="other">
                          {language === 'fr' ? 'Autre' : 'أخرى'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className={`block mb-2 text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {language === 'fr' ? 'Nom de la personne à contacter' : 'اسم الشخص المسؤول'}
                    </label>
                    <Input 
                      id="contact-name" 
                      placeholder={language === 'fr' ? 'Votre nom complet' : 'اسمك الكامل'} 
                      className={language === 'ar' ? 'font-arabic' : ''}
                      required 
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="location" 
                      className={`block mb-2 text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {language === 'fr' ? 'Localisation' : 'الموقع'}
                    </label>
                    <Input 
                      id="location" 
                      placeholder={language === 'fr' ? 'Ville/Village, Province' : 'المدينة/القرية، المقاطعة'} 
                      className={language === 'ar' ? 'font-arabic' : ''}
                      required 
                    />
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div>
                <h3 className={`text-lg font-medium mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'fr' ? 'Informations de contact' : 'معلومات الاتصال'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block mb-2 text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {language === 'fr' ? 'Email' : 'البريد الإلكتروني'}
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder={language === 'fr' ? 'Votre email' : 'بريدك الإلكتروني'} 
                      className={language === 'ar' ? 'font-arabic' : ''}
                      required 
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="phone" 
                      className={`block mb-2 text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {language === 'fr' ? 'Téléphone' : 'الهاتف'}
                    </label>
                    <Input 
                      id="phone" 
                      placeholder={language === 'fr' ? 'Numéro de téléphone' : 'رقم الهاتف'} 
                      className={language === 'ar' ? 'font-arabic' : ''}
                      required 
                    />
                  </div>
                </div>
              </div>
              
              {/* Product Information */}
              <div>
                <h3 className={`text-lg font-medium mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'fr' ? 'Informations sur les produits' : 'معلومات عن المنتجات'}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label 
                      htmlFor="product-types" 
                      className={`block mb-2 text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {language === 'fr' ? 'Types de produits vendus' : 'أنواع المنتجات المباعة'}
                    </label>
                    <Select>
                      <SelectTrigger id="product-types" className={language === 'ar' ? 'font-arabic' : ''}>
                        <SelectValue placeholder={language === 'fr' ? 'Sélectionnez une catégorie principale' : 'اختر فئة رئيسية'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="oils">
                          {language === 'fr' ? 'Huiles et cosmétiques naturels' : 'الزيوت ومستحضرات التجميل الطبيعية'}
                        </SelectItem>
                        <SelectItem value="textiles">
                          {language === 'fr' ? 'Textiles et tapis' : 'المنسوجات والزرابي'}
                        </SelectItem>
                        <SelectItem value="food">
                          {language === 'fr' ? 'Produits alimentaires' : 'المنتجات الغذائية'}
                        </SelectItem>
                        <SelectItem value="pottery">
                          {language === 'fr' ? 'Poterie et céramique' : 'الفخار والسيراميك'}
                        </SelectItem>
                        <SelectItem value="jewelry">
                          {language === 'fr' ? 'Bijoux et accessoires' : 'المجوهرات والإكسسوارات'}
                        </SelectItem>
                        <SelectItem value="other">
                          {language === 'fr' ? 'Autre' : 'أخرى'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="product-description" 
                      className={`block mb-2 text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {language === 'fr' ? 'Description de vos produits' : 'وصف منتجاتك'}
                    </label>
                    <Textarea 
                      id="product-description" 
                      rows={4} 
                      placeholder={language === 'fr' ? 'Décrivez brièvement vos produits et ce qui les rend uniques...' : 'صف منتجاتك بإيجاز وما الذي يجعلها فريدة...'} 
                      className={language === 'ar' ? 'font-arabic' : ''}
                      required 
                    />
                  </div>
                </div>
              </div>
              
              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required />
                <label 
                  htmlFor="terms" 
                  className={`text-sm ${language === 'ar' ? 'font-arabic mr-2' : 'ml-2'}`}
                >
                  {language === 'fr' 
                    ? 'J\'accepte les conditions d\'utilisation et la politique de confidentialité.' 
                    : 'أوافق على شروط الاستخدام وسياسة الخصوصية.'}
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 bg-morocco-indigo hover:bg-morocco-navy text-white"
              >
                {language === 'fr' ? 'Soumettre la demande' : 'إرسال الطلب'}
              </Button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Join;
