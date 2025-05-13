
import { Recipe } from "./types";

const additionalRecipes: Recipe[] = [
  {
    id: "fruchtcreme-mit-erdbeersosse",
    title: "Geschichtete Fruchtcreme mit Erdbeersoße",
    description: "Eine köstliche Schichtdessert aus frischen Früchten und cremigem Quark, gekrönt mit einer fruchtigen Erdbeersoße.",
    image: "/placeholder.svg",
    portionSize: "4",
    prepTime: "30 Min",
    totalTime: "3 Std 30 Min",
    difficulty: "Einfach",
    category: "Desserts",
    tags: ["Dessert", "Frucht", "Quark", "Vegetarisch", "Kalt"],
    ingredients: [
      {
        group: "Fruchtlagen",
        items: [
          { name: "Kiwis", amount: "2" },
          { name: "Heidelbeeren", amount: "150 g" },
          { name: "sehr reife Birnen", amount: "4" },
          { name: "Bananen", amount: "2" },
          { name: "Orangen", amount: "2" },
        ]
      },
      {
        group: "Quarkcreme",
        items: [
          { name: "Magerquark", amount: "150 g" },
          { name: "Zimt", amount: "1 TL" },
          { name: "Honig", amount: "1 EL" },
        ]
      },
      {
        group: "Erdbeer-Soße",
        items: [
          { name: "Erdbeeren", amount: "200 g" },
        ]
      },
      {
        group: "Deko",
        items: [
          { name: "Minzblättchen", amount: "4" },
        ]
      }
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
    utensils: [
      "Mixer oder Pürierstab",
      "4 hohe Dessertgläser",
      "1 Schüssel für Quarkcreme",
      "1 kleine Schüssel für Honig-Zimt-Mischung"
    ],
    tips: [
      "Verwende besonders reife Früchte für mehr Natursüße.",
      "Anstelle von Honig kannst du auch Ahornsirup verwenden.",
      "Für eine vegane Variante, tausche Quark gegen Sojajoghurt aus."
    ]
  },
  {
    id: "gyros-mit-griechischem-salat",
    title: "Gyros mit griechischem Salat, Ofenkartoffeln & Zaziki",
    description: "Saftiges Gyros mit knusprigen Ofenkartoffeln, frischem griechischen Salat und hausgemachtem Zaziki mit feinem Dill-Aroma.",
    image: "/placeholder.svg",
    portionSize: "4",
    prepTime: "20 Min",
    cookTime: "30 Min",
    totalTime: "50 Min",
    difficulty: "Mittel",
    category: "Hauptgerichte",
    calories: "630 kcal/Portion",
    tags: ["Griechisch", "Fleisch", "Ofengericht", "Abendessen", "Herzhaft"],
    ingredients: [
      {
        group: "Gyros",
        items: [
          { name: "Schweinelachssteaks", amount: "500 g" },
          { name: 'Gewürzmischung "Hello Paprika"', amount: "6 g" },
          { name: "Knoblauchzehen", amount: "2" },
        ]
      },
      {
        group: "Ofenkartoffeln",
        items: [
          { name: "Drillinge (kleine Kartoffeln)", amount: "800 g" },
          { name: "Öl (z. B. Olivenöl)", amount: "6 EL" },
          { name: "Salz, Pfeffer", amount: "" },
        ]
      },
      {
        group: "Zaziki",
        items: [
          { name: "Sahnejoghurt", amount: "150 g" },
          { name: "Gurke", amount: "1/2" },
          { name: "Knoblauchzehe", amount: "1" },
          { name: "fein gehackter Dill", amount: "2 EL" },
          { name: "Salz, Pfeffer", amount: "" },
        ]
      },
      {
        group: "Griechischer Salat",
        items: [
          { name: "rote Zwiebel", amount: "1" },
          { name: "Tomate", amount: "1 (ca. 200 g)" },
          { name: "Hirtenkäse", amount: "100 g" },
          { name: "Olivenöl", amount: "2 EL" },
          { name: "Weißweinessig", amount: "1 EL" },
          { name: "Salz, Pfeffer", amount: "" },
          { name: "Petersilie zum Bestreuen", amount: "" },
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
    utensils: [
      "1 großes Backblech + Backpapier",
      "1 große Pfanne",
      "2 große Schüsseln",
      "1 kleine Schüssel",
      "1 Sieb",
      "1 Knoblauchpresse"
    ],
    tips: [
      "Für extra Geschmack kannst du die Kartoffeln mit fein gehacktem Rosmarin würzen.",
      "Vegane Alternative: Ersetzez Fleisch durch Seitan und Joghurt durch Sojajoghurt.",
      "Übrig gebliebenes Gyros ist am nächsten Tag ideal für Wraps oder Pita-Taschen."
    ]
  },
  {
    id: "tortellini-salat-mit-mozzarella",
    title: "Frischer Tortellini-Salat mit Mozzarella & Oliven-Pinienkern-Crunch",
    description: "Ein frischer Pastasalat mit saftigen Kirschtomaten, panierten Mozzarellawürfeln und knusprigem Oliven-Pinienkern-Crumble.",
    image: "/placeholder.svg",
    portionSize: "4",
    prepTime: "25 Min",
    difficulty: "Einfach",
    calories: "874 kcal/Portion",
    category: "Beilagen",
    tags: ["Salat", "Pasta", "Vegetarisch", "Italienisch", "Schnell"],
    ingredients: [
      {
        group: "Salatbasis",
        items: [
          { name: "frische Tortellini (Ricotta-Füllung)", amount: "800 g" },
          { name: "Kirschtomaten", amount: "250 g" },
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
          { name: "Salz, Pfeffer", amount: "" },
        ]
      },
      {
        group: "Crumble & Topping",
        items: [
          { name: "Pinienkerne", amount: "20 g" },
          { name: "schwarze Oliven (ohne Stein)", amount: "50 g" },
          { name: "Mozzarella", amount: "125 g" },
          { name: "Basilikumblätter", amount: "einige" },
        ]
      }
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
    utensils: [
      "1 großer Topf",
      "1 große Schüssel",
      "1 kleine Schüssel",
      "1 Sieb",
      "1 Pfanne",
      "1 Knoblauchpresse"
    ],
    tips: [
      "Für mehr Geschmack kannst du die Tortellini auch in Gemüsebrühe kochen.",
      "Mit gerösteten Pinienkernen und frischem Parmesan servieren für extra Geschmack.",
      "Als Variante kannst du auch gefüllte Ravioli oder Gnocchi verwenden."
    ]
  },
  {
    id: "nasi-goreng-mit-golden-pancakes",
    title: "Mildes Nasi Goreng mit Golden Pancakes & Brokkoli",
    description: "Aromatischer Basmati-Reis mit knackigem Brokkoli und goldenen Curry-Pancakes - eine milde und kreative Interpretation des indonesischen Klassikers.",
    image: "/placeholder.svg",
    portionSize: "4",
    prepTime: "15 Min",
    cookTime: "25 Min",
    totalTime: "40 Min",
    difficulty: "Mittel",
    calories: "733 kcal/Portion",
    category: "Hauptgerichte",
    tags: ["Asiatisch", "Reis", "Vegetarisch", "Curry", "Gemüse"],
    ingredients: [
      {
        group: "Reis",
        items: [
          { name: "Basmati-Reis", amount: "300 g" },
          { name: "Ketjap Manis", amount: "8 ml" },
          { name: "Sojasoße", amount: "8 ml" },
          { name: "Gemüse­brühe (Pulver)", amount: "8 g" },
        ]
      },
      {
        group: "Gemüse",
        items: [
          { name: "Brokkoli", amount: "200 g" },
          { name: "Karotte", amount: "1" },
          { name: "Frühlingszwiebeln", amount: "2" },
          { name: "Knoblauchzehen", amount: "2" },
        ]
      },
      {
        group: "Pancakes",
        items: [
          { name: "Weizenmehl", amount: "100 g" },
          { name: "Milch", amount: "200 ml" },
          { name: 'Gewürzmischung "Hello Curry"', amount: "8 g" },
          { name: "Salz, Pfeffer", amount: "" },
          { name: "Öl zum Braten", amount: "1 EL" },
        ]
      },
      {
        group: "Finish",
        items: [
          { name: "Sweet-Chili-Soße", amount: "25 g" },
          { name: "Öl zum Braten", amount: "" },
          { name: "Salz, Pfeffer", amount: "" },
        ]
      }
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
    utensils: [
      "1 großer Topf mit Deckel",
      "1 große Pfanne",
      "1 Sieb",
      "1 kleine Schüssel"
    ],
    tips: [
      "Für eine schärfere Version kannst du etwas Chili oder Sambal Oelek hinzufügen.",
      "Mit gebratenen Garnelen oder Hühnerfleisch servieren für ein proteinreicheres Gericht.",
      "Die Pancakes können auch im Voraus zubereitet werden und kurz vor dem Servieren erwärmt werden."
    ]
  }
];

export default additionalRecipes;
