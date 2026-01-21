import { notFound } from "next/navigation";
import { api } from "@/services/api";
import { GameDetailInfo } from "@/components/organism/game-details-info";
import { PurchaseSidebar } from "@/components/organism/purchase-sidebar";
import { GameCardVertical } from "@/components/molecules/game-card-vertical";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

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
    .slice(0, 10);

  return (
    <div className="bg-background text-foreground pb-20 px-4 xl:px-[94px]">
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

        <div className="mt-20 pt-10 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">Jogos Recomendados</h3>
          
          <div className="relative">
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {recommended.map((rec) => (
                    <CarouselItem key={rec.id} className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <GameCardVertical 
                        slug={rec.slug}
                        title={rec.title}
                        price={rec.price}
                        image={rec.coverImage}
                        originalPrice={rec.originalPrice}
                      />
                    </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -left-16 h-14 w-12 rounded-lg bg-card border-border hover:bg-accent hover:text-primary text-muted-foreground shadow-xl z-20" />
              <CarouselNext className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -right-16 h-14 w-12 rounded-lg bg-card border-border hover:bg-accent hover:text-primary text-muted-foreground shadow-xl z-20" />
            </Carousel>
          </div>
        </div>

      </main>
    </div>
  );
}