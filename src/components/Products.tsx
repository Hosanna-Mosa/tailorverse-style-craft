import { Card, CardContent } from "@/components/ui/card";
import blazerImg from "@/assets/product-blazer.jpg";
import shirtImg from "@/assets/product-shirt.jpg";
import trousersImg from "@/assets/product-trousers.jpg";
import dressImg from "@/assets/product-dress.jpg";

const products = [
  {
    id: 1,
    name: "Custom Tailored Blazer",
    description: "Precision-crafted blazer tailored to your exact measurements",
    price: "From $349",
    image: blazerImg,
  },
  {
    id: 2,
    name: "Perfect Fit Dress Shirt",
    description: "Premium cotton shirt designed for your unique shape",
    price: "From $129",
    image: shirtImg,
  },
  {
    id: 3,
    name: "Bespoke Trousers",
    description: "Impeccably fitted trousers in your choice of fabric",
    price: "From $189",
    image: trousersImg,
  },
  {
    id: 4,
    name: "Custom Silk Dress",
    description: "Elegant dress crafted to complement your silhouette",
    price: "From $429",
    image: dressImg,
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Our Collections
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every piece is crafted to your unique measurements, ensuring a perfect fit that enhances your confidence and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border/50 hover:border-gold transition-all duration-300 hover:shadow-lg animate-fade-in bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-gold font-semibold text-lg">
                  {product.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gold text-white px-8 py-4 rounded-md hover:bg-gold-dark transition-colors duration-300 font-semibold">
            Explore All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
