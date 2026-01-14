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
    coverImage: "/images/horizon-cover.png", 
    squareImage: "", 
    bannerImage: "/images/horizon-banner.png",   
    gallery: [
      "/images/horizon-banner.png"
    ],

    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        ram: "16 GB",
        gpu: "NVIDIA GeForce GTX 1650 / AMD Radeon RX 580",
        storage: "30 GB SSD"
      },
      recommended: {
        os: "Windows 11 64-bit",
        cpu: "Intel Core i7-10700K / AMD Ryzen 7 5800X",
        ram: "32 GB",
        gpu: "NVIDIA GeForce RTX 3070 / AMD Radeon RX 6800",
        storage: "30 GB SSD"
      }
    }
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
    coverImage: "/images/destiny-2-cover.png",
    squareImage: "",
    bannerImage: "/images/destiny-2-banner.png",
    gallery: [
      "/images/destiny-2-banner.png"
    ],

    requirements: {
      minimum: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB",
        storage: "100 GB"
      },
      recommended: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ",
        ram: "12 GB",
        gpu: "NVIDIA GeForce GTX 1660 or AMD RX 5600 XT",
        storage: "100 GB SSD"
      }
    }
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
    coverImage: "/images/gt-cover.png",
    squareImage: "",
    bannerImage: "/images/gt-banner.png",
    gallery: [
       "/images/gt-banner.png"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB",
        storage: "100 GB"
      },
      recommended: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ",
        ram: "12 GB",
        gpu: "NVIDIA GeForce GTX 1660 or AMD RX 5600 XT",
        storage: "100 GB SSD"
      }
    }
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
    coverImage: "/images/dbd-cover.png",
    squareImage: "",
    bannerImage: "/images/dbd-banner.png",
    gallery: [
      "/images/dbd-banner.png"
    ],

    requirements: {
      minimum: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB",
        storage: "100 GB"
      },
      recommended: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ",
        ram: "12 GB",
        gpu: "NVIDIA GeForce GTX 1660 or AMD RX 5600 XT",
        storage: "100 GB SSD"
      }
    }
  },
  // --- JOGO 5: Fortnite ---
  {
    slug: "fortnite",
    title: "Fortnite",
    price: 10.00,
    originalPrice: 15.00,
    description: "Crie, jogue e batalhe com amigos gratuitamente no Fortnite. Seja o último jogador de pé no Battle Royale e Construção Zero.",
    developer: "Epic Games",
    releaseDate: "21 Jul, 2017",
    coverImage: "/images/fortnite-square.png",
    squareImage: "/images/fortnite-square.png",
    bannerImage: "/images/fortnite-banner.png",
    gallery: [
      "/images/fortnite-banner.png"
    ],

    requirements: {
      minimum: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB",
        storage: "100 GB"
      },
      recommended: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ",
        ram: "12 GB",
        gpu: "NVIDIA GeForce GTX 1660 or AMD RX 5600 XT",
        storage: "100 GB SSD"
      }
    }
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
    squareImage: "/images/god-of-war-ragnarok-square.png",
    bannerImage: "/images/god-of-war-banner.png",
    gallery: [
      "/images/god-of-war-banner.png"
    ],

    requirements: {
      minimum: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB",
        storage: "100 GB"
      },
      recommended: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ",
        ram: "12 GB",
        gpu: "NVIDIA GeForce GTX 1660 or AMD RX 5600 XT",
        storage: "100 GB SSD"
      }
    }
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
    squareImage: "/images/ff-square.png",
    bannerImage: "/images/ff-banner.png",
    gallery: [
      "/images/ff-banner.png"
    ],

    requirements: {
      minimum: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB",
        storage: "100 GB"
      },
      recommended: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ",
        ram: "12 GB",
        gpu: "NVIDIA GeForce GTX 1660 or AMD RX 5600 XT",
        storage: "100 GB SSD"
      }
    }
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
    squareImage: "/images//fifa-square.png", 
    bannerImage: "/images/fifa-banner.png",
    gallery: [
      "/images/fifa-galery-1.png",
      "/images/fifa-galery-2.png",
      "/images/fifa-galery-3.png",
      "/images/fifa-galery-4.png",
      "/images/fifa-galery-5.png",
      "/images/fifa-galery-6.png"
    ],

    requirements: {
      minimum: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB",
        storage: "100 GB"
      },
      recommended: {
        os: "Windows 10 - 64-Bit",
        cpu: "Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ",
        ram: "12 GB",
        gpu: "NVIDIA GeForce GTX 1660 or AMD RX 5600 XT",
        storage: "100 GB SSD"
      }
    }
  }
];

export const getGames = async (req: Request, res: Response) => {
  try {
    const games = await Game.find()
      .select('slug title price originalPrice coverImage squareImage bannerImage');
      
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

      await Game.deleteMany({}); 
        console.log("Banco limpo via código.");

        const count = await Game.countDocuments();
        if (count === 0) {
            console.log("Banco vazio. Inserindo dados de Mock...");
            await Game.insertMany(MOCK_GAMES);
            console.log("Dados inseridos com sucesso!");
        } else {
            console.log(`ℹBanco já contém ${count} jogos. Seeding pulado.`);
        }
    } catch (error) {
        console.error("❌ Erro ao fazer seed do banco:", error);
    }
};