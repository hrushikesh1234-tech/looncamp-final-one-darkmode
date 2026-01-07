import { useState, useEffect } from "react";
import { Menu, X, Compass } from "lucide-react";

const navLinks = [
  { name: "Destinations", href: "#destinations" },
  { name: "Properties", href: "#properties" },
  { name: "Experience", href: "#properties" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-xl py-3 shadow-card border-b border-border/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className={`w-11 h-11 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rounded-2xl group-hover:scale-105 shadow-teal`}>
                <Compass className={`w-5 h-5 md:w-6 md:h-6 text-primary-foreground transition-transform duration-300 group-hover:rotate-45`} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-display font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-card"
              }`}>
                LoonCamp
              </span>
              <span className={`text-[10px] tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-card/70"
              }`}>
                Nature Retreats
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                  isScrolled 
                    ? "text-foreground/70 hover:text-foreground hover:bg-secondary" 
                    : "text-card/80 hover:text-card hover:bg-card/10"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#properties"
              className="ml-4 px-7 py-3 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded-full hover:bg-teal-light transition-all duration-300 shadow-teal hover:shadow-card-hover hover:scale-105"
            >
              Explore Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? "text-foreground hover:bg-secondary" 
                : "text-card hover:bg-card/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-[400px] opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="bg-card rounded-2xl shadow-card-hover border border-border/50 p-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground hover:bg-secondary text-base font-medium py-3.5 px-5 rounded-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#properties"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-6 py-4 bg-primary text-primary-foreground text-center font-semibold tracking-wide rounded-xl hover:bg-teal-light transition-all duration-300 shadow-teal"
              >
                Explore Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;