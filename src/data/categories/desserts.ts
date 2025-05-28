
import { Recipe } from "../types";

export const desserts: Recipe[] = [
  {
    id: "hefe-blechkuchen",
    title: "Hefe-Blechkuchen",
    description: "Ein klassischer Hefekuchen vom Blech mit Mandeln und Zuckerguss - perfekt zum Nachmittagskaffee.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop",
    portionSize: "1 Blech",
    prepTime: "45 Min",
    cookTime: "15-20 Min",
    difficulty: "Normal",
    category: "Dessert",
    tags: ["Kuchen", "Hefeteig", "Mandeln", "Backen"],
    ingredients: [
      {
        items: [
          { name: "Mehl (Typ 550)", amount: "500 g" },
          { name: "Frischhefe", amount: "40 g" },
          { name: "Eier", amount: "2" },
          { name: "Zucker", amount: "100 g" },
          { name: "Salz", amount: "1 TL" },
          { name: "Milch, lauwarm", amount: "250 ml" },
          { name: "Margarine", amount: "150 g" },
          { name: "weiche Butter zum Bestreichen", amount: "150-200 g" },
          { name: "Mandelblättchen und Zucker zum Bestreuen" },
          { name: "Puderzucker", amount: "200 g" },
          { name: "Zitronensaft" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Mehl, Hefe, Eier, Zucker, Salz, Milch und Margarine zu einem glatten Teig verkneten.",
          "Teig auf ein gefettetes Backblech streichen. Zugedeckt 30 Min gehen lassen.",
          "Weiche Butter dünn auf den Teig streichen. Mandeln und Zucker darüber verteilen.",
          "Bei 200-225 °C (Ober-/Unterhitze) oder 180 °C Umluft 15-20 Min backen.",
          "Puderzucker mit Zitronensaft zu einem Guss verrühren und auf dem heißen Kuchen verteilen.",
          "Abkühlen lassen, in Stücke schneiden und servieren."
        ]
      }
    ]
  },
  {
    id: "osterlamm-kuchen",
    title: "Osterlamm-Kuchen",
    description: "Ein traditioneller Rührkuchen in Lammform - perfekt für das Osterfest.",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=2070&auto=format&fit=crop",
    portionSize: "1 Lamm",
    prepTime: "30 Min",
    cookTime: "60 Min",
    difficulty: "Normal",
    category: "Dessert",
    tags: ["Ostern", "Kuchen", "Mandeln", "Backen", "Festtag"],
    ingredients: [
      {
        group: "Nuss-Butter-Teig",
        items: [
          { name: "Mehl", amount: "300 g" },
          { name: "gemahlene Nüsse", amount: "200 g" },
          { name: "Eier", amount: "4" },
          { name: "Butter, weich", amount: "250 g" },
          { name: "Zucker", amount: "250 g" },
          { name: "Backpulver", amount: "1 Päckchen" },
          { name: "Vanillinzucker", amount: "1 Päckchen" },
          { name: "Salz", amount: "1 Prise" }
        ]
      },
      {
        group: "Mondamin-Teig (Alternative)",
        items: [
          { name: "Mehl", amount: "200 g" },
          { name: "Zucker", amount: "200 g" },
          { name: "Butter, weich", amount: "200 g" },
          { name: "Eier", amount: "4" },
          { name: "Mondamin (Speisestärke)", amount: "100 g" },
          { name: "Backpulver", amount: "2 TL" },
          { name: "Vanillinzucker", amount: "1 Päckchen" },
          { name: "Salz", amount: "1 Prise" }
        ]
      }
    ],
    steps: [
      {
        group: "Nuss-Butter-Teig",
        items: [
          "Butter mit Zucker, Vanillinzucker und Salz cremig schlagen.",
          "Nach und nach die Eier unterrühren, bis die Masse gleichmäßig ist.",
          "Mehl mit Backpulver mischen, Nüsse und Mehl abwechselnd unterheben.",
          "Lamm-Form nur zur Hälfte mit Teig füllen (mit rohen Kartoffelschalen stützen).",
          "60 Min bei 200 °C backen. Nach dem Backen vorsichtig stürzen.",
          "Mit Schlagsahne oder Buttercreme verzieren."
        ]
      }
    ],
    tips: [
      "Damit das Lamm beim Aufgehen nicht die Form sprengt, zwei Zahnstocher als \"Stützen\" in den Teig bohren und Form zur Hälfte mit Kartoffelschalen füllen."
    ]
  },
  {
    id: "geschichtete-fruchtcreme",
    title: "Geschichtete Fruchtcreme mit Erdbeersoße",
    description: "Ein buntes Schichtdessert mit verschiedenen Früchten, cremigem Quark und fruchtiger Erdbeersoße.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1964&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "30 Min",
    totalTime: "3 Std 30 Min (inkl. Kühlzeit)",
    difficulty: "Leicht",
    category: "Dessert",
    tags: ["Früchte", "Quark", "Schichtdessert", "Vegetarisch", "Gesund"],
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
    ]
  },
  {
    id: "tiramisu-klassisch",
    title: "Klassisches Tiramisu",
    description: "Das original italienische Tiramisu mit Mascarpone, Kaffee und Kakao.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=2020&auto=format&fit=crop",
    portionSize: "8 Portionen",
    prepTime: "30 Min",
    totalTime: "4 Std (inkl. Kühlzeit)",
    difficulty: "Normal",
    category: "Dessert",
    tags: ["Italienisch", "Kaffee", "Mascarpone", "Klassiker"],
    ingredients: [
      {
        items: [
          { name: "Löffelbiskuits", amount: "200 g" },
          { name: "starker Espresso", amount: "300 ml" },
          { name: "Amaretto", amount: "3 EL" },
          { name: "Eigelb", amount: "6" },
          { name: "Zucker", amount: "150 g" },
          { name: "Mascarpone", amount: "500 g" },
          { name: "Sahne", amount: "250 ml" },
          { name: "Kakaopulver", amount: "zum Bestäuben" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Espresso mit Amaretto mischen und abkühlen lassen.",
          "Eigelb mit Zucker schaumig schlagen.",
          "Mascarpone unterrühren.",
          "Sahne steif schlagen und unterheben.",
          "Löffelbiskuits kurz in Kaffee tauchen und in Form schichten.",
          "Mit Creme bedecken, Vorgang wiederholen.",
          "4 Stunden kühlen.",
          "Vor dem Servieren mit Kakao bestäuben."
        ]
      }
    ]
  }
];
