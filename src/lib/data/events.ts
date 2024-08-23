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
    date: "2024-09-25",
    heure: "18:00",
    billet: "Gratuit",
    title: "Concert d'été",
    adresse: "Parc de la Ville, 123 Rue Principale",
    description: "Venez profiter de notre concert d'été avec des artistes locaux et internationaux.",
    path: "/events/concert-ete",
    pathphoto: "/photos/concert-ete",
    srcphoto: "/images/card-event.png",
    cardType: "main",
  },

  {
    id: 3,
    date: "2023-12-31",
    heure: "21:00",
    billet: "30€",
    title: "Réveillon du Nouvel An",
    adresse: "Salle des Fêtes, 789 Boulevard des Champs",
    description: "Célébrez la nouvelle année avec nous lors de notre soirée de réveillon.",
    path: "/events/reveillon-nouvel-an",
    pathphoto: "/photos/reveillon-nouvel-an",
    srcphoto: "/images/card-event.png",
    cardType: "main",
  },
  {
    id: 4,
    date: "2024-03-21",
    heure: "14:00",
    billet: "10€",
    title: "Festival du Printemps",
    adresse: "Jardin Botanique, 101 Rue des Fleurs",
    description: "Découvrez notre festival annuel du printemps avec des expositions et des ateliers.",
    path: "/events/festival-printemps",
    pathphoto: "/photos/festival-printemps",
    srcphoto: "/images/card-event.png",
    cardType: "secondary",
  },
  {
    id: 5,
    date: "2024-06-10",
    heure: "19:00",
    billet: "20€",
    title: "Soirée de Gala",
    adresse: "Hôtel de Ville, 202 Avenue du Président",
    description: "Participez à notre soirée de gala annuelle avec dîner et spectacle.",
    path: "/events/soiree-gala",
    pathphoto: "/photos/soiree-gala",
    srcphoto: "/images/card-event.png",
    cardType: "main",
  }
];
