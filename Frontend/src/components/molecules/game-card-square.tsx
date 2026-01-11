import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

interface GameCardSquareProps {
  slug: string;
  title: string;
  image: string;
}

export function GameCardSquare({ slug, title, image }: GameCardSquareProps) {
  return (
    <Link href={`/game/${slug}`} className="group h-full block">
      <Card className="relative h-full border-0 bg-zinc-900 rounded-xl overflow-hidden shadow-lg group-hover:shadow-green-900/20 transition-all duration-300">
        
        <div className="relative aspect-square w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
          
          <div className="absolute bottom-4 left-4 right-12">
             <h3 className="font-black text-white text-xl md:text-2xl leading-tight uppercase tracking-tight drop-shadow-md">
               {title}
             </h3>
          </div>

          <div className="absolute bottom-0 right-0 overflow-hidden w-24 h-24">
             <div className="absolute bottom-[18px] -right-[28px] w-[120px] bg-[#16a34a] text-white text-xs font-bold text-center py-1 rotate-[-45deg] shadow-md uppercase tracking-wider origin-bottom-right transform translate-x-3 translate-y-3">
               New
             </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}