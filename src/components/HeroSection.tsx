import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury villa with infinity pool overlooking the ocean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft" />
            <span className="text-sm font-medium text-muted-foreground">
              Over 10,000+ unique stays worldwide
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-primary">Escape</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover handpicked vacation rentals, from cozy mountain cabins to stunning beachfront villas. Your dream getaway awaits.
          </p>

          {/* Search Bar */}
          <div className="bg-card rounded-2xl p-2 shadow-elevated max-w-4xl mx-auto" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col lg:flex-row items-stretch gap-2">
              {/* Location */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group">
                <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs font-medium text-muted-foreground">Location</p>
                  <p className="text-sm font-semibold text-foreground">Where are you going?</p>
                </div>
              </div>

              <div className="hidden lg:block w-px bg-border" />

              {/* Check-in */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group">
                <Calendar className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs font-medium text-muted-foreground">Check in</p>
                  <p className="text-sm font-semibold text-foreground">Add dates</p>
                </div>
              </div>

              <div className="hidden lg:block w-px bg-border" />

              {/* Guests */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group">
                <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs font-medium text-muted-foreground">Guests</p>
                  <p className="text-sm font-semibold text-foreground">Add guests</p>
                </div>
              </div>

              {/* Search Button */}
              <Button variant="hero" size="lg" className="lg:w-auto gap-2">
                <Search className="w-5 h-5" />
                <span className="lg:hidden xl:inline">Search</span>
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-semibold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium">50K+ happy guests</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-accent fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm font-medium ml-1">4.9 average rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
