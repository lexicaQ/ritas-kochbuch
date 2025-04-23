import { Recipe } from "../types";

export const desserts: Recipe[] = [
  {
    id: "hefe-blechkuchen",
    title: "Hefe-Blechkuchen",
    description: "Ein klassischer Hefekuchen vom Blech mit Mandeln und Zuckerguss - perfekt zum Nachmittagskaffee.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop",
    portionSize: "1 Blech",
    prepTime: "45 Min",
    cookTime: "15-20 Min",
    difficulty: "normal",
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
    difficulty: "normal",
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
      "Damit das Lamm beim Aufgehen nicht die Form sprengt, zwei Zahnstocher als „Stützen" in den Teig bohren und Form zur Hälfte mit Kartoffelschalen füllen."
    ]
  }
];
