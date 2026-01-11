const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface Game {
  id: string;
  slug: string;
  title: string;
  price: number;
  originalPrice?: number;
  coverImage: string;
  gallery: string[];
  description: string;
  developer: string;
  releaseDate: string;
  tags?: string[];
}


const MOCK_GAMES: Game[] = [
  {
    id: "1",
    slug: "ea-sports-fc-26",
    title: "EA SPORTS FC™ 26",
    price: 29.00,
    originalPrice: 299.90,
    coverImage: "", // Capa FC 24 (Placeholder)
    description: "O Clube É Seu. Jogue EA SPORTS FC™ 26 Agora, Com Uma Experiência De Jogabilidade Reformulada Impulsionada Nos Comentários Da Comunidade, Desafios De Manager Ao Vivo, Que Oferecem Mais Cenários Na Nova Temporada, E Arquétipos Inspirados Em Craques Do Esporte. Vivencie O Jogo De Todo Mundo Como Nunca Antes.",
    developer: "EA Canada",
    releaseDate: "26 Set, 2025",
    gallery: [
      "https://image.api.playstation.com/vulcan/ap/rnd/202307/1005/6561f3bc30e3860505187d55985859942a781033235b2447.jpg",
      "https://cdn.wccftech.com/wp-content/uploads/2023/07/EA-Sports-FC-24-Manchester-City.jpg",
      "https://prod.assets.earlygamecdn.com/images/EA-FC-24-Menu.jpg",
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6d525493026330e7/64b54e38622143714652277d/EA_Sports_FC_24_gameplay.jpg"
    ]
  },
  {
    id: "2",
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077 - Ultimate Edition",
    price: 69.96,
    originalPrice: 199.90,
    coverImage: "",
    description: "Cyberpunk 2077 é uma história de ação e aventura de mundo aberto ambientada em Night City, uma megalópole obcecada por poder, glamour e modificação corporal.",
    developer: "CD Projekt Red",
    releaseDate: "10 Dez, 2020",
    gallery: [
       ""
    ]
  },
  {
    id: "3",
    slug: "space-marine-2",
    title: "Warhammer 40,000: Space Marine 2",
    price: 199.90,
    originalPrice: 249.90,
    coverImage: "",
    description: "A galáxia está em perigo. Mundos inteiros estão caindo. O Imperium precisa de você.",
    developer: "Saber Interactive",
    releaseDate: "09 Set, 2024",
    gallery: [
        ""
    ]
  }
];

export const api = {
  getGames: async (): Promise<Game[]> => {
    // const res = await fetch(`${API_URL}/games`, { cache: 'no-store' }); 
    // if (!res.ok) throw new Error('Failed to fetch games');
    // return res.json();
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_GAMES;
  },

  getGameBySlug: async (slug: string): Promise<Game> => {
    // const res = await fetch(`${API_URL}/games/${slug}`, { next: { revalidate: 3600 } });
    // if (!res.ok) throw new Error('Failed to fetch game');
    // return res.json();
    await new Promise(resolve => setTimeout(resolve, 500));
    const game = MOCK_GAMES.find(g => g.slug === slug);
    if (!game) {
      throw new Error("Jogo não encontrado");
    }
    return game;
  }
};