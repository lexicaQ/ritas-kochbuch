import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "./components/ui/loading-spinner";

// Lazy-loaded pages for better performance
const Index = lazy(() => import("./pages/Index"));
const RecipeList = lazy(() => import("./pages/RecipeList"));
const RecipeDetail = lazy(() => import("./pages/RecipeDetail"));
const Categories = lazy(() => import("./pages/Categories"));
const Favorites = lazy(() => import("./pages/Favorites"));
const NotFound = lazy(() => import("./pages/NotFound"));

const LoadingPage = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="lg" className="mx-auto" />
      <p className="mt-4 text-cookbook-700">Einen Moment bitte...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/rezepte" element={<RecipeList />} />
            <Route path="/rezept/:id" element={<RecipeDetail />} />
            <Route path="/kategorien" element={<Categories />} />
            <Route path="/favoriten" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
