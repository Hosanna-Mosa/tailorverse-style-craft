import { Ruler, Palette, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Ruler,
    title: "Measure",
    description: "Get precise measurements using our virtual fitting technology or visit our studio for personalized assistance.",
  },
  {
    icon: Palette,
    title: "Customize",
    description: "Choose from premium fabrics, colors, and styles. Work with our stylists to create your perfect look.",
  },
  {
    icon: Sparkles,
    title: "Wear with Confidence",
    description: "Receive your custom garment, crafted to perfection. Experience the difference of clothing made just for you.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Your Perfect Fit in Three Steps
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience a seamless journey from measurement to your wardrobe
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 inline-flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-accent to-gold-dark p-8 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-12 h-12 text-foreground" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                
                <div className="text-6xl font-display font-bold text-accent/30 mb-4">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
