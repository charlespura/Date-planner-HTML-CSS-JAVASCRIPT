// Bundled promotional posters; see public/posters/SOURCES.md.
export const posters: Record<string, string> = {
  "Avengers: Endgame": "avengers-endgame.jpg",
  "Spider-Man 3": "spider-man-3.jpg",
  "The Dark Knight": "the-dark-knight.jpg",
  "Inception": "inception.jpg",
  "The Matrix": "the-matrix.png",
  "About Time": "about-time.jpg",
  "La La Land": "la-la-land.png",
  "Pride & Prejudice": "pride-prejudice.jpg",
  "10 Things I Hate About You": "10-things-i-hate-about-you.jpg",
  "Crazy Rich Asians": "crazy-rich-asians.png",
  "Your Name": "your-name.png",
  "Spirited Away": "spirited-away.png",
  "WALL-E": "wall-e.jpg",
  "Interstellar": "interstellar.jpg",
  "Knives Out": "knives-out.jpeg",
  "The Grand Budapest Hotel": "the-grand-budapest-hotel.png",
  "Everything Everywhere All at Once": "everything-everywhere-all-at-once.jpg"
};

export const posterUrl = (title: string) => new URL(`./posters/${posters[title]}`, document.baseURI).href;
