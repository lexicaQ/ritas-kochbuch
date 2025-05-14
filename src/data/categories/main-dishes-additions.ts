
import { Recipe } from "../types";

export const mainDishRecipesAdditions: Recipe[] = [
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
