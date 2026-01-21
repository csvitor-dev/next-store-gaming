import { HeroBanner } from "@/components/organism/hero-banner";
import { GameCardVertical } from "@/components/molecules/game-card-vertical";
import { GameCardSquare } from "@/components/molecules/game-card-square";
import { api } from "@/services/api";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

export default async function HomePage() {
  const games = await api.getGames();
  
  const trendingGames = games.slice(0, 5); 
  const bestSellers = games.slice(0, 8);

  return (
    <main className="container mx-auto pb-20">
      
      <div className="px-4 py-8">
        <HeroBanner />
      </div>

     <section className="mb-16 px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          Em Alta
          <span className="block h-1 w-1 bg-primary rounded-full"></span>
        </h2>
        
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-6"> 
            {trendingGames.map((game, index) => (
               <CarouselItem key={`${game.id}-${index}`} className="pl-6 basis-1/2 md:basis-1/3 lg:basis-1/5">
                 <GameCardVertical
                   slug={game.slug}
                   title={game.title}
                   price={game.price}
                   originalPrice={game.originalPrice}
                   image={game.coverImage} 
                 />
               </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -left-16 h-14 w-12 rounded-lg bg-card border-border hover:bg-accent hover:text-primary text-muted-foreground shadow-xl z-20" />
          <CarouselNext className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -right-16 h-14 w-12 rounded-lg bg-card border-border hover:bg-accent hover:text-primary text-muted-foreground shadow-xl z-20" />
        </Carousel>
      </section>

      <section className="mb-12 px-4">
        <div className="flex items-center justify-between mb-6">
           <h2 className="text-2xl font-bold text-foreground">Campeões de vendas</h2>
           <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
             ver mais +
           </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {bestSellers.map((game) => (
             <GameCardSquare
               key={game.id}
               slug={game.slug}
               title={game.title}
               image={game.squareImage || game.coverImage} 
             />
           ))}
        </div>
      </section>

    </main>
  );
}