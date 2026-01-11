import { HeroBanner } from "@/components/organism/hero-banner";
import { GameCardVertical } from "@/components/molecules/game-card-vertical"; // Importe o Vertical
import { GameCardSquare } from "@/components/molecules/game-card-square";     // Importe o Square
import { api } from "@/services/api";

export default async function HomePage() {
  const games = await api.getGames(); 
  const trendingGames = games.slice(0, 5); 
  const bestSellers = games.slice(0, 4);   

  return (
    <main className="container mx-auto pb-20">
      
      <div className="px-4 xl:px-[94px] py-8">
        <HeroBanner />
      </div>

      <section className="mb-16 px-4 xl:px-[94px]">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          Em Alta
          <span className="block h-1 w-1 bg-green-500 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
           {trendingGames.map((game) => (
             <GameCardVertical
               key={game.id}
               slug={game.slug}
               title={game.title}
               price={game.price}
               originalPrice={game.originalPrice}
               image={game.coverImage}
             />
           ))}
        </div>
      </section>

      <section className="mb-12 px-4 xl:px-[94px]">
        <div className="flex items-center justify-between mb-6">
           <h2 className="text-2xl font-bold text-white">Campeões de vendas</h2>
           <a href="#" className="text-sm font-medium text-zinc-400 hover:text-[#16a34a] transition-colors">
             ver mais +
           </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {bestSellers.map((game) => (
             <GameCardSquare
               key={game.id}
               slug={game.slug}
               title={game.title}
               image={game.coverImage}
             />
           ))}
        </div>
      </section>

    </main>
  );
}