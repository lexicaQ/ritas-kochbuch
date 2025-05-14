import { Recipe } from "./types";
import { mainDishes } from "./categories/main-dishes";
import { desserts } from "./categories/desserts";
import { pastries } from "./categories/pastries";
import { mainDishRecipesAdditions } from "./categories/main-dishes-additions";
import { dessertRecipesAdditions } from "./categories/desserts-additions";

// Combine all recipes from different categories
const recipes: Recipe[] = [
  ...mainDishes,
  ...desserts,
  ...pastries,
  ...mainDishRecipesAdditions,
  ...dessertRecipesAdditions,
  {
    id: "haferflockenbutter-kracker",
    title: "Haferflocken‑Butter‑Kracker mit Blauschimmelkäse & Birnen",
    description: "Knusprige selbstgemachte Haferflocken-Cracker, perfekt zum Servieren mit cremigem Blauschimmelkäse und saftigen Birnenscheiben.",
    image: "https://images.unsplash.com/photo-1619980557487-8bdb970bfb85?q=80&w=2071&auto=format&fit=crop",
    portionSize: "6 Personen (ca. 18 Kekse)",
    prepTime: "15 Min (zzgl. 15 Min Kühlzeit)",
    cookTime: "25 Min",
    totalTime: "~55 Min",
    difficulty: "Normal",
    category: "Snack",
    tags: ["Vegetarisch", "Haferflocken", "Blauschimmelkäse", "Birnen", "Gebäck"],
    ingredients: [
      {
        group: "Für die Kracker",
        items: [
          { name: "Haferflocken", amount: "170 g (ca. 2 Tassen)" },
          { name: "Weizenmehl", amount: "75 g (ca. ½ Tasse)" },
          { name: "brauner Zucker", amount: "1,5 EL" },
          { name: "Backpulver", amount: "½ TL" },
          { name: "Salz", amount: "¼ TL" },
          { name: "Butter, geschmolzen und abgekühlt", amount: "100 g" },
          { name: "Wasser", amount: "60 ml (ca. ¼ Tasse)" }
        ]
      },
      {
        group: "Zum Servieren",
        items: [
          { name: "Birnen (z. B. Kaiser Alexander oder Packham)", amount: "3" },
          { name: "frisch gepresster Zitronensaft", amount: "1 EL" },
          { name: "Blauschimmelkäse (z. B. Blue Castello)", amount: "150 g" }
        ]
      }
    ],
    steps: [
      {
        group: "Zubereitung",
        items: [
          "Ofen auf 180 °C (Ober-/Unterhitze) vorheizen. Zwei Backbleche mit Backpapier auslegen.",
          "Haferflocken, Mehl, Zucker, Backpulver und Salz in einer großen Schüssel gut vermengen.",
          "Geschmolzene Butter und Wasser dazugeben. Erst mit einem Messer grob verrühren, dann mit den Händen zügig zu einem glatten Teig verkneten.",
          "Teig halbieren. Eine Portion auf einer leicht bemehlten Arbeitsfläche ca. 5 mm dick ausrollen. Mit einem runden Ausstecher (Ø 6 cm) Plätzchen ausstechen und auf das vorbereitete Blech legen. Mit der zweiten Portion genauso verfahren.",
          "Kekse im heißen Ofen ca. 15 Min backen, bis sie goldbraun sind. Herausnehmen und komplett auf einem Gitter abkühlen lassen. In einem dicht verschlossenen Behälter bis zu einer Woche frisch halten.",
          "Birnen vierteln, Kerngehäuse entfernen, Spalten dünn schneiden. Mit Zitronensaft beträufeln, damit sie nicht bräunen.",
          "Kracker mit Birnenspalten belegen, Blauschimmelkäse darauf arrangieren. Sofort servieren."
        ]
      }
    ],
    tips: [
      "Die Kracker schmecken auch hervorragend mit anderen Käsesorten wie Brie oder Camembert.",
      "Für eine süßere Variante können Sie statt Käse etwas Honig auf die Birnen träufeln.",
      "Die Kracker halten sich in einer luftdichten Dose etwa eine Woche lang frisch."
    ],
    isFavorite: true
  },
  {
    id: "geschichtete-fruchtcreme",
    title: "Geschichtete Fruchtcreme mit Erdbeersoße",
    description: "Frischer Schichtdessert mit verschiedenen Früchten, cremigem Quark und süßer Erdbeersoße - perfekt für warme Sommertage.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "30 Min (zzgl. 3 Std Kühlzeit)",
    difficulty: "Leicht",
    category: "Dessert",
    tags: ["Früchte", "Quark", "Kalt", "Erdbeeren", "Schichtdessert"],
    ingredients: [
      {
        group: "Fruchtlagen",
        items: [
          { name: "Kiwis", amount: "2" },
          { name: "Heidelbeeren", amount: "150 g" },
          { name: "sehr reife Birnen", amount: "4" },
          { name: "Bananen", amount: "2" },
          { name: "Orangen", amount: "2" }
        ]
      },
      {
        group: "Quarkcreme",
        items: [
          { name: "Magerquark", amount: "150 g" },
          { name: "Zimt", amount: "1 TL" },
          { name: "Honig", amount: "1 EL" }
        ]
      },
      {
        group: "Erdbeer-Soße",
        items: [
          { name: "Erdbeeren", amount: "200 g" }
        ]
      },
      {
        group: "Deko",
        items: [
          { name: "Minzblättchen", amount: "4" }
        ]
      }
    ],
    utensils: [
      "Mixer oder Pürierstab",
      "4 hohe Dessertgläser",
      "1 Schüssel für Quarkcreme",
      "1 kleine Schüssel für Honig-Zimt-Mischung"
    ],
    steps: [
      {
        group: "Heidelbeer-Schicht",
        items: [
          "Heidelbeeren mit einem Pürierstab fein mixen.",
          "Auf 4 Gläser verteilen, dabei den Boden zu 1 cm hoch bedecken."
        ]
      },
      {
        group: "Quark-Creme",
        items: [
          "Quark, Honig und Zimt in einer Schüssel glatt verrühren.",
          "Vorsichtig auf das Heidelbeermus geben und leicht andrücken."
        ]
      },
      {
        group: "Banana-Orange-Schicht",
        items: [
          "Bananen schälen und in grobe Stücke schneiden.",
          "Orangen schälen (weiße Haut entfernen), Fruchtfleisch in Stücke teilen.",
          "Gemeinsam pürieren und als nächste Schicht auf die Quarkcreme geben."
        ]
      },
      {
        group: "Kühlen",
        items: [
          "Gläser abdecken und mindestens 3 Std in den Kühlschrank stellen, damit alles schön fest wird."
        ]
      },
      {
        group: "Erdbeer-Topping",
        items: [
          "Erdbeeren pürieren.",
          "Vor dem Servieren Erdbeersoße oben auf die gekühlten Desserts geben."
        ]
      },
      {
        group: "Anrichten",
        items: [
          "Mit frischen Minzblättchen garnieren und sofort genießen."
        ]
      }
    ],
    tips: [
      "Für eine vegane Variante kannst du den Quark durch Sojajoghurt ersetzen.",
      "Im Winter schmeckt der Dessert auch mit tiefgefrorenen Beeren.",
      "Für mehr Süße kannst du dem Quark noch etwas Vanillezucker hinzufügen."
    ]
  },
  {
    id: "gyros-mit-griechischem-salat",
    title: "Gyros mit griechischem Salat",
    description: "Saftiges Gyros mit knusprigen Ofenkartoffeln, einem frischen griechischen Salat und selbstgemachtem Zaziki mit Dill.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1000&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "40-50 Min",
    difficulty: "Mittel",
    category: "Hauptgericht",
    calories: "ca. 630 kcal/Portion",
    tags: ["Griechisch", "Fleisch", "Schweinefleisch", "Salat", "Kartoffeln"],
    ingredients: [
      {
        group: "Gyros",
        items: [
          { name: "Schweinelachssteaks", amount: "500 g" },
          { name: "Gewürzmischung \"Hello Paprika\"", amount: "6 g" },
          { name: "Knoblauchzehen", amount: "2" }
        ]
      },
      {
        group: "Ofenkartoffeln",
        items: [
          { name: "Drillinge (kleine Kartoffeln)", amount: "800 g" },
          { name: "Öl (z. B. Olivenöl)", amount: "6 EL" },
          { name: "Salz, Pfeffer", amount: "" }
        ]
      },
      {
        group: "Zaziki",
        items: [
          { name: "Sahnejoghurt", amount: "150 g" },
          { name: "Gurke", amount: "1/2" },
          { name: "Knoblauchzehe", amount: "1" },
          { name: "fein gehackter Dill", amount: "2 EL" },
          { name: "Salz, Pfeffer", amount: "" }
        ]
      },
      {
        group: "Griechischer Salat",
        items: [
          { name: "rote Zwiebel", amount: "1" },
          { name: "Tomate (ca. 200 g)", amount: "1" },
          { name: "Hirtenkäse", amount: "100 g" },
          { name: "Olivenöl", amount: "2 EL" },
          { name: "Weißweinessig", amount: "1 EL" },
          { name: "Salz, Pfeffer", amount: "" },
          { name: "Petersilie zum Bestreuen", amount: "" }
        ]
      }
    ],
    utensils: [
      "1 großes Backblech + Backpapier",
      "1 große Pfanne",
      "2 große Schüsseln",
      "1 kleine Schüssel",
      "1 Sieb",
      "1 Knoblauchpresse"
    ],
    steps: [
      {
        group: "Kartoffeln backen",
        items: [
          "Ofen auf 220 °C (Ober-/Unterhitze) vorheizen.",
          "Kartoffeln ungeschält halbieren, mit 3 EL Öl, Salz und Pfeffer vermengen.",
          "Auf Backpapier verteilen, 25–30 Min goldbraun backen."
        ]
      },
      {
        group: "Gyros marinieren",
        items: [
          "Fleisch in ca. 1 cm breite Streifen schneiden.",
          "Knoblauch pressen und mit Gewürzmischung, Salz und Pfeffer verrühren.",
          "Fleisch darin 5 Min marinieren lassen."
        ]
      },
      {
        group: "Zaziki zubereiten",
        items: [
          "Gurkenhälfte grob reiben, in einem Sieb abtropfen lassen.",
          "Joghurt, gepressten Knoblauch und Dill verrühren. Mit Salz/Pfeffer abschmecken."
        ]
      },
      {
        group: "Salat anrichten",
        items: [
          "Zwiebel in feine Streifen, Tomate in Spalten schneiden.",
          "Alles in einer Schüssel mit Öl und Essig mischen.",
          "Hirtenkäse hineinbröseln, mit Petersilie bestreuen."
        ]
      },
      {
        group: "Gyros anbraten",
        items: [
          "1 EL Öl in Pfanne erhitzen, Fleisch darin 4–6 Min unter Rühren scharf anbraten, bis es innen nicht mehr rosa ist."
        ]
      },
      {
        group: "Servieren",
        items: [
          "Auf Tellern Kartoffeln, Salat und Gyros nebeneinander anrichten.",
          "Zaziki dazu reichen – fertig!"
        ]
      }
    ],
    tips: [
      "Für ein intensiveres Aroma kannst du das Fleisch bereits am Vortag marinieren.",
      "Vegetarische Alternative: Ersetze das Fleisch durch gewürzte Pilze oder Halloumi.",
      "Für eine schärfere Variante kannst du der Marinade etwas Chili hinzufügen."
    ]
  }
];

// Export recipes for use in other components
export default recipes;
