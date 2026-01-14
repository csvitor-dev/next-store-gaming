import { notFound } from "next/navigation";
import { api } from "@/services/api";
import { GameDetailInfo } from "@/components/organism/game-details-info";
import { PurchaseSidebar } from "@/components/organism/purchase-sidebar";
import { GameCardVertical } from "@/components/molecules/game-card-vertical";

interface GamePageProps {
  params: {
    slug: string;
  };
}

export default async function GamePage({ params }: GamePageProps) {

  const resolvedParams = await params; 
  const slug = resolvedParams.slug;

  let game;
  try {
    game = await api.getGameBySlug(slug);
  } catch (error) {
    return notFound();
  }
  
  const allGames = await api.getGames();
  const recommended = allGames
    .filter(g => g.id !== game.id)
    .slice(0, 4);

  return (
    <div className="bg-[#09090b] text-zinc-100 pb-20 xl:px-[94px]">
      <main className="container mx-auto py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <GameDetailInfo game={game} />
          </div>

          <div className="lg:col-span-1 relative">
             <div className="sticky top-24">
                <PurchaseSidebar 
                  title={game.title}
                  price={game.price}
                  developer={game.developer}
                  releaseDate={game.releaseDate}
                />
             </div>
          </div>

        </div>

        <div className="mt-20 pt-10 border-t border-zinc-800">
          <h3 className="text-2xl font-bold text-white mb-6">Jogos Recomendados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
             {recommended.map((rec) => (
                <GameCardVertical 
                  key={rec.id} 
                  slug={rec.slug}
                  title={rec.title}
                  price={rec.price}
                  image={rec.coverImage}
                  originalPrice={rec.originalPrice}
                />
             ))}
          </div>
        </div>

      </main>
    </div>
  );
}