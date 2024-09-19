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
];
