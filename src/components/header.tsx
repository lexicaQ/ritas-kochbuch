
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Home, BookOpen, FolderOpenDot } from "lucide-react";
import { cn } from "@/lib/utils";

// Logo component
const Logo = () => (
  <div className="flex flex-col items-center gap-1">
    <div className="rounded-full bg-cookbook-700 h-10 w-10 flex items-center justify-center shadow-lg">
      <span className="text-white font-playfair font-bold text-xl">R</span>
    </div>
    <span className="font-playfair font-bold text-cookbook-800 text-lg hidden md:block">Ritas Kochbuch</span>
  </div>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
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
    <>
      {/* Logo centered at the top */}
      <div className={cn(
        "fixed left-0 w-full z-50 flex justify-center transition-all duration-300 py-2",
        isScrolled ? "top-0 opacity-0 pointer-events-none" : "top-0"
      )}>
        <Link to="/" className="block">
          <Logo />
        </Link>
      </div>
    
      {/* Main navigation bar */}
      <header 
        className={cn(
          "fixed left-0 w-full z-40 transition-all duration-300",
          isScrolled ? "top-0 bg-white shadow-md" : "top-12 bg-white/90 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between relative">
            {/* Mobile menu button (left side) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-cookbook-800 hover:bg-cookbook-100"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo on mobile when scrolled */}
            <div className={cn(
              "absolute left-1/2 -translate-x-1/2 transition-opacity md:hidden",
              isScrolled ? "opacity-100" : "opacity-0"
            )}>
              <Link to="/">
                <Logo />
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center justify-center flex-grow">
              <ul className="flex space-x-8 items-center justify-center">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={cn(
                        "group relative flex items-center text-sm font-medium tracking-wider transition-colors px-1 py-5",
                        location.pathname === item.path
                          ? "text-cookbook-800"
                          : "text-gray-600 hover:text-cookbook-800"
                      )}
                    >
                      <span>{item.name}</span>
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="navigation-underline"
                          className="absolute -bottom-1 left-0 h-0.5 w-full rounded bg-cookbook-800"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Empty space for mobile */}
            <div className="w-10 md:hidden"></div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="bg-white px-4 pb-6 pt-2 shadow-lg">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg px-4 py-3 my-1 text-base font-medium transition-colors",
                      location.pathname === item.path
                        ? "bg-cookbook-100 text-cookbook-800"
                        : "text-gray-600 hover:bg-cookbook-50 hover:text-cookbook-800"
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
    </>
  );
}
