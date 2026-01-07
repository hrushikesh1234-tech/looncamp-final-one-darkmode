import { getOptimizedImageUrl } from "@/lib/cloudinary";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, Star, MapPin, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

interface PropertyCardProps {
  id?: string;
  slug?: string;
  images?: string[];
  image: string;
  title: string;
  price: string;
  priceNote: string;
  amenities: string[];
  isTopSelling?: boolean;
  isAvailable?: boolean;
  location?: string;
  rating?: number;
}

const PropertyCard = ({
  id = "1",
  slug,
  images,
  image,
  title,
  price,
  priceNote,
  amenities,
  isTopSelling = false,
  isAvailable = true,
  location = "Pawna Lake",
  rating = 4.9,
}: PropertyCardProps) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  
  const propertyImages = images && images.length > 0 ? images : [image];
  const navigationId = slug || id;

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/property/${navigationId}`;
    const text = `🏡 *${title}*\n📍 ${location}\n💰 *${price}* ${priceNote}\n\nCheck out this beautiful property on LoonCamp:\n${shareUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://api.whatsapp.com/send?phone=918669505727&text=I%27m%20interested%20in%20booking%20${encodeURIComponent(title)}`, '_blank');
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      setCurrentImageIndex((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1));
    } else if (diff < -minSwipeDistance) {
      setCurrentImageIndex((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1));
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleNavigate = () => {
    const activeTab = document.querySelector('[data-state="active"][data-testid^="button-tab-"]');
    if (activeTab) {
      const tabId = activeTab.getAttribute('data-testid')?.replace('button-tab-', '');
      if (tabId) {
        sessionStorage.setItem('activeCategoryTab', tabId);
      }
    }
    navigate(`/property/${navigationId}`);
  };

  return (
    <div className="group h-full">
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 cursor-pointer h-full border border-border/50">
        <div 
          className="block h-full"
          onClick={handleNavigate}
        >
          {/* Image Container */}
          <div 
            className="relative overflow-hidden aspect-[4/3]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={getOptimizedImageUrl(propertyImages[currentImageIndex], 600)}
              alt={title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Navigation Arrows */}
            {propertyImages.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/90 hover:bg-card text-foreground shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/90 hover:bg-card text-foreground shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {propertyImages.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? "bg-primary w-6" : "bg-card/60 w-1.5"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
              <Badge 
                className={`font-semibold text-xs px-3 py-1.5 rounded-full border-none shadow-sm ${
                  isAvailable 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {isAvailable ? "Available" : "Booked"}
              </Badge>
              {isTopSelling && (
                <Badge className="bg-card text-foreground font-medium px-3 py-1.5 rounded-full shadow-sm border border-border/50 flex items-center gap-1">
                  <Star className="w-3 h-3 text-primary fill-primary" />
                  Top Rated
                </Badge>
              )}
            </div>

            {/* Rating */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-card/95 backdrop-blur-sm rounded-full shadow-sm">
              <Star className="w-3.5 h-3.5 text-primary fill-primary" />
              <span className="text-foreground text-sm font-semibold">{rating}</span>
            </div>

            {/* Quick Actions */}
            <div className="absolute bottom-3 right-3 flex gap-2 z-20">
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full w-10 h-10 bg-card/95 hover:bg-card text-foreground shadow-sm"
                onClick={handleShare}
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                className="rounded-full w-10 h-10 bg-primary hover:bg-teal-light text-primary-foreground shadow-teal"
                onClick={handleBookNow}
                title="Book Now"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>

            {/* Location */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-card text-sm z-20 bg-navy/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              <span className="font-medium">{location}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-display text-xl font-semibold text-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>

            {/* Amenities */}
            <div className="flex flex-wrap gap-2 mb-4">
              {amenities.slice(0, 3).map((amenity, index) => (
                <span
                  key={index}
                  className="text-xs font-medium px-2.5 py-1 bg-secondary text-muted-foreground rounded-lg"
                >
                  {amenity}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div>
                <span className="text-2xl font-display font-bold text-primary">
                  {price}
                </span>
                <span className="text-muted-foreground text-xs ml-1">/{priceNote}</span>
              </div>

              <Button variant="ghost" className="text-primary font-semibold p-0 h-auto hover:bg-transparent hover:text-teal-dark group/link">
                View Details
                <span className="inline-block transition-transform group-hover/link:translate-x-1 ml-1">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;