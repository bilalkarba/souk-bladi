
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { totalItems } = useCart();
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  const navItems = [
    { key: 'nav.home', to: '/' },
    { key: 'nav.products', to: '/products' },
    { key: 'nav.cooperatives', to: '/cooperatives' },
    { key: 'nav.about', to: '/about' },
    { key: 'nav.contact', to: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const NavLinks = ({ inMobileMenu = false }) => (
    <>
      {navItems.map((item) => {
        const active = isActive(item.to);
        
        return inMobileMenu ? (
          <SheetClose key={item.key} asChild>
            <Link 
              to={item.to} 
              className={`
                text-gray-700 hover:text-morocco-terracotta hover:bg-morocco-sand/20 font-medium transition-colors rounded-md px-3 py-2
                ${language === 'ar' ? 'font-arabic' : ''}
                ${inMobileMenu ? 'block py-3 text-lg border-b border-gray-100' : ''}
                ${active ? 'bg-morocco-sand/30 text-morocco-terracotta font-semibold' : ''}
              `}
            >
              {t(item.key)}
            </Link>
          </SheetClose>
        ) : (
          <Link 
            key={item.key} 
            to={item.to} 
            className={`
              text-gray-700 hover:text-morocco-terracotta hover:bg-morocco-sand/20 rounded-md px-3 py-2 font-medium transition-all duration-200 transform hover:scale-105 relative
              ${language === 'ar' ? 'font-arabic' : ''}
              ${active ? 'bg-morocco-sand/30 text-morocco-terracotta font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-morocco-terracotta after:rounded' : ''}
            `}
          >
            {t(item.key)}
          </Link>
        )
      })}
    </>
  );

  return (
    <nav className={`w-full py-4 bg-white shadow-sm ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="w-10 h-10 rounded-full bg-morocco-terracotta flex items-center justify-center text-white font-bold text-xl transition-transform duration-300 group-hover:scale-110">
              {language === 'fr' ? 'SB' : 'سب'}
            </div>
            <span className={`ml-2 text-xl font-semibold transition-colors duration-300 group-hover:text-morocco-terracotta ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('app.name')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex space-x-6 items-center">
              <NavLinks />
            </div>
          )}

          <div className="flex items-center space-x-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleLanguage} 
                  className="text-gray-700 hover:text-morocco-terracotta hover:bg-morocco-sand/10 transition-all duration-200 transform hover:scale-110"
                >
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Change Language</span>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto p-2">
                <p className="text-sm">
                  {language === 'fr' ? 'Changer en arabe' : 'تغيير إلى الفرنسية'}
                </p>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-700 hover:text-morocco-terracotta hover:bg-morocco-sand/10 relative transition-all duration-200 transform hover:scale-110"
                  asChild
                >
                  <Link to="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">{t('nav.cart')}</span>
                    <span className="absolute -top-1 -right-1 bg-morocco-terracotta text-white w-5 h-5 rounded-full text-xs flex items-center justify-center transition-transform duration-300 animate-in">
                      {totalItems}
                    </span>
                  </Link>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto p-2">
                <p className="text-sm">{t('nav.cart')}</p>
              </HoverCardContent>
            </HoverCard>
            
            {/* Join button (only visible on desktop) */}
            {!isMobile && (
              <Button 
                className="bg-morocco-terracotta hover:bg-morocco-clay text-white transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                asChild
              >
                <Link to="/join">
                  {t('nav.join')}
                </Link>
              </Button>
            )}

            {/* Mobile Menu */}
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-700 hover:text-morocco-terracotta hover:bg-morocco-sand/10 ml-2 transition-all duration-200 transform hover:scale-110"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side={language === 'ar' ? 'right' : 'left'} className={`${language === 'ar' ? 'rtl' : 'ltr'}`}>
                  <div className="flex flex-col h-full">
                    <div className="py-6">
                      <div className="flex items-center mb-6">
                        <div className="w-10 h-10 rounded-full bg-morocco-terracotta flex items-center justify-center text-white font-bold text-xl">
                          {language === 'fr' ? 'SB' : 'سب'}
                        </div>
                        <span className={`ml-2 text-xl font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {t('app.name')}
                        </span>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <NavLinks inMobileMenu={true} />
                      </div>
                    </div>
                    <div className="mt-auto pt-4 border-t">
                      <SheetClose asChild>
                        <Button 
                          className="w-full bg-morocco-terracotta hover:bg-morocco-clay text-white transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                          asChild
                        >
                          <Link to="/join">
                            {t('nav.join')}
                          </Link>
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
