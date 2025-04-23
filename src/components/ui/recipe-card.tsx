
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChefHat } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  difficulty: string;
  category: string;
  tags?: string[];
  className?: string;
  isFavorite?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  description,
  image,
  duration,
  difficulty,
  category,
  tags,
  className,
  isFavorite,
}) => {
  return (
    <Link
      to={`/rezept/${id}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-cookbook-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden bg-cookbook-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 w-full p-4">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-cookbook-700 backdrop-blur-sm">
              {category}
            </span>
            {tags && tags.length > 0 && (
              <span className="inline-flex items-center rounded-full bg-cookbook-700/90 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                {tags[0]}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-lg font-semibold text-cookbook-800 font-playfair">
          {title}
        </h3>

        <p className="mt-2 line-clamp-2 flex-1 text-sm text-gray-500">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat size={14} />
            <span>{difficulty}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
