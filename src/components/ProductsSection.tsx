import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.png";
import product6 from "@/assets/product-6.png";

const products = [
  {
    id: 1,
    title: "RABINOL Motor Engine Oil 0W-20 – High Performance 4L",
    image: product1,
    description: "Premium synthetic motor oil for maximum engine protection and performance in all conditions.",
  },
  {
    id: 2,
    title: "RABINOL Special Tec DX1 5W-30 Motor Oil SN",
    image: product2,
    description: "Advanced formula providing superior protection against wear, deposits, and oxidation.",
  },
  {
    id: 3,
    title: "RABINOL Special Tec ATF DEXRON-VI 6L",
    image: product3,
    description: "Automatic transmission fluid with exceptional thermal stability and long service life.",
  },
  {
    id: 4,
    title: "RABINOL Gear Oil 75W-85 GL-5",
    image: product4,
    description: "High-performance gear oil for optimal protection under extreme pressure and temperature.",
  },
  {
    id: 5,
    title: "RABINOL Motor Engine Oil 10W-40 4L",
    image: product5,
    description: "Semi-synthetic motor oil providing excellent engine cleanliness and wear protection.",
  },
  {
    id: 6,
    title: "RABINOL Special Tec DX2 5W-40",
    image: product6,
    description: "Fully synthetic oil with advanced additives for turbocharged and naturally aspirated engines.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium selection of RABINOL motor oils and automotive fluids
          </p>
        </div>

        <SearchBar />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
                title={product.title}
                image={product.image}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
