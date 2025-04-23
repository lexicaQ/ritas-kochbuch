
import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ChefHat, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface RecipeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  category: string;
  difficulty: string;
  duration: string;
  isFavorite?: boolean;
  className?: string;
}

export function RecipeCard({
  id,
  title,
  description,
  image,
  tags,
  category,
  difficulty,
  duration,
  isFavorite: initialFavorite = false,
  className
}: RecipeCardProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    // Show toast notification
    toast({
      title: isFavorite ? "Aus Favoriten entfernt" : "Zu Favoriten hinzugefügt",
      description: `${title} wurde ${isFavorite ? "aus deinen Favoriten entfernt" : "zu deinen Favoriten hinzugefügt"}.`,
      variant: isFavorite ? "destructive" : "default",
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all",
        className
      )}
    >
      <Link to={`/rezept/${id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
          
          {/* Favorite button */}
          <button 
            className="absolute top-3 right-3 z-10 p-1.5 bg-white/80 hover:bg-white rounded-full shadow-md transition-colors"
            onClick={toggleFavorite}
          >
            <Heart 
              size={18} 
              className={cn(
                "transition-colors",
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
              )} 
            />
          </button>
          
          <div className="absolute bottom-0 w-full p-4 text-white">
            <h3 className="font-medium text-white truncate">{title}</h3>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex gap-2 mb-3">
            <span className="inline-flex items-center rounded-full bg-cookbook-100/80 px-2.5 py-0.5 text-xs font-medium text-cookbook-800">
              {category}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-cookbook-100/60 px-2 py-0.5 text-xs font-medium text-cookbook-700">
              <Clock size={10} />
              {duration}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-cookbook-100/60 px-2 py-0.5 text-xs font-medium text-cookbook-700">
              <ChefHat size={10} />
              {difficulty}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          
          <div className="mt-3 flex flex-wrap gap-1">
            {tags?.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs text-cookbook-600 bg-cookbook-50 px-2 py-0.5 rounded-sm">
                #{tag}
              </span>
            ))}
            {tags && tags.length > 3 && (
              <span className="text-xs text-cookbook-600">+{tags.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
