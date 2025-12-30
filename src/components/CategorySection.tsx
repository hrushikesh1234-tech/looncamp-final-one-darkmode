import { Wifi, Car, Utensils, Waves, Mountain, TreePine, Snowflake, Coffee } from "lucide-react";

const categories = [
  { icon: Waves, label: "Beachfront", count: "2,340" },
  { icon: Mountain, label: "Mountain", count: "1,872" },
  { icon: TreePine, label: "Countryside", count: "3,156" },
  { icon: Snowflake, label: "Ski-in/out", count: "894" },
  { icon: Coffee, label: "City Center", count: "4,521" },
  { icon: Wifi, label: "Work Friendly", count: "2,103" },
  { icon: Car, label: "With Parking", count: "5,234" },
  { icon: Utensils, label: "Chef Kitchen", count: "1,456" },
];

const CategorySection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Explore by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Find the perfect stay for your travel style
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className="group flex flex-col items-center gap-3 p-4 lg:p-6 rounded-2xl bg-card hover:bg-primary hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground group-hover:text-primary-foreground transition-colors duration-300 text-sm">
                    {category.label}
                  </p>
                  <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-300">
                    {category.count}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
