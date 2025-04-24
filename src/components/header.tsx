
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, BookOpen, FolderOpenDot, Heart, Utensils, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Logo = ({
  isScrolled
}: {
  isScrolled: boolean;
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return <div className="flex flex-col items-center gap-1">
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
    </div>;
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const navigationItems = [{
    name: "Home",
    path: "/",
    icon: Home
  }, {
    name: "Alle Rezepte",
    path: "/rezepte",
    icon: BookOpen
  }, {
    name: "Kategorien",
    path: "/kategorien",
    icon: FolderOpenDot
  }, {
    name: "Favoriten",
    path: "/favoriten",
    icon: Heart
  }];

  return <header className={cn("fixed left-0 top-0 z-40 w-full transition-all duration-300", isScrolled ? "bg-white shadow-md" : "bg-transparent")}>
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
          
          {/* Desktop Navigation */}
          <nav className="container mx-auto px-4 mt-2 hidden md:block">
            <ul className="flex space-x-8 items-center justify-center">
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
                      <span>{item.name}</span>
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
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-center mt-2">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Menu className={cn(
                    "h-5 w-5 transition-opacity",
                    isHomePage && !isScrolled ? "text-white" : "text-cookbook-700"
                  )} />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="pt-14 pb-6">
                <div className="flex justify-end">
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="py-4">
                  <ul className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <li key={item.name} className="w-full">
                        <Link
                          to={item.path}
                          className={cn(
                            "flex items-center gap-3 px-2 py-3 rounded-md text-base font-medium",
                            location.pathname === item.path
                              ? "bg-cookbook-100 text-cookbook-700"
                              : "text-cookbook-800 hover:bg-cookbook-50"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon size={20} />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>;
}
