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
    <footer className="bg-background border-t border-border pt-16 pb-8 text-sm transition-colors">
      
      <div className="container mx-auto px-4 xl:px-[154px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-2 select-none">
              <Gamepad2 className="h-6 w-6 text-primary" strokeWidth={2.5} />
              <div className="font-bold text-xl tracking-tight">
                <span className="text-foreground">Store</span>
                <span className="text-primary">GG</span>
              </div>
            </Link>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Seu destino definitivo para os melhores e mais recentes jogos. 
              Aprimore sua experiência de jogo.
            </p>

            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube, Github].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="h-10 w-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:bg-accent hover:border-primary transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-primary font-bold text-base">Suporte</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Nos contate</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-primary font-bold text-base">Newsletter</h3>
            <p className="text-muted-foreground leading-relaxed">
              Inscreva-se para receber atualizações sobre novos jogos e ofertas exclusivas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Seu email" 
                  className="pl-10 bg-muted border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/50 h-10"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 h-10 shadow-lg shadow-primary/20">
                Inscreva-se
              </Button>
            </div>
          </div>

        </div>

        <div className="w-full h-px bg-border mb-8"></div>

        <div className="text-center text-muted-foreground text-sm">
          <p>© 2026 StoreGG. Todos direitos reservados. Feito por gamers, para gamers.</p>
        </div>

      </div>
    </footer>
  );
}