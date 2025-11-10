import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, Zap, ArrowRight } from "lucide-react";
import gsap from "gsap";

const HeroAutomotive = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !buttonsRef.current || !featuresRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(
      buttonsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(
      featuresRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
      "-=0.4"
    );
  }, []);

  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 18% 12%) 0%, hsl(220 20% 8%) 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold font-heading leading-tight"
          >
            Professional <span className="gradient-text">Automotive</span>
            <br />
            Service & Parts
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Premium German-engineered RABINOL motor oils and automotive fluids. 
            Trusted by professionals for over 15 years.
          </p>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg glow-orange group"
            >
              View Products
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg"
            >
              Request Quote
            </Button>
          </div>

          {/* Features */}
          <div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-border/50"
          >
            <div className="automotive-card p-6 text-center space-y-3">
              <div className="inline-flex p-4 bg-primary/10 rounded-full">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold font-heading">Premium Quality</h3>
              <p className="text-muted-foreground">
                German-engineered products meeting international standards
              </p>
            </div>

            <div className="automotive-card p-6 text-center space-y-3">
              <div className="inline-flex p-4 bg-accent/10 rounded-full">
                <Zap className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold font-heading">High Performance</h3>
              <p className="text-muted-foreground">
                Advanced formulas for maximum engine protection
              </p>
            </div>

            <div className="automotive-card p-6 text-center space-y-3">
              <div className="inline-flex p-4 bg-primary/10 rounded-full">
                <Wrench className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold font-heading">Expert Support</h3>
              <p className="text-muted-foreground">
                Professional technical assistance for all your needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroAutomotive;
