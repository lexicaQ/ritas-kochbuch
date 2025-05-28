
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
    description: "Ein lockerer, mürber Rührkuchen mit Schmand und feiner Zitronennote.",
    image: "https://images.unsplash.com/photo-1565958011355-70f5ecf2a223?q=80&w=1965&auto=format&fit=crop",
    portionSize: "1 Springform (ca. 26 cm)",
    prepTime: "20 Min",
    cookTime: "45 Min",
    difficulty: "Leicht",
    category: "Dessert",
    tags: ["Kuchen", "Schmand", "Zitronen", "Backen", "Süß"],
    ingredients: [
      {
        items: [
          { name: "Margarine", amount: "250 g" },
          { name: "Zucker", amount: "250 g" },
          { name: "Eier", amount: "5" },
          { name: "Weizenmehl", amount: "375 g" },
          { name: "Backpulver", amount: "1 Päckchen" },
          { name: "Schmand", amount: "200 g (1 Becher)" },
          { name: "Zitrone (ungespritzt)", amount: "1" },
          { name: "Puderzucker zum Bestäuben", amount: "nach Bedarf" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Backofen auf 175 °C (Ober-/Unterhitze) vorheizen. Springform fetten und mit Mehl ausstäuben.",
          "Zitrone heiß waschen, abtrocknen und Schale abreiben. Saft auspressen.",
          "Margarine, Zucker und Zitronenschale in einer Rührschüssel mit dem Mixer cremig schlagen.",
          "Eier einzeln unterrühren und jeweils 1 Min weiterschlagen.",
          "Mehl mit Backpulver mischen. Abwechselnd mit Schmand und 2 EL Zitronensaft unterrühren.",
          "Teig in die vorbereitete Form füllen und glatt streichen.",
          "Im vorgeheizten Ofen ca. 45 Min backen (Stäbchenprobe).",
          "Kuchen in der Form 10 Min abkühlen lassen, dann auf ein Kuchengitter stürzen und komplett auskühlen lassen.",
          "Vor dem Servieren mit Puderzucker bestäuben."
        ]
      }
    ],
    isFavorite: false
  },
  {
    id: "tomaten-lauch-quiche",
    title: "Tomaten-Lauch-Quiche mit karamellisierten Walnusskernen",
    description: "Eine herzhafte Quiche mit süßem Lauch, saftigen Tomaten und knackigen Walnusskernen.",
    image: "https://images.unsplash.com/photo-1605052654115-6550799a5138?q=80&w=1974&auto=format&fit=crop",
    portionSize: "4 Personen",
    prepTime: "30 Min",
    cookTime: "45 Min",
    difficulty: "Mittel",
    category: "Hauptgericht",
    tags: ["Vegetarisch", "Lauch", "Tomaten", "Walnüsse", "Quiche"],
    ingredients: [
      {
        group: "Für den Teig",
        items: [
          { name: "Mehl", amount: "200 g" },
          { name: "Salz", amount: "1/2 TL" },
          { name: "Butter, kalt und in Stücken", amount: "100 g" },
          { name: "Eiswasser", amount: "3-4 EL" }
        ]
      },
      {
        group: "Für die Füllung",
        items: [
          { name: "Lauchstangen", amount: "2" },
          { name: "Butter", amount: "30 g" },
          { name: "Zucker", amount: "1 TL" },
          { name: "Kirschtomaten", amount: "250 g" },
          { name: "Walnusskerne", amount: "70 g" },
          { name: "Eier", amount: "3" },
          { name: "Sahne", amount: "200 ml" },
          { name: "Mittelalter Gouda, gerieben", amount: "100 g" },
          { name: "Salz und Pfeffer", amount: "nach Bedarf" }
        ]
      }
    ],
    steps: [
      {
        group: "Teigzubereitung",
        items: [
          "Mehl und Salz in einer Schüssel mischen. Butterstücke dazugeben und mit den Fingerspitzen zu Krümeln verreiben.",
          "Eiswasser nach und nach zugeben und schnell zu einem glatten Teig verarbeiten. Nicht zu lange kneten.",
          "Teig zu einer Kugel formen, in Frischhaltefolie wickeln und 30 Min im Kühlschrank ruhen lassen.",
          "Quicheform (Ø 26 cm) leicht einfetten. Teig auf bemehlter Arbeitsfläche ausrollen und in die Form legen. Rand andrücken und überstehenden Teig abschneiden.",
          "Teigboden mehrmals mit einer Gabel einstechen und 15 Min kalt stellen."
        ]
      },
      {
        group: "Füllung und Fertigstellung",
        items: [
          "Backofen auf 180 °C vorheizen.",
          "Lauch putzen, waschen und in Ringe schneiden. Butter in einer Pfanne erhitzen, Lauch darin andünsten. Mit Zucker bestreuen und leicht karamellisieren lassen.",
          "Kirschtomaten halbieren. Walnusskerne grob hacken und in einer Pfanne ohne Fett leicht rösten.",
          "In einer Schüssel Eier mit Sahne verquirlen, geriebenen Käse unterrühren. Mit Salz und Pfeffer würzen.",
          "Lauch, Tomaten und zwei Drittel der Walnusskerne auf dem Teigboden verteilen. Eiermischung darüber gießen.",
          "Quiche im heißen Ofen ca. 40-45 Min goldbraun backen.",
          "Kurz vor Ende der Backzeit restliche Walnusskerne mit 1 TL Honig vermischen und auf der Quiche verteilen. Noch 5 Min zu Ende backen.",
          "Quiche etwas abkühlen lassen und lauwarm oder kalt servieren."
        ]
      }
    ],
    isFavorite: false
  },
  {
    id: "mandelkuchen-spanien",
    title: "Mandelkuchen aus Spanien",
    description: "Ein saftiger, glutenfreier Mandelkuchen mit intensivem Mandelaroma und feiner Zitrusnote.",
    image: "https://images.unsplash.com/photo-1605280263929-1c42c62ef16b?q=80&w=2070&auto=format&fit=crop",
    portionSize: "1 Springform (ca. 24 cm)",
    prepTime: "20 Min",
    cookTime: "45 Min",
    difficulty: "Leicht",
    category: "Dessert",
    tags: ["Glutenfrei", "Mandeln", "Spanisch", "Kuchen", "Süß"],
    ingredients: [
      {
        items: [
          { name: "Butter (für die Form)", amount: "etwas" },
          { name: "Eier", amount: "6" },
          { name: "Zucker", amount: "250 g" },
          { name: "gemahlene Mandeln", amount: "400 g" },
          { name: "Zitrone (ungespritzt)", amount: "1" },
          { name: "Zimt", amount: "1 TL" },
          { name: "Mandelblättchen", amount: "30 g" },
          { name: "Puderzucker zum Bestäuben", amount: "nach Bedarf" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Backofen auf 170 °C vorheizen. Springform fetten und mit etwas gemahlenen Mandeln ausstreuen.",
          "Zitrone heiß waschen, abtrocknen und Schale abreiben.",
          "Eier trennen. Eiweiß in einer Schüssel mit 100 g Zucker steif schlagen.",
          "In einer separaten Schüssel Eigelbe mit den restlichen 150 g Zucker schaumig schlagen.",
          "Gemahlene Mandeln mit Zitronenabrieb und Zimt mischen.",
          "Mandelmischung vorsichtig unter die Eigelbmasse heben.",
          "Anschließend den Eischnee vorsichtig in drei Portionen unterheben.",
          "Teig in die vorbereitete Form füllen, mit Mandelblättchen bestreuen und glatt streichen.",
          "Im vorgeheizten Ofen ca. 45 Min backen (Stäbchenprobe).",
          "Kuchen in der Form 10 Min abkühlen lassen, dann auf ein Kuchengitter stürzen und vollständig auskühlen lassen.",
          "Mit Puderzucker bestäuben und servieren."
        ]
      }
    ],
    isFavorite: false
  },
  {
    id: "vitalbrot",
    title: "Vitalbrot mit Rübenkraut",
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
          { name: "Rübenkraut (z. B. Grafschafter)", amount: "150 g" },
          { name: "Würfelhefe", amount: "3 Päckchen (á 42,5 g)" }
        ]
      }
    ],
    steps: [
      {
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
    ]
  },
  {
    id: "lammschulter-gedunstet",
    title: "Lammschulter gedünstet mit Senfsauce auf Gemüsebett",
    description: "Zarte Lammschulter mit würziger Senfsauce auf einem Bett aus buntem Gemüse - ein festliches Gericht für besondere Anlässe.",
    image: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4-6 Personen",
    prepTime: "30 Min",
    cookTime: "2 Std",
    difficulty: "Mittel",
    category: "Hauptgericht",
    tags: ["Lamm", "Fleisch", "Festessen", "Senf", "Gemüse"],
    ingredients: [
      {
        group: "Für das Fleisch",
        items: [
          { name: "Lammschulter ohne Knochen", amount: "ca. 1,5 kg" },
          { name: "Salz und Pfeffer", amount: "nach Bedarf" },
          { name: "Olivenöl", amount: "2 EL" },
          { name: "Knoblauchzehen", amount: "4" },
          { name: "Rosmarin", amount: "2 Zweige" },
          { name: "Thymian", amount: "2 Zweige" }
        ]
      },
      {
        group: "Für das Gemüsebett",
        items: [
          { name: "Karotten", amount: "4" },
          { name: "Pastinaken", amount: "2" },
          { name: "Sellerie", amount: "1/2 Knolle" },
          { name: "Lauch", amount: "1 Stange" },
          { name: "Zwiebeln", amount: "2" },
          { name: "Olivenöl", amount: "2 EL" },
          { name: "Salz und Pfeffer", amount: "nach Bedarf" }
        ]
      },
      {
        group: "Für die Senfsauce",
        items: [
          { name: "Gemüsebrühe", amount: "300 ml" },
          { name: "Weißwein, trocken", amount: "100 ml" },
          { name: "Sahne", amount: "200 ml" },
          { name: "Dijon-Senf", amount: "2 EL" },
          { name: "grobkörniger Senf", amount: "1 EL" },
          { name: "Speisestärke", amount: "1 TL" },
          { name: "Salz, Pfeffer, Zucker", amount: "nach Bedarf" }
        ]
      }
    ],
    steps: [
      {
        group: "Fleisch vorbereiten",
        items: [
          "Lammschulter mit Küchenpapier trocken tupfen und mit Salz und Pfeffer rundherum einreiben.",
          "Backofen auf 160 °C Umluft vorheizen.",
          "Knoblauchzehen schälen und halbieren.",
          "In einem großen Bräter Olivenöl erhitzen und das Fleisch von allen Seiten kräftig anbraten.",
          "Knoblauch, Rosmarin und Thymian hinzufügen."
        ]
      },
      {
        group: "Gemüse vorbereiten",
        items: [
          "Alle Gemüse waschen und in grobe Stücke schneiden.",
          "Zwiebeln schälen und vierteln.",
          "Gemüse mit Olivenöl in einer Schüssel vermischen, salzen und pfeffern.",
          "Das angebratene Fleisch aus dem Bräter nehmen, das Gemüse hineingeben und kurz anschwitzen.",
          "Fleisch wieder auf das Gemüsebett legen."
        ]
      },
      {
        group: "Garen und Sauce zubereiten",
        items: [
          "Bräter mit Deckel oder Alufolie verschließen und im vorgeheizten Backofen ca. 2 Stunden garen.",
          "Nach der Garzeit das Fleisch und das Gemüse herausnehmen und warm halten.",
          "Bratensaft durch ein Sieb in einen Topf gießen, Kräuter entfernen.",
          "Sauce mit Gemüsebrühe und Weißwein auffüllen und aufkochen lassen.",
          "Sahne einrühren und kurz aufkochen lassen.",
          "Beide Senfsorten einrühren, mit Salz, Pfeffer und einer Prise Zucker abschmecken.",
          "Stärke mit etwas kaltem Wasser anrühren und die Sauce damit leicht binden.",
          "Lammschulter in Scheiben schneiden und mit Gemüse und Senfsauce servieren."
        ]
      }
    ],
    tips: [
      "Ideal zu diesem Gericht passen Kartoffelgratin oder Kräuterkartoffeln.",
      "Wer keine Lammschulter mag, kann das Rezept auch mit Schweinenacken oder Kalbsbraten zubereiten.",
      "Für eine intensivere Aromatisierung kann das Fleisch bereits am Vortag mit Knoblauch und Kräutern eingelegt werden."
    ]
  },
  {
    id: "spinat-crostata",
    title: "Spinat-Crostata",
    description: "Knusprige italienische Spinattarte mit Ricotta und Parmesan in einem rustikalen Mürbeteig.",
    image: "https://images.unsplash.com/photo-1550504630-ee021e8f3b91?q=80&w=2072&auto=format&fit=crop",
    portionSize: "4-6 Personen",
    prepTime: "30 Min (zzgl. 30 Min Kühlzeit)",
    cookTime: "45 Min",
    difficulty: "Mittel",
    category: "Hauptgericht",
    tags: ["Vegetarisch", "Italienisch", "Spinat", "Tarte", "Ricotta"],
    ingredients: [
      {
        group: "Für den Teig",
        items: [
          { name: "Mehl", amount: "250 g" },
          { name: "Salz", amount: "1/2 TL" },
          { name: "kalte Butter, in Stücken", amount: "125 g" },
          { name: "Ei", amount: "1" },
          { name: "eiskaltes Wasser", amount: "2-3 EL" }
        ]
      },
      {
        group: "Für die Füllung",
        items: [
          { name: "frischer Spinat", amount: "500 g" },
          { name: "Zwiebel", amount: "1" },
          { name: "Knoblauchzehen", amount: "2" },
          { name: "Olivenöl", amount: "2 EL" },
          { name: "Ricotta", amount: "250 g" },
          { name: "Parmesan, gerieben", amount: "50 g" },
          { name: "Eier", amount: "2" },
          { name: "Sahne", amount: "100 ml" },
          { name: "Salz und Pfeffer", amount: "nach Bedarf" },
          { name: "frisch geriebene Muskatnuss", amount: "1 Prise" }
        ]
      },
      {
        group: "Zum Bestreichen",
        items: [
          { name: "Eigelb", amount: "1" },
          { name: "Milch", amount: "1 EL" }
        ]
      }
    ],
    steps: [
      {
        group: "Teigzubereitung",
        items: [
          "Für den Teig Mehl und Salz in einer Schüssel mischen. Butterstücke dazugeben und mit den Fingern zu einer krümeligen Masse verreiben.",
          "Ei und eiskaltes Wasser hinzufügen und alles schnell zu einem glatten Teig verkneten. Nicht zu lange arbeiten.",
          "Teig zu einer Kugel formen, in Frischhaltefolie wickeln und 30 Minuten im Kühlschrank ruhen lassen."
        ]
      },
      {
        group: "Füllung zubereiten",
        items: [
          "Spinat gründlich waschen, große Stiele entfernen und grob hacken.",
          "Zwiebel und Knoblauch fein würfeln.",
          "In einer großen Pfanne Olivenöl erhitzen. Zwiebel und Knoblauch darin glasig dünsten.",
          "Spinat portionsweise hinzufügen und zusammenfallen lassen. Gut abtropfen lassen und überschüssige Flüssigkeit ausdrücken.",
          "In einer Schüssel Ricotta, Parmesan, Eier und Sahne verquirlen. Mit Salz, Pfeffer und Muskatnuss würzen.",
          "Spinatmischung unterheben und gleichmäßig vermengen."
        ]
      },
      {
        group: "Crostata formen und backen",
        items: [
          "Backofen auf 180 °C vorheizen. Ein Backblech mit Backpapier auslegen.",
          "Teig auf einer bemehlten Fläche zu einem Kreis (ca. 35 cm Durchmesser) ausrollen.",
          "Teigplatte auf das Backblech legen und die Spinat-Ricotta-Füllung in der Mitte verteilen, dabei einen Rand von ca. 5 cm freilassen.",
          "Teigrand über die Füllung schlagen und leicht andrücken, sodass ein rustikaler Rand entsteht.",
          "Eigelb und Milch verquirlen und den Teigrand damit bestreichen.",
          "Crostata im vorgeheizten Ofen ca. 45 Minuten goldbraun backen.",
          "Kurz abkühlen lassen und lauwarm servieren."
        ]
      }
    ],
    tips: [
      "Statt frischem Spinat können auch 2 Packungen (à 450 g) tiefgekühlter Spinat verwendet werden. Vorher auftauen und gut ausdrücken.",
      "Die Crostata schmeckt auch kalt sehr gut und eignet sich perfekt für ein Picknick oder Buffet.",
      "Für eine Variante können gehackte getrocknete Tomaten oder geröstete Pinienkerne in die Füllung eingearbeitet werden."
    ]
  },
  {
    id: "grenobler-walnussbissen",
    title: "Grenobler Walnussbissen",
    description: "Zarte Walnussplätzchen nach einem traditionellen Rezept aus Grenoble, der Walnussstadt Frankreichs.",
    image: "https://images.unsplash.com/photo-1599599811214-3d44be99547f?q=80&w=1974&auto=format&fit=crop",
    portionSize: "ca. 40 Stück",
    prepTime: "30 Min (zzgl. 1 Std Kühlzeit)",
    cookTime: "12 Min",
    difficulty: "Normal",
    category: "Gebäck",
    tags: ["Walnüsse", "Kekse", "Französisch", "Weihnachten", "Süß"],
    ingredients: [
      {
        items: [
          { name: "Walnusskerne", amount: "150 g" },
          { name: "Mehl", amount: "300 g" },
          { name: "Zucker", amount: "180 g" },
          { name: "Butter, kalt", amount: "200 g" },
          { name: "Eigelb", amount: "1" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Salz", amount: "1 Prise" },
          { name: "Puderzucker zum Bestäuben", amount: "nach Bedarf" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Walnusskerne fein hacken oder im Mixer kurz zerkleinern. Nicht zu fein mahlen, es sollten noch kleine Stücke erkennbar sein.",
          "Mehl, Zucker, gehackte Walnüsse, Vanillezucker und Salz in einer Schüssel mischen.",
          "Kalte Butter in kleine Würfel schneiden und hinzufügen. Mit den Fingerspitzen zu einer krümeligen Masse verreiben.",
          "Eigelb hinzufügen und alles zügig zu einem glatten Teig verkneten.",
          "Teig zu einer Rolle mit ca. 4-5 cm Durchmesser formen. In Frischhaltefolie wickeln und mindestens 1 Stunde im Kühlschrank ruhen lassen.",
          "Backofen auf 180 °C vorheizen. Zwei Backbleche mit Backpapier auslegen.",
          "Teigstange aus dem Kühlschrank nehmen und in ca. 0,5 cm dicke Scheiben schneiden.",
          "Scheiben mit etwas Abstand auf die vorbereiteten Bleche legen.",
          "Im vorgeheizten Ofen ca. 10-12 Minuten backen, bis die Ränder leicht goldbraun werden.",
          "Plätzchen aus dem Ofen nehmen und auf dem Blech kurz abkühlen lassen.",
          "Noch warme Kekse mit Puderzucker bestäuben und vollständig auskühlen lassen."
        ]
      }
    ],
    tips: [
      "Die Plätzchen halten sich in einer luftdichten Dose etwa 2 Wochen.",
      "Für eine besondere Note können Sie eine Messerspitze gemahlenen Zimt oder geriebene Zitronenschale zum Teig geben.",
      "Die ungebackenen Teigrolle lässt sich bis zu einem Monat im Gefrierschrank aufbewahren. Nach Bedarf teilweise auftauen, schneiden und backen."
    ]
  },
  {
    id: "italienischer-nudelsalat",
    title: "Italienischer Nudelsalat mit Rucola und getrockneten Tomaten",
    description: "Aromatischer Nudelsalat mit würzigen getrockneten Tomaten, nussigem Rucola und cremigem Mozzarella – perfekt für warme Tage.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4-6 Personen",
    prepTime: "25 Min",
    cookTime: "10 Min",
    difficulty: "Leicht",
    category: "Beilage",
    tags: ["Vegetarisch", "Italienisch", "Nudeln", "Salat", "Picknick"],
    ingredients: [
      {
        items: [
          { name: "Fusilli oder Farfalle", amount: "500 g" },
          { name: "getrocknete Tomaten in Öl", amount: "150 g" },
          { name: "Rucola", amount: "100 g" },
          { name: "Mini-Mozzarella (Bocconcini)", amount: "250 g" },
          { name: "schwarze Oliven, entkernt", amount: "100 g" },
          { name: "rote Zwiebel", amount: "1" },
          { name: "frisches Basilikum", amount: "1 Bund" },
          { name: "Pinienkerne", amount: "50 g" },
          { name: "Olivenöl", amount: "6 EL" },
          { name: "Balsamico-Essig", amount: "3 EL" },
          { name: "Honig", amount: "1 TL" },
          { name: "Salz und Pfeffer", amount: "nach Bedarf" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Nudeln nach Packungsanweisung in Salzwasser al dente kochen. Abgießen, kalt abschrecken und abtropfen lassen.",
          "Getrocknete Tomaten abtropfen lassen (Öl aufbewahren) und in Streifen schneiden.",
          "Rucola waschen, trocknen und grob zupfen.",
          "Mini-Mozzarella halbieren oder vierteln, falls sie zu groß sind.",
          "Oliven halbieren oder in Ringe schneiden.",
          "Rote Zwiebel schälen und in feine Halbringe schneiden.",
          "Basilikum waschen, trocknen und Blätter abzupfen.",
          "Pinienkerne in einer Pfanne ohne Fett goldbraun rösten.",
          "Für das Dressing 3 EL vom Öl der getrockneten Tomaten mit dem Olivenöl, Balsamico-Essig und Honig verrühren. Mit Salz und Pfeffer abschmecken.",
          "Nudeln in eine große Schüssel geben, alle Zutaten bis auf Rucola und Basilikum dazugeben.",
          "Dressing darübergießen und alles vorsichtig vermengen.",
          "Kurz vor dem Servieren Rucola und Basilikumblätter unterheben."
        ]
      }
    ],
    tips: [
      "Der Salat kann bis zu 24 Stunden im Voraus zubereitet werden – Rucola und Basilikum erst kurz vor dem Servieren unterheben.",
      "Für eine herzhaftere Variante können gewürfelte Salami oder Parmaschinken hinzugefügt werden.",
      "Als Beilage zu gegrilltem Fleisch oder Fisch servieren oder als leichtes Hauptgericht genießen."
    ]
  },
  {
    id: "krauter-tabbouleh",
    title: "Kräuter-Tabbouleh",
    description: "Frischer libanesischer Bulgursalat mit reichlich Petersilie, Minze und Tomaten.",
    image: "https://images.unsplash.com/photo-1544380780-b0531ffb1b09?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4 Personen",
    prepTime: "20 Min (zzgl. 30 Min Quellzeit)",
    difficulty: "Leicht",
    category: "Salat",
    tags: ["Vegan", "Orientalisch", "Bulgur", "Kräuter", "Petersilie"],
    ingredients: [
      {
        items: [
          { name: "feiner Bulgur", amount: "150 g" },
          { name: "heißes Wasser", amount: "150 ml" },
          { name: "glatte Petersilie", amount: "3 Bunde" },
          { name: "frische Minze", amount: "1 Bund" },
          { name: "Frühlingszwiebeln", amount: "4" },
          { name: "feste Tomaten", amount: "4" },
          { name: "Gurke", amount: "1/2" },
          { name: "Zitronensaft", amount: "4 EL" },
          { name: "Olivenöl", amount: "6 EL" },
          { name: "Salz", amount: "1 TL" },
          { name: "frisch gemahlener schwarzer Pfeffer", amount: "1/2 TL" },
          { name: "gemahlener Kreuzkümmel", amount: "1/4 TL" },
          { name: "Granatapfelkerne zum Garnieren (optional)", amount: "2 EL" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Bulgur in eine Schüssel geben, mit heißem Wasser übergießen und 30 Minuten quellen lassen. Bei Bedarf überschüssiges Wasser abgießen.",
          "Petersilie und Minze waschen, trockenschütteln und fein hacken (nur die Blätter verwenden, Stiele entfernen).",
          "Frühlingszwiebeln putzen und in feine Ringe schneiden.",
          "Tomaten waschen, Strunk entfernen und in sehr kleine Würfel schneiden.",
          "Gurke waschen, schälen, halbieren, entkernen und in kleine Würfel schneiden.",
          "In einer großen Schüssel Zitronensaft, Olivenöl, Salz, Pfeffer und Kreuzkümmel zu einem Dressing verrühren.",
          "Gequollenen Bulgur mit einer Gabel auflockern und zum Dressing geben.",
          "Gehackte Kräuter, Frühlingszwiebeln, Tomaten- und Gurkenwürfel dazugeben und alles vorsichtig vermengen.",
          "Tabbouleh vor dem Servieren mindestens 15 Minuten ziehen lassen, damit sich die Aromen verbinden können.",
          "Bei Bedarf mit Granatapfelkernen garnieren und servieren."
        ]
      }
    ],
    tips: [
      "Tabbouleh schmeckt am besten, wenn er frisch zubereitet ist, kann aber bis zu 24 Stunden im Kühlschrank aufbewahrt werden.",
      "Der Salat eignet sich hervorragend als Beilage zu gegrilltem Fleisch oder Falafel.",
      "Für eine Variation können geröstete Pinienkerne oder gewürfelte Paprika hinzugefügt werden."
    ]
  },
  {
    id: "susses-hefebrot",
    title: "Süßes Hefebrot",
    description: "Fluffiges Hefebrot mit Rosinen und Mandeln, perfekt zum Frühstück oder zur Kaffeezeit.",
    image: "https://images.unsplash.com/photo-1603379217197-581c747ba7d1?q=80&w=2070&auto=format&fit=crop",
    portionSize: "1 Kastenform",
    prepTime: "30 Min (zzgl. 1,5 Std Gehzeit)",
    cookTime: "50 Min",
    difficulty: "Mittel",
    category: "Brot & Gebäck",
    tags: ["Süß", "Rosinen", "Mandeln", "Hefeteig", "Frühstück"],
    ingredients: [
      {
        items: [
          { name: "Mehl", amount: "500 g" },
          { name: "frische Hefe", amount: "1 Würfel (42 g)" },
          { name: "lauwarme Milch", amount: "250 ml" },
          { name: "Zucker", amount: "60 g" },
          { name: "Salz", amount: "1/2 TL" },
          { name: "Butter, zimmertemperiert", amount: "80 g" },
          { name: "Ei", amount: "1" },
          { name: "Rosinen", amount: "100 g" },
          { name: "gehackte Mandeln", amount: "80 g" },
          { name: "abgeriebene Schale einer unbehandelten Zitrone", amount: "" },
          { name: "Eigelb zum Bestreichen", amount: "1" },
          { name: "Hagelzucker zum Bestreuen", amount: "nach Belieben" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Rosinen in lauwarmem Wasser einweichen.",
          "Hefe in lauwarmer Milch auflösen und mit 1 TL Zucker verrühren.",
          "Mehl, restlichen Zucker und Salz in eine Schüsseln geben und mischen.",
          "Hefemilch, weiche Butter, Ei und Zitronenabrieb dazugeben und zu einem glatten Teig verkneten (ca. 10 Min mit der Maschine oder 15 Min von Hand).",
          "Rosinen abgießen, trocken tupfen und zusammen mit den gehackten Mandeln vorsichtig unter den Teig kneten.",
          "Teig zu einer Kugel formen, in eine große Schüssel legen, mit einem feuchten Tuch abdecken und an einem warmen Ort ca. 1 Stunde gehen lassen, bis er sich verdoppelt hat.",
          "Eine Kastenform (30 cm) fetten und mit etwas Mehl ausstreuen.",
          "Teig nochmals durchkneten, zu einem länglichen Laib formen und in die Form legen.",
          "Mit einem feuchten Tuch abdecken und weitere 30 Minuten gehen lassen.",
          "Backofen auf 180 °C Ober-/Unterhitze vorheizen.",
          "Brot mit verquirltem Eigelb bestreichen und mit Hagelzucker bestreuen.",
          "Im vorgeheizten Ofen ca. 45-50 Minuten goldbraun backen.",
          "Bei zu starker Bräunung nach ca. 30 Minuten mit Alufolie abdecken.",
          "Brot aus dem Ofen nehmen, kurz in der Form ruhen lassen, dann auf ein Kuchengitter stürzen und auskühlen lassen."
        ]
      }
    ],
    tips: [
      "Statt Rosinen können auch Cranberries oder gehackte getrocknete Aprikosen verwendet werden.",
      "Das Brot schmeckt am besten frisch, hält sich aber in einem Brottopf oder in Folie eingewickelt 2-3 Tage frisch.",
      "Reste können zu einem köstlichen French Toast verarbeitet werden."
    ]
  },
  {
    id: "zitronencreme-kuchen",
    title: "Zitronencreme-Kuchen vom Blech",
    description: "Saftiger Blechkuchen mit erfrischender Zitronencreme und knusprigen Streuseln.",
    image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=2071&auto=format&fit=crop",
    portionSize: "1 Backblech",
    prepTime: "30 Min",
    cookTime: "40 Min",
    difficulty: "Mittel",
    category: "Kuchen",
    tags: ["Zitrone", "Streusel", "Blechkuchen", "Süß", "Fruchtig"],
    ingredients: [
      {
        group: "Für den Teig",
        items: [
          { name: "Mehl", amount: "400 g" },
          { name: "Zucker", amount: "150 g" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Backpulver", amount: "1 Päckchen" },
          { name: "Butter, kalt", amount: "200 g" },
          { name: "Ei", amount: "1" },
          { name: "Salz", amount: "1 Prise" }
        ]
      },
      {
        group: "Für die Zitronencreme",
        items: [
          { name: "Zitronensaft", amount: "150 ml (ca. 3-4 Zitronen)" },
          { name: "abgeriebene Schale von 2 unbehandelten Zitronen", amount: "" },
          { name: "Zucker", amount: "150 g" },
          { name: "Speisestärke", amount: "40 g" },
          { name: "Eier", amount: "3" },
          { name: "Butter", amount: "50 g" }
        ]
      }
    ],
    steps: [
      {
        group: "Teig zubereiten",
        items: [
          "Backofen auf 180 °C vorheizen. Ein Backblech (ca. 30 x 40 cm) mit Backpapier auslegen.",
          "Für den Teig Mehl, Zucker, Vanillezucker, Backpulver und Salz in einer Schüssel vermischen.",
          "Kalte Butter in kleine Stücke schneiden und mit den trockenen Zutaten zu Streuseln verarbeiten.",
          "Ei unterkneten, bis ein krümeliger Teig entsteht.",
          "Zwei Drittel des Teigs auf dem Backblech verteilen und festdrücken, um den Boden zu bilden.",
          "Mit einer Gabel mehrmals einstechen und ca. 15 Minuten vorbacken."
        ]
      },
      {
        group: "Zitronencreme zubereiten",
        items: [
          "Für die Zitronencreme den Saft der Zitronen auspressen und die Schale abreiben.",
          "Zitronensaft, Zitronenabrieb, Zucker und Speisestärke in einem Topf verrühren.",
          "Eier verquirlen und zur Zitronenmischung geben, alles gut vermischen.",
          "Mischung unter ständigem Rühren aufkochen lassen, bis eine dickliche Creme entsteht.",
          "Vom Herd nehmen, Butter unterrühren und kurz abkühlen lassen."
        ]
      },
      {
        group: "Kuchen fertigstellen",
        items: [
          "Zitronencreme auf dem vorgebackenen Teigboden verteilen.",
          "Restliche Streusel gleichmäßig darüber streuen.",
          "Kuchen weitere 25 Minuten goldbraun backen.",
          "Vollständig auf dem Blech abkühlen lassen, dann in Stücke schneiden."
        ]
      }
    ],
    tips: [
      "Der Kuchen schmeckt am nächsten Tag noch besser, wenn sich die Aromen verbunden haben.",
      "Für eine Variante kann die Zitronencreme mit fein gehacktem Ingwer verfeinert werden.",
      "Im Sommer schmeckt der Kuchen leicht gekühlt besonders erfrischend."
    ]
  },
  {
    id: "himbeer-joghurt-torte",
    title: "Himbeer-Joghurt-Torte",
    description: "Sommerliche Torte mit frischen Himbeeren, cremiger Joghurtmousse und knusprigem Biskuitboden.",
    image: "https://images.unsplash.com/photo-1565958011355-70f5ecf2a223?q=80&w=2073&auto=format&fit=crop",
    portionSize: "1 Springform (26 cm)",
    prepTime: "40 Min (zzgl. 4 Std Kühlzeit)",
    cookTime: "20 Min",
    difficulty: "Mittel",
    category: "Torte",
    tags: ["Himbeeren", "Joghurt", "Sommer", "Geburtstag", "Früchte"],
    ingredients: [
      {
        group: "Für den Biskuitboden",
        items: [
          { name: "Eier", amount: "4" },
          { name: "Zucker", amount: "120 g" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Mehl", amount: "120 g" },
          { name: "Backpulver", amount: "1/2 TL" },
          { name: "Salz", amount: "1 Prise" }
        ]
      },
      {
        group: "Für die Füllung",
        items: [
          { name: "griechischer Joghurt", amount: "500 g" },
          { name: "Sahne", amount: "400 ml" },
          { name: "Puderzucker", amount: "100 g" },
          { name: "Vanilleextrakt", amount: "1 TL" },
          { name: "Gelatine", amount: "9 Blatt" },
          { name: "kaltes Wasser", amount: "zum Einweichen der Gelatine" },
          { name: "Himbeeren, frisch", amount: "500 g" },
          { name: "Zucker für die Himbeeren", amount: "2 EL" },
          { name: "Zitronensaft", amount: "1 EL" }
        ]
      },
      {
        group: "Für die Dekoration",
        items: [
          { name: "frische Himbeeren", amount: "250 g" },
          { name: "Minzblätter", amount: "nach Belieben" },
          { name: "Puderzucker zum Bestäuben", amount: "nach Bedarf" }
        ]
      }
    ],
    steps: [
      {
        group: "Biskuitboden zubereiten",
        items: [
          "Backofen auf 180 °C vorheizen. Boden einer Springform (26 cm) mit Backpapier auslegen, Rand einfetten.",
          "Eier, Zucker und Vanillezucker in einer Schüssel ca. 5-7 Minuten sehr schaumig schlagen.",
          "Mehl, Backpulver und Salz mischen und vorsichtig unter die Eimasse heben.",
          "Teig in die vorbereitete Form füllen und im vorgeheizten Ofen ca. 20 Minuten backen.",
          "Biskuit kurz abkühlen lassen, dann aus der Form lösen und auf einem Kuchengitter vollständig auskühlen lassen."
        ]
      },
      {
        group: "Füllung zubereiten",
        items: [
          "Gelatine in kaltem Wasser ca. 5 Minuten einweichen.",
          "300 g Himbeeren mit 2 EL Zucker und Zitronensaft pürieren, durch ein Sieb streichen, um die Kerne zu entfernen.",
          "Eingeweichte Gelatine leicht ausdrücken und in 3 EL des Himbeerpürees unter leichtem Erwärmen auflösen.",
          "Joghurt mit Puderzucker und Vanilleextrakt verrühren.",
          "Sahne steif schlagen und vorsichtig unter die Joghurtmasse heben.",
          "Die aufgelöste Gelatine-Himbeer-Mischung unter die Joghurt-Sahne-Creme rühren.",
          "200 g frische, unzerdrückte Himbeeren vorsichtig unter die Creme heben."
        ]
      },
      {
        group: "Torte zusammensetzen",
        items: [
          "Biskuit waagerecht halbieren, den unteren Teil in eine Springform legen.",
          "Rand der Springform mit Tortenrand oder Klarsichtfolie auslegen.",
          "Hälfte der Joghurt-Himbeer-Creme auf dem Biskuitboden verteilen.",
          "Obere Biskuithälfte auflegen und leicht andrücken.",
          "Restliche Creme darüber verteilen und glatt streichen.",
          "Torte mindestens 4 Stunden, am besten über Nacht, im Kühlschrank fest werden lassen."
        ]
      },
      {
        group: "Dekorieren und servieren",
        items: [
          "Torte vorsichtig aus der Form lösen und auf eine Servierplatte stellen.",
          "Mit frischen Himbeeren und Minzblättern dekorieren und mit etwas Puderzucker bestäuben.",
          "Vor dem Servieren ca. 20 Minuten bei Zimmertemperatur ruhen lassen."
        ]
      }
    ],
    tips: [
      "Die Torte lässt sich gut vorbereiten und kann bis zu 2 Tage im Kühlschrank aufbewahrt werden.",
      "Statt frischer Himbeeren können auch tiefgekühlte verwendet werden. Diese vorher auftauen und abtropfen lassen.",
      "Für eine leichtere Version kann der griechische Joghurt durch Magerquark ersetzt werden."
    ]
  },
  {
    id: "lauwarmer-kartoffelsalat",
    title: "Lauwarmer Kartoffelsalat mit Ziegenkäse",
    description: "Aromatischer Kartoffelsalat mit cremigem Ziegenkäse, knackigen Walnüssen und frischen Kräutern.",
    image: "https://images.unsplash.com/photo-1605387257227-8dfa1e10c9cd?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4 Personen",
    prepTime: "20 Min",
    cookTime: "25 Min",
    difficulty: "Leicht",
    category: "Beilage",
    tags: ["Vegetarisch", "Kartoffeln", "Ziegenkäse", "Walnüsse", "Kräuter"],
    ingredients: [
      {
        items: [
          { name: "festkochende Kartoffeln", amount: "800 g" },
          { name: "Ziegenrolle oder Ziegenfrischkäse", amount: "150 g" },
          { name: "Walnusskerne", amount: "60 g" },
          { name: "rote Zwiebel", amount: "1" },
          { name: "Frühlingszwiebeln", amount: "3" },
          { name: "frischer Thymian", amount: "4 Zweige" },
          { name: "frischer Schnittlauch", amount: "1 Bund" },
          { name: "Olivenöl", amount: "4 EL" },
          { name: "weißer Balsamico-Essig", amount: "2 EL" },
          { name: "Dijon-Senf", amount: "1 TL" },
          { name: "Honig", amount: "1 TL" },
          { name: "Salz und Pfeffer", amount: "nach Bedarf" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Kartoffeln gründlich waschen und in einem Topf mit Salzwasser ca. 20-25 Minuten kochen, bis sie gar, aber noch fest sind.",
          "In der Zwischenzeit Walnusskerne grob hacken und in einer Pfanne ohne Fett leicht rösten, bis sie duften. Beiseite stellen.",
          "Rote Zwiebel schälen und in feine Halbringe schneiden.",
          "Frühlingszwiebeln putzen und in dünne Ringe schneiden.",
          "Thymianblättchen von den Stielen zupfen und fein hacken.",
          "Schnittlauch waschen und in feine Röllchen schneiden.",
          "Für das Dressing Olivenöl, Essig, Senf und Honig verquirlen. Mit Salz und Pfeffer abschmecken.",
          "Kartoffeln abgießen, kurz abkühlen lassen und noch warm pellen. In nicht zu kleine Stücke schneiden.",
          "Die warmen Kartoffelstücke mit dem Dressing übergießen und vorsichtig vermengen.",
          "Rote Zwiebel, die Hälfte der Frühlingszwiebeln und Thymian unterheben.",
          "Ziegenrolle in kleine Stücke oder Scheiben schneiden.",
          "Kartoffelsalat auf einer Servierplatte anrichten, Ziegenkäsestücke darauf verteilen.",
          "Mit gerösteten Walnüssen, restlichen Frühlingszwiebeln und Schnittlauch bestreuen.",
          "Lauwarm servieren."
        ]
      }
    ],
    tips: [
      "Für eine herbstliche Variante können gebratene Pilze hinzugefügt werden.",
      "Der Salat eignet sich hervorragend als Beilage zu gegrilltem Fleisch oder als vegetarisches Hauptgericht.",
      "Statt Walnüssen können auch Pinienkerne oder Haselnüsse verwendet werden."
    ]
  },
  {
    id: "kirsch-schoko-kuchen",
    title: "Kirsch-Schoko-Kuchen",
    description: "Saftiger Schokoladenkuchen mit Sauerkirschen und feiner Nougatnote.",
    image: "https://images.unsplash.com/photo-1558433916-90a36b44753f?q=80&w=2070&auto=format&fit=crop",
    portionSize: "1 Springform (26 cm)",
    prepTime: "25 Min",
    cookTime: "50 Min",
    difficulty: "Normal",
    category: "Kuchen",
    tags: ["Schokolade", "Kirschen", "Nougat", "Rührteig", "Süß"],
    ingredients: [
      {
        items: [
          { name: "Butter, weich", amount: "200 g" },
          { name: "Zucker", amount: "180 g" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Eier", amount: "4" },
          { name: "Mehl", amount: "200 g" },
          { name: "Backpulver", amount: "2 TL" },
          { name: "Backkakao", amount: "30 g" },
          { name: "Nougatmasse, geschmolzen", amount: "100 g" },
          { name: "Milch", amount: "100 ml" },
          { name: "Sauerkirschen (Glas), abgetropft", amount: "350 g" },
          { name: "Zartbitterschokolade, gehackt", amount: "100 g" },
          { name: "Puderzucker zum Bestäuben", amount: "nach Bedarf" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Backofen auf 175 °C vorheizen. Springform (26 cm) mit Backpapier auslegen und den Rand fetten.",
          "Butter, Zucker und Vanillezucker mit dem Mixer cremig schlagen.",
          "Eier einzeln unterrühren, jeweils ca. 30 Sekunden schlagen.",
          "Mehl, Backpulver und Kakao mischen und abwechselnd mit der Milch unter die Butter-Eier-Masse rühren.",
          "Geschmolzene Nougatmasse unterrühren.",
          "Kirschen abtropfen lassen und vorsichtig unterrühren.",
          "Gehackte Schokolade unterheben.",
          "Teig in die vorbereitete Form füllen und glatt streichen.",
          "Im vorgeheizten Ofen ca. 50-55 Minuten backen (Stäbchenprobe).",
          "Kuchen in der Form ca. 15 Minuten abkühlen lassen, dann auf ein Kuchengitter stürzen.",
          "Vollständig auskühlen lassen und vor dem Servieren mit Puderzucker bestäuben."
        ]
      }
    ],
    tips: [
      "Die abgetropfte Flüssigkeit der Kirschen kann aufbewahrt und für eine Kirschsauce verwendet werden.",
      "Für eine besondere Note kann eine Prise Zimt zum Teig gegeben werden.",
      "Der Kuchen schmeckt am nächsten Tag noch besser und hält sich gut 3-4 Tage frisch."
    ]
  },
  {
    id: "provenzalischer-auflauf",
    title: "Provenzalischer Auflauf",
    description: "Mediterraner Gemüseauflauf mit Zucchini, Aubergine und Tomaten, verfeinert mit aromatischen Kräutern der Provence.",
    image: "https://images.unsplash.com/photo-1520217801739-8043f67b6f96?q=80&w=2029&auto=format&fit=crop",
    portionSize: "4 Personen",
    prepTime: "30 Min",
    cookTime: "45 Min",
    difficulty: "Normal",
    category: "Hauptgericht",
    tags: ["Vegetarisch", "Französisch", "Gemüse", "Auflauf", "Mediterran"],
    ingredients: [
      {
        items: [
          { name: "Zucchini", amount: "2" },
          { name: "Aubergine", amount: "1 große" },
          { name: "rote Paprikaschoten", amount: "2" },
          { name: "Zwiebeln", amount: "2" },
          { name: "Knoblauchzehen", amount: "3" },
          { name: "reife Tomaten", amount: "6" },
          { name: "Olivenöl", amount: "6 EL" },
          { name: "frischer Thymian", amount: "4 Zweige" },
          { name: "frisches Basilikum", amount: "1 Bund" },
          { name: "getrocknete Kräuter der Provence", amount: "2 TL" },
          { name: "Salz und Pfeffer", amount: "nach Bedarf" },
          { name: "Zucker", amount: "1 Prise" },
          { name: "Ziegenkäse oder Feta (optional)", amount: "150 g" },
          { name: "geriebener Parmesan", amount: "50 g" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Backofen auf 180 °C vorheizen.",
          "Zucchini waschen und in ca. 1 cm dicke Scheiben schneiden.",
          "Aubergine waschen und ebenfalls in Scheiben schneiden.",
          "Paprika waschen, entkernen und in Streifen schneiden.",
          "Zwiebeln und Knoblauch schälen. Zwiebeln in Halbringe, Knoblauch fein hacken.",
          "Tomaten waschen, Strunk entfernen und in Scheiben schneiden.",
          "Eine große Auflaufform mit etwas Olivenöl einfetten.",
          "2 EL Olivenöl in einer Pfanne erhitzen, Zwiebeln und Knoblauch darin glasig dünsten.",
          "Zucchini- und Auberginenscheiben portionsweise von beiden Seiten in der Pfanne mit etwas Öl anbraten, salzen und pfeffern.",
          "Paprikastreifen kurz mitbraten.",
          "In der Auflaufform abwechselnd Schichten aus Zucchini, Auberginen, Paprika und Tomaten einschichten.",
          "Zwischen den Schichten mit Salz, Pfeffer, gehacktem Thymian und Kräutern der Provence würzen.",
          "Alles mit 2 EL Olivenöl beträufeln.",
          "Im vorgeheizten Ofen etwa 30 Minuten backen.",
          "Falls gewünscht, Ziegenkäse oder Feta darüber bröckeln und mit Parmesan bestreuen.",
          "Weitere 10-15 Minuten backen, bis der Käse geschmolzen und leicht gebräunt ist.",
          "Frisch gehacktes Basilikum darüber streuen und servieren."
        ]
      }
    ],
    tips: [
      "Der Auflauf kann sowohl warm als auch kalt serviert werden.",
      "Als Beilage passt Baguette oder Reis.",
      "Für eine deftigere Variante können Schichten aus angebratenem Hackfleisch hinzugefügt werden."
    ]
  },
  {
    id: "hefe-blechkuchen",
    title: "Hefe-Blechkuchen",
    description: "Fluffiger Blechkuchen aus Hefeteig, wahlweise mit verschiedenen Obst-Toppings wie Pflaumen, Aprikosen oder Äpfeln.",
    image: "https://images.unsplash.com/photo-1596865249308-2472dc5807d7?q=80&w=1974&auto=format&fit=crop",
    portionSize: "1 Backblech",
    prepTime: "30 Min (zzgl. 1 Std Gehzeit)",
    cookTime: "30 Min",
    difficulty: "Normal",
    category: "Kuchen",
    tags: ["Hefeteig", "Blechkuchen", "Obst", "Klassiker", "Süß"],
    ingredients: [
      {
        group: "Für den Hefeteig",
        items: [
          { name: "Mehl", amount: "500 g" },
          { name: "frische Hefe", amount: "1 Würfel (42 g)" },
          { name: "lauwarme Milch", amount: "250 ml" },
          { name: "Zucker", amount: "80 g" },
          { name: "Salz", amount: "1/2 TL" },
          { name: "Butter, zimmertemperiert", amount: "100 g" },
          { name: "Ei", amount: "1" },
          { name: "abgeriebene Schale einer unbehandelten Zitrone", amount: "" }
        ]
      },
      {
        group: "Für den Belag (je nach Wahl)",
        items: [
          { name: "Pflaumen oder Zwetschgen, entsteint und geviertelt", amount: "1,5 kg" },
          { name: "ODER: Aprikosen, entsteint und halbiert", amount: "1,5 kg" },
          { name: "ODER: Äpfel, geschält, entkernt und in Spalten geschnitten", amount: "1,5 kg" },
          { name: "Zucker zum Bestreuen", amount: "3-4 EL" },
          { name: "Zimt", amount: "1-2 TL (nach Belieben)" },
          { name: "Butter für die Form", amount: "zum Einfetten" },
          { name: "Semmelbrösel", amount: "2-3 EL" }
        ]
      },
      {
        group: "Für die Streusel (optional)",
        items: [
          { name: "Mehl", amount: "150 g" },
          { name: "Butter, kalt", amount: "100 g" },
          { name: "Zucker", amount: "100 g" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Zimt", amount: "1/2 TL" },
          { name: "Salz", amount: "1 Prise" }
        ]
      }
    ],
    steps: [
      {
        group: "Hefeteig zubereiten",
        items: [
          "Hefe in lauwarmer Milch auflösen und mit 1 TL Zucker verrühren.",
          "Mehl, restlichen Zucker und Salz in eine Schüssel geben und mischen.",
          "Hefemilch, weiche Butter, Ei und Zitronenschale dazugeben und zu einem glatten, elastischen Teig verkneten (ca. 10 Min).",
          "Teig zu einer Kugel formen, mit einem feuchten Tuch abdecken und an einem warmen Ort ca. 1 Stunde gehen lassen, bis er sich verdoppelt hat."
        ]
      },
      {
        group: "Kuchen vorbereiten und backen",
        items: [
          "Backofen auf 180 °C vorheizen. Ein Backblech (ca. 30 x 40 cm) fetten.",
          "Wenn Streusel gewünscht sind: Mehl, kalte Butter in Stücken, Zucker, Vanillezucker, Zimt und Salz mit den Fingern zu Streuseln verreiben.",
          "Teig nochmals kurz durchkneten und auf dem gefetteten Backblech ausrollen oder mit den Händen gleichmäßig ausdrücken.",
          "Mit einer Gabel mehrmals einstechen und mit Semmelbröseln bestreuen.",
          "Gewähltes Obst darauf verteilen, mit Zucker und ggf. Zimt bestreuen.",
          "Optional Streusel darüber verteilen.",
          "Im vorgeheizten Ofen ca. 30 Minuten goldbraun backen.",
          "Aus dem Ofen nehmen und auf dem Blech abkühlen lassen."
        ]
      }
    ],
    tips: [
      "Im Sommer schmeckt der Kuchen auch hervorragend mit Beeren oder Sauerkirschen.",
      "Vor dem Servieren mit Puderzucker bestäuben oder mit einem Guss aus Puderzucker und Zitronensaft überziehen.",
      "Der Kuchen schmeckt am besten frisch, hält sich aber gut abgedeckt 2-3 Tage."
    ]
  },
  {
    id: "nussecken",
    title: "Nussecken",
    description: "Köstliches Gebäck mit knusprigem Mürbeteigboden, süßer Nussmasse und Schokoladenglasur.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1972&auto=format&fit=crop",
    portionSize: "ca. 20-24 Stück",
    prepTime: "40 Min",
    cookTime: "30 Min",
    difficulty: "Mittel",
    category: "Gebäck",
    tags: ["Nüsse", "Schokolade", "Gebäck", "Weihnachten", "Klassiker"],
    ingredients: [
      {
        group: "Für den Mürbeteig",
        items: [
          { name: "Mehl", amount: "300 g" },
          { name: "Zucker", amount: "100 g" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Salz", amount: "1 Prise" },
          { name: "kalte Butter", amount: "150 g" },
          { name: "Ei", amount: "1" }
        ]
      },
      {
        group: "Für die Nussmasse",
        items: [
          { name: "Butter", amount: "200 g" },
          { name: "Zucker", amount: "200 g" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Honig", amount: "2 EL" },
          { name: "gemahlene Haselnüsse", amount: "200 g" },
          { name: "gehackte Haselnüsse", amount: "200 g" },
          { name: "Sahne", amount: "4 EL" },
          { name: "Zimt", amount: "1/2 TL" },
          { name: "Salz", amount: "1 Prise" }
        ]
      },
      {
        group: "Für die Glasur",
        items: [
          { name: "Zartbitterkuvertüre", amount: "200 g" },
          { name: "Butter", amount: "20 g" }
        ]
      }
    ],
    steps: [
      {
        group: "Mürbeteig zubereiten",
        items: [
          "Backofen auf 180 °C vorheizen. Ein Backblech (ca. 30 x 40 cm) mit Backpapier auslegen.",
          "Für den Mürbeteig Mehl, Zucker, Vanillezucker und Salz in einer Schüssel mischen.",
          "Kalte Butter in Stücken dazugeben und mit den Fingerspitzen zu Streuseln verreiben.",
          "Ei hinzufügen und alles schnell zu einem glatten Teig verkneten.",
          "Teig auf dem mit Backpapier ausgelegten Blech gleichmäßig ausrollen oder drücken.",
          "Mit einer Gabel mehrfach einstechen und 10 Minuten im vorgeheizten Ofen vorbacken."
        ]
      },
      {
        group: "Nussmasse zubereiten",
        items: [
          "Für die Nussmasse Butter, Zucker, Vanillezucker und Honig in einem Topf schmelzen lassen.",
          "Gemahlene und gehackte Haselnüsse, Sahne, Zimt und Salz unterrühren und kurz aufkochen lassen.",
          "Die heiße Nussmasse gleichmäßig auf dem vorgebackenen Mürbeteig verteilen und glatt streichen.",
          "Kuchen weitere 15-20 Minuten backen, bis die Nussmasse goldbraun ist.",
          "Aus dem Ofen nehmen und noch warm in Rauten oder Dreiecke schneiden. Auf einem Kuchengitter vollständig abkühlen lassen."
        ]
      },
      {
        group: "Glasur zubereiten und fertigstellen",
        items: [
          "Kuvertüre grob hacken und mit Butter im Wasserbad schmelzen.",
          "Die abgekühlten Nussecken mit den Unterseiten in die Schokolade tauchen und die unteren Ecken dippen.",
          "Auf einem mit Backpapier ausgelegten Blech oder Gitter trocknen lassen, bis die Schokolade fest ist."
        ]
      }
    ],
    tips: [
      "Die Nussecken halten sich in einer luftdichten Dose bis zu zwei Wochen.",
      "Für eine Variante können statt Haselnüssen auch Mandeln oder Walnüsse verwendet werden.",
      "Die Nussecken eignen sich hervorragend zum Einfrieren und halten sich so monatelang."
    ]
  },
  {
    id: "osterlamm-kuchen",
    title: "Osterlamm-Kuchen",
    description: "Traditioneller Rührkuchen in Lammform für das Osterfest, mit feiner Zitronennote und einer Puderzuckerglasur.",
    image: "https://images.unsplash.com/photo-1598019340760-c2d2336db0b4?q=80&w=1888&auto=format&fit=crop",
    portionSize: "1 Lamm-Backform (ca. 750 ml)",
    prepTime: "20 Min",
    cookTime: "45 Min",
    difficulty: "Leicht",
    category: "Kuchen",
    tags: ["Ostern", "Lamm", "Rührkuchen", "Tradition", "Feiertagsgebäck"],
    ingredients: [
      {
        items: [
          { name: "weiche Butter", amount: "125 g" },
          { name: "Zucker", amount: "125 g" },
          { name: "Vanillezucker", amount: "1 Päckchen" },
          { name: "Zitrone, unbehandelt (Abrieb)", amount: "1" },
          { name: "Eier", amount: "3" },
          { name: "Mehl", amount: "175 g" },
          { name: "Speisestärke", amount: "25 g" },
          { name: "Backpulver", amount: "1 TL" },
          { name: "Salz", amount: "1 Prise" },
          { name: "Milch", amount: "2-3 EL" },
          { name: "Butter und Mehl für die Form", amount: "nach Bedarf" },
          { name: "Puderzucker zum Bestäuben", amount: "nach Bedarf" },
          { name: "bunte Zuckerstreusel (optional)", amount: "nach Bedarf" },
          { name: "schwarze Rosinen für die Augen", amount: "2 Stück" }
        ]
      }
    ],
    steps: [
      {
        items: [
          "Backofen auf 180 °C vorheizen. Eine Lamm-Backform gründlich mit Butter einfetten und mit Mehl ausstäuben.",
          "Butter, Zucker, Vanillezucker und Zitronenabrieb in einer Schüssel mit dem Mixer cremig schlagen.",
          "Eier einzeln unterrühren, jeweils ca. 30 Sekunden schlagen.",
          "Mehl, Speisestärke, Backpulver und Salz mischen und abwechselnd mit der Milch unter die Butter-Eier-Masse rühren.",
          "Teig in die vorbereitete Lammform füllen. Die Form dabei nur zu etwa 3/4 füllen, da der Teig aufgeht.",
          "Im vorgeheizten Ofen ca. 40-45 Minuten backen (Stäbchenprobe).",
          "Kuchen in der Form ca. 15 Minuten abkühlen lassen, dann vorsichtig auf ein Kuchengitter stürzen.",
          "Vollständig auskühlen lassen und vor dem Servieren großzügig mit Puderzucker bestäuben.",
          "Nach Wunsch mit bunten Zuckerstreuseln verzieren und zwei Rosinen als Augen einsetzen.",
          "Auf einer schönen Platte mit frischen Zweigen und Ostereiern dekoriert servieren."
        ]
      }
    ],
    tips: [
      "Damit das Osterlamm beim Stürzen nicht zerbricht, die Form vor dem Einfetten für ca. 30 Minuten in den Gefrierschrank stellen.",
      "Der Kuchen kann auch mit einer Glasur aus Puderzucker und Zitronensaft überzogen werden.",
      "Für ein besonderes Aroma können gehackte Mandeln oder ein Schuss Amaretto zum Teig gegeben werden."
    ]
  },
  {
    id: "poulardenbrust-salat",
    title: "Poulardenbrust mit Salat und mariniertem Lauch",
    description: "Zart gebratene Poulardenbrust auf knackigem Salat mit mariniertem Lauch und Kräutervinaigrette.",
    image: "https://images.unsplash.com/photo-1551887248-5b641acf9913?q=80&w=2070&auto=format&fit=crop",
    portionSize: "4 Personen",
    prepTime: "30 Min (zzgl. 1 Std Marinierzeit)",
    cookTime: "20 Min",
    difficulty: "Mittel",
    category: "Hauptgericht",
    tags: ["Geflügel", "Salat", "Lauch", "Gourmet", "Leicht"],
    ingredients: [
      {
        group: "Für die Poularde",
        items: [
          { name: "Poulardenbrüste", amount: "4 (je ca. 150 g)" },
          { name: "Butter", amount: "30 g" },
          { name: "Olivenöl", amount: "2 EL" },
          { name: "Knoblauchzehe", amount: "1" },
          { name: "frischer Thymian", amount: "2 Zweige" },
          { name: "Salz und Pfeffer", amount: "nach Bedarf" }
        ]
      },
      {
        group: "Für den marinierten Lauch",
        items: [
          { name: "junge Lauchstangen", amount: "4" },
          { name: "Schalotten", amount: "2" },
          { name: "Olivenöl", amount: "4 EL" },
          { name: "weißer Balsamico-Essig", amount: "2 EL" },
          { name: "Dijon-Senf", amount: "1 TL" },
          { name: "Honig", amount: "1 TL" },
          { name: "frische Kräuter (Petersilie, Schnittlauch)", amount: "2 EL, gehackt" },
          { name: "Salz und Pfeffer", amount: "nach Bedarf" }
        ]
      },
      {
        group: "Für den Salat",
        items: [
          { name: "gemischte Blattsalate (Rucola, Frisée, Radicchio)", amount: "200 g" },
          { name: "Cherry-Tomaten", amount: "250 g" },
          { name: "Gurke", amount: "1/2" },
          { name: "Olivenöl", amount: "3 EL" },
          { name: "Zitronensaft", amount: "2 EL" },
          { name: "Salz und Pfeffer", amount: "nach Bedarf" }
        ]
      }
    ],
    steps: [
      {
        group: "Lauch marinieren",
        items: [
          "Lauch putzen, waschen und in ca. 10 cm lange Stücke schneiden. Längs halbieren.",
          "Schalotten schälen und fein würfeln.",
          "In einem Topf Salzwasser zum Kochen bringen, Lauch ca. 5 Minuten blanchieren, bis er weich, aber noch biss-fest ist.",
          "In Eiswasser abschrecken, gründlich abtropfen lassen.",
          "Für die Marinade Olivenöl, Essig, Senf und Honig verrühren. Mit Salz und Pfeffer würzen.",
          "Gehackte Kräuter und Schalottenwürfel unterrühren.",
          "Lauch in eine flache Schale legen und mit der Marinade übergießen. Mindestens 1 Stunde durchziehen lassen."
        ]
      },
      {
        group: "Poularde zubereiten",
        items: [
          "Poulardenbrüste trocken tupfen, mit Salz und Pfeffer würzen.",
          "In einer Pfanne Butter und Olivenöl erhitzen. Knoblauchzehe leicht angedrückt und Thymianzweige hinzufügen.",
          "Poulardenbrüste mit der Hautseite nach unten in die Pfanne legen und bei mittlerer Hitze ca. 5 Minuten goldbraun braten.",
          "Wenden und weitere 5-8 Minuten braten, bis das Fleisch gar, aber noch saftig ist.",
          "Aus der Pfanne nehmen, in Alufolie wickeln und 5 Minuten ruhen lassen."
        ]
      },
      {
        group: "Salat zubereiten und anrichten",
        items: [
          "Salat waschen, trocken schleudern und in mundgerechte Stücke zupfen.",
          "Cherry-Tomaten halbieren, Gurke in dünne Scheiben schneiden.",
          "Olivenöl und Zitronensaft verrühren, mit Salz und Pfeffer abschmecken.",
          "Salat mit dem Dressing marinieren und auf Tellern anrichten.",
          "Marinierten Lauch abtropfen lassen und auf dem Salat verteilen.",
          "Poulardenbrüste in Scheiben schneiden und fächerförmig auf dem Salat anrichten.",
          "Mit etwas von der Lauchmarinade beträufeln und sofort servieren."
        ]
      }
    ],
    tips: [
      "Für eine vollere Mahlzeit können gebratene Kartoffeln oder Baguette dazu serviert werden.",
      "Die Poularde lässt sich auch durch Hähnchenbrust ersetzen, wenn keine Poularde erhältlich ist.",
      "Der marinierte Lauch kann bis zu 24 Stunden im Voraus zubereitet werden und gewinnt an Geschmack."
    ]
  },
  {
    id: "rinderfilet-schmorzwiebelsauce",
    title: "Rinderfilet mit Schmorzwiebelsauce und Pfefferkruste auf Paprikawürfel",
    description: "Zartes Rinderfilet mit würziger Pfefferkruste und karamellisierten Schmorzwiebeln auf einem Bett aus bunten Paprikawürfeln.",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=2073&auto=format&fit=crop",
    portionSize: "4 Personen",
    prepTime: "40 Min",
    cookTime: "25 Min",
    difficulty: "Anspruchsvoll",
    category: "Hauptgericht",
    tags: ["Rindfleisch", "Filet", "Gourmet", "Pfefferkruste", "Festessen"],
    ingredients: [
      {
        group: "Für das Rinderfilet",
        items: [
          { name: "Rinderfilet (am Stück)", amount: "800 g" },
          { name: "schwarze Pfefferkörner", amount: "2 EL" },
          { name: "grüne Pfefferkörner (eingelegt)", amount: "1 EL" },
          { name: "rosa Beeren", amount: "1 EL" },
          { name: "grobes Meersalz", amount: "1 EL" },
          { name: "Butter", amount: "30 g" },
          { name: "Olivenöl", amount: "2 EL" },
          { name: "frischer Thymian", amount: "4 Zweige" },
          { name: "Knoblauchzehen", amount: "2" }
        ]
      },
      {
        group: "Für die Schmorzwiebelsauce",
        items: [
          { name: "rote Zwiebeln", amount: "4 große" },
          { name: "Butter", amount: "30 g" },
          { name: "brauner Zucker", amount: "2 EL" },
          { name: "Balsamico-Essig", amount: "3 EL" },
          { name: "Rotwein", amount: "200 ml" },
          { name: "Rinderfond", amount: "300 ml" },
          { name: "Lorbeerblatt", amount: "1" },
          { name: "Thymianzweig", amount: "1" },
          { name: "kalte Butter", amount: "20 g" },
          { name: "Salz und Pfeffer", amount: "nach Bedarf" }
        ]
      },
      {
        group: "Für die Paprikawürfel",
        items: [
          { name: "rote Paprika", amount: "2" },
          { name: "gelbe Paprika", amount: "1" },
          { name: "grüne Paprika", amount: "1" },
          { name: "Olivenöl", amount: "3 EL" },
          { name: "Knoblauchzehe", amount: "1" },
          { name: "frischer Rosmarin", amount: "1 Zweig" },
          { name: "Salz und Pfeffer", amount: "nach Bedarf" }
        ]
      }
    ],
    steps: [
      {
        group: "Pfefferkruste vorbereiten",
        items: [
          "Schwarze Pfefferkörner, grünen Pfeffer und rosa Beeren in einem Mörser grob zerdrücken oder mit einem schweren Messer zerdrücken.",
          "Mit dem groben Meersalz mischen und auf einen Teller geben."
        ]
      },
      {
        group: "Schmorzwiebeln zubereiten",
        items: [
          "Zwiebeln schälen und in dünne Ringe schneiden.",
          "In einem Topf Butter schmelzen, Zwiebeln dazugeben und bei mittlerer Hitze ca. 10 Minuten weich dünsten.",
          "Braunen Zucker darüber streuen und unter Rühren karamellisieren lassen.",
          "Mit Balsamico-Essig ablöschen und kurz einkochen lassen.",
          "Rotwein und Rinderfond dazugießen, Lorbeerblatt und Thymianzweig hinzufügen.",
          "Bei mittlerer Hitze ca. 20 Minuten einkochen lassen, bis die Sauce leicht sirupartig wird.",
          "Lorbeerblatt und Thymian entfernen, mit Salz und Pfeffer abschmecken.",
          "Kurz vor dem Servieren die kalte Butter in Stücken unterrühren, um der Sauce Glanz und Bindung zu geben."
        ]
      },
      {
        group: "Paprikawürfel zubereiten",
        items: [
          "Paprikaschoten waschen, entkernen und in kleine, gleichmäßige Würfel schneiden.",
          "In einer Pfanne Olivenöl erhitzen, Knoblauchzehe angedrückt hinzufügen.",
          "Paprikawürfel und Rosmarinzweig dazugeben, bei mittlerer Hitze ca. 5-7 Minuten braten.",
          "Mit Salz und Pfeffer würzen, Knoblauch und Rosmarin entfernen."
        ]
      },
      {
        group: "Rinderfilet zubereiten und servieren",
        items: [
          "Rinderfilet trocken tupfen und rundherum in der Pfeffermischung wälzen, leicht andrücken.",
          "In einer Pfanne Butter und Olivenöl erhitzen. Thymian und angedrückte Knoblauchzehen hinzufügen.",
          "Filet von allen Seiten kräftig anbraten (ca. 3-4 Minuten pro Seite für medium rare).",
          "Filet aus der Pfanne nehmen, in Alufolie wickeln und 10 Minuten ruhen lassen.",
          "Paprikawürfel auf vorgewärmten Tellern verteilen.",
          "Filet in gleichmäßige Scheiben schneiden und auf den Paprikawürfeln anrichten.",
          "Schmorzwiebelsauce darüber träufeln und servieren."
        ]
      }
    ],
    tips: [
      "Die Garzeit des Fleisches variiert je nach gewünschtem Garpunkt: ca. 4 Minuten pro Seite für medium, 5 Minuten für well done.",
      "Die Sauce kann bis zu einem Tag im Voraus zubereitet und vor dem Servieren erwärmt werden.",
      "Als Beilage eignen sich Kartoffelgratin oder Süßkartoffelpüree."
    ]
  }
];

// Export recipes for use in other components
export default recipes;
