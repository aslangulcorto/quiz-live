/* =====================================================================
   LISTE DES QUIZ
   Chaque quiz apparaît sur l'écran d'accueil de l'animateur.

   Quiz SANS vidéo : juste des questions.
   Quiz AVEC vidéo YouTube :
     youtube : le lien de la vidéo
     start   : (facultatif) seconde où démarrer la vidéo
     pour chaque question :
       t      : seconde où la vidéo se met en pause pour poser la question
       resume : (facultatif) seconde où reprendre la vidéo après la question
                (par défaut elle reprend là où elle s'était arrêtée,
                 ce qui montre souvent la réponse de la vidéo elle-même)
   Pour toutes les questions :
     q       : la question
     choices : 2 à 4 réponses
     answer  : numéro de la bonne réponse (0 = la 1re, 1 = la 2e, …)
     limit   : (facultatif) secondes pour répondre, 20 par défaut
   Option du quiz : boardEvery = afficher le classement toutes les N questions
   ===================================================================== */
window.QUIZZES = [

{
 "title": "Blind test années 2010 #02",
 "description": "50 extraits de hits des années 2010, tous styles (Quiz du Chauve à Lunettes). La vidéo s'arrête à la fin de chaque extrait.",
 "youtube": "https://www.youtube.com/watch?v=VxJPwrDy9Dk",
 "start": 0,
 "limit": 15,
 "boardEvery": 5,
 "questions": [
  {
   "t": 33.2,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Petit Biscuit – Sunset Lover",
    "Of Monsters and Men – Little Talks",
    "Jonas Blue – Fast Car",
    "Bruno Mars – Treasure"
   ],
   "answer": 3
  },
  {
   "t": 58.6,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Ellie Goulding – Love Me Like You Do",
    "Kyo – Le Graal",
    "GIMS – Sapés comme jamais",
    "Avenged Sevenfold – Hail to the King"
   ],
   "answer": 2
  },
  {
   "t": 84.0,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Christophe Maé – Il est où le bonheur",
    "The Lumineers – Ho Hey",
    "Petit Biscuit – Sunset Lover",
    "Avenged Sevenfold – Hail to the King"
   ],
   "answer": 1
  },
  {
   "t": 109.5,
   "q": "Quel est ce morceau ?",
   "choices": [
    "The Lumineers – Ho Hey",
    "Stromae – Papaoutai",
    "Vianney – Je m'en vais",
    "Petit Biscuit – Sunset Lover"
   ],
   "answer": 3
  },
  {
   "t": 134.9,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Indila – Tourner dans le vide",
    "Ariana Grande – Break Free",
    "Portugal. The Man – Feel It Still",
    "ZAZ – Je veux"
   ],
   "answer": 0
  },
  {
   "t": 160.3,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Maroon 5 – Moves Like Jagger",
    "Katy Perry – Teenage Dream",
    "Brigitte – Battez-vous",
    "Jack Ü – Where Are Ü Now"
   ],
   "answer": 0
  },
  {
   "t": 185.7,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Claudio Capéo – Un homme debout",
    "Eminem ft. Rihanna – Love the Way You Lie",
    "Soprano – Cosmo",
    "Youssoupha ft. Ayna – On se connaît"
   ],
   "answer": 3
  },
  {
   "t": 211.1,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Soprano – Cosmo",
    "Élisa Tovati – Il nous faut",
    "Fall Out Boy – Centuries",
    "Galantis – Runaway (U & I)"
   ],
   "answer": 2
  },
  {
   "t": 236.6,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Soprano – Cosmo",
    "Jack Ü – Where Are Ü Now",
    "Mac Miller – Donald Trump",
    "Kygo – Firestone"
   ],
   "answer": 3
  },
  {
   "t": 262.0,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Babymetal – Megitsune",
    "Indila – Tourner dans le vide",
    "Élisa Tovati – Il nous faut",
    "Mr. Probz – Waves"
   ],
   "answer": 2
  },
  {
   "t": 287.4,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Soprano – Cosmo",
    "Portugal. The Man – Feel It Still",
    "Lady Gaga – Born This Way",
    "Camila Cabello – Havana"
   ],
   "answer": 2
  },
  {
   "t": 312.8,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Amir – On dirait",
    "Cee Lo Green – F*ck You",
    "Jack Ü – Where Are Ü Now",
    "Katy Perry – Teenage Dream"
   ],
   "answer": 1
  },
  {
   "t": 338.2,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Ariana Grande – Break Free",
    "Élisa Tovati – Il nous faut",
    "Imagine Dragons – It's Time",
    "Of Monsters and Men – Little Talks"
   ],
   "answer": 2
  },
  {
   "t": 363.7,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Claudio Capéo – Un homme debout",
    "Galantis – Runaway (U & I)",
    "Fall Out Boy – Centuries",
    "Youssoupha ft. Ayna – On se connaît"
   ],
   "answer": 1
  },
  {
   "t": 389.1,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Jonas Blue – Fast Car",
    "Kyo – Le Graal",
    "Claudio Capéo – Un homme debout",
    "Portugal. The Man – Feel It Still"
   ],
   "answer": 1
  },
  {
   "t": 414.5,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Christophe Maé – Il est où le bonheur",
    "Camila Cabello – Havana",
    "Élisa Tovati – Il nous faut",
    "Eminem ft. Rihanna – Love the Way You Lie"
   ],
   "answer": 1
  },
  {
   "t": 439.9,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Lady Gaga – Born This Way",
    "Soprano – Cosmo",
    "Ellie Goulding – Love Me Like You Do",
    "Katy Perry – Teenage Dream"
   ],
   "answer": 1
  },
  {
   "t": 465.3,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Korn ft. Skrillex – Get Up!",
    "Jonas Blue – Fast Car",
    "Mike Posner – I Took a Pill in Ibiza",
    "Mac Miller – Donald Trump"
   ],
   "answer": 0
  },
  {
   "t": 490.8,
   "q": "Quel est ce morceau ?",
   "choices": [
    "The Chainsmokers – Something Just Like This",
    "Camila Cabello – Havana",
    "Mac Miller – Donald Trump",
    "Royal Blood – Figure It Out"
   ],
   "answer": 0
  },
  {
   "t": 516.2,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Lady Gaga – Born This Way",
    "Kanye West – Black Skinhead",
    "Mr. Probz – Waves",
    "ZAZ – Je veux"
   ],
   "answer": 3
  },
  {
   "t": 541.6,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Vianney – Je m'en vais",
    "Christophe Maé – Il est où le bonheur",
    "Korn ft. Skrillex – Get Up!",
    "Katy Perry – Teenage Dream"
   ],
   "answer": 3
  },
  {
   "t": 567.0,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Avenged Sevenfold – Hail to the King",
    "Indila – Tourner dans le vide",
    "Lady Gaga – Born This Way",
    "Mac Miller – Donald Trump"
   ],
   "answer": 3
  },
  {
   "t": 592.4,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Portugal. The Man – Feel It Still",
    "Lana Del Rey – Born to Die",
    "Royal Blood – Figure It Out",
    "Mr. Probz – Waves"
   ],
   "answer": 2
  },
  {
   "t": 617.9,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Lady Gaga – Born This Way",
    "George Ezra – Budapest",
    "Avenged Sevenfold – Hail to the King",
    "Mike Posner – I Took a Pill in Ibiza"
   ],
   "answer": 3
  },
  {
   "t": 643.3,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Claudio Capéo – Un homme debout",
    "Bruno Mars – Treasure",
    "Stromae – Papaoutai",
    "The Lumineers – Ho Hey"
   ],
   "answer": 2
  },
  {
   "t": 668.7,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Youssoupha ft. Ayna – On se connaît",
    "Maroon 5 – Moves Like Jagger",
    "Élisa Tovati – Il nous faut",
    "Ariana Grande – Break Free"
   ],
   "answer": 3
  },
  {
   "t": 694.1,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Ellie Goulding – Love Me Like You Do",
    "Axwell Λ Ingrosso – More Than You Know",
    "Jonas Blue – Fast Car",
    "Kanye West – Black Skinhead"
   ],
   "answer": 3
  },
  {
   "t": 719.5,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Ellie Goulding – Love Me Like You Do",
    "George Ezra – Budapest",
    "Portugal. The Man – Feel It Still",
    "Jonas Blue – Fast Car"
   ],
   "answer": 2
  },
  {
   "t": 745.0,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Camila Cabello – Havana",
    "Jonas Blue – Fast Car",
    "Katy Perry – Teenage Dream",
    "Vianney – Je m'en vais"
   ],
   "answer": 1
  },
  {
   "t": 770.4,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Mr. Probz – Waves",
    "Of Monsters and Men – Little Talks",
    "Babymetal – Megitsune",
    "Claudio Capéo – Un homme debout"
   ],
   "answer": 3
  },
  {
   "t": 795.8,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Portugal. The Man – Feel It Still",
    "Ellie Goulding – Love Me Like You Do",
    "The Chainsmokers – Something Just Like This",
    "Camila Cabello – Havana"
   ],
   "answer": 1
  },
  {
   "t": 821.2,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Ridsa – Là c'est die",
    "Wiz Khalifa – Black and Yellow",
    "Amir – On dirait",
    "Youssoupha ft. Ayna – On se connaît"
   ],
   "answer": 0
  },
  {
   "t": 846.6,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Amir – On dirait",
    "Mike Posner – I Took a Pill in Ibiza",
    "Élisa Tovati – Il nous faut",
    "Avenged Sevenfold – Hail to the King"
   ],
   "answer": 3
  },
  {
   "t": 872.1,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Mr. Probz – Waves",
    "Cee Lo Green – F*ck You",
    "Axwell Λ Ingrosso – More Than You Know",
    "Maroon 5 – Moves Like Jagger"
   ],
   "answer": 2
  },
  {
   "t": 897.5,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Youssoupha ft. Ayna – On se connaît",
    "Brigitte – Battez-vous",
    "ZAZ – Je veux",
    "Christophe Maé – Il est où le bonheur"
   ],
   "answer": 3
  },
  {
   "t": 922.9,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Jonas Blue – Fast Car",
    "Vianney – Je m'en vais",
    "Lana Del Rey – Born to Die",
    "Jack Ü – Where Are Ü Now"
   ],
   "answer": 2
  },
  {
   "t": 948.3,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Fall Out Boy – Centuries",
    "Bruno Mars – Treasure",
    "Wiz Khalifa – Black and Yellow",
    "Team BS – Team BS"
   ],
   "answer": 2
  },
  {
   "t": 973.7,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Imagine Dragons – It's Time",
    "Of Monsters and Men – Little Talks",
    "Babymetal – Megitsune",
    "Stromae – Papaoutai"
   ],
   "answer": 1
  },
  {
   "t": 999.2,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Petit Biscuit – Sunset Lover",
    "Mr. Probz – Waves",
    "Royal Blood – Figure It Out",
    "Soprano – Cosmo"
   ],
   "answer": 1
  },
  {
   "t": 1024.6,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Robin Schulz – Sun Goes Down",
    "Amir – On dirait",
    "Imagine Dragons – It's Time",
    "Team BS – Team BS"
   ],
   "answer": 1
  },
  {
   "t": 1050.0,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Avenged Sevenfold – Hail to the King",
    "Soprano – Cosmo",
    "Ridsa – Là c'est die",
    "Eminem ft. Rihanna – Love the Way You Lie"
   ],
   "answer": 3
  },
  {
   "t": 1075.4,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Royal Blood – Figure It Out",
    "Korn ft. Skrillex – Get Up!",
    "Bring Me the Horizon – Can You Feel My Heart",
    "Team BS – Team BS"
   ],
   "answer": 3
  },
  {
   "t": 1100.8,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Of Monsters and Men – Little Talks",
    "Ellie Goulding – Love Me Like You Do",
    "Babymetal – Megitsune",
    "Maroon 5 – Moves Like Jagger"
   ],
   "answer": 2
  },
  {
   "t": 1126.3,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Jack Ü – Where Are Ü Now",
    "Mr. Probz – Waves",
    "Kanye West – Black Skinhead",
    "Lady Gaga – Born This Way"
   ],
   "answer": 0
  },
  {
   "t": 1151.7,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Brigitte – Battez-vous",
    "Of Monsters and Men – Little Talks",
    "GIMS – Sapés comme jamais",
    "Katy Perry – Teenage Dream"
   ],
   "answer": 0
  },
  {
   "t": 1177.1,
   "q": "Quel est ce morceau ?",
   "choices": [
    "George Ezra – Budapest",
    "The Chainsmokers – Something Just Like This",
    "Amir – On dirait",
    "Mike Posner – I Took a Pill in Ibiza"
   ],
   "answer": 0
  },
  {
   "t": 1202.5,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Youssoupha ft. Ayna – On se connaît",
    "Lana Del Rey – Born to Die",
    "Travis Scott – Sicko Mode",
    "ZAZ – Je veux"
   ],
   "answer": 2
  },
  {
   "t": 1227.9,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Imagine Dragons – It's Time",
    "Kanye West – Black Skinhead",
    "Wiz Khalifa – Black and Yellow",
    "Bring Me the Horizon – Can You Feel My Heart"
   ],
   "answer": 3
  },
  {
   "t": 1253.4,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Ariana Grande – Break Free",
    "Vianney – Je m'en vais",
    "Mac Miller – Donald Trump",
    "Imagine Dragons – It's Time"
   ],
   "answer": 1
  },
  {
   "t": 1278.8,
   "q": "Quel est ce morceau ?",
   "choices": [
    "Brigitte – Battez-vous",
    "Babymetal – Megitsune",
    "Robin Schulz – Sun Goes Down",
    "Petit Biscuit – Sunset Lover"
   ],
   "answer": 2
  }
 ]
},

{
 "title": "Culture générale #05",
 "description": "60 questions variées : drapeaux, lieux, livres, pochettes, sculptures, rébus… (Quiz du Chauve à Lunettes).",
 "youtube": "https://www.youtube.com/watch?v=UdPMv4i7SB8",
 "start": 0,
 "limit": 15,
 "boardEvery": 5,
 "questions": [
  {
   "t": 36,
   "q": "Quel savant grec aurait crié « Eurêka ! » dans son bain ?",
   "choices": [
    "Archimède",
    "Pythagore",
    "Euclide",
    "Thalès"
   ],
   "answer": 0
  },
  {
   "t": 54,
   "q": "De quel pays est ce drapeau ?",
   "choices": [
    "Finlande",
    "Uruguay",
    "Israël",
    "Grèce"
   ],
   "answer": 3
  },
  {
   "t": 70,
   "q": "Quel est ce lieu ?",
   "choices": [
    "Phi Phi Islands (Thaïlande)",
    "Bora-Bora (Polynésie)",
    "Fjords de Norvège",
    "Baie d'Hạ Long (Vietnam)"
   ],
   "answer": 3
  },
  {
   "t": 88,
   "q": "Qui a écrit « Les Malheurs de Sophie » ?",
   "choices": [
    "Jules Verne",
    "Comtesse de Ségur",
    "George Sand",
    "Victor Hugo"
   ],
   "answer": 1
  },
  {
   "t": 106,
   "q": "Tim Bergling, c'est le vrai nom de… ?",
   "choices": [
    "David Guetta",
    "Avicii",
    "Kygo",
    "Martin Garrix"
   ],
   "answer": 1
  },
  {
   "t": 123,
   "q": "Quel groupe a sorti cette pochette ?",
   "choices": [
    "The Rolling Stones",
    "Led Zeppelin",
    "Pink Floyd",
    "Queen"
   ],
   "answer": 2
  },
  {
   "t": 144,
   "q": "Que signifient les lettres BN (les biscuits) ?",
   "choices": [
    "Biscuits Normands",
    "Biscuiterie Nantaise",
    "Bonne Nuit",
    "Beurre Nature"
   ],
   "answer": 1
  },
  {
   "t": 162,
   "q": "Quelle est la capitale de l'Autriche ?",
   "choices": [
    "Salzbourg",
    "Berne",
    "Vienne",
    "Budapest"
   ],
   "answer": 2
  },
  {
   "t": 182,
   "q": "Qu'étudie un entomologiste ?",
   "choices": [
    "Les insectes",
    "Les champignons",
    "Les poissons",
    "Les oiseaux"
   ],
   "answer": 0
  },
  {
   "t": 200,
   "q": "Quelle est cette sculpture ?",
   "choices": [
    "Le Baiser (Rodin)",
    "Le David (Michel-Ange)",
    "Le Penseur (Rodin)",
    "Le Discobole"
   ],
   "answer": 2
  },
  {
   "t": 217,
   "q": "Qui est-ce ?",
   "choices": [
    "Louis XIV",
    "Clovis",
    "Napoléon",
    "Charlemagne"
   ],
   "answer": 3
  },
  {
   "t": 240,
   "q": "Rébus : quel est ce lieu ?",
   "choices": [
    "Petra",
    "Angkor",
    "Machu Picchu",
    "Stonehenge"
   ],
   "answer": 2
  },
  {
   "t": 265,
   "q": "De quelle couleur est le billet de 200 € ?",
   "choices": [
    "Vert",
    "Bleu",
    "Jaune",
    "Violet"
   ],
   "answer": 2
  },
  {
   "t": 283,
   "q": "De quel pays est ce drapeau ?",
   "choices": [
    "Népal",
    "Cambodge",
    "Laos",
    "Thaïlande"
   ],
   "answer": 1
  },
  {
   "t": 299,
   "q": "Quel est ce lieu ?",
   "choices": [
    "Place Venceslas (Prague)",
    "Place Rouge (Moscou)",
    "Place Saint-Pierre (Rome)",
    "Place Tian'anmen (Pékin)"
   ],
   "answer": 1
  },
  {
   "t": 318,
   "q": "Qui a écrit « Jurassic Park » ?",
   "choices": [
    "Dan Brown",
    "Michael Crichton",
    "Stephen King",
    "Steven Spielberg"
   ],
   "answer": 1
  },
  {
   "t": 337,
   "q": "Jean-Baptiste Poquelin, c'est le vrai nom de… ?",
   "choices": [
    "Racine",
    "Molière",
    "La Fontaine",
    "Voltaire"
   ],
   "answer": 1
  },
  {
   "t": 355,
   "q": "Quel groupe a sorti cette pochette ?",
   "choices": [
    "Oasis",
    "The Beatles",
    "The Beach Boys",
    "The Doors"
   ],
   "answer": 1
  },
  {
   "t": 378,
   "q": "Dans quelle université travaillent les héros de The Big Bang Theory ?",
   "choices": [
    "Stanford",
    "Harvard",
    "Caltech",
    "MIT"
   ],
   "answer": 2
  },
  {
   "t": 396,
   "q": "Quelle est la capitale de Cuba ?",
   "choices": [
    "La Havane",
    "Saint-Domingue",
    "Santiago de Cuba",
    "San Juan"
   ],
   "answer": 0
  },
  {
   "t": 417,
   "q": "Quel héros grec tue le Minotaure ?",
   "choices": [
    "Ulysse",
    "Hercule",
    "Thésée",
    "Persée"
   ],
   "answer": 2
  },
  {
   "t": 437,
   "q": "Quelle est cette sculpture ?",
   "choices": [
    "Le Penseur (Rodin)",
    "David (Michel-Ange)",
    "Apollon du Belvédère",
    "Le Discobole"
   ],
   "answer": 1
  },
  {
   "t": 454,
   "q": "Qui est-ce ?",
   "choices": [
    "Marie Curie",
    "Malala Yousafzai",
    "Simone Veil",
    "Anne Frank"
   ],
   "answer": 3
  },
  {
   "t": 477,
   "q": "Rébus : quel est ce personnage ?",
   "choices": [
    "Hercule Poirot",
    "Arsène Lupin",
    "Sherlock Holmes",
    "Fantômas"
   ],
   "answer": 1
  },
  {
   "t": 502,
   "q": "Quels artistes ont créé le Rose Festival ?",
   "choices": [
    "Bigflo et Oli",
    "Big Flo et Soprano",
    "PNL",
    "Orelsan et Gringe"
   ],
   "answer": 0
  },
  {
   "t": 521,
   "q": "De quel pays est ce drapeau ?",
   "choices": [
    "Sierra Leone",
    "Gabon",
    "Botswana",
    "Lesotho"
   ],
   "answer": 3
  },
  {
   "t": 538,
   "q": "Quel est ce lieu ?",
   "choices": [
    "Chutes de l'Ange",
    "Chutes du Niagara",
    "Chutes Victoria",
    "Chutes d'Iguazú"
   ],
   "answer": 1
  },
  {
   "t": 556,
   "q": "Qui a écrit « 1984 » ?",
   "choices": [
    "Ray Bradbury",
    "Aldous Huxley",
    "H. G. Wells",
    "George Orwell"
   ],
   "answer": 3
  },
  {
   "t": 575,
   "q": "Vincent Rouil, c'est le vrai nom de… ?",
   "choices": [
    "Vincent Lagaf'",
    "Vincent Cassel",
    "Arthur",
    "Cyril Hanouna"
   ],
   "answer": 0
  },
  {
   "t": 592,
   "q": "Quel groupe a sorti cette pochette ?",
   "choices": [
    "Red Hot Chili Peppers",
    "Nirvana",
    "Pearl Jam",
    "Foo Fighters"
   ],
   "answer": 1
  },
  {
   "t": 614,
   "q": "Qui est le premier homme à avoir voyagé dans l'espace ?",
   "choices": [
    "Thomas Pesquet",
    "Youri Gagarine",
    "Neil Armstrong",
    "Buzz Aldrin"
   ],
   "answer": 1
  },
  {
   "t": 635,
   "q": "Quelle est la capitale de la Pologne ?",
   "choices": [
    "Cracovie",
    "Prague",
    "Varsovie",
    "Budapest"
   ],
   "answer": 2
  },
  {
   "t": 656,
   "q": "Alphabet de l'OTAN : quel mot pour la lettre H ?",
   "choices": [
    "Hotel",
    "Henry",
    "Harry",
    "Hector"
   ],
   "answer": 0
  },
  {
   "t": 676,
   "q": "Quelle est cette sculpture ?",
   "choices": [
    "Manneken-Pis",
    "La Petite Sirène",
    "Le Penseur",
    "Le Petit Prince"
   ],
   "answer": 0
  },
  {
   "t": 693,
   "q": "Qui est-ce ?",
   "choices": [
    "Léon Tolstoï",
    "Victor Hugo",
    "Karl Marx",
    "Charles Darwin"
   ],
   "answer": 3
  },
  {
   "t": 717,
   "q": "Rébus : quel est ce personnage ?",
   "choices": [
    "Capitaine Crochet",
    "Jack Sparrow",
    "Capitaine Nemo",
    "Capitaine Haddock"
   ],
   "answer": 2
  },
  {
   "t": 741,
   "q": "Quelle est la température du zéro absolu ?",
   "choices": [
    "−273,15 °C",
    "0 °C",
    "−459,67 °C",
    "−100 °C"
   ],
   "answer": 0
  },
  {
   "t": 761,
   "q": "De quel pays est ce drapeau ?",
   "choices": [
    "Argentine",
    "Grèce",
    "Uruguay",
    "Paraguay"
   ],
   "answer": 2
  },
  {
   "t": 778,
   "q": "Quel est ce lieu ?",
   "choices": [
    "Place de la Concorde (Paris)",
    "Piazza Navona (Rome)",
    "Grand-Place (Bruxelles)",
    "Place Saint-Marc (Venise)"
   ],
   "answer": 3
  },
  {
   "t": 796,
   "q": "Qui a écrit « Orgueil et Préjugés » ?",
   "choices": [
    "Agatha Christie",
    "Charlotte Brontë",
    "Virginia Woolf",
    "Jane Austen"
   ],
   "answer": 3
  },
  {
   "t": 815,
   "q": "Marie Lopez, c'est le vrai nom de… ?",
   "choices": [
    "EnjoyPhoenix",
    "Squeezie",
    "Léna Situations",
    "Natoo"
   ],
   "answer": 0
  },
  {
   "t": 833,
   "q": "Quelle artiste a sorti cette pochette ?",
   "choices": [
    "Shakira",
    "Pink",
    "Avril Lavigne",
    "Britney Spears"
   ],
   "answer": 2
  },
  {
   "t": 855,
   "q": "Quel pays utilisait le florin avant l'euro ?",
   "choices": [
    "Autriche",
    "Pays-Bas",
    "Belgique",
    "Luxembourg"
   ],
   "answer": 1
  },
  {
   "t": 874,
   "q": "Quelle est la capitale du Pakistan ?",
   "choices": [
    "Kaboul",
    "Islamabad",
    "Lahore",
    "Karachi"
   ],
   "answer": 1
  },
  {
   "t": 895,
   "q": "Qui a créé Mario et Donkey Kong ?",
   "choices": [
    "Hideo Kojima",
    "Satoru Iwata",
    "Shigeru Miyamoto",
    "Yuji Naka"
   ],
   "answer": 2
  },
  {
   "t": 915,
   "q": "Quelle est cette sculpture ?",
   "choices": [
    "Le Baiser (Rodin)",
    "Vénus de Milo",
    "Victoire de Samothrace",
    "David (Michel-Ange)"
   ],
   "answer": 1
  },
  {
   "t": 932,
   "q": "Qui est-ce ?",
   "choices": [
    "Marguerite Duras",
    "Édith Piaf",
    "Simone de Beauvoir",
    "Agnès Varda"
   ],
   "answer": 3
  },
  {
   "t": 956,
   "q": "Rébus : quel est cet artiste ?",
   "choices": [
    "Jacques Brel",
    "Claude Nougaro",
    "Serge Gainsbourg",
    "Claude François"
   ],
   "answer": 1
  },
  {
   "t": 982,
   "q": "Comment s'appelle l'IA créée par Elon Musk ?",
   "choices": [
    "Grok",
    "Gemini",
    "ChatGPT",
    "Claude"
   ],
   "answer": 0
  },
  {
   "t": 1001,
   "q": "De quel pays est ce drapeau ?",
   "choices": [
    "Éthiopie",
    "Sénégal",
    "Ghana",
    "Mali"
   ],
   "answer": 0
  },
  {
   "t": 1017,
   "q": "Quel est ce lieu ?",
   "choices": [
    "Pont des Chaînes (Budapest)",
    "Pont Charles (Prague)",
    "Pont Vieux (Florence)",
    "Pont Neuf (Paris)"
   ],
   "answer": 1
  },
  {
   "t": 1035,
   "q": "Qui a écrit « Sur la route » ?",
   "choices": [
    "John Steinbeck",
    "Charles Bukowski",
    "Ernest Hemingway",
    "Jack Kerouac"
   ],
   "answer": 3
  },
  {
   "t": 1052,
   "q": "William Henry McCarty, c'est le vrai nom de… ?",
   "choices": [
    "Jesse James",
    "Billy the Kid",
    "Buffalo Bill",
    "Lucky Luke"
   ],
   "answer": 1
  },
  {
   "t": 1069,
   "q": "Quelle artiste a sorti cette pochette ?",
   "choices": [
    "Duffy",
    "Lana Del Rey",
    "Adele",
    "Amy Winehouse"
   ],
   "answer": 3
  },
  {
   "t": 1090,
   "q": "Quelle échelle mesure le piquant des piments ?",
   "choices": [
    "Échelle de Mohs",
    "Échelle de Richter",
    "Échelle de Scoville",
    "Échelle de Beaufort"
   ],
   "answer": 2
  },
  {
   "t": 1111,
   "q": "Quelle est la capitale du Costa Rica ?",
   "choices": [
    "San Salvador",
    "Managua",
    "Panama",
    "San José"
   ],
   "answer": 3
  },
  {
   "t": 1133,
   "q": "Quelle chanteuse détient le record de Grammy Awards ?",
   "choices": [
    "Beyoncé",
    "Rihanna",
    "Taylor Swift",
    "Adele"
   ],
   "answer": 0
  },
  {
   "t": 1151,
   "q": "Quelle est cette sculpture ?",
   "choices": [
    "La Liberté guidant le peuple",
    "La Petite Sirène",
    "Manneken-Pis",
    "Vénus de Milo"
   ],
   "answer": 1
  },
  {
   "t": 1168,
   "q": "Qui est-ce ?",
   "choices": [
    "Émile Zola",
    "Arthur Rimbaud",
    "Victor Hugo",
    "Charles Baudelaire"
   ],
   "answer": 3
  },
  {
   "t": 1192,
   "q": "Rébus : quel est ce groupe ?",
   "choices": [
    "Led Zeppelin",
    "Deep Purple",
    "AC/DC",
    "Black Sabbath"
   ],
   "answer": 0
  }
 ]
},

{
 "title": "3 images = 1 film #09 – Spécial horreur",
 "description": "50 films d'horreur à deviner en 3 images (Quiz du Chauve à Lunettes). La vidéo s'arrête après la 3e image.",
 "youtube": "https://www.youtube.com/watch?v=jCgEyH9U_3c",
 "start": 0,
 "limit": 15,
 "boardEvery": 5,
 "questions": [
  {
   "t": 40.2,
   "q": "Quel est ce film ?",
   "choices": [
    "28 jours plus tard",
    "Obsession",
    "The Grudge",
    "[REC]"
   ],
   "answer": 1
  },
  {
   "t": 61.2,
   "q": "Quel est ce film ?",
   "choices": [
    "À l'intérieur",
    "Obsession",
    "The Witch",
    "Massacre à la tronçonneuse"
   ],
   "answer": 3
  },
  {
   "t": 83.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Sinister",
    "La Nonne",
    "28 jours plus tard",
    "Terrifier 3"
   ],
   "answer": 0
  },
  {
   "t": 105.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Saw",
    "Midsommar",
    "Hellraiser",
    "Vendredi 13"
   ],
   "answer": 0
  },
  {
   "t": 126.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Candyman",
    "Carrie",
    "Souviens-toi… l'été dernier",
    "Grave"
   ],
   "answer": 0
  },
  {
   "t": 148.2,
   "q": "Quel est ce film ?",
   "choices": [
    "La colline a des yeux",
    "Ring",
    "Paranormal Activity",
    "Cannibal Holocaust"
   ],
   "answer": 1
  },
  {
   "t": 168.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Scream 2",
    "Paranormal Activity",
    "L'Armée des morts",
    "Destination finale"
   ],
   "answer": 3
  },
  {
   "t": 190.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Obsession",
    "La Main qui tue",
    "Ring",
    "Grave"
   ],
   "answer": 3
  },
  {
   "t": 211.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Saw",
    "Dracula",
    "L'Exorciste",
    "Braindead"
   ],
   "answer": 2
  },
  {
   "t": 233.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Smile",
    "Jason X",
    "Destination finale 2",
    "Obsession"
   ],
   "answer": 1
  },
  {
   "t": 254.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Conjuring 2",
    "La Nuit des morts-vivants",
    "Vermines",
    "Massacre à la tronçonneuse"
   ],
   "answer": 1
  },
  {
   "t": 276.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Dead Silence",
    "Freddy contre Jason",
    "Conjuring 2",
    "Alien"
   ],
   "answer": 2
  },
  {
   "t": 297.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Scream 2",
    "Conjuring 2",
    "Annabelle",
    "Evil Dead 2"
   ],
   "answer": 0
  },
  {
   "t": 318.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Destination finale",
    "It Follows",
    "Sans un bruit",
    "L'Armée des morts"
   ],
   "answer": 1
  },
  {
   "t": 340.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Candyman",
    "Souviens-toi… l'été dernier",
    "Destination finale 2",
    "La colline a des yeux"
   ],
   "answer": 3
  },
  {
   "t": 362.2,
   "q": "Quel est ce film ?",
   "choices": [
    "The Witch",
    "28 jours plus tard",
    "Carrie",
    "Ring"
   ],
   "answer": 2
  },
  {
   "t": 383.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Smile",
    "Rosemary's Baby",
    "La colline a des yeux",
    "Scream"
   ],
   "answer": 0
  },
  {
   "t": 404.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Souviens-toi… l'été dernier",
    "Freddy contre Jason",
    "La Main qui tue",
    "Get Out"
   ],
   "answer": 0
  },
  {
   "t": 425.2,
   "q": "Quel est ce film ?",
   "choices": [
    "La colline a des yeux",
    "Braindead",
    "Obsession",
    "The Ring 2"
   ],
   "answer": 1
  },
  {
   "t": 447.2,
   "q": "Quel est ce film ?",
   "choices": [
    "L'Armée des morts",
    "Prince des ténèbres",
    "Vermines",
    "Conjuring 2"
   ],
   "answer": 2
  },
  {
   "t": 468.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Silent Hill",
    "Grave",
    "Barbarian",
    "It Follows"
   ],
   "answer": 0
  },
  {
   "t": 490.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Détour mortel",
    "Évanouis",
    "Rosemary's Baby",
    "Alien"
   ],
   "answer": 1
  },
  {
   "t": 511.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Scream 2",
    "Get Out",
    "Hellraiser",
    "Nope"
   ],
   "answer": 2
  },
  {
   "t": 532.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Cannibal Holocaust",
    "Suspiria",
    "Souviens-toi… l'été dernier",
    "Évanouis"
   ],
   "answer": 1
  },
  {
   "t": 553.2,
   "q": "Quel est ce film ?",
   "choices": [
    "The Devil's Rejects",
    "Ça",
    "Évanouis",
    "Hellraiser"
   ],
   "answer": 1
  },
  {
   "t": 575.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Grave",
    "Destination finale",
    "Massacre à la tronçonneuse",
    "Evil Dead 2"
   ],
   "answer": 3
  },
  {
   "t": 596.2,
   "q": "Quel est ce film ?",
   "choices": [
    "La Main qui tue",
    "Massacre à la tronçonneuse",
    "Les Griffes de la nuit",
    "[REC]"
   ],
   "answer": 0
  },
  {
   "t": 617.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Paranormal Activity",
    "The Thing",
    "Souviens-toi… l'été dernier",
    "Sans un bruit"
   ],
   "answer": 0
  },
  {
   "t": 639.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Hérédité",
    "L'Exorciste",
    "Carrie",
    "Hostel"
   ],
   "answer": 3
  },
  {
   "t": 660.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Simetierre",
    "The Descent",
    "Évanouis",
    "Mama"
   ],
   "answer": 1
  },
  {
   "t": 682.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Insidious",
    "The Thing",
    "Smile",
    "Dead Silence"
   ],
   "answer": 0
  },
  {
   "t": 703.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Massacre à la tronçonneuse",
    "Martyrs",
    "Silent Hill",
    "Hostel"
   ],
   "answer": 1
  },
  {
   "t": 724.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Saw 3",
    "Sans un bruit",
    "Chucky",
    "Détour mortel"
   ],
   "answer": 3
  },
  {
   "t": 746.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Sixième Sens",
    "La Nonne",
    "When Evil Lurks",
    "Saw 3"
   ],
   "answer": 2
  },
  {
   "t": 767.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Les Autres",
    "Saw",
    "The Devil's Rejects",
    "Destination finale 2"
   ],
   "answer": 2
  },
  {
   "t": 788.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Mama",
    "L'Armée des morts",
    "Simetierre",
    "Freddy contre Jason"
   ],
   "answer": 1
  },
  {
   "t": 810.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Scream 2",
    "Souviens-toi… l'été dernier",
    "It Follows",
    "The Thing"
   ],
   "answer": 3
  },
  {
   "t": 831.2,
   "q": "Quel est ce film ?",
   "choices": [
    "The Faculty",
    "Destination finale",
    "Dead Silence",
    "Saw"
   ],
   "answer": 0
  },
  {
   "t": 852.2,
   "q": "Quel est ce film ?",
   "choices": [
    "[REC]",
    "Freddy contre Jason",
    "The Descent",
    "Cannibal Holocaust"
   ],
   "answer": 3
  },
  {
   "t": 874.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Simetierre",
    "La Nuit des morts-vivants",
    "28 jours plus tard",
    "Destination finale 2"
   ],
   "answer": 0
  },
  {
   "t": 895.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Destination finale 2",
    "L'Exorciste",
    "Les Griffes de la nuit",
    "Us"
   ],
   "answer": 2
  },
  {
   "t": 916.2,
   "q": "Quel est ce film ?",
   "choices": [
    "La Nuit des morts-vivants",
    "Suspiria",
    "Cabin Fever",
    "Wolf Creek"
   ],
   "answer": 2
  },
  {
   "t": 937.2,
   "q": "Quel est ce film ?",
   "choices": [
    "La Nonne",
    "Dead Silence",
    "Les Autres",
    "Prince des ténèbres"
   ],
   "answer": 3
  },
  {
   "t": 959.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Terrifier 3",
    "Cabin Fever",
    "La Nuit des morts-vivants",
    "Prince des ténèbres"
   ],
   "answer": 0
  },
  {
   "t": 980.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Vermines",
    "Halloween",
    "Saw 3",
    "À l'intérieur"
   ],
   "answer": 3
  },
  {
   "t": 1001.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Rosemary's Baby",
    "Vendredi 13",
    "À l'intérieur",
    "The Descent"
   ],
   "answer": 0
  },
  {
   "t": 1023.2,
   "q": "Quel est ce film ?",
   "choices": [
    "La colline a des yeux",
    "Destination finale",
    "Le Projet Blair Witch",
    "It Follows"
   ],
   "answer": 2
  },
  {
   "t": 1044.2,
   "q": "Quel est ce film ?",
   "choices": [
    "It Follows",
    "[REC]",
    "Saw",
    "Jeu d'enfant"
   ],
   "answer": 3
  },
  {
   "t": 1065.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Insidious",
    "[REC]",
    "La Nuit des morts-vivants",
    "Jeu d'enfant"
   ],
   "answer": 1
  },
  {
   "t": 1087.2,
   "q": "Quel est ce film ?",
   "choices": [
    "Détour mortel",
    "Insidious 2",
    "Shining",
    "Massacre à la tronçonneuse"
   ],
   "answer": 2
  }
 ]
},

{
  title: "Culture pop – Démo",
  description: "15 questions ciné, séries, musique, sport et jeux vidéo. Sans vidéo, idéal pour tester.",
  limit: 20,
  questions: [
    { q: "Dans quelle ville se déroule le braquage de la 1re saison de « La Casa de Papel » ?", choices: ["Barcelone", "Madrid", "Séville", "Lisbonne"], answer: 1 },
    { q: "Quel rappeur a sorti l'album « Civilisation » en 2021 ?", choices: ["Nekfeu", "Ninho", "Orelsan", "Damso"], answer: 2 },
    { q: "Dans « Stranger Things », comment s'appelle la dimension parallèle ?", choices: ["Le Monde à l'envers", "La Zone fantôme", "L'Autre Côté", "Le Néant"], answer: 0 },
    { q: "Quel film Pixar raconte l'histoire d'un rat qui rêve d'être chef à Paris ?", choices: ["Là-haut", "Coco", "Luca", "Ratatouille"], answer: 3 },
    { q: "Dans quel jeu vidéo trouve-t-on le lieu « Tilted Towers » ?", choices: ["Fortnite", "Minecraft", "Apex Legends", "GTA V"], answer: 0 },
    { q: "Quel acteur incarne Jack Sparrow dans « Pirates des Caraïbes » ?", choices: ["Orlando Bloom", "Johnny Depp", "Brad Pitt", "Leonardo DiCaprio"], answer: 1 },
    { q: "Quel club Kylian Mbappé a-t-il rejoint en 2024 ?", choices: ["Manchester City", "FC Barcelone", "Real Madrid", "Liverpool"], answer: 2 },
    { q: "Dans « One Piece », quel personnage rêve de devenir le Roi des Pirates ?", choices: ["Roronoa Zoro", "Portgas D. Ace", "Naruto Uzumaki", "Monkey D. Luffy"], answer: 3 },
    { q: "De quel pays vient la série « Squid Game » ?", choices: ["Japon", "Corée du Sud", "Chine", "Thaïlande"], answer: 1 },
    { q: "Dans « Harry Potter », quelle maison a un serpent pour emblème ?", choices: ["Serpentard", "Serdaigle", "Poufsouffle", "Gryffondor"], answer: 0 },
    { q: "Quelle chanteuse a fait la tournée géante « The Eras Tour » ?", choices: ["Beyoncé", "Dua Lipa", "Taylor Swift", "Billie Eilish"], answer: 2 },
    { q: "Comment s'appelle le lionceau héros du « Roi Lion » ?", choices: ["Mufasa", "Simba", "Scar", "Nala"], answer: 1 },
    { q: "En quelle année la France a-t-elle gagné sa 2e Coupe du monde de football ?", choices: ["2006", "2014", "2022", "2018"], answer: 3 },
    { q: "Quel acteur joue Driss dans le film « Intouchables » ?", choices: ["Omar Sy", "Jamel Debbouze", "Ahmed Sylla", "Kev Adams"], answer: 0 },
    { q: "Combien de joueurs chaque équipe a-t-elle sur le terrain au football ?", choices: ["9", "10", "11", "12"], answer: 2 }
  ]
},

/* Exemple de quiz avec vidéo (à remplir avec une vraie vidéo) :
{
  title: "Blind test – Hits 2025",
  youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  start: 0,
  limit: 15,
  questions: [
    { t: 42,  q: "Quel est ce titre ?", choices: ["…", "…", "…", "…"], answer: 0 },
    { t: 95,  q: "Qui chante ?",        choices: ["…", "…", "…", "…"], answer: 2 }
  ]
},
*/

];
