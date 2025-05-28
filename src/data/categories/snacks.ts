
import { Recipe } from "../types";

export const snacks: Recipe[] = [
  {
    id: "geschichtete-fruchtcreme",
    title: "Geschichtete Fruchtcreme mit Erdbeersoße",
    description: "Ein fruchtiges Schichtdessert mit Kiwi, Heidelbeeren, Birnen, Bananen und einer cremigen Quarkmischung, gekrönt von frischer Erdbeersoße.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "30 Min",
    cookTime: "0 Min",
    totalTime: "30 Min + 3 Std Kühlzeit",
    difficulty: "Leicht",
    category: "Snack",
    tags: ["Frucht", "Gesund", "Erfrischend", "Quarkcreme", "Vegetarisch"],
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
    steps: [
      {
        items: [
          "Heidelbeeren mit einem Pürierstab fein mixen und auf 4 Gläser verteilen, dabei den Boden zu 1 cm hoch bedecken.",
          "Quark, Honig und Zimt in einer Schüssel glatt verrühren. Vorsichtig auf das Heidelbeermus geben und leicht andrücken.",
          "Bananen schälen und in grobe Stücke schneiden. Orangen schälen (weiße Haut entfernen), Fruchtfleisch in Stücke teilen.",
          "Bananen und Orangen gemeinsam pürieren und als nächste Schicht auf die Quarkcreme geben.",
          "Gläser abdecken und mindestens 3 Std in den Kühlschrank stellen, damit alles schön fest wird.",
          "Erdbeeren pürieren. Vor dem Servieren Erdbeersoße oben auf die gekühlten Desserts geben.",
          "Mit frischen Minzblättchen garnieren und sofort genießen."
        ]
      }
    ],
    tips: [
      "Für eine noch cremigere Konsistenz kann der Quark durch ein feines Sieb gestrichen werden.",
      "Die Früchte können je nach Saison variiert werden - auch Beeren oder Mangostücke passen hervorragend."
    ]
  },
  {
    id: "gyros-griechischer-salat",
    title: "Gyros mit griechischem Salat, Ofenkartoffeln & Zaziki mit Dill",
    description: "Ein komplettes griechisches Gericht mit würzigem Gyrosfleisch, knusprigen Ofenkartoffeln, frischem griechischem Salat und selbstgemachtem Zaziki.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=2081&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "20 Min",
    cookTime: "30 Min",
    totalTime: "40-50 Min",
    difficulty: "Normal",
    category: "Snack",
    tags: ["Griechisch", "Fleisch", "Kartoffeln", "Salat", "Zaziki", "Mediterranean"],
    ingredients: [
      {
        group: "Gyros",
        items: [
          { name: "Schweinelachssteaks", amount: "500 g" },
          { name: "Gewürzmischung „Hello Paprika"", amount: "6 g" },
          { name: "Knoblauchzehen", amount: "2" }
        ]
      },
      {
        group: "Ofenkartoffeln",
        items: [
          { name: "Drillinge (kleine Kartoffeln)", amount: "800 g" },
          { name: "Öl (z. B. Olivenöl)", amount: "6 EL" },
          { name: "Salz" },
          { name: "Pfeffer" }
        ]
      },
      {
        group: "Zaziki",
        items: [
          { name: "Sahnejoghurt", amount: "150 g" },
          { name: "Gurke", amount: "1/2" },
          { name: "Knoblauchzehe", amount: "1" },
          { name: "fein gehackter Dill", amount: "2 EL" },
          { name: "Salz" },
          { name: "Pfeffer" }
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
          { name: "Salz" },
          { name: "Pfeffer" },
          { name: "Petersilie zum Bestreuen" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Ofen auf 220 °C (Ober-/Unterhitze) vorheizen. Kartoffeln ungeschält halbieren, mit 3 EL Öl, Salz und Pfeffer vermengen.",
          "Kartoffeln auf Backpapier verteilen, 25–30 Min goldbraun backen.",
          "Fleisch in ca. 1 cm breite Streifen schneiden. Knoblauch pressen und mit Gewürzmischung, Salz und Pfeffer verrühren.",
          "Fleisch in der Marinade 5 Min marinieren lassen.",
          "Gurkenhälfte grob reiben, in einem Sieb abtropfen lassen. Joghurt, gepressten Knoblauch und Dill verrühren. Mit Salz/Pfeffer abschmecken.",
          "Zwiebel in feine Streifen, Tomate in Spalten schneiden. Alles in einer Schüssel mit Öl und Essig mischen.",
          "Hirtenkäse hineinbröseln, mit Petersilie bestreuen.",
          "1 EL Öl in Pfanne erhitzen, Fleisch darin 4–6 Min unter Rühren scharf anbraten, bis es innen nicht mehr rosa ist.",
          "Auf Tellern Kartoffeln, Salat und Gyros nebeneinander anrichten. Zaziki dazu reichen."
        ]
      }
    ],
    tips: [
      "Das Zaziki schmeckt besonders gut, wenn es mindestens 30 Minuten vor dem Servieren zubereitet wird.",
      "Für extra Geschmack können die Kartoffeln mit getrockneten Kräutern wie Oregano oder Thymian gewürzt werden."
    ]
  }
];
