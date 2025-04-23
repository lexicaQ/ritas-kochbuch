
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
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-50"></div>
          <div className="absolute top-3 right-3 rounded-full bg-cookbook-700/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm shadow-sm">
            {category}
          </div>
          
          {/* Favorite Button */}
          <FavoriteButton
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
