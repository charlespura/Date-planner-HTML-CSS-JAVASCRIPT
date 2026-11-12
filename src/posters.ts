// Promotional poster images hosted by The Movie Database.
// Each film retains its decorative artwork if the remote image is unavailable.
export const posters: Record<string, string> = {
  'Avengers: Endgame': 'or06FN3Dka5tukK1e9sl16pB3iy.jpg',
  'Spider-Man 3': 'qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg',
  'The Dark Knight': 'qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  'Inception': 'oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
  'The Matrix': 'f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
  'About Time': 'iR1bVfURbN7r1C46WHFbwCkVve.jpg',
  'La La Land': 'uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
  'Pride & Prejudice': 'sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg',
  '10 Things I Hate About You': 'ujERk3aKABXU3NDXOAxEQYTHe9A.jpg',
  'Crazy Rich Asians': '1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg',
  'Your Name': 'q719jXXEzOoYaps6babgKnONONX.jpg',
  'Spirited Away': '39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
  'WALL-E': 'hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg',
  'Interstellar': 'gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  'Knives Out': 'pThyQovXQrw2m0s9x82twj48Jq4.jpg',
  'The Grand Budapest Hotel': 'eWdyYQreja6JGCzqHWXpWHDrrPo.jpg',
  'Everything Everywhere All at Once': 'w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg',
};

export const posterUrl = (title: string) => `https://image.tmdb.org/t/p/w500/${posters[title]}`;
