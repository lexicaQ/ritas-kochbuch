
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
  },
  {
    id: "valeskas-kuchen",
    title: "Valeskas Kuchen",
    description: "Ein saftiger Schokoladenkuchen mit intensivem Kakaogeschmack und feiner Puderzucker-Note.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d8e3ddc10?q=80&w=2069&auto=format&fit=crop",
    portionSize: "1 Kastenform",
    prepTime: "20 Min",
    cookTime: "45 Min",
    difficulty: "Leicht",
    category: "Dessert",
    tags: ["Kuchen", "Schokolade", "Backen", "Süß"],
    ingredients: [
      {
        items: [
          { name: "Mehl", amount: "250 g" },
          { name: "Zucker", amount: "50 g" },
          { name: "Eier", amount: "2" },
          { name: "H‑Milch", amount: "100 ml" },
          { name: "Backpulver", amount: "½ flaches TL" },
          { name: "Kakaopulver", amount: "50 g" },
          { name: "Butter, Zimmertemperatur", amount: "185 g" }
        ]
      },
      {
        group: "Dekoration",
        items: [
          { name: "Puderzucker zum Bestreuen" },
          { name: "Geschmolzene Schokolade zum Draufstreichen" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Ofen auf 180 °C (Ober-/Unterhitze) vorheizen. Kastenform fetten oder mit Backpapier auslegen.",
          "Butter, Zucker und Vanillinzucker in einer Schüssel cremig rühren.",
          "Eier nacheinander unterrühren.",
          "Milch dazugießen und kurz glatt rühren.",
          "Mehl, Backpulver und Kakaopulver mischen, dann in zwei Portionen unter den Teig heben.",
          "Teig in die Form füllen, Oberfläche glatt streichen.",
          "Ca. 45 Min backen (Stäbchenprobe).",
          "Kuchen abkühlen lassen und aus der Form lösen.",
          "Mit Puderzucker bestäuben und nach Belieben mit geschmolzener Schokolade verzieren."
        ]
      }
    ],
    isFavorite: false
  },
  {
    id: "tomaten-lauch-quiche",
    title: "Tomaten‑Lauch‑Quiche mit karamellisierten Walnusskernen",
    description: "Eine herzhafte Quiche mit saftigem Lauch, frischen Tomaten und knackigen karamellisierten Walnüssen.",
    image: "https://images.unsplash.com/photo-1559717201-2879521b49f4?q=80&w=2071&auto=format&fit=crop",
    portionSize: "12 Stücke",
    prepTime: "30 Min",
    cookTime: "30–35 Min",
    difficulty: "Normal",
    category: "Hauptgericht",
    tags: ["Quiche", "Vegetarisch", "Lauch", "Tomaten", "Walnüsse"],
    ingredients: [
      {
        group: "Boden & Teig",
        items: [
          { name: "Weizenmehl Type 1050 oder Weizenvollkornmehl", amount: "300 g" },
          { name: "natives Olivenöl extra", amount: "45 ml" },
          { name: "Leitungswasser", amount: "120 ml" },
          { name: "Meersalz (z. B. Saphir)", amount: "1 TL" }
        ]
      },
      {
        group: "Füllung",
        items: [
          { name: "Bio‑Eier", amount: "3" },
          { name: "Hafer‑Crème Cuisine", amount: "300 ml" },
          { name: "dmBio italienische Kräuter", amount: "1 EL" },
          { name: "Lauch", amount: "½ Stange" },
          { name: "Cherrytomaten", amount: "200 g" },
          { name: "dmBio Walnusskerne", amount: "1 Handvoll" },
          { name: "dmBio Rohrohrzucker", amount: "1 EL" },
          { name: "Frühlingszwiebeln (nach Belieben), fein geschnitten" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Mehl, Olivenöl, Wasser und Salz zu einem glatten Teig verkneten. Teig rund ausrollen, in eine gefettete Quiche‑Form (Ø 28 cm) drücken.",
          "Eier, Hafer‑Crème und Kräuter verrühren. Auf den Teig gießen.",
          "Lauch längs halbieren, waschen und in feine Streifen schneiden. Tomaten halbieren, auf der Quiche verteilen.",
          "Quiche im vorgeheizten Ofen 30–35 Min bei 180 °C backen.",
          "Walnusskerne in einer Pfanne ohne Fett rösten. 3 EL Wasser und Zucker dazugeben, bei mittlerer Hitze karamellisieren. Vor dem Servieren auf der Quiche verteilen. Nach Belieben mit Frühlingszwiebeln bestreuen."
        ]
      }
    ],
    isFavorite: true
  },
  {
    id: "mandelkuchen-spanien",
    title: "Mandelkuchen aus Spanien",
    description: "Ein traditioneller spanischer Mandelkuchen mit intensivem Aroma von Orangen und Zimt.",
    image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=2086&auto=format&fit=crop",
    portionSize: "1 Springform (Ø 26 cm)",
    prepTime: "30 Min",
    cookTime: "45–50 Min",
    difficulty: "Normal",
    category: "Dessert",
    tags: ["Kuchen", "Mandeln", "Spanisch", "Orange", "Zimt"],
    ingredients: [
      {
        items: [
          { name: "Eier (Größe M), getrennt", amount: "8" },
          { name: "Puderzucker", amount: "250 g" },
          { name: "unbehandelte Orange (Schale abgerieben)", amount: "1" },
          { name: "Zimtpulver", amount: "1 Msp" },
          { name: "Mark von 1 Vanilleschote" },
          { name: "geschälte, gemahlene Mandeln", amount: "250 g" },
          { name: "flüssige Butter", amount: "50 g" },
          { name: "Orangenlikör", amount: "2 cl" },
          { name: "Butter + Semmelbrösel für die Form" },
          { name: "Puderzucker zum Bestäuben" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Ofen auf 180 °C vorheizen. Springform gut fetten und mit Semmelbröseln ausstreuen.",
          "Eigelbe und Puderzucker mit Schneebesen dick schaumig schlagen.",
          "Orangenschale, Zimt und Vanillemark unterrühren.",
          "Mandeln und flüssige Butter abwechseln einarbeiten.",
          "Eiweiß steif schlagen. Vorsichtig und gleichmäßig unter die Masse heben.",
          "Teig in die Form füllen, Oberfläche glatt streichen.",
          "45–50 Min backen (Stäbchenprobe).",
          "Kuchen stürzen, mit Puderzucker bestäuben.",
          "Am Backtag servieren."
        ]
      }
    ],
    tips: ["Im Winter eine Prise Lebkuchengewürz zugeben und etwas mehr Zimt."],
    isFavorite: false
  },
  {
    id: "vitalbrot",
    title: "Vitalbrot",
    description: "Ein kerniges Vollkornbrot mit Roggenschrot, Weizenschrot, Leinsamen und Sonnenblumenkernen. Perfekt für eine gesunde Ernährung.",
    image: "https://images.unsplash.com/photo-1600423400430-34eb4ea425dc?q=80&w=2071&auto=format&fit=crop",
    portionSize: "1 Kastenform",
    prepTime: "15 Min (zzgl. 1 Std Gehzeit)",
    cookTime: "3 Std",
    totalTime: "~4 Std 15 Min",
    difficulty: "Leicht",
    category: "Brot & Gebäck",
    tags: ["Vollkorn", "Roggenschrot", "Weizenschrot", "Leinsamen", "Sesam", "Sonnenblumenkerne", "Gesund", "Vegan"],
    ingredients: [
      {
        items: [
          { name: "Roggenschrot", amount: "280 g" },
          { name: "Weizenschrot", amount: "280 g" },
          { name: "Leinsamen", amount: "140 g" },
          { name: "Sesam", amount: "140 g" },
          { name: "Sonnenblumenkerne", amount: "100 g (+ etwas zum Bestreuen)" },
          { name: "Vollkornmehl", amount: "500 g" },
          { name: "Salz", amount: "1 EL" },
          { name: "Buttermilch, lauwarm", amount: "1 l" },
          { name: "Rübenkraut (z. B. Grafschafter Goldsaft)", amount: "150 g" },
          { name: "Würfelhefe", amount: "3 Päckchen (á 42,5 g)" }
        ]
      }
    ],
    steps: [
      {
        group: "Schritt-für-Schritt-Zubereitung",
        items: [
          "Lauwarme Buttermilch mit Hefe und Rübenkraut verrühren, 1 Std gehen lassen.",
          "Restliche Zutaten in eine große Schüssel geben.",
          "Hefemilch mit einem großen Holzlöffel unterrühren, bis kein trockenes Mehl mehr sichtbar ist.",
          "Kastenform fetten, Boden und Rand mit Sonnenblumenkernen bestreuen.",
          "Teig einfüllen, im Ofen bei 150 °C 3 Std backen.",
          "Nach 2 Std Backzeit Form mit Backpapier abdecken (sonst wird Kruste zu dunkel).",
          "Brot nach dem Backen in der Form ca. 1 Std ruhen lassen."
        ]
      }
    ],
    tips: [
      "Das Brot eignet sich hervorragend zum Einfrieren. In Scheiben geschnitten und portionsweise verpackt, kann es bei Bedarf aufgetaut werden.",
      "Dieses Brot ist besonders lecker mit Avocado und Salz oder mit Hummus bestrichen."
    ],
    isFavorite: true
  },
  {
    id: "lammschulter-gedünstet",
    title: "Lammschulter gedünstet mit Senfsauce auf Gemüsebett",
    description: "Ein saftiges Lammgericht mit zart geschmorter Lammschulter, würziger Senfsauce und einem bunten Gemüsebett aus Zwiebeln, Fenchel, Zucchini und Bohnen.",
    image: "https://images.unsplash.com/photo-1598511726623-d2e9996e75e0?q=80&w=2071&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "30 Min",
    cookTime: "45 Min + 30 Min Aufgießen/Schmoren",
    totalTime: "~1 Std 45 Min",
    difficulty: "Normal",
    category: "Hauptgericht",
    tags: ["Lamm", "Fleisch", "Senfsauce", "Gemüse", "Schmorgericht"],
    ingredients: [
      {
        group: "Lammschulter & Gewürz",
        items: [
          { name: "Lammschulter", amount: "1–1,5 kg" },
          { name: "Dijon‑Senf", amount: "3 EL" },
          { name: "Salz" },
          { name: "Pfeffer" },
          { name: "Olivenöl zum Anbraten" }
        ]
      },
      {
        group: "Gemüse",
        items: [
          { name: "Zwiebeln", amount: "2" },
          { name: "rote Zwiebel", amount: "1" },
          { name: "Stangensellerie", amount: "1 Stück" },
          { name: "Fenchelknolle", amount: "1" },
          { name: "Zucchini", amount: "1" },
          { name: "Bohnen", amount: "100 g" },
          { name: "kleine Kartoffeln", amount: "8" },
          { name: "Knoblauchzehen", amount: "3" },
          { name: "Thymian", amount: "1 Sträußchen" }
        ]
      },
      {
        group: "Flüssigkeiten",
        items: [
          { name: "Tomatenmark", amount: "2 EL" },
          { name: "Weißwein", amount: "¼ l" },
          { name: "Lammfond", amount: "400 ml" }
        ]
      }
    ],
    steps: [
      {
        group: "Schritt-für-Schritt-Zubereitung",
        items: [
          "Lammschulter parieren, überschüssiges Fett und Sehnen entfernen, Knochen etwas hacken.",
          "Schulter von allen Seiten salzen, pfeffern.",
          "In einem Bräter mit Olivenöl rundherum braun anbraten.",
          "Fleischabschnitte und Knochen beiseitestellen.",
          "Zwiebeln, Sellerie und Karotte (aus dem Brätergemüse) würfeln, mit in den Bräter geben und kurz mitbraten.",
          "Tomatenmark einrühren, anrösten.",
          "Mit Weißwein ablöschen, kurz einkochen lassen.",
          "Lammfond angießen, aufkochen.",
          "Thymian und Knoblauch zugeben.",
          "Lammschulter auf ein Gitter im Bräter legen, im vorgeheizten Ofen bei 180 °C 45 Min garen.",
          "Zwischendurch Fleisch mit Fond übergießen.",
          "Rote Zwiebel, Fenchel und Zucchini in gleich große Stücke schneiden.",
          "Kartoffeln schälen, halbieren.",
          "Bohnen bissfest kochen, abschrecken.",
          "Gemüse in Olivenöl andünsten, würzen.",
          "Schulter aus dem Ofen nehmen, in Alufolie ruhen lassen.",
          "Sauce durch ein feines Sieb gießen, aufkochen, mit Senf abschmecken, ggf. etwas mit Butter binden.",
          "Gemüse auf Tellern anrichten, Fleisch in Portionen schneiden, darauf legen.",
          "Sauce angießen und servieren."
        ]
      }
    ],
    tips: [
      "Für eine intensivere Sauce können Sie vor dem Sieben ein Stück kalte Butter unter ständigem Rühren einarbeiten.",
      "Das Gericht lässt sich gut vorbereiten. Die Schulter können Sie am Vortag garen und am nächsten Tag nur noch das Gemüsebett frisch zubereiten."
    ],
    isFavorite: false
  },
  {
    id: "spinat-crostata",
    title: "Spinat‑Crostata",
    description: "Eine rustikale italienische Spinattarte mit cremiger Ricotta-Füllung, Rosinen und knackigen Pinienkernen.",
    image: "https://images.unsplash.com/photo-1589579136787-607def05db8f?q=80&w=2070&auto=format&fit=crop",
    portionSize: "8 Stücke",
    prepTime: "60 Min",
    cookTime: "30–35 Min",
    totalTime: "~95 Min",
    difficulty: "Normal",
    category: "Hauptgericht",
    tags: ["Vegetarisch", "Italienisch", "Spinat", "Ricotta", "Pinienkerne", "Tarte"],
    ingredients: [
      {
        group: "Für den Teig",
        items: [
          { name: "Mehl", amount: "200 g" },
          { name: "kalte Butter in kleinen Stücken", amount: "100 g" },
          { name: "Eigelb", amount: "1" },
          { name: "Salz", amount: "1 Prise" },
          { name: "kaltes Wasser", amount: "3 EL" }
        ]
      },
      {
        group: "Für den Belag",
        items: [
          { name: "TK‑Blattspinat", amount: "500 g" },
          { name: "Milch", amount: "150 ml" },
          { name: "Ei (Gr. M)", amount: "1" },
          { name: "Eiweiß", amount: "1" },
          { name: "Salz" },
          { name: "Pfeffer" },
          { name: "Muskat" },
          { name: "Rosinen", amount: "1 EL" },
          { name: "Ricotta", amount: "150 g" },
          { name: "Pinienkerne", amount: "1 EL" }
        ]
      }
    ],
    steps: [
      {
        group: "Schritt-für-Schritt-Zubereitung",
        items: [
          "Mehl, Butter, Eigelb, Salz und kaltes Wasser in einer Schüssel rasch zu einem glatten Teig verkneten.",
          "In Frischhaltefolie 30 Min kaltstellen.",
          "TK‑Spinat auftauen lassen, gut ausdrücken.",
          "Mit Ei, Eiweiß, Milch sowie Salz, Pfeffer und Muskat kräftig würzen.",
          "Teig auf bemehlter Fläche etwas größer als Form ausrollen (Ø 28 cm), in gefettete Form drücken.",
          "Boden mit Gabel mehrfach einstechen.",
          "Spinatmasse portionsweise auf den Teig geben.",
          "Rosinen, Kleckse Ricotta und Pinienkerne darauf verteilen.",
          "Im heißen Ofen 30–35 Min bei 200 °C (Umluft) oder 220 °C (Gas Stufe 4) backen.",
          "Warm oder kalt genießen."
        ]
      }
    ],
    tips: [
      "Die Crostata schmeckt sowohl warm als auch kalt hervorragend und eignet sich gut zum Mitnehmen für ein Picknick.",
      "Für eine herzhafte Variante können Sie einige gewürfelte Oliven oder getrocknete Tomaten unter die Spinatmasse heben."
    ],
    isFavorite: true
  },
  {
    id: "grenobler-walnussbissen",
    title: "Grenobler Walnußbissen",
    description: "Feine Plätzchen mit Walnüssen, Orange und einer zarten Rumglasur - eine köstliche Spezialität aus Grenoble.",
    image: "https://images.unsplash.com/photo-1621236378699-08b5f0c3b6ed?q=80&w=2070&auto=format&fit=crop",
    portionSize: "8 Bleche (ca. 170 Stück)",
    prepTime: "45 Min",
    cookTime: "10 Min",
    totalTime: "~85 Min",
    difficulty: "Normal",
    category: "Gebäck",
    tags: ["Weihnachten", "Plätzchen", "Walnüsse", "Orange", "Rum"],
    ingredients: [
      {
        group: "Teig",
        items: [
          { name: "Mehl", amount: "400 g (+ Mehl zum Ausrollen)" },
          { name: "Ei", amount: "1" },
          { name: "Salz", amount: "1 Prise" },
          { name: "Bittermandelöl", amount: "3 Tropfen" },
          { name: "Kardamom", amount: "1 Messerspitze" },
          { name: "Rum", amount: "1 EL" },
          { name: "Butter in Flöcken", amount: "200 g" },
          { name: "Zucker", amount: "200 g" },
          { name: "Walnüsse, gerieben", amount: "165 g" }
        ]
      },
      {
        group: "Für Füllung & Glasur",
        items: [
          { name: "Orangenmarmelade", amount: "100 g" },
          { name: "Puderzucker", amount: "400 g" },
          { name: "Rum", amount: "4 Gläser" },
          { name: "Walnußhälften", amount: "ca. 170" }
        ]
      }
    ],
    steps: [
      {
        group: "Schritt-für-Schritt-Zubereitung",
        items: [
          "Mehl in eine Schüssel geben, in der Mitte eine Mulde formen.",
          "Ei, Salz, Bittermandelöl, Kardamom und Rum hineingeben.",
          "Butterflöckchen rundherum verteilen.",
          "Zucker und geriebene Walnüsse darüberstreuen.",
          "Schnell zu einem glatten Teig kneten.",
          "Teig mindestens 30 Min im Kühlschrank ruhen lassen.",
          "Auf bemehlter Fläche ca. 0,5 cm dick ausrollen.",
          "Plätzchen (Ø 3 cm) ausstechen, auf ein unbelagtes Backblech legen.",
          "Im vorgeheizten Ofen 10 Min bei 220 °C backen.",
          "Hälfte der Plätzchen mit Orangenmarmelade bestreichen, jeweils ein unbestrichenes Plätzchen darauf setzen.",
          "Aus Puderzucker und Rum eine zähflüssige Glasur anrühren, Plätzchen damit überziehen.",
          "In die noch feuchte Glasur je eine Walnußhälfte drücken."
        ]
      }
    ]
  },
  {
    id: "italienischer-nudelsalat",
    title: "Italienischer Nudelsalat mit Rucola & getrockneten Tomaten",
    description: "Ein mediterraner Nudelsalat mit sonnengereiften Tomaten, Rucola und Pinienkernen, perfekt für warme Tage.",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "30 Min",
    totalTime: "~3.5 Std",
    difficulty: "Normal",
    category: "Salat",
    tags: ["Italienisch", "Vegetarisch", "Pasta", "Rucola", "Tomaten"],
    ingredients: [
      {
        group: "Salat",
        items: [
          { name: "Nudeln (z. B. Penne)", amount: "500 g" },
          { name: "Cocktailtomaten", amount: "200 g" },
          { name: "Rucola", amount: "1 Bund (etwa 100 g)" },
          { name: "Getrocknete Tomaten in Öl", amount: "1 Glas (ca. 150 g)" },
          { name: "Oliven", amount: "1 Glas" },
          { name: "Pinienkerne", amount: "50 g" }
        ]
      },
      {
        group: "Dressing",
        items: [
          { name: "Natives Olivenöl extra", amount: "5 EL" },
          { name: "Weißweinessig", amount: "2 EL" },
          { name: "Honig", amount: "1 TL" },
          { name: "Italienische Kräuter", amount: "1 TL" },
          { name: "Salz und Pfeffer" }
        ]
      }
    ],
    steps: [
      {
        group: "Zubereitung",
        items: [
          "Nudeln nach Packungsanweisung in Salzwasser al dente kochen. Abgießen und abkühlen lassen.",
          "Cocktailtomaten halbieren oder vierteln. Rucola waschen und trocken schleudern.",
          "Getrocknete Tomaten abtropfen lassen und in Streifen schneiden.",
          "Oliven abtropfen lassen und halbieren.",
          "Pinienkerne in einer Pfanne ohne Fett rösten, bis sie goldbraun sind.",
          "Für das Dressing Olivenöl, Essig, Honig und Kräuter vermengen, mit Salz und Pfeffer abschmecken.",
          "Alle Zutaten in einer großen Schüssel vermischen, mit dem Dressing übergießen und vorsichtig durchmischen.",
          "Vor dem Servieren etwa 30 Minuten ziehen lassen, damit die Aromen sich entfalten können."
        ]
      }
    ],
    isFavorite: false
  },
  {
    id: "kraeuter-tabbouleh",
    title: "Kräuter-Tabbouleh",
    description: "Eine frische Bulgur-Salat-Variation mit vielen Kräutern, Tomaten und einer Zitronennote - perfekt als leichte Beilage oder vegetarisches Hauptgericht.",
    image: "https://images.unsplash.com/photo-1662472709675-f0ef44b4b29e?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "25 Min (inkl. 15 Min Quellzeit)",
    difficulty: "Leicht",
    category: "Salat",
    tags: ["Vegetarisch", "Orientalisch", "Bulgur", "Kräuter", "Frisch"],
    ingredients: [
      {
        items: [
          { name: "Bulgur (Feinkörnig)", amount: "200 g" },
          { name: "Kochendes Wasser", amount: "400 ml" },
          { name: "Tomaten, reif", amount: "4" },
          { name: "Frühlingszwiebeln", amount: "4" },
          { name: "Petersilie, frisch", amount: "2 Bund" },
          { name: "Minze, frisch", amount: "½ Bund" },
          { name: "Zitronen, Bio", amount: "2" },
          { name: "Natives Olivenöl", amount: "6 EL" },
          { name: "Salz", amount: "1 TL" },
          { name: "Schwarzer Pfeffer, frisch gemahlen", amount: "½ TL" },
          { name: "Granatapfelkerne zum Garnieren (optional)" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Bulgur in eine Schüssel geben und mit kochendem Wasser übergießen. 15 Minuten quellen lassen, bis die Flüssigkeit vollständig aufgenommen ist.",
          "In der Zwischenzeit Tomaten waschen, entkernen und in kleine Würfel schneiden.",
          "Frühlingszwiebeln waschen und in feine Ringe schneiden.",
          "Petersilie und Minze waschen, trockenschütteln und fein hacken.",
          "Die Schale der Zitronen fein abreiben und den Saft auspressen.",
          "Den gequollenen Bulgur mit einer Gabel auflockern.",
          "Tomatenwürfel, Frühlingszwiebeln, Kräuter, Zitronenabrieb, Zitronensaft und Olivenöl zum Bulgur geben.",
          "Mit Salz und Pfeffer würzen und gut durchmischen.",
          "Vor dem Servieren 10 Minuten ziehen lassen und nach Belieben mit Granatapfelkernen garnieren."
        ]
      }
    ],
    tips: [
      "Tabbouleh schmeckt am besten frisch zubereitet. Für eine kräftigere Variante können Sie auch etwas fein gehackten Knoblauch hinzufügen.",
      "Traditionell enthält Tabbouleh mehr Kräuter als Bulgur - zögern Sie also nicht, großzügig mit der Petersilie und Minze zu sein."
    ],
    isFavorite: true
  },
  {
    id: "suesses-hefebrot",
    title: "Süßes Hefebrot",
    description: "Ein fluffiges, leicht süßes Hefebrot mit Rosinen und Mandeln - perfekt zum Frühstück oder Nachmittagskaffee.",
    image: "https://images.unsplash.com/photo-1586444248879-bc604bc77eb8?q=80&w=2071&auto=format&fit=crop",
    portionSize: "1 Kastenform",
    prepTime: "30 Min (plus 1,5 Std Gehzeit)",
    cookTime: "40 Min",
    difficulty: "Normal",
    category: "Brot & Gebäck",
    tags: ["Süß", "Hefeteig", "Rosinen", "Mandeln", "Frühstück"],
    ingredients: [
      {
        items: [
          { name: "Mehl (Type 550)", amount: "500 g" },
          { name: "Frische Hefe", amount: "1 Würfel (42 g)" },
          { name: "Lauwarme Milch", amount: "250 ml" },
          { name: "Zucker", amount: "80 g" },
          { name: "Salz", amount: "1 TL" },
          { name: "Butter, weich", amount: "80 g" },
          { name: "Ei", amount: "1" },
          { name: "Abgeriebene Schale einer Bio-Zitrone", amount: "1 TL" },
          { name: "Rosinen", amount: "100 g" },
          { name: "Gehobelte Mandeln", amount: "50 g (plus extra zum Bestreuen)" },
          { name: "Eigelb zum Bestreichen", amount: "1" },
          { name: "Hagelzucker zum Bestreuen (optional)" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Rosinen in warmem Wasser einweichen.",
          "Hefe in lauwarmer Milch auflösen, 1 TL Zucker hinzufügen und 10 Min ruhen lassen.",
          "Mehl, restlichen Zucker und Salz in einer Schüssel mischen.",
          "Hefemilch, weiche Butter, Ei und Zitronenschale dazugeben. Zu einem glatten Teig kneten (ca. 10 Min).",
          "Rosinen abgießen, abtropfen lassen und mit den Mandeln unter den Teig kneten.",
          "Teig zugedeckt an einem warmen Ort ca. 1 Stunde gehen lassen, bis sich das Volumen verdoppelt hat.",
          "Teig nochmal durchkneten, zu einem Zopf flechten oder in eine gefettete Kastenform geben.",
          "Weitere 30 Min zugedeckt gehen lassen.",
          "Ofen auf 180 °C (Ober-/Unterhitze) vorheizen.",
          "Brot mit verquirltem Eigelb bestreichen und mit Mandeln und nach Belieben Hagelzucker bestreuen.",
          "Im vorgeheizten Ofen ca. 40 Min goldbraun backen.",
          "Aus dem Ofen nehmen und auf einem Gitter abkühlen lassen."
        ]
      }
    ],
    tips: [
      "Für ein besonders aromatisches Brot können Sie dem Teig auch 1 TL Vanilleextrakt beifügen.",
      "Wenn das Brot während des Backens zu dunkel wird, mit Alufolie abdecken."
    ],
    isFavorite: false
  },
  {
    id: "zitronencreme-kuchen",
    title: "Zitronencreme-Kuchen vom Blech",
    description: "Ein saftiger Blechkuchen mit erfrischender Zitronencreme und knusprigen Streuseln - ideal für größere Feiern und Kaffeekränzchen.",
    image: "https://images.unsplash.com/photo-1514910870330-8e744fae77f0?q=80&w=2071&auto=format&fit=crop",
    portionSize: "1 Backblech (ca. 20 Stücke)",
    prepTime: "40 Min",
    cookTime: "25 Min (plus Kühlzeit)",
    difficulty: "Mittel",
    category: "Dessert",
    tags: ["Blechkuchen", "Zitrone", "Streusel", "Creme", "Süß"],
    ingredients: [
      {
        group: "Teig",
        items: [
          { name: "Mehl", amount: "400 g" },
          { name: "Zucker", amount: "150 g" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Butter, kalt", amount: "250 g" },
          { name: "Ei", amount: "1" },
          { name: "Backpulver", amount: "1 TL" },
          { name: "Salz", amount: "1 Prise" }
        ]
      },
      {
        group: "Zitronencreme",
        items: [
          { name: "Zitronen, Bio", amount: "3" },
          { name: "Zucker", amount: "200 g" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Speisestärke", amount: "40 g" },
          { name: "Eier", amount: "2" },
          { name: "Butter", amount: "100 g" }
        ]
      }
    ],
    steps: [
      {
        group: "Teig & Streusel",
        items: [
          "Für den Teig Mehl, Zucker, Vanillezucker, Backpulver und Salz mischen.",
          "Kalte Butter in Stücken und Ei hinzufügen, zu einem krümeligen Teig verarbeiten.",
          "2/3 des Teigs auf ein mit Backpapier ausgelegtes Blech drücken.",
          "Restlichen Teig für Streusel beiseite stellen und kalt stellen.",
          "Ofen auf 180 °C (Ober-/Unterhitze) vorheizen."
        ]
      },
      {
        group: "Zitronencreme",
        items: [
          "Zitronen heiß waschen, abtrocknen und Schale fein abreiben.",
          "Zitronen auspressen, Saft mit Zucker, Vanillezucker, Speisestärke und Eiern verrühren.",
          "Mischung erhitzen und unter ständigem Rühren aufkochen lassen, bis sie eindickt.",
          "Von der Hitze nehmen, Butter und Zitronenabrieb unterrühren.",
          "Creme auf den vorbereiteten Teigboden streichen.",
          "Streusel gleichmäßig auf der Creme verteilen.",
          "Im vorgeheizten Ofen ca. 25 Min backen, bis die Streusel goldbraun sind.",
          "Vollständig auskühlen lassen, dann in Stücke schneiden."
        ]
      }
    ],
    tips: [
      "Für eine intensivere Zitronennote können Sie den Saft einer zusätzlichen Zitrone verwenden.",
      "Der Kuchen schmeckt am nächsten Tag noch besser, wenn die Aromen sich entfalten konnten.",
      "Im Sommer ist eine Variante mit etwas Limettensaft besonders erfrischend."
    ],
    isFavorite: true
  },
  {
    id: "himbeer-joghurt-torte",
    title: "Himbeer-Joghurt-Torte",
    description: "Eine leichte Torte mit frischen Himbeeren, cremiger Joghurtfüllung und knusprigem Biskuitboden - ein Genuss für warme Sommertage.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=2065&auto=format&fit=crop",
    portionSize: "1 Springform (Ø 26 cm)",
    prepTime: "45 Min (plus 4 Std Kühlzeit)",
    difficulty: "Mittel",
    category: "Dessert",
    tags: ["Torte", "Himbeeren", "Joghurt", "Sommerkuchen", "Fruchtig"],
    ingredients: [
      {
        group: "Biskuitboden",
        items: [
          { name: "Eier", amount: "4" },
          { name: "Zucker", amount: "120 g" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Mehl", amount: "120 g" },
          { name: "Backpulver", amount: "1 TL" },
          { name: "Salz", amount: "1 Prise" }
        ]
      },
      {
        group: "Füllung",
        items: [
          { name: "Griechischer Joghurt", amount: "500 g" },
          { name: "Sahne", amount: "400 ml" },
          { name: "Zucker", amount: "100 g" },
          { name: "Vanilleextrakt", amount: "1 TL" },
          { name: "Gelatine", amount: "9 Blatt" },
          { name: "Himbeeren, frisch", amount: "400 g" },
          { name: "Zitronensaft", amount: "2 EL" }
        ]
      },
      {
        group: "Topping",
        items: [
          { name: "Himbeeren, frisch", amount: "300 g" },
          { name: "Tortenguss, klar", amount: "1 Päckchen" },
          { name: "Minzblätter zur Dekoration" }
        ]
      }
    ],
    steps: [
      {
        group: "Biskuitboden",
        items: [
          "Ofen auf 180 °C vorheizen, Springform (Ø 26 cm) fetten und mit Backpapier auslegen.",
          "Eier mit Zucker und Vanillezucker ca. 10 Min schaumig schlagen, bis die Masse hell und cremig ist.",
          "Mehl mit Backpulver und Salz mischen, vorsichtig unter die Eimasse heben.",
          "Teig in die Form füllen, glatt streichen und ca. 25 Min backen (Stäbchenprobe).",
          "Aus dem Ofen nehmen, kurz abkühlen lassen, dann aus der Form lösen und vollständig auskühlen lassen.",
          "Biskuit horizontal in zwei gleich dicke Böden schneiden."
        ]
      },
      {
        group: "Füllung & Zusammenbau",
        items: [
          "Gelatine nach Packungsanweisung einweichen.",
          "250 g Himbeeren mit Zitronensaft pürieren und durch ein Sieb streichen.",
          "Restliche ganze Himbeeren beiseite stellen.",
          "Sahne steif schlagen, beiseite stellen.",
          "Joghurt mit Zucker und Vanilleextrakt verrühren.",
          "Ausgedrückte Gelatine in etwas erhitztem Himbeerpüree auflösen, dann unter das restliche Püree rühren.",
          "Himbeermischung unter die Joghurtmasse ziehen, kurz anziehen lassen.",
          "Sahne unterheben, wenn die Masse leicht zu gelieren beginnt.",
          "Unteren Biskuitboden in eine Springform legen, Himbeerjoghurtcreme darauf verteilen.",
          "Ganze Himbeeren einstreuen, oberen Biskuitboden auflegen.",
          "Mindestens 4 Stunden, am besten über Nacht, kühlen."
        ]
      },
      {
        group: "Fertigstellung",
        items: [
          "Torte aus der Form lösen und auf eine Servierplatte setzen.",
          "Frische Himbeeren dekorativ auf der Torte verteilen.",
          "Tortenguss nach Packungsanweisung zubereiten und vorsichtig über die Himbeeren gießen.",
          "Nochmals kurz kühlen, mit Minzblättern garnieren und servieren."
        ]
      }
    ],
    tips: [
      "Im Winter können auch aufgetaute TK-Himbeeren verwendet werden.",
      "Die Torte schmeckt am besten, wenn sie einen Tag vor dem Servieren zubereitet wird.",
      "Für eine noch elegantere Variante können Sie den Tortenrand mit gehackten Pistazien verzieren."
    ],
    isFavorite: true
  },
  {
    id: "lauwarmer-kartoffelsalat",
    title: "Lauwarmer Kartoffelsalat mit Ziegenkäse",
    description: "Ein raffinierter Kartoffelsalat mit cremigem Ziegenkäse, knackigen Walnüssen und frischen Kräutern - perfekt als Beilage oder leichtes Hauptgericht.",
    image: "https://images.unsplash.com/photo-1635321593217-40050ad13c74?q=80&w=2048&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "30 Min",
    difficulty: "Leicht",
    category: "Salat",
    tags: ["Vegetarisch", "Kartoffeln", "Ziegenkäse", "Walnüsse", "Lauwarm"],
    ingredients: [
      {
        items: [
          { name: "Festkochende Kartoffeln", amount: "800 g" },
          { name: "Rote Zwiebel", amount: "1" },
          { name: "Ziegenkäserolle", amount: "150 g" },
          { name: "Walnusskerne", amount: "60 g" },
          { name: "Rucola", amount: "1 Handvoll" },
          { name: "Frische Petersilie", amount: "½ Bund" },
          { name: "Frischer Thymian", amount: "2 Zweige" },
          { name: "Natives Olivenöl extra", amount: "4 EL" },
          { name: "Weißweinessig", amount: "2 EL" },
          { name: "Dijonsenf", amount: "1 TL" },
          { name: "Honig", amount: "1 TL" },
          { name: "Salz und Pfeffer" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Kartoffeln gründlich waschen und in Salzwasser etwa 20 Minuten kochen, bis sie gar, aber noch fest sind.",
          "In der Zwischenzeit Walnüsse in einer Pfanne ohne Fett leicht rösten, beiseite stellen und abkühlen lassen.",
          "Für das Dressing Olivenöl, Weißweinessig, Senf und Honig verrühren, mit Salz und Pfeffer abschmecken.",
          "Rote Zwiebel schälen und in feine Ringe schneiden.",
          "Kartoffeln abgießen, kurz abkühlen lassen und noch warm pellen.",
          "Kartoffeln in Scheiben schneiden und in eine Schüssel geben.",
          "Das Dressing über die warmen Kartoffeln gießen und vorsichtig mischen.",
          "Zwiebeln, gehackte Petersilie und Thymianblätter unterheben.",
          "Ziegenkäse in Scheiben schneiden.",
          "Kartoffelsalat auf Tellern anrichten, Rucola darauf verteilen.",
          "Ziegenkäsescheiben darauf legen und mit gehackten Walnüssen bestreuen.",
          "Lauwarm servieren."
        ]
      }
    ],
    tips: [
      "Der Salat kann mit gerösteten Pinienkernen statt Walnüssen zubereitet werden.",
      "Für eine intensivere Note etwas fein gehackte Knoblauchzehe ins Dressing geben.",
      "Im Sommer schmecken auch ein paar halbierte Kirschtomaten herrlich dazu."
    ],
    isFavorite: false
  },
  {
    id: "kirsch-schoko-kuchen",
    title: "Kirsch-Schoko-Kuchen",
    description: "Ein saftiger Schokoladenkuchen mit süßen Kirschen und zartbitterer Schokoglasur - ein Traum für alle Schokoholics.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=2047&auto=format&fit=crop",
    portionSize: "1 Springform (Ø 26 cm)",
    prepTime: "30 Min",
    cookTime: "50 Min",
    difficulty: "Normal",
    category: "Dessert",
    tags: ["Kuchen", "Schokolade", "Kirschen", "Backen", "Süß"],
    ingredients: [
      {
        group: "Teig",
        items: [
          { name: "Butter", amount: "200 g" },
          { name: "Zucker", amount: "200 g" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Eier", amount: "4" },
          { name: "Mehl", amount: "300 g" },
          { name: "Backpulver", amount: "2 TL" },
          { name: "Kakaopulver", amount: "3 EL" },
          { name: "Milch", amount: "100 ml" },
          { name: "Kirschen (frisch oder TK, entsteint)", amount: "400 g" },
          { name: "Stärke", amount: "2 EL" }
        ]
      },
      {
        group: "Glasur",
        items: [
          { name: "Zartbitterschokolade", amount: "200 g" },
          { name: "Butter", amount: "100 g" },
          { name: "Schokoblätter oder -späne zur Dekoration", amount: "nach Belieben" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Ofen auf 180 °C vorheizen. Springform (Ø 26 cm) fetten und mit Backpapier auslegen.",
          "Butter mit Zucker und Vanillezucker schaumig schlagen.",
          "Eier einzeln unterrühren, bis eine cremige Masse entsteht.",
          "Mehl mit Backpulver und Kakaopulver mischen, abwechselnd mit der Milch unter die Buttermasse rühren.",
          "Falls frische Kirschen verwendet werden, diese waschen und entsteinen. TK-Kirschen auftauen lassen.",
          "Kirschen gut abtropfen lassen und mit Stärke bestäuben, damit sie im Teig nicht zu stark absinken.",
          "Kirschen vorsichtig unter den Teig heben.",
          "Teig in die vorbereitete Form gießen und glatt streichen.",
          "Im vorgeheizten Ofen etwa 50 Minuten backen (Stäbchenprobe).",
          "Kuchen abkühlen lassen und aus der Form lösen.",
          "Für die Glasur Schokolade und Butter über einem Wasserbad schmelzen, glattrühren und über den Kuchen gießen.",
          "Mit Schokoblättern oder -spänen dekorieren und vor dem Servieren vollständig fest werden lassen."
        ]
      }
    ],
    tips: [
      "Bei Verwendung von TK-Kirschen diese nicht komplett auftauen lassen, dann bleiben sie beim Backen besser in Form.",
      "Für ein intensiveres Schokoladenaroma können Sie einen EL Instant-Espressopulver zum Teig geben."
    ],
    isFavorite: false
  },
  {
    id: "provenzalischer-auflauf",
    title: "Provenzalischer Auflauf",
    description: "Ein mediterraner Gemüseauflauf mit Zucchini, Aubergine und Tomaten, verfeinert mit Kräutern der Provence - ein Stück Südfrankreich auf dem Teller.",
    image: "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "30 Min",
    cookTime: "45 Min",
    difficulty: "Normal",
    category: "Hauptgericht",
    tags: ["Vegetarisch", "Auflauf", "Französisch", "Gemüse", "Mediterran"],
    ingredients: [
      {
        items: [
          { name: "Zucchini", amount: "2" },
          { name: "Aubergine", amount: "1" },
          { name: "Rote Paprika", amount: "1" },
          { name: "Zwiebeln", amount: "2" },
          { name: "Knoblauchzehen", amount: "3" },
          { name: "Reife Tomaten", amount: "4" },
          { name: "Tomatenmark", amount: "2 EL" },
          { name: "Olivenöl", amount: "5 EL" },
          { name: "Kräuter der Provence", amount: "2 TL" },
          { name: "Frischer Thymian", amount: "3 Zweige" },
          { name: "Lorbeerblatt", amount: "1" },
          { name: "Salz und Pfeffer" },
          { name: "Ziegenkäse (optional)", amount: "150 g" },
          { name: "Frisches Baguette zum Servieren" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Ofen auf 200 °C vorheizen.",
          "Zucchini und Aubergine waschen und in ca. 1 cm dicke Scheiben schneiden.",
          "Paprika entkernen und in Streifen schneiden.",
          "Zwiebeln und Knoblauch schälen und fein würfeln.",
          "Tomaten überbrühen, häuten, entkernen und würfeln.",
          "Eine Auflaufform mit etwas Olivenöl einpinseln.",
          "2 EL Olivenöl in einer großen Pfanne erhitzen, Zwiebeln und Knoblauch darin glasig dünsten.",
          "Tomatenmark kurz mitrösten, dann die gewürfelten Tomaten zugeben.",
          "Mit Kräutern der Provence, Thymian, Lorbeerblatt, Salz und Pfeffer würzen. 5 Min köcheln lassen.",
          "Auberginenscheiben in einer separaten Pfanne mit etwas Olivenöl von beiden Seiten anbraten, salzen.",
          "Zucchinischeiben und Paprikastreifen ebenso kurz anbraten.",
          "Lorbeerblatt entfernen. Ein Drittel der Tomatensauce in die Auflaufform geben.",
          "Gemüsescheiben dachziegelartig in die Form schichten, zwischen die Schichten immer wieder etwas Tomatensauce geben.",
          "Mit Tomatensauce abschließen, nach Belieben Ziegenkäsescheiben darauf verteilen.",
          "Im vorgeheizten Ofen 30-35 Min backen, bis das Gemüse weich und die Oberfläche leicht gebräunt ist.",
          "Vor dem Servieren 10 Min ruhen lassen, mit frischem Thymian garnieren.",
          "Mit Baguette servieren."
        ]
      }
    ],
    tips: [
      "Für eine proteinreichere Variante können Sie eine Schicht gekochte Linsen oder gewürfelte Feta hinzufügen.",
      "Im Sommer können Sie den Auflauf auch auf dem Grill in einer gusseisernen Pfanne zubereiten.",
      "Übrig gebliebener Auflauf schmeckt am nächsten Tag kalt als Antipasti hervorragend."
    ],
    isFavorite: true
  },
  {
    id: "nussecken",
    title: "Nussecken",
    description: "Klassische deutsche Nussecken mit knusprigem Mürbeteig, karamellisierter Nussmasse und zartbitterer Schokolade - ein Gebäckklassiker, der nie aus der Mode kommt.",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=2071&auto=format&fit=crop",
    portionSize: "ca. 20 Stück",
    prepTime: "40 Min",
    cookTime: "30 Min",
    difficulty: "Mittel",
    category: "Gebäck",
    tags: ["Kekse", "Nüsse", "Schokolade", "Backen", "Klassiker"],
    ingredients: [
      {
        group: "Mürbeteig",
        items: [
          { name: "Mehl", amount: "300 g" },
          { name: "Zucker", amount: "100 g" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Butter, kalt", amount: "200 g" },
          { name: "Ei", amount: "1" },
          { name: "Prise Salz" }
        ]
      },
      {
        group: "Nussmasse",
        items: [
          { name: "Butter", amount: "200 g" },
          { name: "Zucker", amount: "200 g" },
          { name: "Honig", amount: "2 EL" },
          { name: "Gemahlene Haselnüsse", amount: "200 g" },
          { name: "Gemahlene Mandeln", amount: "200 g" },
          { name: "Aprikosenmarmelade", amount: "5 EL" },
          { name: "Sahne", amount: "4 EL" },
          { name: "Vanilleextrakt", amount: "1 TL" }
        ]
      },
      {
        group: "Glasur",
        items: [
          { name: "Zartbitterkuvertüre", amount: "200 g" },
          { name: "Kokosfett", amount: "1 TL" }
        ]
      }
    ],
    steps: [
      {
        group: "Mürbeteig",
        items: [
          "Mehl, Zucker, Vanillezucker und Salz mischen.",
          "Kalte Butter in Stücken und Ei hinzufügen, schnell zu einem glatten Teig verkneten.",
          "Teig in Frischhaltefolie wickeln und 30 Min kalt stellen.",
          "Ofen auf 180 °C vorheizen. Ein Backblech (ca. 30 x 40 cm) mit Backpapier auslegen.",
          "Teig auf dem Backpapier dünn ausrollen, sodass er das Blech bedeckt.",
          "Mit einer Gabel mehrmals einstechen."
        ]
      },
      {
        group: "Nussmasse & Fertigstellung",
        items: [
          "Butter, Zucker, Honig und Sahne in einem Topf schmelzen und 2 Min köcheln lassen.",
          "Vom Herd nehmen, Nüsse und Vanilleextrakt unterrühren.",
          "Aprikosenmarmelade auf dem Mürbeteig verstreichen.",
          "Nussmasse gleichmäßig darauf verteilen.",
          "Im vorgeheizten Ofen ca. 25-30 Min backen, bis die Nussmasse goldbraun ist.",
          "Kuchen aus dem Ofen nehmen und noch heiß in Rauten oder Dreiecke schneiden.",
          "Vollständig abkühlen lassen.",
          "Für die Glasur Kuvertüre mit Kokosfett über einem Wasserbad schmelzen.",
          "Ecken der Nussecken in die Schokolade tauchen.",
          "Auf einem mit Backpapier belegten Blech trocknen lassen."
        ]
      }
    ],
    tips: [
      "Die Nussecken halten sich in einer luftdichten Dose etwa 2 Wochen frisch.",
      "Für besonders karamellisierte Nussecken den Zucker in der Nussmasse vorher leicht anbräunen.",
      "Wer mag, kann unter die Glasur etwas Orangenabrieb mischen für eine fruchtige Note."
    ],
    isFavorite: true
  },
  {
    id: "poulardenbrust",
    title: "Poulardenbrust mit Salat und mariniertem Lauch",
    description: "Zartes Poulardenfleisch auf einem Bett aus frischem Salat und sanft mariniertem Lauch - ein elegantes, leichtes Gericht für besondere Anlässe.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2013&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "30 Min (plus 1 Std Marinierzeit)",
    cookTime: "25 Min",
    difficulty: "Mittel",
    category: "Hauptgericht",
    tags: ["Geflügel", "Poularde", "Lauch", "Salat", "Leicht"],
    ingredients: [
      {
        group: "Poulardenbrust",
        items: [
          { name: "Poulardenbrüste (mit Haut)", amount: "2 (je ca. 250 g)" },
          { name: "Butter", amount: "2 EL" },
          { name: "Olivenöl", amount: "1 EL" },
          { name: "Frischer Thymian", amount: "4 Zweige" },
          { name: "Knoblauchzehe", amount: "1" },
          { name: "Salz und frisch gemahlener Pfeffer" }
        ]
      },
      {
        group: "Marinierter Lauch",
        items: [
          { name: "Lauchstangen", amount: "3" },
          { name: "Schalotte", amount: "1" },
          { name: "Weißweinessig", amount: "3 EL" },
          { name: "Dijonsenf", amount: "1 TL" },
          { name: "Honig", amount: "1 TL" },
          { name: "Natives Olivenöl extra", amount: "5 EL" },
          { name: "Frischer Dill", amount: "2 EL, gehackt" },
          { name: "Salz und Pfeffer" }
        ]
      },
      {
        group: "Salat",
        items: [
          { name: "Gemischte Blattsalate", amount: "200 g" },
          { name: "Radieschen", amount: "1 Bund" },
          { name: "Gurke", amount: "½" },
          { name: "Zitronensaft", amount: "1 EL" },
          { name: "Olivenöl", amount: "2 EL" },
          { name: "Salz und Pfeffer" }
        ]
      }
    ],
    steps: [
      {
        group: "Marinierter Lauch",
        items: [
          "Lauchstangen gründlich waschen, nur den weißen und hellgrünen Teil in feine Ringe schneiden.",
          "Lauch in kochendem Salzwasser 2 Min blanchieren, in Eiswasser abschrecken und gut abtropfen lassen.",
          "Schalotte fein würfeln.",
          "Für die Marinade Essig, Senf und Honig verrühren, dann langsam Olivenöl einrühren.",
          "Schalotte und gehackten Dill unterrühren, mit Salz und Pfeffer abschmecken.",
          "Lauch mit der Marinade mischen und mindestens 1 Std ziehen lassen."
        ]
      },
      {
        group: "Poulardenbrust",
        items: [
          "Poulardenbrüste trocken tupfen, mit Salz und Pfeffer würzen.",
          "In einer Pfanne Butter und Öl erhitzen.",
          "Poulardenbrüste mit der Hautseite nach unten in die Pfanne legen.",
          "Thymian und angedrückte Knoblauchzehe dazugeben.",
          "Bei mittlerer Hitze ca. 5 Min braten, bis die Haut goldbraun und knusprig ist.",
          "Wenden und weitere 10-15 Min braten, bis das Fleisch durchgegart, aber noch saftig ist.",
          "Aus der Pfanne nehmen und kurz ruhen lassen."
        ]
      },
      {
        group: "Salat & Anrichten",
        items: [
          "Blattsalate waschen und trockenschleudern.",
          "Radieschen in dünne Scheiben schneiden, Gurke entkernen und in feine Streifen schneiden.",
          "Salat mit Zitronensaft, Olivenöl, Salz und Pfeffer anmachen.",
          "Salat auf Tellern anrichten, marinierten Lauch darauf verteilen.",
          "Poulardenbrüste in Scheiben schneiden und auf dem Salat anrichten.",
          "Mit etwas Bratfond beträufeln und sofort servieren."
        ]
      }
    ],
    tips: [
      "Für eine intensivere Marinade können Sie etwas fein geriebene Zitronenschale hinzufügen.",
      "Die Poularde kann auch durch Maishähnchenbrust ersetzt werden.",
      "Servieren Sie dazu frisches Baguette oder kleine Kartoffeln."
    ],
    isFavorite: false
  },
  {
    id: "rinderfilet-schmorzwiebelsauce",
    title: "Rinderfilet mit Schmorzwiebelsauce und Pfefferkruste auf Paprikawürfel",
    description: "Zartes Rinderfilet mit einer aromatischen Pfefferkruste, dazu eine reichhaltige Schmorzwiebelsauce und frische Paprikawürfel - ein Gericht für besondere Anlässe.",
    image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4 Portionen",
    prepTime: "45 Min",
    cookTime: "30 Min",
    difficulty: "Anspruchsvoll",
    category: "Hauptgericht",
    tags: ["Rindfleisch", "Filet", "Festlich", "Schmorzwiebelsauce", "Pfefferkruste"],
    ingredients: [
      {
        group: "Rinderfilet",
        items: [
          { name: "Rinderfilet (am Stück)", amount: "800 g" },
          { name: "Schwarzer Pfeffer, grob gemörsert", amount: "2 EL" },
          { name: "Grüner Pfeffer, grob gemörsert", amount: "1 EL" },
          { name: "Rosa Beeren, grob gemörsert", amount: "1 EL" },
          { name: "Senf, mittelscharfer", amount: "2 EL" },
          { name: "Salz" },
          { name: "Olivenöl", amount: "2 EL" },
          { name: "Butter", amount: "2 EL" },
          { name: "Frische Thymianzweige", amount: "4" }
        ]
      },
      {
        group: "Schmorzwiebelsauce",
        items: [
          { name: "Zwiebeln", amount: "4 große" },
          { name: "Butter", amount: "3 EL" },
          { name: "Brauner Zucker", amount: "1 EL" },
          { name: "Balsamico-Essig", amount: "3 EL" },
          { name: "Rotwein", amount: "200 ml" },
          { name: "Rinderfond", amount: "400 ml" },
          { name: "Lorbeerblatt", amount: "1" },
          { name: "Wacholderbeeren", amount: "3, leicht angedrückt" },
          { name: "Maisstärke zum Binden (optional)", amount: "1 TL" },
          { name: "Salz und Pfeffer" }
        ]
      },
      {
        group: "Paprikawürfel",
        items: [
          { name: "Rote Paprikaschoten", amount: "2" },
          { name: "Gelbe Paprikaschoten", amount: "2" },
          { name: "Olivenöl", amount: "2 EL" },
          { name: "Knoblauchzehe", amount: "1" },
          { name: "Salz und Pfeffer" },
          { name: "Frische Petersilie, gehackt", amount: "2 EL" }
        ]
      }
    ],
    steps: [
      {
        group: "Schmorzwiebelsauce",
        items: [
          "Zwiebeln schälen und in feine Ringe schneiden.",
          "In einem breiten Topf Butter schmelzen, Zwiebeln dazugeben und bei mittlerer Hitze ca. 10 Min glasig dünsten.",
          "Braunen Zucker darüber streuen und unter Rühren karamellisieren lassen.",
          "Mit Balsamico-Essig ablöschen und einkochen lassen.",
          "Rotwein zugießen, um die Hälfte einkochen lassen.",
          "Rinderfond, Lorbeerblatt und Wacholderbeeren zugeben.",
          "Bei niedriger Hitze ca. 20 Min köcheln lassen, bis die Sauce eingedickt ist.",
          "Lorbeerblatt und Wacholderbeeren entfernen.",
          "Mit Salz und Pfeffer abschmecken, bei Bedarf mit etwas in kaltem Wasser angerührter Maisstärke binden.",
          "Warm halten."
        ]
      },
      {
        group: "Paprikawürfel",
        items: [
          "Paprikaschoten waschen, entkernen und in gleichmäßige kleine Würfel schneiden.",
          "Knoblauchzehe fein hacken.",
          "In einer Pfanne Olivenöl erhitzen, Knoblauch kurz anschwitzen.",
          "Paprikawürfel zugeben und bei hoher Hitze ca. 5 Min anbraten.",
          "Mit Salz und Pfeffer würzen, gehackte Petersilie unterrühren.",
          "Warm halten."
        ]
      },
      {
        group: "Rinderfilet",
        items: [
          "Ofen auf 180 °C vorheizen.",
          "Rinderfilet trocken tupfen, mit Salz würzen.",
          "Alle Pfeffersorten mischen.",
          "Filet rundum mit Senf bestreichen, dann in der Pfeffermischung wälzen und leicht andrücken.",
          "In einer ofenfesten Pfanne Öl und Butter erhitzen.",
          "Filet von allen Seiten ca. 4 Min scharf anbraten, dabei mehrmals wenden.",
          "Thymianzweige dazugeben.",
          "Pfanne in den vorgeheizten Ofen stellen und das Filet je nach gewünschtem Gargrad 15-25 Min garen.",
          "Aus dem Ofen nehmen und 5-10 Min ruhen lassen."
        ]
      },
      {
        group: "Anrichten",
        items: [
          "Paprikawürfel auf vorgewärmten Tellern verteilen.",
          "Filet in Medaillons schneiden und auf die Paprika setzen.",
          "Schmorzwiebelsauce daneben anrichten oder separat servieren.",
          "Mit frischen Kräutern garnieren und sofort servieren."
        ]
      }
    ],
    tips: [
      "Die ideale Kerntemperatur für medium rare beträgt ca. 56-58°C, für medium ca. 60-62°C.",
      "Die Sauce kann bereits einen Tag zuvor zubereitet und vor dem Servieren erwärmt werden.",
      "Dazu passen Kartoffelgratin oder Rosmarinkartoffeln hervorragend."
    ],
    isFavorite: true
  }
];

export default recipes;
