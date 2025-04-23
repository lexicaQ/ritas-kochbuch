
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ChefHat, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { FavoriteButton } from "./favorite-button";
import { useState, useEffect } from "react";

interface RecipeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  difficulty: string;
  category: string;
  tags: string[];
  className?: string;
  isFavorite?: boolean;
}

// Helper function to get appropriate image based on recipe title
const getRecipeImage = (title: string): string => {
  if (title.includes("Vitalbrot")) {
    return "/lovable-uploads/7894fac3-47c0-475f-8409-195944d7f5e5.png";
  } else if (title.includes("Haferflocken") || title.includes("Kracker")) {
    return "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9";
  } else if (title.includes("Eierlikör")) {
    return "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07";
  } else if (title.includes("Stracciatella") || title.includes("Muffins")) {
    return "https://images.unsplash.com/photo-1599731295690-c8507a674f40";
  } else if (title.includes("Valeskas")) {
    return "https://images.unsplash.com/photo-1472396961693-142e6e269027";
  } else if (title.includes("Spinat") || title.includes("Crostata")) {
    return "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39";
  } else if (title.includes("Lammschulter")) {
    return "https://images.unsplash.com/photo-1588690793273-3fab406b7a7b";
  } else if (title.includes("Walnuß") || title.includes("Nuss")) {
    return "https://images.unsplash.com/photo-1608383466356-7591301b1858";
  } else if (title.includes("Hefebrot")) {
    return "https://images.unsplash.com/photo-1549931319-a545dcf3bc73";
  } else if (title.includes("Zitronen") || title.includes("Kuchen")) {
    return "https://images.unsplash.com/photo-1463271418123-76d4a1277dcc";
  } else if (title.includes("Kartoffelsalat") || title.includes("Ziegenkäse")) {
    return "https://images.unsplash.com/photo-1604908177453-7462950a6a3b";
  } else {
    return image; // Fallback to the provided image
  }
};

export function RecipeCard({ 
  id,
  title, 
  description, 
  image,
  duration,
  difficulty,
  category,
  tags,
  className,
  isFavorite: initialIsFavorite = false
}: RecipeCardProps) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  
  // Use the helper function to get the appropriate image
  const displayImage = getRecipeImage(title);
  
  // Update internal state when the prop changes
  useEffect(() => {
    setIsFavorite(initialIsFavorite);
  }, [initialIsFavorite]);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Here you would typically update this in your backend
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl", 
        className
      )}
    >
      <Link to={`/rezept/${id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={displayImage} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-50"></div>
          <div className="absolute top-3 right-3 rounded-full bg-cookbook-700/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm shadow-sm">
            {category}
          </div>
          
          {/* Favorite Button */}
          <FavoriteButton
            recipeId={id}
            isFavorite={isFavorite}
            onToggle={toggleFavorite}
            className="absolute top-3 left-3 z-10"
          />
        </div>
        
        <div className="p-5 bg-gradient-to-b from-cookbook-50/30 to-white">
          <h3 className="mb-2 line-clamp-1 font-playfair text-xl font-bold text-cookbook-800 rounded-lg">
            {title}
          </h3>
          
          <p className="mb-3 line-clamp-2 text-sm text-gray-600">{description}</p>
          
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="flex items-center gap-1 text-cookbook-700 bg-cookbook-100/60 px-2 py-1 rounded-full">
              <Clock size={14} />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1 text-cookbook-700 bg-cookbook-100/60 px-2 py-1 rounded-full">
              <ChefHat size={14} />
              <span>{difficulty}</span>
            </div>
          </div>
          
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center rounded-full bg-cookbook-100 px-2 py-0.5 text-xs font-medium text-cookbook-800"
                >
                  <Tag size={10} className="mr-1" />
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="inline-flex items-center rounded-full bg-cookbook-50 px-2 py-0.5 text-xs font-medium text-cookbook-700">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
