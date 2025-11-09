import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    title: string;
    image: string;
    description: string;
    fullDescription: string;
  } | null;
}

const ProductDetailDialog = ({ open, onOpenChange, product }: ProductDetailDialogProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto glass-card border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">{product.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-lg aspect-video bg-muted/20">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground whitespace-pre-line">
              {product.fullDescription}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailDialog;
