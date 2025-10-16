import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    image: testimonial1,
    quote: "The fit is absolutely perfect. I've never felt more confident in my clothes. TailorVerse transformed how I dress for work.",
  },
  {
    name: "Maya Patel",
    role: "Creative Consultant",
    image: testimonial2,
    quote: "Finally, clothing that fits my body and my style. The personalized experience made all the difference. Simply exceptional.",
  },
  {
    name: "Jordan Williams",
    role: "Tech Entrepreneur",
    image: testimonial3,
    quote: "From measurement to delivery, everything was seamless. The quality and comfort are unmatched. Worth every penny.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Loved by Fashion-Forward Professionals
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from those who've experienced the TailorVerse difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p className="text-lg text-foreground mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - TailorVerse customer`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
