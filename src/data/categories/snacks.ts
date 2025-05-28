
import { Recipe } from "../types";

export const snacks: Recipe[] = [
  {
    id: "haferflocken-butter-cracker-snack",
    title: "Haferflocken-Butter-Cracker mit Blauschimmelkäse & Birnen",
    description: "Knusprige Haferflocken-Cracker mit cremigem Blauschimmelkäse und süßen Birnen - ein eleganter Snack.",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "20 Min",
    cookTime: "15 Min",
    difficulty: "Leicht",
    category: "Snack",
    tags: ["Snack", "Haferflocken", "Käse", "Birnen", "Vegetarisch"],
    ingredients: [
      {
        group: "Cracker",
        items: [
          { name: "Haferflocken", amount: "100 g" },
          { name: "Butter", amount: "50 g" },
          { name: "Mehl", amount: "50 g" },
          { name: "Salz", amount: "1 TL" },
          { name: "Wasser", amount: "2-3 EL" }
        ]
      },
      {
        group: "Belag",
        items: [
          { name: "Blauschimmelkäse", amount: "150 g" },
          { name: "Birnen", amount: "2" },
          { name: "Honig", amount: "2 EL" },
          { name: "Walnüsse", amount: "50 g" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Ofen auf 180°C vorheizen.",
          "Haferflocken, Mehl und Salz mischen.",
          "Weiche Butter unterkneten, mit Wasser zu einem Teig verarbeiten.",
          "Dünn ausrollen und in Rechtecke schneiden.",
          "15 Min backen bis goldbraun.",
          "Birnen in Spalten schneiden.",
          "Cracker mit Blauschimmelkäse bestreichen, Birnen auflegen.",
          "Mit Honig beträufeln und Walnüssen garnieren."
        ]
      }
    ]
  },
  {
    id: "hummus-klassisch",
    title: "Klassischer Hummus",
    description: "Cremiger orientalischer Dip aus Kichererbsen mit Tahini und Gewürzen.",
    image: "https://images.unsplash.com/photo-1571197119972-6d082de615db?q=80&w=2070&auto=format&fit=crop",
    portionSize: "6 Portionen",
    prepTime: "15 Min",
    difficulty: "Leicht",
    category: "Snack",
    tags: ["Vegan", "Orientalisch", "Dip", "Gesund", "Kichererbsen"],
    ingredients: [
      {
        items: [
          { name: "Kichererbsen (gekocht)", amount: "400 g" },
          { name: "Tahini", amount: "3 EL" },
          { name: "Zitronensaft", amount: "3 EL" },
          { name: "Knoblauch", amount: "2 Zehen" },
          { name: "Olivenöl", amount: "4 EL" },
          { name: "Kreuzkümmel", amount: "1 TL" },
          { name: "Paprikapulver", amount: "1 TL" },
          { name: "Salz", amount: "nach Geschmack" },
          { name: "Wasser", amount: "3-4 EL" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Kichererbsen abtropfen lassen, etwas Kochwasser aufheben.",
          "Alle Zutaten in einen Mixer geben.",
          "Zu einer cremigen Masse pürieren.",
          "Bei Bedarf etwas Kochwasser hinzufügen.",
          "Mit Salz und Gewürzen abschmecken.",
          "Mit Olivenöl und Paprika garnieren."
        ]
      }
    ]
  },
  {
    id: "bruschetta-tomate-basilikum",
    title: "Bruschetta mit Tomate und Basilikum",
    description: "Italienischer Klassiker mit geröstetem Brot, frischen Tomaten und aromatischem Basilikum.",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=2030&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "20 Min",
    difficulty: "Leicht",
    category: "Snack",
    tags: ["Italienisch", "Vegetarisch", "Tomaten", "Basilikum", "Vorspeise"],
    ingredients: [
      {
        items: [
          { name: "Ciabatta oder Baguette", amount: "1" },
          { name: "reife Tomaten", amount: "4" },
          { name: "Knoblauch", amount: "2 Zehen" },
          { name: "frisches Basilikum", amount: "1 Bund" },
          { name: "Olivenöl", amount: "4 EL" },
          { name: "Balsamico", amount: "2 EL" },
          { name: "Salz, Pfeffer" },
          { name: "Parmesan", amount: "50 g" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Brot in dicke Scheiben schneiden und toasten.",
          "Tomaten würfeln, mit Salz, Pfeffer und Basilikum mischen.",
          "Knoblauch halbieren und Brotscheiben damit einreiben.",
          "Brot mit Olivenöl beträufeln.",
          "Tomatenmischung auf dem Brot verteilen.",
          "Mit Balsamico beträufeln und Parmesan darüber hobeln."
        ]
      }
    ]
  }
];
