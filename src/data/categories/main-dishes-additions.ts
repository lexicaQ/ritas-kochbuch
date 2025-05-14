
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
    category: "Hauptgerichte",
    calories: "ca. 630 kcal/Portion",
    tags: ["Griechisch", "Fleisch", "Schweinefleisch", "Salat", "Kartoffeln"],
    ingredients: [
      {
        group: "Gyros",
        items: [
          { name: "Schweinelachssteaks", amount: "500 g" },
          { name: "Gewürzmischung 'Hello Paprika'", amount: "6 g" },
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
  },
  {
    id: "tortellini-salat-mit-mozzarella",
    title: "Tortellini-Salat mit Mozzarella",
    description: "Frischer Tortellini-Salat mit cremigem Mozzarella und knusprigem Oliven-Pinienkern-Crunch - perfekt für warme Tage.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "20-25 Min",
    difficulty: "Leicht",
    category: "Hauptgerichte",
    calories: "ca. 874 kcal/Portion",
    tags: ["Pasta", "Vegetarisch", "Salat", "Italienisch", "Schnell"],
    ingredients: [
      {
        group: "Salatbasis",
        items: [
          { name: "frische Tortellini (Ricotta-Füllung)", amount: "800 g" },
          { name: "Kirschtomaten", amount: "250 g" }
        ]
      },
      {
        group: "Dressing",
        items: [
          { name: "Olivenöl", amount: "4 EL" },
          { name: "Weißweinessig", amount: "2 EL" },
          { name: "Wasser", amount: "2 EL" },
          { name: "Knoblauchzehen", amount: "2" },
          { name: "Basilikumpaste", amount: "24 ml" },
          { name: "Salz, Pfeffer", amount: "" }
        ]
      },
      {
        group: "Crumble & Topping",
        items: [
          { name: "Pinienkerne", amount: "20 g" },
          { name: "schwarze Oliven (ohne Stein)", amount: "50 g" },
          { name: "Mozzarella", amount: "125 g" },
          { name: "Basilikumblätter", amount: "einige" }
        ]
      }
    ],
    utensils: [
      "1 großer Topf",
      "1 große Schüssel",
      "1 kleine Schüssel",
      "1 Sieb",
      "1 Pfanne",
      "1 Knoblauchpresse"
    ],
    steps: [
      {
        group: "Tortellini kochen",
        items: [
          "Wasser im Topf kräftig salzen und zum Kochen bringen.",
          "Tortellini 3–4 Min al dente kochen, in ein Sieb abgießen und mit kaltem Wasser abschrecken.",
          "In die große Schüssel geben."
        ]
      },
      {
        group: "Dressing anrühren",
        items: [
          "Knoblauch pressen und mit Basilikumpaste, Öl, Essig, Wasser verrühren.",
          "Mit Salz und Pfeffer abschmecken, über die Tortellini gießen und mischen."
        ]
      },
      {
        group: "Gemüse & Kräuter",
        items: [
          "Kirschtomaten halbieren, Basilikumblätter grob zupfen und unterheben.",
          "Nochmals mit Salz/Pfeffer abschmecken."
        ]
      },
      {
        group: "Oliven-Pinienkern-Crumble",
        items: [
          "Pinienkerne und die Hälfte der Oliven grob hacken.",
          "In einer Pfanne ohne Fett 3–4 Min leicht anrösten, in eine kleine Schüssel geben.",
          "Restliche Oliven halbieren und unter den Salat mischen."
        ]
      },
      {
        group: "Mozzarella panieren",
        items: [
          "Mozzarella in 2 cm große Würfel schneiden.",
          "Würfel in dem Oliven-Pinienkern-Crumble wälzen."
        ]
      },
      {
        group: "Anrichten",
        items: [
          "Tortellini-Salat auf Teller verteilen.",
          "Mozzarella-Cubes daraufsetzen und mit restlichem Crumble bestreuen.",
          "Sofort servieren – fertig!"
        ]
      }
    ],
    tips: [
      "Für eine schärfere Variante kannst du dem Dressing etwas Chilipulver hinzufügen.",
      "Der Salat schmeckt auch kalt sehr gut, daher kannst du ihn gut vorbereiten.",
      "Als Alternative zu Tortellini mit Ricotta kannst du auch andere Füllungen wie Spinat oder Pilz verwenden."
    ]
  },
  {
    id: "nasi-goreng-mit-golden-pancakes",
    title: "Nasi Goreng mit Golden Pancakes",
    description: "Eine milde Version des indonesischen Klassikers Nasi Goreng mit goldenen Curry-Pancakes und knackigem Brokkoli.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1000&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "30-40 Min",
    difficulty: "Mittel",
    category: "Hauptgerichte",
    calories: "ca. 733 kcal/Portion",
    tags: ["Asiatisch", "Reis", "Vegetarisch", "Curry"],
    ingredients: [
      {
        group: "Reis",
        items: [
          { name: "Basmati-Reis", amount: "300 g" },
          { name: "Ketjap Manis", amount: "8 ml" },
          { name: "Sojasoße", amount: "8 ml" },
          { name: "Gemüsebrühe (Pulver)", amount: "8 g" }
        ]
      },
      {
        group: "Gemüse",
        items: [
          { name: "Brokkoli", amount: "200 g" },
          { name: "Karotte", amount: "1" },
          { name: "Frühlingszwiebeln", amount: "2" },
          { name: "Knoblauchzehen", amount: "2" }
        ]
      },
      {
        group: "Pancakes",
        items: [
          { name: "Weizenmehl", amount: "100 g" },
          { name: "Milch", amount: "200 ml" },
          { name: "Gewürzmischung 'Hello Curry'", amount: "8 g" },
          { name: "Salz, Pfeffer", amount: "" },
          { name: "Öl zum Braten", amount: "1 EL" }
        ]
      },
      {
        group: "Finish",
        items: [
          { name: "Sweet-Chili-Soße", amount: "25 g" },
          { name: "Öl zum Braten", amount: "" },
          { name: "Salz, Pfeffer", amount: "" }
        ]
      }
    ],
    utensils: [
      "1 großer Topf mit Deckel",
      "1 große Pfanne",
      "1 Sieb",
      "1 kleine Schüssel"
    ],
    steps: [
      {
        group: "Gemüse & Kräuter vorbereiten",
        items: [
          "Frühlingszwiebeln waschen, weißen und grünen Teil getrennt in feine Ringe schneiden.",
          "Karotte schälen, längs halbieren, in 0,5 cm dicke Halbmonde schneiden.",
          "Brokkoli in mundgerechte Röschen teilen.",
          "Knoblauchzehen fein hacken."
        ]
      },
      {
        group: "Reis garen",
        items: [
          "1 EL Öl im Topf erhitzen, Reis kurz anschwitzen.",
          "Mit 600 ml Wasser (bei 4 Port.) und Gemüsebrühe aufgießen, salzen.",
          "Bei mittlerer Hitze zudecken 10 Min köcheln, dann Topf vom Herd nehmen und 10 Min quellen lassen."
        ]
      },
      {
        group: "Brokkoli dünsten",
        items: [
          "In der Pfanne 1 EL Öl erhitzen, Brokkoli und Karotte 2–3 Min anschwitzen.",
          "150 ml Wasser zugießen, salzen, dünsten, bis das Wasser verkocht ist. Beiseitestellen."
        ]
      },
      {
        group: "Golden Pancakes",
        items: [
          "Mehl, Milch, Curry­gewürz, ein Viertel der Frühlings­zwiebelringe, Salz und Pfeffer in einer Schüssel zu glattem Teig verrühren.",
          "1 EL Öl in Pfanne erhitzen, dünne Pfannkuchen (Ø 12 cm) ausbacken, pro Seite ca. 2 Min."
        ]
      },
      {
        group: "Pancake-Streifen",
        items: [
          "Pfannkuchen aufrollen, in 1 cm dicke Streifen schneiden."
        ]
      },
      {
        group: "Nasi Goreng fertigstellen",
        items: [
          "Reis, Gemüse und Ketjap Manis in der Pfanne vermengen.",
          "Mit Sojasoße, Salz und Pfeffer abschmecken."
        ]
      },
      {
        group: "Anrichten",
        items: [
          "Nasi Goreng auf Teller geben.",
          "Pancake-Röllchen und restliche Frühlingszwiebelringe darauf verteilen.",
          "Nach Belieben mit Sweet-Chili-Soße garnieren."
        ]
      }
    ],
    tips: [
      "Für eine nicht-vegetarische Variante kannst du gebratenes Hühnchen oder Garnelen hinzufügen.",
      "Die Pancakes können auch vorher zubereitet und später erwärmt werden.",
      "Für mehr Schärfe gib einfach etwas Chili oder Sambal Oelek in den Reis."
    ]
  }
];
