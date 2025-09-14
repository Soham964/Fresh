import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Leaf, Droplets, Clock, Package, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import nimbuImage from "@/assets/nimbu.jpg";
import mangoBottle from "@/assets/mango-bottle.png";
import orangeImage from "@/assets/orange.png";
import pineappleImage from "@/assets/pineapple.png";
import jeeraImage from "@/assets/jeera.jpg";
import lichiImage from "@/assets/lichi.png";

const FlavourDetail = () => {
  const { flavour } = useParams();

  const flavourData: Record<string, any> = {
    mango: {
      name: "Mango",
      color: "fresh-mango",
      image: mangoBottle,
      description: "Permitted Synthetic Food Colour(S) (INS-102, INS-124) and Added (Orange) Flavour(S) (Natural, Nature Indentical and Artificial Flavouring Substances)",
      longDescription: "Contains:\nPermitted Synthetic Food Colour(S) (INS-102, INS-124) and Added (Orange) Flavour(S) (Natural, Nature Indentical and Artificial Flavouring Substances)",
      ingredients: [
        "Acidity regulator (INS-330, INS-331)",
        "Emulsifiers & Stabilizers (INS-414, INS-19)",
        "Edible Vegetable Oils",
        "Class II Preservatives (INS-211, INS-202)",
        "Permitted Synthetic Food Colour(S) (INS-102, INS-110)",
        "Added (Mango) Flavour(S) (Natural, Nature Identical and Artificial Flavouring Substances)"
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
      image: jeeraImage,
      description: "Permitted natural and synthetic food colour(s) (INS-150D, INS-102, INS-110, INS-122, INS-133) and added (Masala Soda) flavour(s) (natural, nature identical and artificial flavouring substances)",
      longDescription: "Contains:\nPermitted natural and synthetic food colour(s) (INS-150D, INS-102, INS-110, INS-122, INS-133) and added (Masala Soda) flavour(s) (natural, nature identical and artificial flavouring substances)",
      ingredients: [
        "Salt",
        "Acidity regulators (INS-330, INS-331)",
        "Emulsifiers & stabilizers (INS-419, INS-445)",
        "Class II preservatives (INS-211)"
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
    lichi: {
      name: "Lichi",
      color: "fresh-lichi",
      image: lichiImage,
      description: "Added (LICHI) Flavour(S) (Natural, Nature Identical and Artificial Flavouring Substances)",
      longDescription: "Contains:\nAdded (LICHI) Flavour(S) (Natural, Nature Identical and Artificial Flavouring Substances)",
      ingredients: [
        "Acidity Regulator (INS-330, INS-331)",
        "Emulsifiers & Stabilizers (INS-414, INS-19)",
        "Edible Oils, Class II Preservatives (INS-211, INS-202)"
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
        "Fresh lichi selection and peeling",
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
      image: pineappleImage,
      description: "Permitted Synthetic Food Colour(S) (INS-102) and Added (Pineapple) Flavour(S) (Natural, Nature Indentical and Artificial Flavouring Substances)",
      longDescription: "Contain:\nPermitted Synthetic Food Colour(S) (INS-102) and Added (Pineapple) Flavour(S) (Natural, Nature Indentical and Artificial Flavouring Substances)",
      ingredients: [
        "Acidity Regulator (INS-330, INS-331)",
        "Emulsifiers & Stabilizers (INS-419, INS-445)",
        "Class II Preservatives (INS-211)"
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
      image: orangeImage,
      description: "Permitted Synthetic Food Colour(S) (INS-102, INS-124) and Added (Orange) Flavour(S) (Natural, Nature Indentical and Artificial Flavouring Substances)",
      longDescription: "Contain:\nPermitted Synthetic Food Colour(S) (INS-102, INS-124) and Added (Orange) Flavour(S) (Natural, Nature Indentical and Artificial Flavouring Substances)",
      ingredients: [
        "Acidity Regulator (INS-330, INS-331)",
        "Emulsifiers & Stabilizers (INS-414, INS-19)",
        "Edible Vegetable Oils",
        "Class II Preservatives (INS-211)"
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
  nimbu: {
  name: "Nimbu",
  color: "fresh-nimbu",
  image: nimbuImage,
      description: "Nimbu beverage crafted with premium ingredients: Acidity Regulator (INS-330, INS-297), Emulsifiers & Stabilizers (INS-414, INS-331), Edible Oils, Class II Preservatives (INS-211), Permitted Anti Caking Agent (INS-554), Added (Nimboo) Flavour(S) (Natural, Nature Identical and Artificial Flavouring Substances).",
      longDescription: "Our Nimbu beverage is made using a blend of high-quality ingredients and advanced food technology. It features Acidity Regulator (INS-330, INS-297), Emulsifiers & Stabilizers (INS-414, INS-331), Edible Oils, Class II Preservatives (INS-211), Permitted Anti Caking Agent (INS-554), and Added (Nimboo) Flavour(S) (Natural, Nature Identical and Artificial Flavouring Substances) for a refreshing and authentic taste.",
      ingredients: [
        "Acidity Regulator (INS-330, INS-297)",
        "Emulsifiers & Stabilizers (INS-414, INS-331)",
        "Edible Oils, Class II Preservatives (INS-211)",
        "Permitted Anti Caking Agent (INS-554)",
        "Added (Nimboo) Flavour(S) (Natural, Nature Identical and Artificial Flavouring Substances)"
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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-lg" style={{ backgroundImage: `url(${data.image})`, transform: 'scale(1.2)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" style={{ background: `linear-gradient(135deg, hsl(var(--${data.color})) / 0.8, transparent)` }} />
        <div className="relative z-10 h-full flex items-center container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="max-w-2xl">
              <Badge className="mb-4 text-white border-white/20" style={{ backgroundColor: `hsl(var(--${data.color}))` }}>
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
            {/* Show bottle image for all flavours */}
            {(flavour === "mango" || flavour === "nimbu" || flavour === "orange" || flavour === "pineapple" || flavour === "jeera" || flavour === "lichi") && (
              <img 
                src={data.image} 
                alt={data.name + " Bottle"} 
                className={`h-auto shadow-2xl ${
                  flavour === "nimbu" || flavour === "pineapple"
                    ? "w-32 rounded-[2rem] backdrop-blur-md border-2 border-white/20"
                    : flavour === "jeera" || flavour === "lichi"
                    ? "w-48 rounded-[2rem] backdrop-blur-md border-2 border-white/20" 
                    : "w-48 rounded-xl"
                }`}
                style={
                  flavour === "nimbu" || flavour === "pineapple" || flavour === "jeera"
                    ? {
                        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.2)",
                        filter: "drop-shadow(0 0 12px rgba(255,255,255,0.2))",
                        background: "transparent",
                        border: "1px solid rgba(255,255,255,0.1)"
                      }
                    : {
                        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.3)",
                        background: "transparent"
                      }
                }
              />
            )}
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