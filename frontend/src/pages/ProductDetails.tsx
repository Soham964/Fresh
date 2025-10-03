import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Shield, 
  Award, 
  Users, 
  Target, 
  Handshake,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  BarChart3,
  Megaphone,
  GraduationCap
} from "lucide-react";

const ProductDetails = () => {

  const benefits = [
    {
      id: "profit-margins",
      title: "High Profit Margins",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      description: "Competitive wholesale pricing with attractive profit margins for our distribution partners.",
      details: {
        overview: "We believe in creating mutually beneficial partnerships that drive success for both Fresh Natural Beverages and our valued distributors.",
        features: [
          "Wholesale pricing up to 40% below retail",
          "Volume-based discount tiers",
          "Seasonal promotional pricing",
          "Early payment incentives",
          "Bulk order benefits"
        ],
        benefits: [
          "Higher profit margins compared to competitors",
          "Flexible pricing structures",
          "Regular promotional support",
          "Transparent cost breakdown",
          "No hidden fees or charges"
        ],
        requirements: [
          "Minimum order quantities apply",
          "Valid business registration required",
          "Credit approval process",
          "Commitment to brand standards"
        ]
      }
    },
    {
      id: "territory-protection",
      title: "Territory Protection",
      icon: <Shield className="h-8 w-8 text-primary" />,
      description: "Exclusive territorial rights and protection from direct competition in your assigned area.",
      details: {
        overview: "We provide exclusive distribution rights to ensure our partners can build their business without internal competition concerns.",
        features: [
          "Exclusive geographic territories",
          "Protected distribution zones",
          "Non-compete agreements",
          "Territory expansion opportunities",
          "Market penetration support"
        ],
        benefits: [
          "Guaranteed market exclusivity",
          "Protected investment returns",
          "Reduced competition pressure",
          "Territory growth potential",
          "Long-term partnership security"
        ],
        requirements: [
          "Meet minimum sales targets",
          "Maintain territory coverage",
          "Adhere to brand guidelines",
          "Regular performance reviews"
        ]
      }
    },
    {
      id: "marketing-support",
      title: "Marketing Support",
      icon: <Award className="h-8 w-8 text-primary" />,
      description: "Comprehensive marketing materials, promotional campaigns, and brand support.",
      details: {
        overview: "Our dedicated marketing team provides comprehensive support to help you effectively promote Fresh Natural Beverages in your territory.",
        features: [
          "Professional marketing materials",
          "Digital advertising assets",
          "Point-of-sale displays",
          "Seasonal campaign materials",
          "Social media content library"
        ],
        benefits: [
          "Ready-to-use marketing assets",
          "Professional brand presentation",
          "Consistent brand messaging",
          "Cost-effective promotion",
          "Increased brand recognition"
        ],
        requirements: [
          "Follow brand guidelines",
          "Use approved materials only",
          "Report marketing activities",
          "Maintain brand consistency"
        ]
      }
    },
    {
      id: "training-support",
      title: "Training & Support",
      icon: <Users className="h-8 w-8 text-primary" />,
      description: "Complete product training and ongoing support from our dedicated team.",
      details: {
        overview: "We provide comprehensive training and ongoing support to ensure your success as a Fresh Natural Beverages distributor.",
        features: [
          "Initial product training program",
          "Sales technique workshops",
          "Regular webinar sessions",
          "Dedicated support team",
          "Performance coaching"
        ],
        benefits: [
          "Expert product knowledge",
          "Improved sales performance",
          "Ongoing skill development",
          "Direct access to support",
          "Continuous learning opportunities"
        ],
        requirements: [
          "Attend mandatory training sessions",
          "Complete certification programs",
          "Participate in regular updates",
          "Maintain product knowledge"
        ]
      }
    }
  ];



  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Partnership Benefits Details
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive support and attractive terms to help our partners succeed 
            in the beverage market. Explore detailed information about each benefit below.
          </p>
          

        </div>

        {/* Benefits Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit) => (
            <Card key={benefit.id} className="bg-card border border-border shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>



        {/* Additional Information Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Success Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-accent/30 rounded-lg">
                <span className="text-sm font-medium">Average Partner ROI</span>
                <Badge variant="secondary">150%+</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/30 rounded-lg">
                <span className="text-sm font-medium">Territory Coverage</span>
                <Badge variant="secondary">95%</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/30 rounded-lg">
                <span className="text-sm font-medium">Partner Satisfaction</span>
                <Badge variant="secondary">4.8/5</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/30 rounded-lg">
                <span className="text-sm font-medium">Market Growth</span>
                <Badge variant="secondary">25% YoY</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Handshake className="h-5 w-5 text-primary" />
                Partnership Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <div>
                  <h4 className="font-medium">Application Submission</h4>
                  <p className="text-sm text-muted-foreground">Submit your partnership application with required documents</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <div>
                  <h4 className="font-medium">Evaluation & Approval</h4>
                  <p className="text-sm text-muted-foreground">Our team reviews your application and conducts due diligence</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <div>
                  <h4 className="font-medium">Training & Onboarding</h4>
                  <p className="text-sm text-muted-foreground">Complete our comprehensive training program</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                <div>
                  <h4 className="font-medium">Launch & Support</h4>
                  <p className="text-sm text-muted-foreground">Begin operations with full ongoing support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-fresh text-white text-center">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Fresh?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join our growing network of successful distributors and start building your beverage business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-primary">
                <Phone className="h-5 w-5 mr-2" />
                Call Us Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Mail className="h-5 w-5 mr-2" />
                Send Inquiry
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetails;