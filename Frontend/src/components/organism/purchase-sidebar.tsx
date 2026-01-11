import { ShoppingBag, ShoppingCart, MonitorPlay } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface PurchaseSidebarProps {
  title: string;
  price: number;
  developer?: string;
  releaseDate?: string;
}

export function PurchaseSidebar({ 
  title, 
  price, 
  developer = "Electronic Arts", 
  releaseDate = "26 Set, 2025" 
}: PurchaseSidebarProps) {
  
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);

  return (
    <aside className="sticky top-24 flex flex-col gap-6 p-6 rounded-xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-md shadow-2xl">
      
      <div className="space-y-3">
        <Badge variant="secondary" className="bg-zinc-800 text-zinc-400 hover:bg-zinc-700 uppercase tracking-widest text-[10px] font-bold">
          Jogo Base
        </Badge>
        <h1 className="text-3xl font-extrabold text-white leading-tight">
          {title}
        </h1>
      </div>

      <div>
        <span className="text-4xl font-bold text-white tracking-tight">
          {formattedPrice}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <Button 
          className="w-full h-12 text-lg font-bold bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20 transition-all hover:scale-[1.02]"
        >
          <ShoppingBag className="mr-2 h-5 w-5" /> 
          Comprar Agora
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full h-12 text-lg font-medium border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white bg-transparent"
        >
          <ShoppingCart className="mr-2 h-5 w-5" /> 
          Carrinho
        </Button>
      </div>

      <Separator className="bg-zinc-800" />

      <div className="space-y-4 text-sm text-zinc-400">
         <div className="flex justify-between items-center">
            <span>Desenvolvedor</span>
            <span className="text-white font-medium">{developer}</span>
         </div>
         <div className="flex justify-between items-center">
            <span>Lançamento</span>
            <span className="text-white font-medium">{releaseDate}</span>
         </div>
         <div className="flex justify-between items-center">
            <span>Plataforma</span>
            <div className="flex items-center gap-1 text-white font-medium">
                <MonitorPlay size={14} className="text-green-500"/> 
                Windows
            </div>
         </div>
      </div>
    </aside>
  );
}