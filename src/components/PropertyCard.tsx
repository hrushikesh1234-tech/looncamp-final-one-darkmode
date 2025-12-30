import { Star, Heart, MapPin } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  type: string;
  amenities: string[];
}

const PropertyCard = ({
  image,
  title,
  location,
  price,
  rating,
  reviews,
  type,
  amenities,
}: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <article className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-soft"
          aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              isLiked ? "text-primary fill-primary" : "text-foreground"
            }`}
          />
        </button>

        {/* Property Type Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-semibold text-foreground shadow-soft">
          {type}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          {/* Price */}
          <div>
            <span className="font-display text-xl font-bold text-foreground">${price}</span>
            <span className="text-muted-foreground text-sm"> / night</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="font-semibold text-foreground">{rating}</span>
            <span className="text-muted-foreground text-sm">({reviews})</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
