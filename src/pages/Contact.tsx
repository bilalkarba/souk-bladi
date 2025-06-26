
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert(language === 'fr' 
      ? 'Votre message a été envoyé. Nous vous contacterons bientôt!' 
      : 'تم إرسال رسالتك. سنتواصل معك قريبا!');
  };

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Page Header */}
        <div className="bg-morocco-sand/10 pattern-bg py-10">
          <div className="container mx-auto px-4">
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' ? 'Contactez-Nous' : 'اتصل بنا'}
            </h1>
            
            <p className={`text-lg text-gray-700 max-w-2xl ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'fr' 
                ? 'Vous avez des questions ou des commentaires? N\'hésitez pas à nous contacter!'
                : 'هل لديك أسئلة أو تعليقات؟ لا تتردد في الاتصال بنا!'}
            </p>
          </div>
        </div>
        
        {/* Contact Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className={`text-2xl font-semibold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'fr' ? 'Envoyez-nous un message' : 'أرسل لنا رسالة'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block mb-2 text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {language === 'fr' ? 'Nom' : 'الاسم'}
                  </label>
                  <Input 
                    id="name" 
                    placeholder={language === 'fr' ? 'Votre nom' : 'اسمك'} 
                    className={language === 'ar' ? 'font-arabic' : ''}
                    required 
                  />
                </div>
                
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
                    htmlFor="subject" 
                    className={`block mb-2 text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {language === 'fr' ? 'Sujet' : 'الموضوع'}
                  </label>
                  <Input 
                    id="subject" 
                    placeholder={language === 'fr' ? 'Sujet de votre message' : 'موضوع رسالتك'} 
                    className={language === 'ar' ? 'font-arabic' : ''}
                    required 
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block mb-2 text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {language === 'fr' ? 'Message' : 'الرسالة'}
                  </label>
                  <Textarea 
                    id="message" 
                    rows={6} 
                    placeholder={language === 'fr' ? 'Votre message' : 'رسالتك'} 
                    className={language === 'ar' ? 'font-arabic' : ''}
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-6 bg-morocco-terracotta hover:bg-morocco-clay text-white"
                >
                  {language === 'fr' ? 'Envoyer le message' : 'إرسال الرسالة'}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className={`text-2xl font-semibold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'fr' ? 'Informations de contact' : 'معلومات الاتصال'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-morocco-terracotta" />
                  </div>
                  <div className={`${language === 'ar' ? 'mr-4 font-arabic' : 'ml-4'}`}>
                    <h3 className="text-lg font-medium">
                      {language === 'fr' ? 'Email' : 'البريد الإلكتروني'}
                    </h3>
                    <p className="mt-1">bilalabdo928@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-morocco-terracotta" />
                  </div>
                  <div className={`${language === 'ar' ? 'mr-4 font-arabic' : 'ml-4'}`}>
                    <h3 className="text-lg font-medium">
                      {language === 'fr' ? 'Téléphone' : 'الهاتف'}
                    </h3>
                    <p className="mt-1">+212 631473062</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-morocco-terracotta" />
                  </div>
                  <div className={`${language === 'ar' ? 'mr-4 font-arabic' : 'ml-4'}`}>
                    <h3 className="text-lg font-medium">
                      {language === 'fr' ? 'Adresse' : 'العنوان'}
                    </h3>
                    <p className="mt-1">
                      {language === 'fr' 
                        ? 'Avenue Mohamed V, Rabat, Maroc' 
                        : 'شارع محمد الخامس، الرباط، المغرب'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className={`text-lg font-medium mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'fr' ? 'Heures d\'ouverture' : 'ساعات العمل'}
                </h3>
                
                <div className={`space-y-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  <p>
                    {language === 'fr' 
                      ? 'Lundi - Vendredi: 9h00 - 18h00' 
                      : 'الاثنين - الجمعة: 9:00 - 18:00'}
                  </p>
                  <p>
                    {language === 'fr' 
                      ? 'Samedi: 9h00 - 14h00' 
                      : 'السبت: 9:00 - 14:00'}
                  </p>
                  <p>
                    {language === 'fr' 
                      ? 'Dimanche: Fermé' 
                      : 'الأحد: مغلق'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
