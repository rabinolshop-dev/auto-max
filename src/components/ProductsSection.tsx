import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

const products = [
  {
    id: 1,
    title: "RABINOL Motor Engine Oil 0W-20 – High Performance 4L",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    description: "Premium synthetic motor oil for maximum engine protection and performance in all conditions.",
  },
  {
    id: 2,
    title: "RABINOL Special Tec DX1 5W-30 Motor Oil SN",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
    description: "Advanced formula providing superior protection against wear, deposits, and oxidation.",
  },
  {
    id: 3,
    title: "RABINOL Special Tec ATF DEXRON-VI 6L",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    description: "Automatic transmission fluid with exceptional thermal stability and long service life.",
  },
  {
    id: 4,
    title: "RABINOL Gear Oil 75W-85 GL-5",
    image: "https://images.unsplash.com/photo-1605816571853-2820a0e039a6?w=800&q=80",
    description: "High-performance gear oil for optimal protection under extreme pressure and temperature.",
  },
  {
    id: 5,
    title: "RABINOL Motor Engine Oil 10W-40 4L",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    description: "Semi-synthetic motor oil providing excellent engine cleanliness and wear protection.",
  },
  {
    id: 6,
    title: "RABINOL Special Tec DX2 5W-40",
    image: "https://images.unsplash.com/photo-1632823470565-9baee5d3c8a9?w=800&q=80",
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
