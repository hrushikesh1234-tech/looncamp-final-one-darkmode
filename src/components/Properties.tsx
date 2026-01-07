import { useState, useRef, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyCard from "./PropertyCard";
import { propertyAPI } from "@/lib/api";
import { Tent, Home, Building2 } from "lucide-react";

export interface Property {
  id?: string;
  slug: string;
  image: string;
  images: string[] | any[];
  title: string;
  price: string;
  pricePerNight?: string;
  priceNote: string;
  amenities: string[];
  is_top_selling: boolean;
  location: string;
  rating: number;
  category: "camping" | "cottage" | "villa";
  capacity: number;
  maxCapacity?: number;
  description: string;
  check_in_time?: string;
  check_out_time?: string;
  highlights?: string[];
  activities?: string[];
  policies?: string[];
  contact?: string;
  address?: string;
}

const categories = [
  { id: "camping", label: "Camping", icon: Tent, location: "Pawna" },
  { id: "cottage", label: "Cottages", icon: Home, location: "Pawna" },
  { id: "villa", label: "Villas", icon: Building2, location: "Lonavala" },
];

const Properties = () => {
  const [activeTab, setActiveTab] = useState("camping");
  const [properties, setProperties] = useState<Property[]>([]);
  const [categorySettings, setCategorySettings] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const isAutoScrolling = useRef(false);
  const sectionRefs = {
    camping: useRef<HTMLDivElement>(null),
    cottage: useRef<HTMLDivElement>(null),
    villa: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const savedTab = sessionStorage.getItem('activeCategoryTab');
    if (savedTab) {
      setActiveTab(savedTab);
      setTimeout(() => {
        const ref = sectionRefs[savedTab as keyof typeof sectionRefs];
        if (ref?.current) {
          ref.current.scrollIntoView({ behavior: "instant", block: "start" });
        }
      }, 100);
      sessionStorage.removeItem('activeCategoryTab');
    }

    const fetchProperties = async () => {
      try {
        const response = await propertyAPI.getPublicList();
        if (response.success) {
          const mappedProperties = response.data.map((p: any) => ({
            ...p,
            priceNote: p.price_note,
            isAvailable: p.is_available,
            image: p.images && p.images.length > 0 ? p.images[0].image_url : "https://images.unsplash.com/photo-1571508601166-972e0a1f3ced?w=800",
            images: p.images ? p.images.map((img: any) => img.image_url) : []
          }));
          setProperties(mappedProperties);
          if (response.categorySettings) {
            setCategorySettings(response.categorySettings);
            
            const sorted = [...categories].sort((a, b) => {
              const aClosed = response.categorySettings[a.id]?.is_closed ? 1 : 0;
              const bClosed = response.categorySettings[b.id]?.is_closed ? 1 : 0;
              return aClosed - bClosed;
            });
            
            const savedTab = sessionStorage.getItem('activeCategoryTab');
            if (!savedTab && sorted.length > 0) {
              setActiveTab(sorted[0].id);
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();

    const handleScrollToCategory = (e: any) => {
      const { categoryId } = e.detail;
      handleTabChange(categoryId);
    };

    window.addEventListener('scrollToCategory', handleScrollToCategory);

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (isAutoScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      window.removeEventListener('scrollToCategory', handleScrollToCategory);
      observer.disconnect();
    };
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const ref = sectionRefs[tabId as keyof typeof sectionRefs];
    if (ref?.current) {
      isAutoScrolling.current = true;
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 1000);
    }
  };

  const sortedCategories = [...categories].sort((a, b) => {
    const aClosed = categorySettings[a.id]?.is_closed ? 1 : 0;
    const bClosed = categorySettings[b.id]?.is_closed ? 1 : 0;
    return aClosed - bClosed;
  });

  return (
    <section id="properties" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              Our Collection
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-4 animate-fade-up delay-100">
            Featured <span className="text-primary">Properties</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up delay-200">
            Handpicked luxury stays designed for unforgettable experiences
          </p>
        </div>
      </div>

      {/* Tabs - Sticky */}
      <div className="sticky top-0 z-50 bg-secondary/80 backdrop-blur-xl border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-center py-4">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full max-w-lg">
              <TabsList className="grid w-full grid-cols-3 bg-card p-1.5 rounded-2xl shadow-sm" data-testid="tabs-property-categories">
                {sortedCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      data-testid={`button-tab-${category.id}`}
                      className="flex items-center gap-2 text-sm font-semibold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-teal transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{category.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-12">
        {/* Properties Sections */}
        {sortedCategories.map((category) => {
          const setting = categorySettings[category.id];
          const isClosed = setting?.is_closed;
          const categoryProperties = properties.filter((p) => p.category === category.id);
          const Icon = category.icon;
          
          return (
            <div
              key={category.id}
              id={category.id}
              ref={sectionRefs[category.id as keyof typeof sectionRefs]}
              className="mb-20 md:mb-28 scroll-mt-28"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground font-semibold">
                      {category.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Best experiences in {category.location}
                    </p>
                  </div>
                </div>
                
                {isClosed && (
                  <div className="bg-destructive/5 border border-destructive/20 rounded-2xl px-5 py-4 backdrop-blur-sm animate-fade-in">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                      <p className="text-destructive font-bold text-xs uppercase tracking-wider">Temporarily Closed</p>
                    </div>
                    <p className="text-foreground font-medium text-sm">{setting.reason}</p>
                  </div>
                )}
              </div>

              {/* Properties Grid */}
              <div
                className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-500 ${isClosed ? 'opacity-30 grayscale pointer-events-none scale-[0.98]' : 'opacity-100'}`}
                data-testid={`grid-properties-${category.id}`}
              >
                {categoryProperties.map((property, index) => (
                  <div
                    key={property.title}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    data-testid={`card-property-${property.title.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <PropertyCard id={property.id} slug={property.slug} {...property} />
                  </div>
                ))}
              </div>
              
              {isClosed && categoryProperties.length > 0 && (
                <div className="mt-10 text-center bg-card rounded-2xl py-6 px-6 border border-border/50">
                  <p className="text-muted-foreground font-medium">
                    Bookings for {category.label} are currently paused. Check back later.
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* Bottom CTA */}
        <div className="text-center pt-8 pb-4">
          <p className="text-muted-foreground mb-3">
            Can't find what you're looking for?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-teal-dark font-semibold transition-colors duration-300 group"
            data-testid="link-contact-recommendations"
          >
            Contact us for recommendations
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;