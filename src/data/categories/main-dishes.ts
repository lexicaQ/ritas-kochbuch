
import { Recipe } from "../types";

export const mainDishes: Recipe[] = [
  {
    id: "pasta-bolognese",
    title: "Pasta Bolognese",
    description: "Klassische italienische Bolognese mit Hackfleisch, Tomaten und frischen Kräutern.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2832&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "20 Min",
    cookTime: "45 Min",
    difficulty: "Normal",
    category: "Hauptgerichte",
    tags: ["Pasta", "Italienisch", "Hackfleisch", "Tomaten"],
    ingredients: [
      {
        items: [
          { name: "Spaghetti", amount: "400 g" },
          { name: "Hackfleisch (gemischt)", amount: "500 g" },
          { name: "Zwiebel", amount: "1" },
          { name: "Karotten", amount: "2" },
          { name: "Staudensellerie", amount: "2 Stangen" },
          { name: "Knoblauch", amount: "3 Zehen" },
          { name: "Tomatenmark", amount: "2 EL" },
          { name: "gehackte Tomaten", amount: "800 g" },
          { name: "Rotwein", amount: "200 ml" },
          { name: "Fleischbrühe", amount: "400 ml" },
          { name: "Parmesan", amount: "100 g" },
          { name: "Olivenöl", amount: "3 EL" },
          { name: "Salz, Pfeffer" },
          { name: "frisches Basilikum" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Zwiebel, Karotten, Sellerie und Knoblauch fein würfeln.",
          "Olivenöl in einem großen Topf erhitzen, Gemüse 5 Min andünsten.",
          "Hackfleisch zugeben und krümelig anbraten.",
          "Tomatenmark einrühren, kurz anschwitzen.",
          "Mit Rotwein ablöschen, einkochen lassen.",
          "Tomaten und Brühe zugeben, 30-40 Min köcheln lassen.",
          "Pasta nach Packungsanweisung kochen.",
          "Sauce abschmecken, mit Pasta servieren.",
          "Mit Parmesan und Basilikum garnieren."
        ]
      }
    ]
  },
  {
    id: "gyros-mit-griechischem-salat",
    title: "Gyros mit griechischem Salat",
    description: "Saftiges Gyros mit knusprigen Ofenkartoffeln, einem frischen griechischen Salat und selbstgemachtem Zaziki mit Dill.",
    image: "https://images.unsplash.com/photo-1599020792689-9ba56c6f8f67?q=80&w=2069&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "40-50 Min",
    difficulty: "Mittel",
    category: "Hauptgerichte",
    tags: ["Griechisch", "Fleisch", "Schweinefleisch", "Salat", "Kartoffeln"],
    ingredients: [
      {
        group: "Gyros",
        items: [
          { name: "Schweinelachssteaks", amount: "500 g" },
          { name: "Gewürzmischung Hello Paprika", amount: "6 g" },
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
  },
  {
    id: "schnitzel-wiener-art",
    title: "Schnitzel Wiener Art",
    description: "Knuspriges paniertes Schnitzel nach Wiener Art mit goldbrauner Panade.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "25 Min",
    cookTime: "15 Min",
    difficulty: "Normal",
    category: "Hauptgerichte",
    tags: ["Österreichisch", "Fleisch", "Paniert", "Klassiker"],
    ingredients: [
      {
        items: [
          { name: "Kalbsschnitzel", amount: "4 Stück (à 150g)" },
          { name: "Mehl", amount: "100 g" },
          { name: "Eier", amount: "3" },
          { name: "Semmelbrösel", amount: "200 g" },
          { name: "Butterschmalz", amount: "200 g" },
          { name: "Salz, Pfeffer" },
          { name: "Zitrone", amount: "1" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Schnitzel flach klopfen und würzen.",
          "Drei Teller vorbereiten: Mehl, verquirlte Eier, Semmelbrösel.",
          "Schnitzel nacheinander in Mehl, Ei und Bröseln wenden.",
          "Butterschmalz in der Pfanne erhitzen.",
          "Schnitzel von beiden Seiten goldbraun braten.",
          "Mit Zitronenspalten servieren."
        ]
      }
    ]
  },
  {
    id: "lachs-mit-dillsosse",
    title: "Lachs mit Dillsoße",
    description: "Zarter Lachs mit cremiger Dillsoße und Kartoffeln.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1887&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "20 Min",
    cookTime: "25 Min",
    difficulty: "Normal",
    category: "Hauptgerichte",
    tags: ["Fisch", "Lachs", "Dill", "Gesund"],
    ingredients: [
      {
        items: [
          { name: "Lachsfilet", amount: "600 g" },
          { name: "Kartoffeln", amount: "800 g" },
          { name: "Sahne", amount: "200 ml" },
          { name: "Dill", amount: "1 Bund" },
          { name: "Zitrone", amount: "1" },
          { name: "Butter", amount: "50 g" },
          { name: "Mehl", amount: "2 EL" },
          { name: "Fischfond", amount: "300 ml" },
          { name: "Salz, Pfeffer" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Kartoffeln kochen.",
          "Lachs würzen und in Butter braten.",
          "Mehl anschwitzen, mit Fischfond ablöschen.",
          "Sahne und gehackten Dill einrühren.",
          "Mit Zitronensaft, Salz und Pfeffer abschmecken.",
          "Lachs mit Dillsoße und Kartoffeln servieren."
        ]
      }
    ]
  }
];
