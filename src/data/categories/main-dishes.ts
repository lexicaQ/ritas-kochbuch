
import { Recipe } from "../types";

export const mainDishes: Recipe[] = [
  {
    id: "provenzalischer-auflauf",
    title: "Provenzalischer Auflauf",
    description: "Ein mediterraner Auflauf mit zartem Putenfleisch, Tomaten, Zucchini und Kräutern der Provence.",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2070&auto=format&fit=crop",
    portionSize: "2 Portionen",
    prepTime: "15 Min",
    cookTime: "40-45 Min",
    difficulty: "normal",
    category: "Hauptgericht",
    tags: ["Französisch", "Auflauf", "Pute", "Gemüse", "Mediterranean"],
    ingredients: [
      {
        items: [
          { name: "Putenfilets, in Scheiben", amount: "300 g" },
          { name: "Olivenöl", amount: "4 EL" },
          { name: "Tomaten, in Scheiben", amount: "400 g" },
          { name: "Zucchini, in Scheiben", amount: "500 g" },
          { name: "Knoblauchzehen, fein zerdrückt", amount: "3-4" },
          { name: "Basilikum, gehackt", amount: "1 Topf" },
          { name: "Rosmarin, fein gezupft", amount: "1 Stiel" },
          { name: "Salz" },
          { name: "Pfeffer" },
          { name: "Crème fraîche", amount: "300 g" },
          { name: "Eier", amount: "2" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Öl in einer Pfanne erhitzen. Putenscheiben 1-2 Min pro Seite scharf anbraten, herausnehmen.",
          "Tomaten und Zucchini schneiden. Knoblauch, Basilikum und Rosmarin mit etwas Öl, Salz und Pfeffer verrühren.",
          "Auflaufform fetten. Tomaten und Zucchini abwechselnd einschichten, mit Knoblauch-Kräuter-Öl würzen. Putenscheiben untermischen.",
          "Crème fraîche mit Eiern verquirlen und über den Auflauf gießen. Form mit Alufolie abdecken.",
          "Im vorgeheizten Ofen (200 °C) 40-45 Min garen. Vor dem Servieren mit frischem Basilikum und etwas Rosmarin garnieren."
        ]
      }
    ]
  },
  {
    id: "poulardenbrust-salat",
    title: "Poulardenbrust mit Salat & mariniertem Lauch",
    description: "Eine raffinierte Kombination aus gefüllter Poulardenbrust, mariniertem Lauch und einem frischen Rucolasalat mit Kartoffeldressing.",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "45 Min",
    cookTime: "15 Min",
    difficulty: "normal",
    category: "Hauptgericht",
    tags: ["Geflügel", "Salat", "Lauch", "Gourmet"],
    ingredients: [
      {
        group: "Geflügel & Füllung",
        items: [
          { name: "Poulardenbrüste", amount: "4" },
          { name: "getrocknete Tomaten in Öl, grob gehackt", amount: "4" },
          { name: "grüne Oliven, entsteint und gehackt", amount: "4" },
          { name: "Basilikumblätter, gehackt", amount: "4" },
          { name: "Zahnstocher zum Fixieren" }
        ]
      },
      {
        group: "Salat & Lauch",
        items: [
          { name: "Rucola oder Feldsalat", amount: "200 g" },
          { name: "Lauchstange", amount: "1" },
          { name: "frischer Thymian", amount: "1 Sträußchen" },
          { name: "Essig" },
          { name: "Olivenöl" },
          { name: "Salz" },
          { name: "Pfeffer" }
        ]
      },
      {
        group: "Kartoffeldressing",
        items: [
          { name: "mehlig kochende Kartoffeln", amount: "150 g" },
          { name: "Gemüsebrühe", amount: "150 ml" },
          { name: "Sherryessig", amount: "4 EL" },
          { name: "Olivenöl", amount: "5 EL" },
          { name: "Salz" },
          { name: "Pfeffer" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Fleisch oberflächlich einschneiden. Tomaten, Oliven und Basilikum mischen. Mischung in die Tasche der Brust füllen. Mit Zahnstocher verschließen.",
          "Lauchringe in einer Pfanne mit etwas Butter und Salz kurz anbraten. Mit Essig und Öl ablöschen, Thymian zufügen, beiseitestellen.",
          "Rucola waschen und trocken schleudern. Mit Essig und Öl leicht marinieren.",
          "Brüste mit Salz und Pfeffer würzen. In einer Pfanne mit Öl und Thymian Hautseite zuerst anbraten. Bei mittlerer Hitze etwa 10 Min garen.",
          "Kartoffeln schälen, weich kochen, zerdrücken. Brühe, Essig und Öl unterrühren, würzen.",
          "Lauch auf Tellern verteilen, Rucola daneben anrichten. Brüste in Scheiben schneiden, daraufsetzen und mit Kartoffeldressing beträufeln."
        ]
      }
    ]
  },
  {
    id: "rinderfilet-pfefferkruste",
    title: "Rinderfilet mit Schmorzwiebel-Sauce & Pfefferkruste",
    description: "Zartes Rinderfilet mit einer würzigen Pfefferkruste, dazu geschmorte Zwiebeln und bunte Paprika.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "40 Min",
    cookTime: "15 Min",
    difficulty: "normal",
    category: "Hauptgericht",
    tags: ["Rindfleisch", "Steak", "Gourmet", "Pfeffer", "Zwiebeln"],
    ingredients: [
      {
        group: "Filet & Paprika",
        items: [
          { name: "Rinderfilet-Steaks", amount: "4 (je 120 g)" },
          { name: "Rosmarinzweig", amount: "1" },
          { name: "rote Paprikaschoten, gewürfelt", amount: "2" },
          { name: "gelbe Paprikaschoten, gewürfelt", amount: "2" },
          { name: "Schalotten, fein gehackt", amount: "2" },
          { name: "Olivenöl" },
          { name: "Salz" },
          { name: "Pfeffer" }
        ]
      },
      {
        group: "Schmorzwiebelsauce",
        items: [
          { name: "rote Zwiebeln, in Würfeln", amount: "400 g" },
          { name: "Butter", amount: "80 g" },
          { name: "Honig", amount: "2 EL" },
          { name: "dunkler Kalbsfond", amount: "200 ml" },
          { name: "Sherry", amount: "4 cl" },
          { name: "Cayennepfeffer", amount: "1 Prise" },
          { name: "Thymian" },
          { name: "Salz" }
        ]
      },
      {
        group: "Pfeffer-Kruste",
        items: [
          { name: "Butter, weich", amount: "100 g" },
          { name: "grüner Pfeffer (aus dem Glas), fein zerstampft", amount: "1 EL" },
          { name: "rosa Pfeffer, zerstampft", amount: "1 EL" },
          { name: "Toastbrot, zu Bröseln zerstoßen", amount: "2 Scheiben" },
          { name: "Salz" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Weiche Butter mit Salz schaumig schlagen. Pfeffer und Toast-Brösel einarbeiten. Kruste zu einer Rolle formen, kalt stellen.",
          "Zwiebeln in Butter anschwitzen, Honig zugeben. Mit Sherry ablöschen, Kalbsfond angießen. Mit Gewürzen abschmecken.",
          "Paprikawürfel und Schalotten in Öl weich dünsten, würzen.",
          "Filets würzen, mit Rosmarin scharf anbraten. Im Ofen bei 180 °C 6-8 Min garen.",
          "Paprika auf Teller verteilen, Filets in Scheiben darauf anrichten. Sauce angießen, Pfefferkruste darauflegen."
        ]
      }
    ]
  }
];
