import Link from "next/link";
import { 
  Gamepad2, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Github, 
  Mail 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-zinc-800 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-4 xl:px-[94px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-2 select-none">
              <Gamepad2 className="h-6 w-6 text-[#16a34a]" strokeWidth={2.5} />
              <div className="font-bold text-xl tracking-tight">
                <span className="text-white">Store</span>
                <span className="text-[#16a34a]">GG</span>
              </div>
            </Link>

            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Seu destino definitivo para os melhores e mais recentes jogos. 
              Aprimore sua experiência de jogo.
            </p>

            {/* Ícones Sociais */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube, Github].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="h-10 w-10 flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-[#16a34a] font-bold text-base">Suporte</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Nos contate</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[#16a34a] font-bold text-base">Newsletter</h3>
            <p className="text-zinc-400 leading-relaxed">
              Inscreva-se para receber atualizações sobre novos jogos e ofertas exclusivas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input 
                  placeholder="Seu email" 
                  className="pl-10 bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-600 focus-visible:ring-[#16a34a]/50 h-10"
                />
              </div>
              <Button className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-6 h-10">
                Inscreva-se
              </Button>
            </div>
          </div>

        </div>

        <div className="w-full h-px bg-zinc-800 mb-8"></div>

        <div className="text-center text-zinc-500 text-sm">
          <p>© 2025 StoreGG. Todos direitos reservados. Feito por gamers, para gamers.</p>
        </div>

      </div>
    </footer>
  );
}