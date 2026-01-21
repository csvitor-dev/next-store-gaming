import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import { Badge } from "@/components/ui/badge"; 

interface GameCardVerticalProps {
  slug: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
}

export function GameCardVertical({ slug, title, price, originalPrice, image }: GameCardVerticalProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  const formattedOriginal = originalPrice ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(originalPrice) : null;

  return (
    <Link href={`/game/${slug}`} className="group h-full block">
      <Card className="h-full bg-card border border-border flex flex-col gap-3 p-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
        
        <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-muted shadow-inner">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {discount > 0 && (
            <Badge className="absolute top-2 right-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-2 py-0.5 rounded shadow-sm">
              -{discount}%
            </Badge>
          )}
        </div>

        <CardContent className="p-0 flex flex-col gap-1 flex-1">
          <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors text-base truncate" title={title}>
            {title}
          </h3>
          
          <div className="mt-1">
            {originalPrice && (
              <p className="text-xs text-muted-foreground line-through font-medium">
                {formattedOriginal}
              </p>
            )}
            <p className="font-extrabold text-card-foreground text-xl">
              {formattedPrice}
            </p>
          </div>
        </CardContent>

        <CardFooter className="p-0 mt-auto pt-1">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-10 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 transition-all rounded-md">
            <ShoppingBag size={16} className="mr-2" />
            Comprar Agora
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}