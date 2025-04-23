
import { Recipe } from "../types";

export const pastries: Recipe[] = [
  {
    id: "nussecken",
    title: "Nussecken",
    description: "Klassische Nussecken mit knusprigem Mürbeteig, karamellisierten Haselnüssen und Schokoladenüberzug.",
    image: "https://images.unsplash.com/photo-1621236378699-08b5f0c3b6ed?q=80&w=2070&auto=format&fit=crop",
    portionSize: "1 Blech (32 × 24 cm)",
    prepTime: "45 Min",
    cookTime: "20-30 Min",
    difficulty: "normal",
    category: "Gebäck",
    tags: ["Plätzchen", "Nüsse", "Schokolade", "Backen", "Weihnachten"],
    ingredients: [
      {
        group: "Teig",
        items: [
          { name: "Mehl", amount: "300 g" },
          { name: "Backpulver", amount: "1 TL" },
          { name: "Zucker", amount: "130 g" },
          { name: "Vanillinzucker", amount: "2 Päckchen" },
          { name: "Eier", amount: "2" },
          { name: "Margarine", amount: "130 g" }
        ]
      },
      {
        group: "Nussbelag",
        items: [
          { name: "Butter", amount: "200 g" },
          { name: "Zucker", amount: "200 g" },
          { name: "Vanillinzucker", amount: "2 Päckchen" },
          { name: "Wasser", amount: "4 EL" },
          { name: "gemahlene Haselnusskerne", amount: "200 g" },
          { name: "gehackte Haselnusskerne", amount: "200 g" },
          { name: "Aprikosenkonfitüre", amount: "2 EL" },
          { name: "Schokoladenguss zum Überziehen" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Aus Teig-Zutaten einen glatten Rührteig kneten. Auf das gefettete Blech streichen. Mit Konfitüre bestreichen.",
          "Butter, Zucker, Vanillinzucker und Wasser schmelzen, aufkochen. Nusskerne unterrühren, abkühlen lassen.",
          "Nussmasse auf dem Teig verteilen. Bei 180 °C 20-30 Min backen.",
          "In 8 × 8 cm-Quadrate schneiden, diagonal halbieren. Nach dem Erkalten mit Schokolade überziehen."
        ]
      }
    ]
  }
];
