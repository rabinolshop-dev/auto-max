import { CheckCircle2 } from "lucide-react";
import aboutShopImage from "@/assets/about-shop.jpg";

const AboutSection = () => {
  const features = [
    "Premium quality automotive parts",
    "Expert technical support",
    "Fast delivery service",
    "Warranty on all products",
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="glass-card p-2 rounded-2xl">
              <img
                src={aboutShopImage}
                alt="AutoMax Shop"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl max-w-xs">
              <p className="text-3xl font-bold gradient-text">15+</p>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">AutoMax</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              For over 15 years, AutoMax has been the trusted destination for premium automotive parts and accessories. We specialize in providing high-quality products that keep your vehicle performing at its best.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our commitment to excellence and customer satisfaction has made us a leader in the automotive parts industry. We work directly with renowned manufacturers like RABINOL to ensure you receive only genuine, certified products.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
