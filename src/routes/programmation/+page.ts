import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  try {
    // Utilisation de `fetch` fourni par SvelteKit
    const response = await fetch('/data/events.json');
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const events = await response.json();
    return { events }; // Retourne les événements pour être utilisés dans le composant
  } catch (error) {
    console.error('Failed to load events:', error);
    return { events: [] }; // Retourne un tableau vide en cas d'erreur
  }
};
