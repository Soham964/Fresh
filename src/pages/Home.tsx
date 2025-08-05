import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FlavourCard from "@/components/FlavourCard";
import { Droplets, Leaf, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fresh.jpg";

const Home = () => {
  const flavours = [
    {
      name: "Mango",
      description: "Rich and tropical mango flavor with authentic taste sourced from the finest Indian mangoes.",
      image: "https://images.unsplash.com/photo-1523130165979-4ac79c59fe6a?w=400&h=300&fit=crop",
      color: "fresh-mango",
      link: "/flavours/mango"
    },
    {
      name: "Jeera",
      description: "Traditional cumin-spiced refreshing drink that aids digestion and provides natural cooling.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      color: "fresh-jeera",
      link: "/flavours/jeera"
    },
    {
      name: "Lychee",
      description: "Exotic and delicate lychee flavor with a perfect balance of sweetness and floral notes.",
      image: "https://images.unsplash.com/photo-1619158884617-2ad5b6d8e9b2?w=400&h=300&fit=crop",
      color: "fresh-lychee",
      link: "/flavours/lychee"
    },
    {
      name: "Pineapple",
      description: "Tangy and refreshing pineapple drink bursting with tropical sunshine and natural enzymes.",
      image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=400&h=300&fit=crop",
      color: "fresh-pineapple",
      link: "/flavours/pineapple"
    },
    {
      name: "Orange",
      description: "Classic citrus burst with vitamin C from hand-picked oranges for a zesty experience.",
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400&h=300&fit=crop",
      color: "fresh-orange",
      link: "/flavours/orange"
    },
    {
      name: "Lemon",
      description: "Crisp and invigorating lemon refresher perfect for hydration and natural detox.",
      image: "https://images.unsplash.com/photo-1568485248653-233e4968c4fd?w=400&h=300&fit=crop",
      color: "fresh-lemon",
      link: "/flavours/lemon"
    }
  ];

  const features = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Made with real fruit extracts and natural ingredients, no artificial flavors or preservatives."
    },
    {
      icon: Droplets,
      title: "Pure Water",
      description: "Filtered and purified water ensuring the highest quality and taste in every bottle."
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "ISO certified manufacturing with strict quality controls and international standards."
    },
    {
      icon: Users,
      title: "Trusted Brand",
      description: "Backed by Phoenix India R&D Group and marketed by Universe Water House."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Fresh
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Natural Beverages
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover our premium range of natural fruit beverages crafted with love and the finest ingredients from India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="#flavours">Explore Flavours</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/distributors">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Fresh?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're committed to delivering the highest quality beverages using natural ingredients and sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card-fresh transition-all duration-300 hover:scale-105 bg-gradient-card border-0">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-fresh rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flavours Section */}
      <section id="flavours" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Flavours
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our diverse range of natural fruit beverages, each crafted with unique ingredients and traditional recipes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flavours.map((flavour, index) => (
              <FlavourCard key={index} {...flavour} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-gradient-fresh text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Backed by Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Research & Development</h3>
              <p className="text-white/90">
                Developed by <strong>Phoenix India Research and Development Group</strong>, 
                ensuring scientific excellence in every formulation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Marketing & Distribution</h3>
              <p className="text-white/90">
                Marketed by <strong>Universe Water House and Development Group</strong>, 
                bringing our products to markets across India.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/distributors">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Join Our Network
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;