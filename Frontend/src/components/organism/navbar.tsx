"use client" // Necessário para usar useTheme

import Link from "next/link";
import { useTheme } from "next-themes";
import { 
  Search, ShoppingCart, Gamepad2, Menu, Zap, Clock, Info, 
  Home, Sun, Moon, User, Languages 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
    // Removemos #09090b e usamos bg-background/80
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors">
      
      <div className="w-full h-20 flex items-center justify-between gap-4 px-4 xl:px-[94px]">
        
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 select-none">
            <Gamepad2 className="h-8 w-8 text-primary" strokeWidth={2.5} />
            <div className="font-bold text-2xl tracking-tight">
              {/* text-foreground muda auto entre preto e branco */}
              <span className="text-foreground">Store</span>
              <span className="text-primary">GG</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Button 
              variant="ghost" 
              // bg-primary/10 funciona bem no dark e light
              className="bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary gap-2 font-semibold"
            >
              <Home size={18} />
              Home
            </Button>

            {/* text-muted-foreground é cinza no dark e cinza escuro no light */}
            <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-colors">
              <Zap size={18} />
              Ofertas
            </Link>
            
            <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-colors">
              <Clock size={18} />
              Novidades
            </Link>
            
            <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-colors">
              <Info size={18} />
              Sobre
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden xl:flex relative w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Procurar jogos..." 
              // bg-muted é um cinza sutil que funciona nos dois modos
              className="pl-10 bg-muted border-input text-foreground placeholder:text-muted-foreground rounded-md focus-visible:ring-primary/50 h-10"
            />
          </div>

          <div className="hidden lg:block h-6 w-px bg-border mx-2"></div>

          <div className="hidden lg:flex items-center gap-2">
            
            {/* BOTÃO DE TEMA FUNCIONAL */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground border border-border rounded-full hover:bg-accent"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Alternar tema</span>
            </Button>

            <Button variant="ghost" className="text-muted-foreground hover:text-foreground border border-border hover:bg-accent gap-2 font-medium">
              <User size={20} />
              Entrar
            </Button>

            {/* O Verde (primary) se mantém consistente */}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 gap-2 shadow-lg shadow-primary/20">
              <ShoppingCart size={18} />
              Carrinho
            </Button>

             <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground border border-border rounded-full hover:bg-accent">
              <Languages size={20} />
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden text-muted-foreground">
            <Menu className="h-6 w-6" />
          </Button>

        </div>
      </div>
    </header>
  );
}