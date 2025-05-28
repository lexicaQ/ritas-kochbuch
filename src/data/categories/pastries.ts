
import { Recipe } from "../types";

export const pastries: Recipe[] = [
  {
    id: "vitalbrot",
    title: "Vitalbrot mit Rübenkraut",
    description: "Ein kerniges Vollkornbrot mit Roggenschrot, Weizenschrot, Leinsamen und Sonnenblumenkernen. Perfekt für eine gesunde Ernährung.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop",
    portionSize: "1 Kastenform",
    prepTime: "15 Min (zzgl. 1 Std Gehzeit)",
    cookTime: "3 Std",
    totalTime: "~4 Std 15 Min",
    difficulty: "Leicht",
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
  },
  {
    id: "haferflocken-butter-cracker",
    title: "Haferflocken-Butter-Cracker mit Blauschimmelkäse & Birnen",
    description: "Knusprige Haferflocken-Cracker mit cremigem Blauschimmelkäse und süßen Birnen - ein eleganter Snack.",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "20 Min",
    cookTime: "15 Min",
    difficulty: "Leicht",
    category: "Brot & Gebäck",
    tags: ["Snack", "Haferflocken", "Käse", "Birnen", "Vegetarisch"],
    ingredients: [
      {
        group: "Cracker",
        items: [
          { name: "Haferflocken", amount: "100 g" },
          { name: "Butter", amount: "50 g" },
          { name: "Mehl", amount: "50 g" },
          { name: "Salz", amount: "1 TL" },
          { name: "Wasser", amount: "2-3 EL" }
        ]
      },
      {
        group: "Belag",
        items: [
          { name: "Blauschimmelkäse", amount: "150 g" },
          { name: "Birnen", amount: "2" },
          { name: "Honig", amount: "2 EL" },
          { name: "Walnüsse", amount: "50 g" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Ofen auf 180°C vorheizen.",
          "Haferflocken, Mehl und Salz mischen.",
          "Weiche Butter unterkneten, mit Wasser zu einem Teig verarbeiten.",
          "Dünn ausrollen und in Rechtecke schneiden.",
          "15 Min backen bis goldbraun.",
          "Birnen in Spalten schneiden.",
          "Cracker mit Blauschimmelkäse bestreichen, Birnen auflegen.",
          "Mit Honig beträufeln und Walnüssen garnieren."
        ]
      }
    ]
  },
  {
    id: "eierlikor-kuchen",
    title: "Eierlikör-Kuchen",
    description: "Saftiger Kuchen mit cremigem Eierlikör-Geschmack - perfekt für besondere Anlässe.",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=2069&auto=format&fit=crop",
    portionSize: "12 Stücke",
    prepTime: "25 Min",
    cookTime: "50 Min",
    difficulty: "Normal",
    category: "Brot & Gebäck",
    tags: ["Kuchen", "Eierlikör", "Backen", "Festtag"],
    ingredients: [
      {
        items: [
          { name: "Butter", amount: "200 g" },
          { name: "Zucker", amount: "150 g" },
          { name: "Eier", amount: "4" },
          { name: "Mehl", amount: "300 g" },
          { name: "Backpulver", amount: "1 Päckchen" },
          { name: "Eierlikör", amount: "200 ml" },
          { name: "Puderzucker", amount: "200 g" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Butter und Zucker cremig rühren.",
          "Eier einzeln unterrühren.",
          "Mehl mit Backpulver mischen und abwechselnd mit Eierlikör unterrühren.",
          "In gefettete Kastenform füllen.",
          "Bei 180°C 50 Min backen.",
          "Für Glasur: Puderzucker mit 3 EL Eierlikör verrühren.",
          "Abgekühlten Kuchen mit Glasur überziehen."
        ]
      }
    ]
  },
  {
    id: "stracciatella-muffins",
    title: "Stracciatella-Muffins",
    description: "Fluffige Muffins mit Schokoladenstückchen und Vanille-Geschmack.",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1887&auto=format&fit=crop",
    portionSize: "12 Muffins",
    prepTime: "20 Min",
    cookTime: "20 Min",
    difficulty: "Leicht",
    category: "Brot & Gebäck",
    tags: ["Muffins", "Schokolade", "Vanille", "Backen"],
    ingredients: [
      {
        items: [
          { name: "Mehl", amount: "250 g" },
          { name: "Zucker", amount: "100 g" },
          { name: "Backpulver", amount: "2 TL" },
          { name: "Salz", amount: "1 TL" },
          { name: "Milch", amount: "250 ml" },
          { name: "Öl", amount: "80 ml" },
          { name: "Ei", amount: "1" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Schokoladenstückchen", amount: "100 g" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Ofen auf 200°C vorheizen.",
          "Trockene Zutaten mischen.",
          "Milch, Öl, Ei und Vanillezucker verrühren.",
          "Zu den trockenen Zutaten geben und kurz vermischen.",
          "Schokoladenstückchen unterheben.",
          "In Muffinförmchen füllen.",
          "20 Min backen bis goldbraun."
        ]
      }
    ]
  }
];
