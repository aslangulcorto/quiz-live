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
