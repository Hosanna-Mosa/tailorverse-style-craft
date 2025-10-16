import { Target, Leaf, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Perfect Fit Guaranteed",
    description: "Advanced measurement technology ensures every garment fits your unique body perfectly, eliminating the frustration of off-the-rack sizing.",
  },
  {
    icon: Leaf,
    title: "Sustainable Craftsmanship",
    description: "Made-to-order production reduces waste. Premium, ethically-sourced fabrics that last. Fashion that's kind to you and the planet.",
  },
  {
    icon: Sparkles,
    title: "Personalized Styling",
    description: "Work with expert stylists to create pieces that reflect your personality. Every detail customized to match your vision and lifestyle.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Why Choose TailorVerse?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of truly personalized fashion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 inline-flex">
                  <div className="bg-gradient-to-br from-blush to-secondary p-6 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <Icon className="w-10 h-10 text-blush-foreground" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
