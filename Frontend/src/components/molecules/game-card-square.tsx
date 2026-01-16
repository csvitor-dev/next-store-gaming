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
      <Card className="relative flex flex-col h-full border-0 bg-[#18181b] rounded-xl overflow-hidden shadow-lg group-hover:shadow-green-900/20 transition-all duration-300">
        
        <div className="relative aspect-square w-full bg-zinc-800">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="relative px-4 flex flex-col justify-center  z-10 bg-[#18181b]">
           <h3 className="font-bold text-white text-base md:text-lg leading-tight uppercase tracking-tight">
             {title}
           </h3>
        </div>

      
        <div className="absolute bottom-0 right-0 overflow-hidden w-20 h-20 z-20 pointer-events-none">
           <div className="absolute bottom-[12px] -right-[22px] w-[100px] bg-[#22c55e] text-[#FFF] text-[10px] font-black text-center py-1 rotate-[-45deg] shadow-md uppercase tracking-wider">
             New
           </div>
        </div>

      </Card>
    </Link>
  );
}