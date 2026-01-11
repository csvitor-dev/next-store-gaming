"use client"; // Client component pois tem interatividade (trocar foto)

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface GameDetailInfoProps {
  game: {
    description: string;
    gallery: string[];
  }
}

export function GameDetailInfo({ game }: GameDetailInfoProps) {
  const [selectedImage, setSelectedImage] = useState(game.gallery[0]);

  return (
    <div className="space-y-8">
       <div className="space-y-4">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
             <Image src={selectedImage} alt="Gameplay" fill className="object-cover" priority />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-800">
             {game.gallery.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-24 aspect-video rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                    selectedImage === img ? "border-green-500 opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                   <Image src={img} alt="" fill className="object-cover" />
                </button>
             ))}
          </div>
       </div>

       <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Sobre o Jogo</h2>
          <p className="text-zinc-400 leading-relaxed whitespace-pre-line">
             {game.description}
          </p>
       </div>

       <div className="space-y-4">
           <h2 className="text-xl font-bold text-white">Requisitos de sistema</h2>
           <div className="w-full h-64 bg-zinc-900/50 rounded-lg border border-zinc-800 p-6 flex items-center justify-center text-zinc-500">
               Tabela de Requisitos Component
           </div>
       </div>
    </div>
  );
}