import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Calculator,
  PieChart,
  ArrowLeft,
  CheckCircle,
  Star,
  Target,
  Percent,
  Package,
  Calendar,
  Award,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const ProfitMarginsDetail = () => {
  const pricingTiers = [
    {
      volume: "500-1,000 units",
      discount: "15%",
      margin: "25%",
      color: "bg-blue-500"
    },
    {
      volume: "1,001-5,000 units",
      discount: "25%",
      margin: "35%",
      color: "bg-green-500"
    },
    {
      volume: "5,001-10,000 units",
      discount: "35%",
      margin: "45%",
      color: "bg-orange-500"
    },
    {
      volume: "10,000+ units",
      discount: "40%",
      margin: "50%",
      color: "bg-purple-500"
    }
  ];

  const profitCalculation = [
    { item: "Retail Price per Unit", value: "₹25.00" },
    { item: "Wholesale Price (40% discount)", value: "₹15.00" },
    { item: "Your Selling Price", value: "₹22.00" },
    { item: "Profit per Unit", value: "₹7.00", highlight: true },
    { item: "Profit Margin", value: "46.7%", highlight: true }
  ];

  const additionalBenefits = [
    {
      title: "Early Payment Discount",
      description: "Additional 2% discount for payments within 15 days",
      icon: <Calendar className="h-5 w-5 text-primary" />
    },
    {
      title: "Seasonal Promotions",
      description: "Special pricing during peak seasons and festivals",
      icon: <Star className="h-5 w-5 text-primary" />
    },
    {
      title: "Bulk Order Benefits",
      description: "Free shipping and handling for orders above ₹50,000",
      icon: <Package className="h-5 w-5 text-primary" />
    },
    {
      title: "Performance Bonuses",
      description: "Quarterly bonuses based on sales targets achievement",
      icon: <Award className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <Link 
            to="/product-details" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Partnership Benefits
          </Link>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <TrendingUp className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                High Profit Margins
              </h1>
              <p className="text-lg text-muted-foreground">
                Competitive wholesale pricing with attractive profit margins for our distribution partners
              </p>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <p className="text-sm text-muted-foreground">Maximum Wholesale Discount</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
              <p className="text-sm text-muted-foreground">Potential Profit Margin</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹7</div>
              <p className="text-sm text-muted-foreground">Average Profit per Unit</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">2%</div>
              <p className="text-sm text-muted-foreground">Early Payment Bonus</p>
            </CardContent>
          </Card>
        </div>

        {/* Volume-Based Pricing Tiers */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              Volume-Based Pricing Tiers
            </CardTitle>
            <p className="text-muted-foreground">
              Higher volumes unlock better discounts and profit margins
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {pricingTiers.map((tier, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className={`w-4 h-4 rounded-full ${tier.color}`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{tier.volume}</span>
                      <div className="flex gap-4">
                        <Badge variant="outline">
                          {tier.discount} Discount
                        </Badge>
                        <Badge variant="secondary">
                          {tier.margin} Margin
                        </Badge>
                      </div>
                    </div>
                    <Progress 
                      value={parseInt(tier.margin)} 
                      className="h-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Profit Calculation Example */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                Profit Calculation Example
              </CardTitle>
              <p className="text-muted-foreground">
                Based on our premium 250ml Fresh Mango beverage
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profitCalculation.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      item.highlight 
                        ? 'bg-primary/10 border border-primary/20' 
                        : 'bg-accent/30'
                    }`}
                  >
                    <span className={`text-sm ${item.highlight ? 'font-semibold' : ''}`}>
                      {item.item}
                    </span>
                    <span className={`font-medium ${item.highlight ? 'text-primary text-lg' : ''}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800 dark:text-green-400">
                    Monthly Potential (1000 units)
                  </span>
                </div>
                <p className="text-2xl font-bold text-green-600">₹7,000 profit</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-6 w-6 text-primary" />
                Market Comparison
              </CardTitle>
              <p className="text-muted-foreground">
                How our margins compare to industry standards
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Fresh Natural Beverages</span>
                  <span className="text-sm font-bold text-primary">46.7%</span>
                </div>
                <Progress value={47} className="h-3" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Industry Average</span>
                  <span className="text-sm">28%</span>
                </div>
                <Progress value={28} className="h-3 opacity-60" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Competitor A</span>
                  <span className="text-sm">22%</span>
                </div>
                <Progress value={22} className="h-3 opacity-40" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Competitor B</span>
                  <span className="text-sm">31%</span>
                </div>
                <Progress value={31} className="h-3 opacity-40" />
              </div>

              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-400">
                  <strong>67% higher</strong> profit margins compared to industry average
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Benefits */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-6 w-6 text-primary" />
              Additional Profit Benefits
            </CardTitle>
            <p className="text-muted-foreground">
              Extra opportunities to maximize your earnings
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Requirements & Terms */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Requirements & Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-green-600">✓ What's Included</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Transparent pricing structure
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    No hidden fees or charges
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Flexible payment terms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Regular promotional support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Volume growth incentives
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-orange-600">⚠ Requirements</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Minimum order quantity: 500 units</li>
                  <li>• Valid business registration required</li>
                  <li>• Credit approval process</li>
                  <li>• Commitment to brand standards</li>
                  <li>• Regular sales reporting</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-fresh text-white text-center">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join our network of successful distributors and start building your profitable beverage business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-primary">
                <Phone className="h-5 w-5 mr-2" />
                Call for Pricing Details
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Mail className="h-5 w-5 mr-2" />
                Request Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfitMarginsDetail;