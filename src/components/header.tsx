
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Home, BookOpen, FolderOpenDot, Search } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <header 
      className={cn(
        "fixed left-0 top-0 z-40 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white/0"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-playfair text-2xl font-bold text-cookbook-800">
                Ritas Kochbuch
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-cookbook-800 hover:bg-cookbook-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "group relative flex items-center text-sm font-medium uppercase tracking-wider transition-colors",
                      location.pathname === item.path
                        ? "text-cookbook-800"
                        : "text-gray-600 hover:text-cookbook-800"
                    )}
                  >
                    <span className="py-5">{item.name}</span>
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
            <div className="space-y-1 bg-white px-2 pb-4 pt-2 shadow-lg">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-3 rounded-md px-4 py-3 text-base font-medium",
                    location.pathname === item.path
                      ? "bg-cookbook-100 text-cookbook-800"
                      : "text-gray-600 hover:bg-cookbook-50 hover:text-cookbook-800"
                  )}
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
