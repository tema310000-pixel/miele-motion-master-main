import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "О нас", href: "/about" },
  { name: "Цены", href: "/pricing" },
  { name: "Контакты", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isScrolled || !isHomePage
    ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
    : "bg-transparent";

  const textColor = isScrolled || !isHomePage
    ? "text-foreground"
    : "text-primary-foreground";

  const logoColor = isScrolled || !isHomePage
    ? "text-foreground"
    : "text-primary-foreground";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <nav className="container-premium">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className={`text-2xl font-display font-semibold tracking-tight transition-colors ${logoColor}`}>
            MIELE<span className="text-miele-red">Care</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors link-underline ${textColor} hover:opacity-80`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+1234567890" className={`flex items-center gap-2 text-sm font-medium ${textColor}`}>
              <Phone className="h-4 w-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <Button variant={isScrolled || !isHomePage ? "premium" : "hero-outline"} size="lg" asChild>
              <Link to="/contact">Заказать ремонт</Link>
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-premium py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-foreground hover:text-miele-red transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="premium" size="lg" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Заказать ремонт
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
