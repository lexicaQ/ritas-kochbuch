import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-cookbook-200">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3 md:py-4">
          <Link 
            to="/" 
            className="font-playfair font-bold text-lg md:text-2xl text-cookbook-800"
          >
            Rita's Kochbuch
          </Link>

          <div className="flex items-center gap-3 md:gap-4">
            <Link 
              to="/rezepte" 
              className="text-sm md:text-base text-cookbook-700 hover:text-cookbook-800"
            >
              Alle Rezepte
            </Link>
            <Link 
              to="/kategorien" 
              className="text-sm md:text-base text-cookbook-700 hover:text-cookbook-800"
            >
              Kategorien
            </Link>
            <Link 
              to="/favoriten" 
              className="text-sm md:text-base text-cookbook-700 hover:text-cookbook-800"
            >
              Favoriten
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
