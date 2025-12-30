import PropertyCard from "./PropertyCard";
import propertyCabin from "@/assets/property-cabin.jpg";
import propertyBeach from "@/assets/property-beach.jpg";
import propertyLoft from "@/assets/property-loft.jpg";

const featuredProperties = [
  {
    id: 1,
    image: propertyCabin,
    title: "Cozy Mountain Retreat",
    location: "Aspen, Colorado",
    price: 289,
    rating: 4.9,
    reviews: 127,
    type: "Cabin",
    amenities: ["Mountain View", "Hot Tub", "Fireplace"],
  },
  {
    id: 2,
    image: propertyBeach,
    title: "Tropical Beach Bungalow",
    location: "Maldives",
    price: 459,
    rating: 4.8,
    reviews: 89,
    type: "Beach House",
    amenities: ["Oceanfront", "Private Beach", "Pool"],
  },
  {
    id: 3,
    image: propertyLoft,
    title: "Industrial Chic Loft",
    location: "Brooklyn, New York",
    price: 195,
    rating: 4.7,
    reviews: 203,
    type: "Apartment",
    amenities: ["City View", "Rooftop", "Gym"],
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Featured Stays
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Handpicked for You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our collection of stunning vacation rentals, carefully curated for unforgettable experiences.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProperties.map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            View all properties
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
