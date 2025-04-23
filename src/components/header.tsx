
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { NavLink } from './nav-link';

const Header = () => {
  const { isMobile } = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cookbook-100 bg-white">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 flex items-center gap-2" onClick={() => navigate('/')}>
          <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
          <span className="font-playfair text-2xl font-bold text-cookbook-700">Ritas Kochbuch</span>
        </div>
        
        <div className="hidden md:flex flex-1 items-center justify-between">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <NavLink to="/" active={isHomePage}>
              Home
            </NavLink>
            <NavLink to="/rezepte">
              Rezepte
            </NavLink>
            <NavLink to="/kategorien">
              Kategorien
            </NavLink>
            <NavLink to="/favoriten">
              Favoriten
            </NavLink>
          </nav>
          
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rezepte suchen..."
              className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
            />
          </div>
        </div>
        
        {isMobile && (
          <div className="flex flex-1 items-center justify-end gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick={() => navigate('/suche')}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Suche</span>
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <NavLink to="/" className="text-lg">
                    Home
                  </NavLink>
                  <NavLink to="/rezepte" className="text-lg">
                    Rezepte
                  </NavLink>
                  <NavLink to="/kategorien" className="text-lg">
                    Kategorien
                  </NavLink>
                  <NavLink to="/favoriten" className="text-lg">
                    Favoriten
                  </NavLink>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
