import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blush via-secondary to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-soft">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-foreground">
              Limited Slots Available This Month
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance">
            Ready to Experience the Perfect Fit?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied customers who've discovered the confidence that comes with 
            clothing crafted exclusively for them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-elegant group"
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Book Virtual Fitting
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground/20 hover:border-accent hover:bg-background/80 backdrop-blur-sm font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Explore Custom Designs
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Free consultation • No commitment required • 30-day satisfaction guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
