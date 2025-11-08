import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
}

const ProductCard = ({ title, image, description }: ProductCardProps) => {
  return (
    <Card className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300 glow-effect">
      <div className="relative overflow-hidden aspect-square bg-muted/20">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-foreground line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect group/btn">
            <ShoppingCart size={18} className="mr-2 group-hover/btn:scale-110 transition-transform" />
            Learn More
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
