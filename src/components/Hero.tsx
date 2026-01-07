import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-resort.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury dome resort by the lake at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-navy/40" />
      </div>

      {/* Floating Shapes - Geometric accents */}
      <div className="absolute top-1/4 left-[10%] w-20 h-20 border-2 border-primary/30 rounded-full animate-float delay-200" />
      <div className="absolute top-1/3 right-[15%] w-12 h-12 bg-primary/20 rounded-xl rotate-45 animate-float delay-500" />
      <div className="absolute bottom-1/3 left-[5%] w-8 h-8 bg-primary/30 rounded-lg animate-bounce-gentle" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-card/10 backdrop-blur-md rounded-full border border-card/20 mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-card text-sm font-medium tracking-wide">
            Premium Nature Escapes
          </span>
        </div>

        {/* Main Title */}
        <div className="mb-6 animate-fade-up delay-100">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-card tracking-tight leading-[1.1]">
            Discover Your
            <span className="block text-primary mt-2">Perfect Retreat</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-card/80 text-lg md:text-xl lg:text-2xl font-normal max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
          Handpicked luxury cottages and camping experiences at Pawna Lake & Lonavala
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
          <a
            href="#properties"
            className="group px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide rounded-full hover:bg-teal-light transition-all duration-500 shadow-teal hover:shadow-card-hover hover:scale-105 flex items-center gap-2"
          >
            Browse Properties
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#destinations"
            className="px-8 py-4 bg-card/10 backdrop-blur-md text-card font-semibold tracking-wide rounded-full border border-card/30 hover:bg-card/20 hover:border-card/50 transition-all duration-500"
          >
            Explore Destinations
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 animate-fade-up delay-400">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-semibold text-primary">15+</p>
            <p className="text-card/60 text-sm mt-1">Properties</p>
          </div>
          <div className="w-px h-12 bg-card/20 hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-semibold text-primary">4.9</p>
            <p className="text-card/60 text-sm mt-1">Avg Rating</p>
          </div>
          <div className="w-px h-12 bg-card/20 hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-semibold text-primary">500+</p>
            <p className="text-card/60 text-sm mt-1">Happy Guests</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#destinations"
          className="flex flex-col items-center gap-3 text-card/60 hover:text-primary transition-colors duration-300 group"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-medium">Scroll to explore</span>
          <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:border-primary transition-colors">
            <ArrowDown size={18} className="animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;