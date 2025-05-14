
import { Recipe } from "../types";

export const dessertRecipesAdditions: Recipe[] = [
  {
    id: "geschichtete-fruchtcreme",
    title: "Geschichtete Fruchtcreme mit Erdbeersoße",
    description: "Eine leichte und erfrischende Dessert-Komposition aus verschiedenen Fruchtschichten mit einer cremigen Quark-Zimt-Schicht und frischer Erdbeersoße.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "30 Min",
    totalTime: "3,5 Stunden",
    difficulty: "Leicht",
    category: "Desserts",
    tags: ["Früchte", "Quark", "Erdbeeren", "Kiwi", "Heidelbeeren", "Ohne Backen"],
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
      "Verwende für eine intensivere Farbe bei der Heidelbeerschicht gefrorene Heidelbeeren.",
      "Die Schichten lassen sich gut am Vortag vorbereiten.",
      "Für eine süßere Variante kannst du der Quarkcreme mehr Honig hinzufügen.",
      "Statt Magerquark kannst du auch griechischen Joghurt verwenden."
    ]
  }
];
