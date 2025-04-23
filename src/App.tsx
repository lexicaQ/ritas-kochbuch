
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { CookieConsent } from "./components/cookie-consent";

// Lazy load components to improve initial loading performance
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

// Create a new query client instance with error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      onError: (error) => {
        console.error('Query error:', error);
      }
    },
  },
});

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
          <CookieConsent />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
