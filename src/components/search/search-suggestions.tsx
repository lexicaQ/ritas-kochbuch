
import { SearchResult } from "@/types/search";
import { Clock, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SearchSuggestionsProps {
  results: SearchResult[];
  onSelect: (result: SearchResult) => void;
  searchTerm: string;
  className?: string;
}

const highlightMatch = (text: string, searchTerm: string) => {
  if (!searchTerm.trim()) return text;
  
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    if (part.toLowerCase() === searchTerm.toLowerCase()) {
      return <span key={index} className="bg-cookbook-100 text-cookbook-800 font-medium">{part}</span>;
    }
    return part;
  });
};

export const SearchSuggestions = ({ 
  results, 
  onSelect, 
  searchTerm,
  className
}: SearchSuggestionsProps) => {
  return (
    <div 
      className={cn(
        "absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border-2 border-cookbook-800/40 overflow-hidden max-h-[65vh] overflow-y-auto backdrop-blur-sm shadow-lg shadow-black/20",
        className
      )}
    >
      <div className="divide-y divide-gray-100">
        {results.map((result, index) => (
          <motion.div 
            key={result.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelect(result)}
            className="p-3 hover:bg-cookbook-50 cursor-pointer transition-colors flex items-start gap-3"
          >
            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={result.image} 
                alt={result.title} 
                className="w-full h-full object-cover"
                loading="lazy" 
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-cookbook-800 text-left">
                {highlightMatch(result.title, searchTerm)}
              </h4>
              
              <div className="flex items-center text-xs text-cookbook-600 gap-3 mt-1.5">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {result.prepTime}
                </span>
                
                <span className="bg-cookbook-100/70 px-1.5 py-0.5 rounded text-cookbook-700">
                  {result.category}
                </span>
              </div>
              
              {result.tags && result.tags.length > 0 && (
                <div className="flex gap-1 mt-1.5 flex-wrap">
                  {result.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center text-[10px] bg-cookbook-50 text-cookbook-600 px-1.5 py-0.5 rounded gap-0.5"
                    >
                      <Tag size={8} />
                      {highlightMatch(tag, searchTerm)}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {results.length > 1 && (
        <div className="p-2 bg-gray-50 border-t border-gray-100 text-center text-sm text-gray-500">
          {results.length} Rezepte gefunden
        </div>
      )}
    </div>
  );
};
