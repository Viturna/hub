// lib/data/events.ts
export interface Event {
  id: number;
  date: string;
  heure: string;
  billet: string;
  title: string;
  adresse: string;
  description: string;
  path: string;
  pathphoto: string;
  srcphoto: string; // Propriété pour l'URL de l'image
  cardType: 'main' | 'secondary'; // Nouvelle propriété pour le type de carte
}

export const events: Event[] = [
  {
    id: 1,
    date: "2024-09-11",
    heure: "18:00",
    billet: "Gratuit",
    title: "Reveal Familles",
    adresse: "Plateau TV",
    description: "Découvrez votre famille et apprenez qui est votre parrain/marraine au plateau TV.",
    path: "",
    pathphoto: "https://drive.google.com/drive/folders/19WfzagHtuXFofe9OAtrUP8ub6HGKVH6Q?usp=sharing",
    srcphoto: "/images/card-event.png",
    cardType: "main",
  },
  {
    id: 2,
    date: "2024-10-03",
    heure: "21:00",
    billet: "6€/7€/8.5€",
    title: "Soirée d'inté",
    adresse: "LES CANAILLES BORDEAUX, 7 QUAI DES QUEYRIES, 33100 BDX",
    description: "",
    path: "https://www.helloasso.com/associations/house-of-united-brothers/evenements/soiree-d-integration",
    pathphoto: "https://drive.google.com/drive/folders/1dl1fzf4m-1KJAAscyjxHVPgmTBjTYVe3?usp=sharing",
    srcphoto: "/images/soiree-inte.png",
    cardType: "main",
  },
  {
    id: 3,
    date: "2024-10-18",
    heure: "20:00",
    billet: "GRATUIT",
    title: "Soirée Play Test",
    adresse: "COOLDOWN, 5 Pl. Louis Barthou, 33800 Bordeaux",
    description: "Venez découvrir et tester les jeux des 3A dans une ambiance chill et décontractée, avec des tarifs réduits : Café 1€, Shooter 2€, Soft 2,5€, Verre de vin 4€, Demi 3€, Pinte 5€, Cocktails 6€, Tenders 6€, Mozza 5€, Frites 3€, Tenders+Frites 9€, Mozza+Frites 8€, Tenders+Mozza+Frites 16€, Planches Charcuterie ou Fromage 8€, Saucisson 5€.",
    path: "#",
    pathphoto: "#",
    srcphoto: "/images/soiree-playtest.png",
    cardType: "main",
  },
  {
    id: 4,
    date: "2024-10-31",
    heure: "20:00",
    billet: "3€/3.5€/5€",
    title: "Soirée Halloween",
    adresse: "Le Jardin Pêcheur, 11 Rue Lucien Faure, 33300 Bordeaux",
    description: "Viens déguisé (c'est encore mieux !), mais attention, la peur sera partout avec des animations horrifiques qui te donneront des frissons !",
    path: "https://www.helloasso.com/associations/house-of-united-brothers/evenements/soiree-halloween-1",
    pathphoto: "https://drive.google.com/drive/u/0/folders/16eqz2_F4qrlUBbHTivvRoFDwDX5Uztcz",
    srcphoto: "/images/soiree-halloween.png",
    cardType: "main",
  },
  {
    id: 5,
    date: "2024-11-13",
    heure: "20:00",
    billet: "GRATUIT",
    title: "Soirée Ciné",
    adresse: "ZIG ZAG, 73 Cr de l'Argonne, 33000 Bordeaux",
    description: "Venez découvrir un film culte que vous avez sélectionné lors d'une projection au Zig Zag. Réductions au bar (plus d'infos sur HelloAsso)",
    path: "https://www.helloasso.com/associations/house-of-united-brothers/evenements/projection-cine-au-zig-zag-2",
    pathphoto: "#",
    srcphoto: "/images/soiree-cine.png",
    cardType: "main",
  },
  {
    id: 6,
    date: "2024-11-27",
    heure: "20:00",
    billet: "GRATUIT",
    title: "Soirée Ciné",
    adresse: "Grizzly",
    description: "Venez découvrir un film culte que vous avez sélectionné lors d'une projection au Grizzly. Réductions au bar (plus d'infos sur HelloAsso)",
    path: "#",
    pathphoto: "#",
    srcphoto: "/images/soiree-cine.png",
    cardType: "main",
  },
  {
    id: 7,
    date: "2024-12-11",
    heure: "20:00",
    billet: "GRATUIT",
    title: "Bal de Noël",
    adresse: "Lieu chéri",
    description: "Pour finir l’année en beauté, le Bal de Noël vous attend pour une soirée inoubliable, placée sous le signe de l’élégance et de la magie ✨. Cette année, nous avons réuni 4 BDE : Pub, Infonum, Community, et bien sûr le nôtre, pour rendre cet événement encore plus grandiose !",
    path: "#",
    pathphoto: "#",
    srcphoto: "https://drive.google.com/drive/u/0/folders/1Gdhx9qZG2qIWBllV2qw-srDRM-LVC2SO",
    cardType: "main",
  },
  {
    id: 8,
    date: "2025-01-05",
    heure: "--",
    billet: "25€/27€/30€ - 15€/16.5€/18€",
    title: "Merch 2024/2025",
    adresse: "IUT",
    description: "Comme chaque année, le BDE vous permet d’acquérir du merch MMI. Pourquoi ? D’une part pour s’identifier avec les autres membres de notre formation, mais également pour soutenir le BDE 💪 Cette année, nous vous proposons des pulls et t-shirts arborant le logo ayant gagné le concours de design !",
    path: "https://www.helloasso.com/associations/house-of-united-brothers/boutiques/precommande-du-merch-mmi-2024-2025",
    pathphoto: "",
    srcphoto: "/images/merch24-25.png",
    cardType: "main",
  }
];
