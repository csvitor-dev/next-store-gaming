"use client";

import { useState } from "react";
import Image from "next/image";

interface Requirement {
  os: string;
  cpu: string;
  ram: string;
  gpu: string;
  storage: string;
}
interface GameDetailInfoProps {
  game: {
    description: string;
    gallery: string[];

    requirements?: {
      minimum: Requirement;
      recommended: Requirement;
    };
  }
}

export function GameDetailInfo({ game }: GameDetailInfoProps) {
  const [selectedImage, setSelectedImage] = useState(game.gallery[0]);

  return (
    <div className="space-y-8">
       <div className="space-y-4">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-muted">
             <Image src={selectedImage} alt="Gameplay" fill className="object-cover" priority />
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border">
             {game.gallery.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-24 aspect-video rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                    selectedImage === img ? "border-primary opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                   <Image src={img} alt="" fill className="object-cover" />
                </button>
             ))}
          </div>
       </div>

       <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Sobre o Jogo</h2>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
             {game.description}
          </p>
       </div>

       {game.requirements && (
         <div className="space-y-6">
             <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                Requisitos de Sistema
                <div className="h-1 w-8 bg-primary rounded-full"></div>
             </h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
                 
                 <div className="space-y-4">
                    <h3 className="text-primary font-bold uppercase tracking-wider text-sm border-b border-border pb-2">
                        Mínimos
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1">
                            <span className="text-muted-foreground font-medium">SO:</span>
                            <span className="text-foreground">{game.requirements.minimum.os}</span>
                        </li>
                        <li className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1">
                            <span className="text-muted-foreground font-medium">Processador:</span>
                            <span className="text-foreground">{game.requirements.minimum.cpu}</span>
                        </li>
                        <li className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1">
                            <span className="text-muted-foreground font-medium">Memória:</span>
                            <span className="text-foreground">{game.requirements.minimum.ram}</span>
                        </li>
                        <li className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1">
                            <span className="text-muted-foreground font-medium">Placa de Vídeo:</span>
                            <span className="text-foreground">{game.requirements.minimum.gpu}</span>
                        </li>
                        <li className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1">
                            <span className="text-muted-foreground font-medium">Armazenamento:</span>
                            <span className="text-foreground">{game.requirements.minimum.storage}</span>
                        </li>
                    </ul>
                 </div>

                 <div className="space-y-4">
                    <h3 className="text-primary font-bold uppercase tracking-wider text-sm border-b border-border pb-2">
                        Recomendados
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1">
                            <span className="text-muted-foreground font-medium">SO:</span>
                            <span className="text-foreground">{game.requirements.recommended.os}</span>
                        </li>
                        <li className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1">
                            <span className="text-muted-foreground font-medium">Processador:</span>
                            <span className="text-foreground">{game.requirements.recommended.cpu}</span>
                        </li>
                        <li className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1">
                            <span className="text-muted-foreground font-medium">Memória:</span>
                            <span className="text-foreground">{game.requirements.recommended.ram}</span>
                        </li>
                        <li className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1">
                            <span className="text-muted-foreground font-medium">Placa de Vídeo:</span>
                            <span className="text-foreground">{game.requirements.recommended.gpu}</span>
                        </li>
                        <li className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1">
                            <span className="text-muted-foreground font-medium">Armazenamento:</span>
                            <span className="text-foreground">{game.requirements.recommended.storage}</span>
                        </li>
                    </ul>
                 </div>
             </div>
         </div>
       )}
    </div>
  );
}