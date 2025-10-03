import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FlavourCard from "@/components/FlavourCard";
import StoreLocator from "@/components/StoreLocator";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import { Droplets, Leaf, Award, Users, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { getProductDisplayData } from "@/lib/productMapping";
import heroImage from "@/assets/hero-fresh.jpg";
import nimbuImage from "@/assets/nimbu.jpg";
import mangoBottle from "@/assets/mango-bottle.png";
import orangeImage from "@/assets/orange.png";
import pineappleImage from "@/assets/pineapple.png";
import jeeraImage from "@/assets/jeera.jpg";
import lichiImage from "@/assets/lichi.png";

const Home = () => {
  const { data: productsData, isLoading: productsLoading, error: productsError } = useProducts();
  
  // Fallback flavours for when API is not available
  const fallbackFlavours = [
    {
      name: "Mango",
      description: "Permitted Synthetic Food Colour(S) (INS-102, INS-124) and Added (Orange) Flavour(S) (Natural, Nature Indentical and Artificial Flavouring Substances)",
      image: mangoBottle,
      color: "fresh-mango",
      link: "/flavours/mango"
    },
    {
      name: "Jeera",
      description: "Permitted natural and synthetic food colour(s) (INS-150D, INS-102, INS-110, INS-122, INS-133) and added (Masala Soda) flavour(s) (natural, nature identical and artificial flavouring substances)",
      image: jeeraImage,
      color: "fresh-jeera",
      link: "/flavours/jeera"
    },
    {
      name: "Lichi",
      description: "Added (LICHI) Flavour(S) (Natural, Nature Identical and Artificial Flavouring Substances)",
      image: lichiImage,
      color: "fresh-lichi",
      link: "/flavours/lichi"
    },
    {
      name: "Pineapple",
      description: "Permitted Synthetic Food Colour(S) (INS-102) and Added (Pineapple) Flavour(S) (Natural, Nature Indentical and Artificial Flavouring Substances)",
      image: pineappleImage,
      color: "fresh-pineapple",
      link: "/flavours/pineapple"
    },
    {
      name: "Orange",
      description: "Permitted Synthetic Food Colour(S) (INS-102, INS-124) and Added (Orange) Flavour(S) (Natural, Nature Indentical and Artificial Flavouring Substances)",
      image: orangeImage,
      color: "fresh-orange",
      link: "/flavours/orange"
    },
    {
      name: "Nimbu",
      description: "Nimbu beverage crafted with premium ingredients: Acidity Regulator (INS-330, INS-297), Emulsifiers & Stabilizers (INS-414, INS-331), Edible Oils, Class II Preservatives (INS-211), Permitted Anti Caking Agent (INS-554), Added (Nimboo) Flavour(S) (Natural, Nature Identical and Artificial Flavouring Substances).",
      image: nimbuImage,
      color: "fresh-nimbu",
      link: "/flavours/nimbu"
    }
  ];

  // Transform API products to flavour format
  const apiProducts = productsData?.products?.map(product => {
    const displayData = getProductDisplayData(product.slug, product.name);
    return {
      name: product.name,
      description: product.short_description,
      image: displayData.image,
      color: displayData.color,
      link: `/flavours/${product.slug}`,
      price: product.price,
      inStock: product.is_in_stock,
    };
  }) || [];

  // Use API products if available, otherwise fallback
  const flavours = apiProducts.length > 0 ? apiProducts : fallbackFlavours;

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
            {productsError && (
              <p className="text-amber-600 text-sm mt-2">
                ⚠️ Using offline data - API connection unavailable
              </p>
            )}
          </div>
          
          {productsLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2 text-muted-foreground">Loading fresh flavours...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flavours.map((flavour, index) => (
                <FlavourCard key={flavour.name || index} {...flavour} />
              ))}
            </div>
          )}
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

      {/* Testimonials Section */}
      <Testimonials />

      {/* Store Locator Section */}
      <StoreLocator />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Home;