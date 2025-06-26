
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`bg-gray-50 pt-10 pb-6 border-t ${
        language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-morocco-terracotta flex items-center justify-center text-white font-bold text-xl">
                {language === "fr" ? "SB" : "سب"}
              </div>
              <span
                className={`ml-2 text-xl font-semibold ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t("app.name")}
              </span>
            </Link>
            <p
              className={`mt-4 text-gray-600 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("app.tagline")}
            </p>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3
                className={`text-gray-800 font-medium mb-4 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {language === "fr" ? "Navigation" : "التنقل"}
              </h3>
              <ul className="space-y-2">
                {[
                  "nav.home",
                  "nav.products",
                  "nav.cooperatives",
                  "nav.about",
                  "nav.contact",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className={`text-gray-600 hover:text-morocco-terracotta transition-colors ${
                        language === "ar" ? "font-arabic" : ""
                      }`}
                    >
                      {t(item)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className={`text-gray-800 font-medium mb-4 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {language === "fr" ? "Catégories" : "الفئات"}
              </h3>
              <ul className="space-y-2">
                {[
                  "filter.oils",
                  "filter.carpets",
                  "filter.food",
                  "filter.cosmetics",
                  "filter.pottery",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to="/products"
                      className={`text-gray-600 hover:text-morocco-terracotta transition-colors ${
                        language === "ar" ? "font-arabic" : ""
                      }`}
                    >
                      {t(item)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className={`text-gray-800 font-medium mb-4 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {language === "fr" ? "Contact" : "اتصل بنا"}
              </h3>
              <ul className="space-y-2">
                <li
                  className={`text-gray-600 ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {language === "fr"
                    ? "Email: bilalabdo928@gmail.com"
                    : "البريد الإلكتروني: bilalabdo928@gmail.com"}
                </li>
                <li
                  className={`text-gray-600 ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {language === "fr"
                    ? "Tél: +212 631473062"
                    : " 631473062 212+ : الهاتف"}
                </li>
                <li
                  className={`text-gray-600 ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {language === "fr"
                    ? "Adresse: Sale, Maroc"
                    : "العنوان: سلا, المغرب"}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
          <p className={`${language === "ar" ? "font-arabic" : ""}`}>
            &copy; {currentYear} {t("app.name")}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
