import { ArrowRight, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

const ProductCard = ({ id, title, image, description }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 5;
      const rotateY = ((x - centerX) / centerX) * 5;

      gsap.to(cardRef.current, {
        rotateX: -rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    cardRef.current.addEventListener("mousemove", handleMouseMove);
    cardRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener("mousemove", handleMouseMove);
        cardRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  return (
    <Link to={`/product/${id}`}>
      <div 
        ref={cardRef}
        className="automotive-card overflow-hidden group cursor-pointer"
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        <div className="relative overflow-hidden aspect-square bg-muted/10">
          <img
            src={image}
            alt={`${title} - Rabinol motor moyi Germaniyada ishlab chiqarilgan yuqori sifatli moy`}
            className="w-full h-full object-contain p-4 group-hover:scale-125 transition-transform duration-700 scale-110"
          />
          <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Premium
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="p-6 relative">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="text-primary" size={18} />
            <span className="text-xs text-primary font-semibold uppercase tracking-wide">High Performance</span>
          </div>
          <h3 className="text-lg font-bold mb-3 text-foreground line-clamp-2 font-heading group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{description}</p>
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white group/btn"
          >
            View Details
            <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
