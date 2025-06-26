
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const { language } = useLanguage();

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Page Header */}
        <div className="bg-morocco-sand/10 pattern-bg py-10">
          <div className="container mx-auto px-4">
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? 'À Propos de Nous' : 'معلومات عنا'}
            </h1>
          </div>
        </div>
        
        {/* About Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className={`prose max-w-none ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? (
                <>
                  <h2>Notre Mission</h2>
                  <p>
                    Souk Bladi est une plateforme dédiée à la promotion et à la commercialisation des produits artisanaux et traditionnels marocains, fabriqués par des coopératives locales et des artisans. Notre mission est de créer un pont entre ces producteurs locaux et les consommateurs du monde entier, tout en préservant le patrimoine culturel et artisanal du Maroc.
                  </p>
                  
                  <h2>Qui Sommes-Nous?</h2>
                  <p>
                    Fondée en 2023, notre plateforme est née d'une passion pour l'artisanat marocain et d'un désir de soutenir les communautés rurales et les groupes vulnérables. Nous croyons fermement que le commerce équitable peut transformer des vies, tout en préservant des traditions séculaires.
                  </p>
                  
                  <h2>Notre Vision</h2>
                  <p>
                    Nous aspirons à devenir la première destination en ligne pour les produits artisanaux marocains authentiques, offrant une vitrine mondiale aux coopératives locales et aux artisans. Nous nous engageons à garantir la qualité, l'authenticité et l'origine de chaque produit vendu sur notre plateforme.
                  </p>
                  
                  <h2>Nos Valeurs</h2>
                  <ul>
                    <li><strong>Authenticité</strong> - Nous valorisons et promouvons l'authenticité des produits et des techniques traditionnelles.</li>
                    <li><strong>Équité</strong> - Nous assurons une rémunération juste aux producteurs et aux artisans.</li>
                    <li><strong>Transparence</strong> - Nous fournissons des informations claires sur l'origine et la fabrication de nos produits.</li>
                    <li><strong>Durabilité</strong> - Nous encourageons des pratiques de production respectueuses de l'environnement.</li>
                    <li><strong>Communauté</strong> - Nous soutenons le développement économique des communautés rurales et défavorisées.</li>
                  </ul>
                </>
              ) : (
                <>
                  <h2>مهمتنا</h2>
                  <p>
                    سوق بلادي هي منصة مخصصة لتعزيز وتسويق المنتجات الحرفية والتقليدية المغربية، التي تصنعها التعاونيات المحلية والحرفيون. مهمتنا هي إنشاء جسر بين هؤلاء المنتجين المحليين والمستهلكين في جميع أنحاء العالم، مع الحفاظ على التراث الثقافي والحرفي للمغرب.
                  </p>
                  
                  <h2>من نحن؟</h2>
                  <p>
                    تأسست منصتنا في عام 2023، وُلدت من شغف بالحرف المغربية ورغبة في دعم المجتمعات الريفية والفئات الضعيفة. نحن نؤمن بقوة أن التجارة العادلة يمكن أن تغير حياة، مع الحفاظ على التقاليد العريقة.
                  </p>
                  
                  <h2>رؤيتنا</h2>
                  <p>
                    نطمح لأن نصبح الوجهة الأولى عبر الإنترنت للمنتجات الحرفية المغربية الأصيلة، مما يوفر واجهة عرض عالمية للتعاونيات المحلية والحرفيين. نحن ملتزمون بضمان الجودة والأصالة والمنشأ لكل منتج يباع على منصتنا.
                  </p>
                  
                  <h2>قيمنا</h2>
                  <ul>
                    <li><strong>الأصالة</strong> - نحن نقدر ونروج لأصالة المنتجات والتقنيات التقليدية.</li>
                    <li><strong>العدالة</strong> - نحن نضمن أجرًا عادلًا للمنتجين والحرفيين.</li>
                    <li><strong>الشفافية</strong> - نحن نقدم معلومات واضحة حول أصل وتصنيع منتجاتنا.</li>
                    <li><strong>الاستدامة</strong> - نحن نشجع ممارسات الإنتاج الصديقة للبيئة.</li>
                    <li><strong>المجتمع</strong> - نحن ندعم التنمية الاقتصادية للمجتمعات الريفية والمحرومة.</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
