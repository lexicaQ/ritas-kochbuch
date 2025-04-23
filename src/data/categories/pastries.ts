
import { Recipe } from "../types";

export const pastries: Recipe[] = [
  {
    id: "vitalbrot",
    title: "Vitalbrot mit Rübenkraut",
    description: "Ein kerniges Vollkornbrot mit Roggenschrot, Weizenschrot, Leinsamen und Sonnenblumenkernen. Perfekt für eine gesunde Ernährung.",
    image: "https://images.unsplash.com/photo-1600423400430-34eb4ea425dc?q=80&w=2071&auto=format&fit=crop",
    portionSize: "1 Kastenform",
    prepTime: "15 Min (zzgl. 1 Std Gehzeit)",
    cookTime: "3 Std",
    totalTime: "~4 Std 15 Min",
    difficulty: "leicht",
    category: "Brot & Gebäck",
    tags: ["Vollkorn", "Roggenschrot", "Weizenschrot", "Leinsamen", "Sesam", "Sonnenblumenkerne", "Gesund", "Vegan"],
    ingredients: [
      {
        items: [
          { name: "Roggenschrot", amount: "280 g" },
          { name: "Weizenschrot", amount: "280 g" },
          { name: "Leinsamen", amount: "140 g" },
          { name: "Sesam", amount: "140 g" },
          { name: "Sonnenblumenkerne", amount: "100 g (+ etwas zum Bestreuen)" },
          { name: "Vollkornmehl", amount: "500 g" },
          { name: "Salz", amount: "1 EL" },
          { name: "Buttermilch, lauwarm", amount: "1 l" },
          { name: "Rübenkraut (z. B. Grafschafter)", amount: "150 g" },
          { name: "Würfelhefe", amount: "3 Päckchen (á 42,5 g)" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Lauwarme Buttermilch mit Hefe und Rübenkraut verrühren, 1 Std gehen lassen.",
          "Restliche Zutaten in eine große Schüssel geben.",
          "Hefemilch mit einem großen Holzlöffel unterrühren, bis kein trockenes Mehl mehr sichtbar ist.",
          "Kastenform fetten, Boden und Rand mit Sonnenblumenkernen bestreuen.",
          "Teig einfüllen, im Ofen bei 150 °C 3 Std backen.",
          "Nach 2 Std Backzeit Form mit Backpapier abdecken (sonst wird Kruste zu dunkel).",
          "Brot nach dem Backen in der Form ca. 1 Std ruhen lassen."
        ]
      }
    ],
    tips: [
      "Das Brot eignet sich hervorragend zum Einfrieren. In Scheiben geschnitten und portionsweise verpackt, kann es bei Bedarf aufgetaut werden.",
      "Dieses Brot ist besonders lecker mit Avocado und Salz oder mit Hummus bestrichen."
    ]
  }
];
