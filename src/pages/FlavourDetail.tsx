import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Leaf, Droplets, Clock, Package, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FlavourDetail = () => {
  const { flavour } = useParams();

  const flavourData: Record<string, any> = {
    mango: {
      name: "Mango",
      color: "fresh-mango",
      image: "https://images.unsplash.com/photo-1523130165979-4ac79c59fe6a?w=800&h=600&fit=crop",
      description: "Rich and tropical mango flavor with authentic taste sourced from the finest Indian mangoes.",
      longDescription: "Our Mango beverage is crafted using handpicked Alphonso mangoes from Maharashtra, known for their exceptional sweetness and aromatic quality. The drink delivers an authentic mango experience with a perfect balance of sweetness and natural fruit pulp.",
      ingredients: [
        "Alphonso Mango Pulp (25%)",
        "Purified Water",
        "Natural Sugar",
        "Citric Acid",
        "Natural Mango Flavor",
        "Vitamin C",
        "Beta Carotene"
      ],
      nutritionPer100ml: {
        calories: 52,
        carbs: "12.8g",
        sugar: "11.2g",
        fat: "0.1g",
        protein: "0.3g",
        vitaminC: "15mg"
      },
      process: [
        "Selection of premium Alphonso mangoes",
        "Fresh pulp extraction using modern technology",
        "Blending with purified water and natural sweeteners",
        "Pasteurization to ensure safety and shelf life",
        "Quality testing for taste and nutritional value",
        "Aseptic packaging in sterilized environment"
      ],
      inventory: {
        current: 15420,
        target: 20000,
        status: "In Stock"
      }
    },
    jeera: {
      name: "Jeera",
      color: "fresh-jeera",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      description: "Traditional cumin-spiced refreshing drink that aids digestion and provides natural cooling.",
      longDescription: "Our Jeera beverage is a traditional Indian drink made with roasted cumin seeds, known for its digestive properties and cooling effect. This refreshing drink is perfect for hot weather and aids in digestion while providing essential minerals.",
      ingredients: [
        "Roasted Cumin Powder",
        "Purified Water",
        "Rock Salt",
        "Black Salt",
        "Natural Mint Extract",
        "Lemon Juice",
        "Natural Spices"
      ],
      nutritionPer100ml: {
        calories: 18,
        carbs: "4.2g",
        sugar: "0.8g",
        fat: "0.6g",
        protein: "0.9g",
        iron: "2.1mg"
      },
      process: [
        "Selection and cleaning of premium cumin seeds",
        "Dry roasting to enhance flavor and aroma",
        "Fine grinding to perfect consistency",
        "Blending with purified water and natural salts",
        "Addition of mint and lemon for freshness",
        "Filtration and quality control testing"
      ],
      inventory: {
        current: 8750,
        target: 12000,
        status: "Moderate Stock"
      }
    },
    lychee: {
      name: "Lychee",
      color: "fresh-lychee",
      image: "https://images.unsplash.com/photo-1619158884617-2ad5b6d8e9b2?w=800&h=600&fit=crop",
      description: "Exotic and delicate lychee flavor with a perfect balance of sweetness and floral notes.",
      longDescription: "Our Lychee beverage captures the exotic essence of this tropical fruit, known for its delicate floral aroma and sweet taste. Sourced from the best lychee orchards, this drink offers a unique and refreshing experience.",
      ingredients: [
        "Lychee Fruit Concentrate (20%)",
        "Purified Water",
        "Natural Sugar",
        "Citric Acid",
        "Natural Lychee Flavor",
        "Vitamin C",
        "Natural Preservatives"
      ],
      nutritionPer100ml: {
        calories: 45,
        carbs: "11.1g",
        sugar: "10.4g",
        fat: "0.1g",
        protein: "0.5g",
        vitaminC: "18mg"
      },
      process: [
        "Fresh lychee selection and peeling",
        "Juice extraction preserving natural essence",
        "Concentration process to intensify flavor",
        "Blending with purified water and vitamins",
        "Pasteurization for safety and freshness",
        "Premium packaging with quality seals"
      ],
      inventory: {
        current: 6890,
        target: 10000,
        status: "Low Stock"
      }
    },
    pineapple: {
      name: "Pineapple",
      color: "fresh-pineapple",
      image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&h=600&fit=crop",
      description: "Tangy and refreshing pineapple drink bursting with tropical sunshine and natural enzymes.",
      longDescription: "Our Pineapple beverage delivers the perfect tropical experience with its tangy-sweet flavor profile. Rich in natural enzymes and vitamin C, this drink is both refreshing and nutritious, made from carefully selected pineapples.",
      ingredients: [
        "Pineapple Juice Concentrate (30%)",
        "Purified Water",
        "Natural Cane Sugar",
        "Citric Acid",
        "Natural Pineapple Flavor",
        "Bromelain Enzyme",
        "Vitamin C"
      ],
      nutritionPer100ml: {
        calories: 48,
        carbs: "11.8g",
        sugar: "10.6g",
        fat: "0.1g",
        protein: "0.4g",
        vitaminC: "20mg"
      },
      process: [
        "Selection of ripe, sweet pineapples",
        "Core removal and fresh juice extraction",
        "Enzyme preservation for health benefits",
        "Concentration to enhance natural sweetness",
        "Blending with purified water and vitamins",
        "Cold chain processing for freshness"
      ],
      inventory: {
        current: 12340,
        target: 15000,
        status: "Good Stock"
      }
    },
    orange: {
      name: "Orange",
      color: "fresh-orange",
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=800&h=600&fit=crop",
      description: "Classic citrus burst with vitamin C from hand-picked oranges for a zesty experience.",
      longDescription: "Our Orange beverage is made from premium Valencia oranges, delivering a classic citrus experience packed with natural vitamin C. The perfect balance of sweet and tangy makes it a timeless favorite for all ages.",
      ingredients: [
        "Valencia Orange Juice (35%)",
        "Purified Water",
        "Natural Sugar",
        "Orange Pulp",
        "Citric Acid",
        "Natural Orange Flavor",
        "Vitamin C",
        "Beta Carotene"
      ],
      nutritionPer100ml: {
        calories: 47,
        carbs: "11.5g",
        sugar: "10.8g",
        fat: "0.2g",
        protein: "0.7g",
        vitaminC: "25mg"
      },
      process: [
        "Hand-picking of Valencia oranges at peak ripeness",
        "Fresh juice extraction with pulp retention",
        "Vitamin C fortification process",
        "Natural sugar balancing for optimal taste",
        "Flash pasteurization to preserve nutrients",
        "Hygienic bottling and sealing process"
      ],
      inventory: {
        current: 18750,
        target: 22000,
        status: "High Stock"
      }
    },
    lemon: {
      name: "Lemon",
      color: "fresh-lemon",
      image: "https://images.unsplash.com/photo-1568485248653-233e4968c4fd?w=800&h=600&fit=crop",
      description: "Crisp and invigorating lemon refresher perfect for hydration and natural detox.",
      longDescription: "Our Lemon beverage is a crisp and invigorating drink made from freshly squeezed lemons. Known for its detoxifying properties and refreshing taste, it's the perfect choice for hydration and natural wellness.",
      ingredients: [
        "Fresh Lemon Juice (25%)",
        "Purified Water",
        "Natural Sugar",
        "Lemon Zest Extract",
        "Citric Acid",
        "Natural Lemon Flavor",
        "Electrolytes"
      ],
      nutritionPer100ml: {
        calories: 28,
        carbs: "7.2g",
        sugar: "6.8g",
        fat: "0.1g",
        protein: "0.3g",
        vitaminC: "22mg"
      },
      process: [
        "Selection of fresh, juicy lemons",
        "Cold-press extraction to preserve nutrients",
        "Zest extraction for enhanced flavor",
        "Electrolyte addition for hydration benefits",
        "Natural sweetening and pH balancing",
        "Clean bottling with minimal processing"
      ],
      inventory: {
        current: 14200,
        target: 18000,
        status: "Good Stock"
      }
    }
  };

  const data = flavourData[flavour as string];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Flavour Not Found</h1>
          <Link to="/">
            <Button variant="fresh">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const inventoryPercentage = (data.inventory.current / data.inventory.target) * 100;
  const getInventoryColor = () => {
    if (inventoryPercentage >= 75) return "bg-green-500";
    if (inventoryPercentage >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${data.image})` }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"
          style={{ 
            background: `linear-gradient(135deg, hsl(var(--${data.color})) / 0.8, transparent)` 
          }}
        />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <Badge 
                className="mb-4 text-white border-white/20"
                style={{ backgroundColor: `hsl(var(--${data.color}))` }}
              >
                Fresh Natural Beverage
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {data.name}
              </h1>
              <p className="text-xl text-white/90 mb-6">
                {data.description}
              </p>
              <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-4 w-4" />
                Contact for Orders
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card className="bg-gradient-card border-0 shadow-card-fresh">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  About Our {data.name} Beverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {data.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Ingredients */}
            <Card className="bg-gradient-card border-0 shadow-card-fresh">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-primary" />
                  Ingredients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {data.ingredients.map((ingredient: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: `hsl(var(--${data.color}))` }}
                      />
                      <span className="text-sm">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Manufacturing Process */}
            <Card className="bg-gradient-card border-0 shadow-card-fresh">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Manufacturing Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.process.map((step: string, index: number) => (
                    <div key={index} className="flex items-start gap-4">
                      <div 
                        className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold"
                        style={{ backgroundColor: `hsl(var(--${data.color}))` }}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Nutrition Facts */}
            <Card className="bg-gradient-card border-0 shadow-card-fresh">
              <CardHeader>
                <CardTitle className="text-lg">Nutrition Facts</CardTitle>
                <p className="text-sm text-muted-foreground">Per 100ml serving</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(data.nutritionPer100ml).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="font-medium">{String(value)}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Inventory Status */}
            <Card className="bg-gradient-card border-0 shadow-card-fresh">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Current Inventory
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge 
                    variant="outline"
                    className={`${getInventoryColor()} text-white border-0`}
                  >
                    {data.inventory.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current Stock</span>
                    <span className="font-medium">{data.inventory.current.toLocaleString()} units</span>
                  </div>
                  <Progress 
                    value={inventoryPercentage} 
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0</span>
                    <span>Target: {data.inventory.target.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Orders */}
            <Card className="bg-gradient-fresh text-white border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  For Distributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/90 text-sm">
                  Interested in stocking our {data.name} beverage? Get in touch for wholesale pricing and distribution opportunities.
                </p>
                <Link to="/distributors">
                  <Button variant="outline" className="w-full bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavourDetail;