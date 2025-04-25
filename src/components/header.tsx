
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, BookOpen, FolderOpenDot, Heart, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

const Logo = ({
  isScrolled
}: {
  isScrolled: boolean;
}) => {
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
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Ensure initial state is set correctly
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationItems = [
    {
      name: "Home",
      path: "/",
      icon: Home
    }, 
    {
      name: "Alle Rezepte",
      path: "/rezepte",
      icon: BookOpen
    }, 
    {
      name: "Kategorien",
      path: "/kategorien",
      icon: FolderOpenDot
    }, 
    {
      name: "Favoriten",
      path: "/favoriten",
      icon: Heart
    }
  ];

  return (
    <header className={cn(
      "fixed left-0 top-0 z-40 w-full transition-all duration-300", 
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="w-full flex flex-col items-center pt-4 pb-1">
        <Link to="/" aria-label="Ritas Kochbuch">
          <Logo isScrolled={isScrolled} />
        </Link>

        <div className="w-full mt-3">
          <Separator className={cn(
            "w-11/12 mx-auto opacity-50",
            isHomePage 
              ? isScrolled 
                ? "bg-cookbook-700/20" 
                : "bg-white" 
              : "bg-cookbook-700/20"
          )} />
          
          <nav className="container mx-auto px-4 mt-2">
            <ul className="flex space-x-4 md:space-x-8 items-center justify-center">
              {navigationItems.map(item => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className={cn(
                      "group relative flex items-center text-sm font-medium tracking-wider transition-colors px-1 py-2",
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
                      <span className="md:inline text-xs">{item.name}</span>
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
                        transition={{
                          duration: 0.3
                        }} 
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
