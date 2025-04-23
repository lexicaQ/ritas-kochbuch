
import { Recipe } from "./types";
import { mainDishes } from "./categories/main-dishes";
import { desserts } from "./categories/desserts";
import { pastries } from "./categories/pastries";

// Combine all recipes from different categories
const recipes: Recipe[] = [
  ...mainDishes,
  ...desserts,
  ...pastries,
  {
    id: "haferflockenbutter-kracker",
    title: "Haferflocken‑Butter‑Kracker mit Blauschimmelkäse & Birnen",
    description: "Knusprige selbstgemachte Haferflocken-Cracker, perfekt zum Servieren mit cremigem Blauschimmelkäse und saftigen Birnenscheiben.",
    image: "https://images.unsplash.com/photo-1619980557487-8bdb970bfb85?q=80&w=2071&auto=format&fit=crop",
    portionSize: "6 Personen (ca. 18 Kekse)",
    prepTime: "15 Min (zzgl. 15 Min Kühlzeit)",
    cookTime: "25 Min",
    totalTime: "~55 Min",
    difficulty: "Normal",
    category: "Snack",
    tags: ["Vegetarisch", "Haferflocken", "Blauschimmelkäse", "Birnen", "Gebäck"],
    ingredients: [
      {
        group: "Für die Kracker",
        items: [
          { name: "Haferflocken", amount: "170 g (ca. 2 Tassen)" },
          { name: "Weizenmehl", amount: "75 g (ca. ½ Tasse)" },
          { name: "brauner Zucker", amount: "1,5 EL" },
          { name: "Backpulver", amount: "½ TL" },
          { name: "Salz", amount: "¼ TL" },
          { name: "Butter, geschmolzen und abgekühlt", amount: "100 g" },
          { name: "Wasser", amount: "60 ml (ca. ¼ Tasse)" }
        ]
      },
      {
        group: "Zum Servieren",
        items: [
          { name: "Birnen (z. B. Kaiser Alexander oder Packham)", amount: "3" },
          { name: "frisch gepresster Zitronensaft", amount: "1 EL" },
          { name: "Blauschimmelkäse (z. B. Blue Castello)", amount: "150 g" }
        ]
      }
    ],
    steps: [
      {
        group: "Zubereitung",
        items: [
          "Ofen auf 180 °C (Ober-/Unterhitze) vorheizen. Zwei Backbleche mit Backpapier auslegen.",
          "Haferflocken, Mehl, Zucker, Backpulver und Salz in einer großen Schüssel gut vermengen.",
          "Geschmolzene Butter und Wasser dazugeben. Erst mit einem Messer grob verrühren, dann mit den Händen zügig zu einem glatten Teig verkneten.",
          "Teig halbieren. Eine Portion auf einer leicht bemehlten Arbeitsfläche ca. 5 mm dick ausrollen. Mit einem runden Ausstecher (Ø 6 cm) Plätzchen ausstechen und auf das vorbereitete Blech legen. Mit der zweiten Portion genauso verfahren.",
          "Kekse im heißen Ofen ca. 15 Min backen, bis sie goldbraun sind. Herausnehmen und komplett auf einem Gitter abkühlen lassen. In einem dicht verschlossenen Behälter bis zu einer Woche frisch halten.",
          "Birnen vierteln, Kerngehäuse entfernen, Spalten dünn schneiden. Mit Zitronensaft beträufeln, damit sie nicht bräunen.",
          "Kracker mit Birnenspalten belegen, Blauschimmelkäse darauf arrangieren. Sofort servieren."
        ]
      }
    ],
    tips: [
      "Die Kracker schmecken auch hervorragend mit anderen Käsesorten wie Brie oder Camembert.",
      "Für eine süßere Variante können Sie statt Käse etwas Honig auf die Birnen träufeln.",
      "Die Kracker halten sich in einer luftdichten Dose etwa eine Woche lang frisch."
    ],
    isFavorite: true
  },
  {
    id: "eierlikorkuchen",
    title: "Eierlikörkuchen",
    description: "Ein saftiger Rührkuchen mit feinem Eierlikör-Aroma und zartschmelzenden Schokoladenstücken.",
    image: "https://images.unsplash.com/photo-1587248720327-8eb72564be1a?q=80&w=2038&auto=format&fit=crop",
    portionSize: "1 Kastenform (ca. 20 cm)",
    prepTime: "20 Min",
    cookTime: "60 Min",
    difficulty: "Leicht",
    category: "Dessert",
    tags: ["Kuchen", "Eierlikör", "Schokolade", "Backen", "Süß"],
    ingredients: [
      {
        items: [
          { name: "Butter, weich", amount: "250 g" },
          { name: "Weizenmehl", amount: "250 g" },
          { name: "Zucker", amount: "150 g" },
          { name: "Eier", amount: "4" },
          { name: "Eierlikör", amount: "1 große Bechertasse (ca. 200 ml)" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Backpulver", amount: "1 Päckchen" },
          { name: "Zartbitterschokolade", amount: "2 Tafeln" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Backofen auf 160 °C vorheizen. Kastenform (ca. 20 cm) fetten und mit Mehl ausstäuben.",
          "Weiche Butter, Zucker und Vanillezucker in einer Schüssel mit dem Handrührgerät schaumig schlagen (ca. 3 Min).",
          "Nach und nach die Eier einzeln unterrühren, bis die Masse glatt und hell ist.",
          "Eierlikör langsam unterrühren, bis er vollständig aufgenommen ist.",
          "Mehl mit Backpulver in einer separaten Schüssel mischen, dann in zwei Portionen unterheben.",
          "Zartbitterschokolade grob hacken. Etwa 2/3 der Schokostücke sanft unter den Teig heben. Den restlichen Anteil später über den Kuchen streuen.",
          "Teig in die Kastenform geben. Oberfläche mit den restlichen Schokostücken bestreuen.",
          "Im vorgeheizten Ofen ca. 60 Min backen (Stäbchenprobe: kein feuchter Teig am Holzstäbchen).",
          "Kuchen 10 Min in der Form ruhen lassen, dann stürzen und vollständig auskühlen lassen."
        ]
      }
    ],
    isFavorite: false
  },
  {
    id: "stracciatella-muffins",
    title: "Stracciatella‑Muffins",
    description: "Saftige Muffins mit feinen Schokosplittern, perfekt zum Kaffee oder als süßer Snack.",
    image: "https://images.unsplash.com/photo-1558305633-c4332128948d?q=80&w=2070&auto=format&fit=crop",
    portionSize: "ca. 12 Muffins",
    prepTime: "15 Min",
    cookTime: "40 Min",
    difficulty: "Leicht",
    category: "Dessert",
    tags: ["Muffins", "Schokolade", "Backen", "Süß"],
    ingredients: [
      {
        items: [
          { name: "Butter, weich", amount: "150 g" },
          { name: "Mehl", amount: "250 g" },
          { name: "Zucker", amount: "100 g" },
          { name: "Eier", amount: "2" },
          { name: "Crème fraîche", amount: "200 g (1 Becher)" },
          { name: "Vanillinzucker", amount: "1 Päckchen" },
          { name: "Backpulver", amount: "1 Päckchen" },
          { name: "Schokostreusel oder gehackte Zartbitterschokolade", amount: "200–250 g" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Heißluftofen auf 160 °C vorheizen. Muffinblech mit Papierförmchen bestücken.",
          "Butter, Zucker und Vanillinzucker in einer Rührschüssel cremig schlagen.",
          "Eier einzeln unterschlagen, dann Crème fraîche einrühren.",
          "Mehl mit Backpulver mischen und portionsweise unterheben.",
          "Schokostreusel oder gehackte Schokolade kurz unter den Teig heben.",
          "Teig in die Förmchen füllen (zu ca. ⅔).",
          "Muffins im heißen Ofen 35–40 Min backen, bis sie goldbraun sind (Stäbchenprobe).",
          "Kurz ruhen lassen, dann aus dem Blech nehmen und auf einem Rost abkühlen lassen."
        ]
      }
    ],
    isFavorite: true
  }
];

// Export recipes for use in other components
export default recipes;
