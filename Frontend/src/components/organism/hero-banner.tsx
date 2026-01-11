import Image from "next/image";
import hero from "../../../public/imgs/hero.png";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden mb-12 group shadow-2xl shadow-black/50 border border-zinc-800 px-4 xl:px-[94px]">
      <Image 
        src={hero}
        alt="Space Marine 2"
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-l from-[#09090b] via-[#09090b]/60 to-transparent">
        <div className="container h-full mx-auto px-8 md:px-12 flex flex-col justify-center items-end">
            
            <div className="max-w-xl space-y-6 text-right">
                
                <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-2xl leading-[0.9] tracking-tighter uppercase">
                  Space Marine 2
                </h1>
                
                <p className="text-zinc-200 text-lg md:text-xl font-medium drop-shadow-lg leading-relaxed">
                  A galáxia está em perigo. Mundos inteiros estão caindo. O Imperium precisa de você.
                </p>
                
                <div className="flex gap-4 pt-2 justify-end">
                  <Button 
                    size="lg" 
                    className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-lg px-8 h-12 shadow-lg shadow-green-900/20"
                  >
                      Comprar Agora
                  </Button>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
}