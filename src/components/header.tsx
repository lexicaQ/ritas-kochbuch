
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Home, BookOpen, FolderOpenDot, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

// Logo component with updated text color
const Logo = ({ isScrolled }: { isScrolled: boolean }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="rounded-full bg-cookbook-700 h-12 w-12 flex items-center justify-center shadow-lg border-2 border-white transition-colors">
        <Utensils className="w-6 h-6 text-white" />
      </div>
      <span className={cn(
        "font-playfair font-bold text-lg md:text-xl transition-colors",
        isHomePage 
          ? isScrolled 
            ? "text-cookbook-700" 
            : "text-white font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          : "text-cookbook-700 font-extrabold"
      )}>
        Ritas Kochbuch
      </span>
    </div>
  );
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navigationItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Alle Rezepte", path: "/rezepte", icon: BookOpen },
    { name: "Kategorien", path: "/kategorien", icon: FolderOpenDot },
    { name: "Favoriten", path: "/favoriten", icon: Heart },
  ];

  return (
    <header 
      className={cn(
        "fixed left-0 top-0 z-40 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="w-full flex justify-center pt-6 pb-1">
        <Link to="/" aria-label="Ritas Kochbuch" className="relative z-50">
          <Logo isScrolled={isScrolled} />
        </Link>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-center border-t border-cookbook-100/50">
          {/* Mobile menu button */}
          <div className="absolute right-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "inline-flex items-center justify-center rounded-md p-2 transition-colors",
                isScrolled 
                  ? "text-cookbook-800 hover:bg-cookbook-100" 
                  : "text-cookbook-700 hover:bg-white/20"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center justify-center">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "group relative flex items-center text-sm font-medium tracking-wider transition-colors px-1 py-4",
                      location.pathname === item.path
                        ? isHomePage 
                          ? isScrolled 
                            ? "text-cookbook-700" 
                            : "text-white" 
                          : "text-cookbook-700"
                        : isHomePage
                          ? isScrolled 
                            ? "text-cookbook-800/80 hover:text-cookbook-700"
                            : "text-white hover:text-white"
                          : "text-cookbook-800/80 hover:text-cookbook-700"
                    )}
                  >
                    <span className="flex items-center gap-1">
                      <item.icon size={18} className="opacity-80" />
                      {item.name}
                    </span>
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="navigation-underline"
                        className={cn(
                          "absolute -bottom-1 left-0 h-0.5 w-full rounded",
                          isHomePage
                            ? isScrolled 
                              ? "bg-cookbook-700" 
                              : "bg-white"
                            : "bg-cookbook-700"
                        )}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 right-0 bottom-0 w-72 md:hidden"
          >
            <div className="h-full bg-white px-4 pb-6 pt-20 shadow-xl">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-4 py-3 my-1 text-base font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-cookbook-100 text-cookbook-700"
                      : "text-cookbook-800 hover:bg-cookbook-50 hover:text-cookbook-700"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
