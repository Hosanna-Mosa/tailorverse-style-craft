import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Elegant custom-tailored clothing showcase" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-balance leading-tight">
            Perfectly Tailored,
            <span className="block bg-gradient-to-r from-accent to-gold-dark bg-clip-text text-transparent">
              Uniquely You
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Custom-fit clothing that combines cutting-edge technology with timeless craftsmanship. 
            Experience the confidence of garments designed exclusively for your body.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-elegant group"
            >
              Start Your Fit Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-foreground/20 hover:border-accent hover:bg-secondary/50 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Explore Designs
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
