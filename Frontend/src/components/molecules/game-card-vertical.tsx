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
      <Card className="h-full border-0 bg-transparent flex flex-col gap-3">
        <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-zinc-800 shadow-md">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {discount > 0 && (
            <Badge className="absolute top-2 right-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-2 py-0.5 rounded shadow-sm">
              -{discount}%
            </Badge>
          )}
        </div>

        <CardContent className="p-0 flex flex-col gap-1 flex-1">
          <h3 className="font-bold text-white text-base truncate" title={title}>
            {title}
          </h3>
          
          <div className="mt-1">
            {originalPrice && (
              <p className="text-xs text-zinc-500 line-through font-medium">
                {formattedOriginal}
              </p>
            )}
            <p className="font-extrabold text-white text-xl">
              {formattedPrice}
            </p>
          </div>
        </CardContent>

        <CardFooter className="p-0 mt-auto">
          <Button className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold h-10 shadow-lg shadow-green-900/10 group-hover:shadow-green-900/30 transition-all">
            <ShoppingBag size={16} className="mr-2" />
            Comprar Agora
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}