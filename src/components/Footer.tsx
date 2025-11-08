import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Ziamt Auto</h3>
            <p className="text-muted-foreground mb-4">
              Your trusted partner for premium automotive parts and accessories. Quality you can depend on, service you can trust.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 glass-card rounded-lg hover:scale-110 hover:bg-primary/10 transition-all glow-effect"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-foreground" />
              </a>
              <a
                href="#"
                className="p-3 glass-card rounded-lg hover:scale-110 hover:bg-primary/10 transition-all glow-effect"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-foreground" />
              </a>
              <a
                href="#"
                className="p-3 glass-card rounded-lg hover:scale-110 hover:bg-primary/10 transition-all glow-effect"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-foreground" />
              </a>
              <a
                href="#"
                className="p-3 glass-card rounded-lg hover:scale-110 hover:bg-primary/10 transition-all glow-effect"
                aria-label="YouTube"
              >
                <Youtube size={20} className="text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Products</h4>
            <ul className="space-y-2">
              {["Engine Oils", "Transmission Fluids", "Gear Oils", "Accessories"].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Ziamt Auto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
