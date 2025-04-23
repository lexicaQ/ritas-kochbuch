
import React from 'react';
import { Link } from "react-router-dom";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto mt-20 flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="font-playfair text-6xl font-bold text-cookbook-700">404</h1>
        <p className="mt-4 text-2xl font-medium text-gray-700">Seite nicht gefunden</p>
        <p className="mt-2 text-gray-600">
          Die gesuchte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <Button asChild className="mt-8">
          <Link to="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
