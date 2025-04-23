
import { BarChart, Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ProgressSectionProps {
  stepsProgress: number;
  ingredientsProgress: number;
}

export function ProgressSection({ stepsProgress, ingredientsProgress }: ProgressSectionProps) {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-cookbook-100">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-cookbook-800">
            <BarChart size={18} />
            <span className="font-medium">Fortschritt Zubereitung</span>
          </div>
          <span className="text-sm font-medium text-cookbook-600">{Math.round(stepsProgress)}%</span>
        </div>
        <Progress value={stepsProgress} className="h-2" color="dark" />
        <p className="mt-2 text-sm text-gray-600">
          {stepsProgress === 0 ? "Beginne mit der Zubereitung" :
           stepsProgress === 100 ? "Rezept abgeschlossen!" :
           `${Math.round(stepsProgress)}% der Schritte abgeschlossen`}
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-cookbook-100">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-cookbook-800">
            <Check size={18} />
            <span className="font-medium">Einkaufsliste</span>
          </div>
          <span className="text-sm font-medium text-cookbook-600">{Math.round(ingredientsProgress)}%</span>
        </div>
        <Progress value={ingredientsProgress} className="h-2" color="dark" />
        <p className="mt-2 text-sm text-gray-600">
          {ingredientsProgress === 0 ? "Beginne mit dem Einkauf" :
           ingredientsProgress === 100 ? "Alle Zutaten vorhanden!" :
           `${Math.round(ingredientsProgress)}% der Zutaten abgehakt`}
        </p>
      </div>
    </div>
  );
}
