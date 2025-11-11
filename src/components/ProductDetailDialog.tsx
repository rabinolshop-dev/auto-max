"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    title: string;
    image: string;
    imageBack: string;
    description: string;
    fullDescription: string;
  } | null;
}

const ProductDetailDialog = ({
  open,
  onOpenChange,
  product,
}: ProductDetailDialogProps) => {
  if (!product) return null;

  const images = [product.image, product.imageBack].filter(Boolean);
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto border-primary/20 bg-black/90 backdrop-blur-lg flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">
            {product.title}
          </DialogTitle>
        </DialogHeader>

        {/* --- Image Slider --- */}
        <div className="relative w-full aspect-video min-h-[450px] rounded-xl overflow-hidden bg-black mb-6">
          <img
            src={images[current]}
            alt={`${product.title} ${current + 1}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {images.length > 1 && (
            <>
              {/* Left button */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right button */}
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Pagination dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      index === current
                        ? "bg-white"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* --- Product Description --- */}
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground whitespace-pre-line">
            {product.fullDescription}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailDialog;
