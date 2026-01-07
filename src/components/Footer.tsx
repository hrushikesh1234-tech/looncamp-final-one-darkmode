import { Instagram, Phone, Mail, MapPin, ArrowUpRight, Compass } from "lucide-react";

const quickLinks = [
  { name: "Properties", href: "#properties" },
  { name: "Destinations", href: "#destinations" },
  { name: "About Us", href: "#" },
  { name: "FAQs", href: "#" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
                <Compass className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-semibold tracking-tight text-background">
                  LoonCamp
                </span>
                <span className="text-background/50 text-[10px] tracking-[0.15em] uppercase">
                  Nature Retreats
                </span>
              </div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Curating extraordinary escapes at Pawna Lake and Lonavala.
              Experience nature, luxury, and unforgettable memories.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/leestays/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-background/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow on Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-background">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-background/60 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-background">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+918669505727"
                className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors duration-300 text-sm"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-background/10">
                  <Phone size={16} />
                </div>
                <span>+91 8669 505 727</span>
              </a>
              <a
                href="mailto:hrushikeshmore953@gmail.com"
                className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors duration-300 text-sm"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-background/10">
                  <Mail size={16} />
                </div>
                <span>hrushikeshmore953@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/60 text-sm">
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-background/10 flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <span>Pawna Lake, Lonavala,<br />Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-background">
              Ready to Escape?
            </h4>
            <p className="text-background/60 text-sm mb-6">
              Get in touch for personalized recommendations and special offers.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=+918669505727&text=I%27m%20interested%20in%20booking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-teal-light transition-all duration-300 shadow-teal hover:scale-105"
            >
              Start Planning
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} LoonCamp. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/40">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;