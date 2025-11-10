import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";
import aboutShopImage from "@/assets/about-shop.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const features = [
    "Premium quality automotive parts",
    "Expert technical support",
    "Fast delivery service",
    "Warranty on all products",
  ];

  useEffect(() => {
    if (!imageRef.current || !contentRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden section-divider">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="automotive-card p-4 rounded-2xl">
              <img
                src={aboutShopImage}
                alt="RABINOL Shop"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 automotive-card p-6 rounded-xl max-w-xs glow-orange">
              <p className="text-4xl font-bold gradient-text font-heading">15+</p>
              <p className="text-muted-foreground font-medium">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              About <span className="gradient-text">RABINOL</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 15 years, we've been the trusted destination for premium automotive parts and accessories. We specialize in providing high-quality RABINOL products that keep your vehicle performing at its best.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us a leader in the automotive parts industry. We work directly with German manufacturers to ensure you receive only genuine, certified products.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="automotive-card p-4 rounded-xl">
                <Award className="text-primary mb-2" size={32} />
                <h3 className="font-bold text-lg mb-1">Certified Quality</h3>
                <p className="text-sm text-muted-foreground">International standards</p>
              </div>
              <div className="automotive-card p-4 rounded-xl">
                <Users className="text-accent mb-2" size={32} />
                <h3 className="font-bold text-lg mb-1">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Professional support</p>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="text-foreground font-medium">{feature}</span>
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
