import Link from "next/link";
import { 
  Search, 
  ShoppingCart, 
  Gamepad2, 
  Menu, 
  Zap, 
  Clock, 
  Info, 
  Home, 
  Sun, 
  User, 
  Languages 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#09090b] backdrop-blur-md">
      
      <div className="w-full h-20 flex items-center justify-between gap-4 px-4 xl:px-[94px]">
        
        <div className="flex items-center gap-10">
          
          <Link href="/" className="flex items-center gap-2 select-none">
            <Gamepad2 className="h-8 w-8 text-[#16a34a]" strokeWidth={2.5} />
            <div className="font-bold text-2xl tracking-tight">
              <span className="text-white">Store</span>
              <span className="text-[#16a34a]">GG</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            
            <Button 
              variant="ghost" 
              className="bg-[#16a34a]/10 text-[#16a34a] hover:bg-[#16a34a]/20 hover:text-[#16a34a] gap-2 font-semibold"
            >
              <Home size={18} />
              Home
            </Button>

            <Link href="#" className="flex items-center gap-2 text-zinc-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors">
              <Zap size={18} />
              Ofertas
            </Link>
            
            <Link href="#" className="flex items-center gap-2 text-zinc-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors">
              <Clock size={18} />
              Novidades
            </Link>
            
            <Link href="#" className="flex items-center gap-2 text-zinc-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors">
              <Info size={18} />
              Sobre
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          
          <div className="hidden xl:flex relative w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input 
              placeholder="Procurar jogos..." 
              className="pl-10 bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-500 rounded-md focus-visible:ring-[#16a34a]/50 h-10"
            />
          </div>

          <div className="hidden lg:block h-6 w-px bg-zinc-800 mx-2"></div>

          <div className="hidden lg:flex  items-center gap-2">
            
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white border rounded-full hover:bg-zinc-800">
              <Sun size={20} />
            </Button>

            <Button variant="ghost" className="text-zinc-200 hover:text-white border hover:bg-zinc-800 gap-2 font-medium">
              <User size={20} />
              Entrar
            </Button>

            <Button className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-6 gap-2 shadow-lg shadow-green-900/20">
              <ShoppingCart size={18} />
              Carrinho
            </Button>

             <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white border rounded-full hover:bg-zinc-800">
              <Languages size={20} />
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden text-zinc-400">
            <Menu className="h-6 w-6" />
          </Button>

        </div>
      </div>
    </header>
  );
}