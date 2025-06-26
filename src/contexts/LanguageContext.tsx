
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'ar' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    "app.name": "سوق بلادي",
    "app.tagline": "منتجات محلية من قلب المغرب",
    "nav.home": "الرئيسية",
    "nav.products": "المنتجات",
    "nav.cooperatives": "التعاونيات",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    "nav.join": "انضم إلينا",
    "nav.cart": "سلة المشتريات",
    "home.featured": "منتجات مميزة",
    "home.cooperatives": "تعاونيات ناجحة",
    "home.discover": "اكتشف المزيد",
    "home.joinCTA": "انضم إلينا كتعاونية",
    "home.view": "عرض التفاصيل",
    "filter.all": "جميع المنتجات",
    "filter.oils": "الزيوت",
    "filter.carpets": "الزرابي",
    "filter.food": "المأكولات",
    "filter.cosmetics": "مستحضرات تجميل",
    "filter.pottery": "الفخار",
    "product.price": "السعر",
    "product.addToCart": "أضف إلى السلة",
    "currency": "درهم",
    "footer.rights": "جميع الحقوق محفوظة",
  },
  fr: {
    "app.name": "Souk Bladi",
    "app.tagline": "Produits locaux du cœur du Maroc",
    "nav.home": "Accueil",
    "nav.products": "Produits",
    "nav.cooperatives": "Coopératives",
    "nav.about": "À Propos",
    "nav.contact": "Contact",
    "nav.join": "Rejoindre",
    "nav.cart": "Panier",
    "home.featured": "Produits Vedettes",
    "home.cooperatives": "Coopératives à Succès",
    "home.discover": "Découvrir Plus",
    "home.joinCTA": "Rejoignez-nous en tant que coopérative",
    "home.view": "Voir Détails",
    "filter.all": "Tous les Produits",
    "filter.oils": "Huiles",
    "filter.carpets": "Tapis",
    "filter.food": "Alimentaire",
    "filter.cosmetics": "Cosmétiques",
    "filter.pottery": "Poterie",
    "product.price": "Prix",
    "product.addToCart": "Ajouter au Panier",
    "currency": "MAD",
    "footer.rights": "Tous droits réservés",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
