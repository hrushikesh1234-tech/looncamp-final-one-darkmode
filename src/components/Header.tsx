import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-primary-foreground font-display font-bold text-xl">S</span>
            </div>
            <span className="font-display text-xl font-semibold text-foreground">Staycation</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Explore
            </Link>
            <Link 
              to="/destinations" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Destinations
            </Link>
            <Link 
              to="/experiences" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Experiences
            </Link>
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              About
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              List Your Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-foreground font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                to="/destinations" 
                className="text-muted-foreground font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link 
                to="/experiences" 
                className="text-muted-foreground font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Experiences
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button variant="hero">
                  List Your Property
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
