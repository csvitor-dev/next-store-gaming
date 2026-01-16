const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
export interface Requirement {
  os: string;
  cpu: string;
  ram: string;
  gpu: string;
  storage: string;
}
export interface Game {
  id: string;
  slug: string;
  title: string;
  price: number;
  originalPrice?: number;
  description: string;
  developer: string;
  releaseDate: string;

  coverImage: string;
  squareImage?: string;
  bannerImage?: string;
  gallery: string[];
  tags?: string[];

  requirements?: {
    minimum: Requirement;
    recommended: Requirement;
  };
}

const getFullImageUrl = (path: string) => {
  if (!path) return '/placeholder.png';
  if (path.startsWith('http')) return path; 
  return `${API_URL}${path}`;
};

const normalizeGame = (game: Game): Game => ({
  ...game,
  coverImage: getFullImageUrl(game.coverImage),
  squareImage: game.squareImage ? getFullImageUrl(game.squareImage) : undefined,
  bannerImage: game.bannerImage ? getFullImageUrl(game.bannerImage) : undefined,
  gallery: ( game.gallery || [] ).map(img => getFullImageUrl(img))
});

export const api = {
  getGames: async (): Promise<Game[]> => {
    try {
      const res = await fetch(`${API_URL}/games`, { cache: 'no-store' }); 
      
      if (!res.ok) throw new Error('Failed to fetch games');
      
      const games: Game[] = await res.json();
      return games.map(normalizeGame);
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  getGameBySlug: async (slug: string): Promise<Game> => {
    try {
      const res = await fetch(`${API_URL}/games/${slug}`, { 
        cache: 'no-store' // ou next: { revalidate: 60 } 
      });
      
      if (!res.ok) return Promise.reject("Jogo não encontrado");
      
      const game: Game = await res.json();
      return normalizeGame(game);
    } catch (error) {
      throw error;
    }
  }
};