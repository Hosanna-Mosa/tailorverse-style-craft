const About = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
            Where Technology Meets Tailoring
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-gold-dark mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 animate-fade-in">
            At <span className="font-semibold text-foreground">TailorVerse</span>, we believe that clothing should be as unique as the person wearing it. 
            By blending advanced measurement technology with artisanal craftsmanship, we create garments that deliver unparalleled comfort, 
            confidence, and style.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in">
            Every piece is made to measure, ensuring a perfect fit that celebrates your individuality. 
            From the first measurement to the final stitch, your journey with us is personal, seamless, and transformative.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
