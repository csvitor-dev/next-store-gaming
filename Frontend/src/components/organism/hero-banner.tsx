import Image from "next/image";
import hero from "../../../public/imgs/hero.png";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

export function HeroBanner() {
  return (
    <div className="w-full group relative">
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-2xl border border-border">
              <Image 
                src={hero}
                alt="Space Marine 2"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-l from-background via-background/60 to-transparent">
                <div className="container h-full mx-auto px-8 md:px-12 flex flex-col justify-center items-end">
                    
                    <div className="max-w-xl space-y-6 text-right">
                        <h1 className="text-4xl md:text-6xl font-black text-foreground drop-shadow-2xl leading-[0.9] tracking-tighter uppercase">
                          Space Marine 2
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl font-medium drop-shadow-lg leading-relaxed">
                          A galáxia está em perigo. Mundos inteiros estão caindo. O Imperium precisa de você.
                        </p>
                        <div className="flex gap-4 pt-2 justify-end">
                          <Button 
                            size="lg" 
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 h-12 shadow-lg shadow-primary/20"
                          >
                              Comprar Agora
                          </Button>
                        </div>
                    </div>

                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <CarouselPrevious 
          className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -left-16 h-14 w-12 rounded-lg bg-card border-border hover:bg-accent hover:text-primary text-muted-foreground shadow-xl z-20" 
        />
        <CarouselNext 
          className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -right-16 h-14 w-12 rounded-lg bg-card border-border hover:bg-accent hover:text-primary text-muted-foreground shadow-xl z-20" 
        />
      </Carousel>
    </div>
  );
}