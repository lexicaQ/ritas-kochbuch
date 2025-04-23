export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  portionSize: string;
  prepTime: string;
  cookTime?: string;
  totalTime?: string;
  difficulty: "leicht" | "normal" | "schwer";
  category: string;
  tags: string[];
  ingredients: {
    group?: string;
    items: {
      name: string;
      amount?: string;
    }[];
  }[];
  steps: {
    group?: string;
    items: string[];
  }[];
  tips?: string[];
  isFavorite?: boolean;
}

const recipes: Recipe[] = [
  {
    id: "haferflockenbutter-kracker",
    title: "Haferflocken‑Butter‑Kracker mit Blauschimmelkäse & Birnen",
    description: "Knusprige selbstgemachte Haferflocken-Cracker, perfekt zum Servieren mit cremigem Blauschimmelkäse und saftigen Birnenscheiben.",
    image: "https://images.unsplash.com/photo-1619980557487-8bdb970bfb85?q=80&w=2071&auto=format&fit=crop",
    portionSize: "6 Personen (ca. 18 Kekse)",
    prepTime: "15 Min (zzgl. 15 Min Kühlzeit)",
    cookTime: "25 Min",
    totalTime: "~55 Min",
    difficulty: "normal",
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
    difficulty: "leicht",
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
    difficulty: "leicht",
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
    difficulty: "leicht",
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
          "Butter und Zucker in einer Schüssel cremig rühren.",
          "Eier nacheinander unterrühren.",
          "Milch dazugießen und kurz glatt rühren.",
          "Mehl, Backpulver und Kakaopulver mischen, dann in zwei Portionen unter den Teig heben.",
          "Teig in die Form füllen, Oberfläche glatt streichen.",
          "Ca. 45 Min backen (Stäbchenprobe).",
          "Kuchen abkühlen lassen.",
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
    difficulty: "normal",
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
    difficulty: "normal",
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
          "Mandeln und flüssige Butter abwechselnd einarbeiten.",
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
    difficulty: "leicht",
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
    difficulty: "normal",
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
    difficulty: "normal",
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
    difficulty: "normal",
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
    difficulty: "normal",
    category: "Salat",
    tags: ["Italienisch", "Vegetarisch", "Pasta", "Rucola", "Tomaten"],
    ingredients: [
      {
        group: "Salat",
        items: [
          { name: "Nudeln (z. B. Penne)", amount: "500 g" },
          { name: "Cocktailtomaten", amount: "200 g" },
          { name: "
