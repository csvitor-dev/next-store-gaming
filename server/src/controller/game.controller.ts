import { Request, Response } from 'express';
import Game, { IGame } from '../models/game.model';

const MOCK_GAMES = [
  // --- JOGO 1: LEGO Horizon Adventures ---
  {
    slug: "lego-horizon-adventures",
    title: "LEGO® Horizon Adventures™",
    price: 299.90,
    originalPrice: 349.90,
    description: "Junte-se à caçadora de máquinas Aloy e lidere um grupo de heróis coloridos em uma missão para salvar o mundo e descobrir os segredos de seu passado.",
    developer: "Guerrilla Games / Studio Gobo",
    releaseDate: "14 Nov, 2024",
    coverImage: "../../public/images/horizon-cover.png", 
    squareImage: "", 
    bannerImage: "../../public/images/horizon-banner.png",   
    gallery: []
  },
  // --- JOGO 2: Destiny 2: A Forma Final ---
  {
    slug: "destiny-2-final-shape",
    title: "Destiny 2: A Forma Final",
    price: 189.99,
    originalPrice: 189.99,
    description: "A Forma Final chegou. Uma solidificação apavorante da realidade em um projeto distorcido da Testemunha. Embarque em uma jornada perigosa.",
    developer: "Bungie",
    releaseDate: "04 Jun, 2024",
    coverImage: "../../public/images/destiny-2-cover.png",
    squareImage: "",
    bannerImage: "../../public/images/destiny-2-banner.png",
    gallery: []
  },
  // --- JOGO 3: Gran Turismo 7 ---
  {
    slug: "gran-turismo-7",
    title: "Gran Turismo™ 7",
    price: 249.50,
    originalPrice: 349.90,
    description: "Gran Turismo 7 reúne as melhores funcionalidades do simulador de direção real. Com mais de 420 carros disponíveis na Brand Central.",
    developer: "Polyphony Digital",
    releaseDate: "04 Mar, 2022",
    coverImage: "../../public/images/gt-cover.png",
    squareImage: "",
    bannerImage: "../../public/images/gt-banner.png",
    gallery: []
  },
  // --- JOGO 4: Dying Light: The Beast ---
  {
    slug: "dying-light-the-beast",
    title: "Dying Light: The Beast",
    price: 199.90,
    originalPrice: 199.90,
    description: "Dying Light: The Beast é uma aventura zumbi autônoma ambientada em uma região rural pós-apocalíptica.",
    developer: "Techland",
    releaseDate: "Em Breve",
    coverImage: "../../public/images/dbd-cover.png",
    squareImage: "",
    bannerImage: "../../public/images/dbd-banner.png",
    gallery: []
  },
  // --- JOGO 5: Fortnite ---
  {
    slug: "fortnite",
    title: "Fortnite",
    price: 0.00,
    originalPrice: 0.00,
    description: "Crie, jogue e batalhe com amigos gratuitamente no Fortnite. Seja o último jogador de pé no Battle Royale e Construção Zero.",
    developer: "Epic Games",
    releaseDate: "21 Jul, 2017",
    coverImage: "",
    squareImage: "../../public/images/fortnite-square.png",
    bannerImage: "../../public/images/fortnite-banner.png",
    gallery: []
  },
  // --- JOGO 6: God of War Ragnarök ---
  {
    slug: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    price: 249.90,
    originalPrice: 349.90,
    description: "Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para uma batalha profetizada.",
    developer: "Santa Monica Studio",
    releaseDate: "09 Nov, 2022",
    coverImage: "",
    squareImage: "../../public/images/god-of-war-square.png",
    bannerImage: "../../public/images/god-of-war-banner.png",
    gallery: []
  },
  // --- JOGO 7: Final Fantasy VII Rebirth ---
  {
    slug: "ff7-rebirth",
    title: "Final Fantasy VII Rebirth",
    price: 299.90,
    originalPrice: 349.90,
    description: "A jornada rumo ao desconhecido continua. Após escaparem da cidade distópica de Midgar, Cloud e seus amigos partem em uma jornada pelo planeta.",
    developer: "Square Enix",
    releaseDate: "29 Fev, 2024",
    coverImage: "",
    squareImage: "../../public/images/ff7-square.png",
    bannerImage: "../../public/images/ff7-banner.png",
    gallery: []
  },
  // --- JOGO 8: EA SPORTS FC 26 ---
  {
    slug: "ea-sports-fc-26",
    title: "EA SPORTS FC™ 26",
    price: 29.00,
    originalPrice: 299.90,
    description: "O Clube É Seu. Jogue EA SPORTS FC™ 26 Agora com as maiores estrelas e times do mundo.",
    developer: "EA Canada",
    releaseDate: "26 Set, 2025",
    coverImage: "", 
    squareImage: "../../public/images//ff-square.png", 
    bannerImage: "../../public/images/ff-banner.png",
    gallery: [
      "../../public/images/fifa-galery-1.png",
      "../../public/images/fifa-galery-2.png",
      "../../public/images/fifa-galery-3.png",
      "../../public/images/fifa-galery-4.png",
      "../../public/images/fifa-galery-5.png",
      "../../public/images/fifa-galery-6.png"
    ]
  }
];

export const getGames = async (req: Request, res: Response) => {
  try {
    const games = await Game.find()
      .select('slug title price originalPrice coverImage squareImage bannerImage -_id');
      
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar jogos", error });
  }
};

export const getGameBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const game = await Game.findOne({ slug });
    
    if (!game) {
      return res.status(404).json({ message: "Jogo não encontrado" });
    }
    
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar jogo", error });
  }
};

export const checkAndSeed = async () => {
    try {
        const count = await Game.countDocuments();
        if (count === 0) {
            console.log("🌱 Banco vazio. Inserindo dados de Mock...");
            await Game.insertMany(MOCK_GAMES);
            console.log("✅ Dados inseridos com sucesso!");
        } else {
            console.log(`ℹ️ Banco já contém ${count} jogos. Seeding pulado.`);
        }
    } catch (error) {
        console.error("❌ Erro ao fazer seed do banco:", error);
    }
};