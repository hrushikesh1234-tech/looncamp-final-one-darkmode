import DestinationCard from "./DestinationCard";
import pawnaLake from "@/assets/pawna-lake.jpg";
import lonavala from "@/assets/lonavala.jpg";

const destinations = [
  {
    image: pawnaLake,
    title: "Pawna Lake",
    subtitle: "Lakeside Luxury Retreats",
    overlayTitle: "Pawna Lake",
    propertyCount: 8,
    categoryId: "camping"
  },
  {
    image: lonavala,
    title: "Lonavala",
    subtitle: "Mountain Escapes",
    overlayTitle: "Lonavala",
    propertyCount: 5,
    categoryId: "villa"
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 animate-fade-up">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                Destinations
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold leading-tight animate-fade-up delay-100">
              Where Will Your <br className="hidden md:block" />
              <span className="text-primary">Adventure</span> Begin?
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md animate-fade-up delay-200">
            Choose from our carefully curated destinations, each offering unique experiences and unforgettable memories.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.title}
              className="animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;