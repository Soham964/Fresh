import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Leaf, Factory, Target, Heart } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2020", event: "Fresh brand conceptualized by Phoenix India R&D Group" },
    { year: "2021", event: "Partnership with Universe Water House for marketing and distribution" },
    { year: "2022", event: "Launch of first three flavours: Mango, Orange, and Lemon" },
    { year: "2023", event: "Expansion with Jeera, Lichi, and Pineapple flavours" },
    { year: "2024", event: "Nationwide distribution network established" }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "We believe in the power of nature. Every bottle contains only the finest natural ingredients without artificial preservatives or flavors."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Our beverages are crafted to not just quench thirst but also provide nutritional benefits and support overall well-being."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest quality standards through rigorous testing and ISO-certified manufacturing processes."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We're committed to supporting local farmers, distributors, and communities throughout our supply chain."
    }
  ];

  const companies = [
    {
      name: "Phoenix India Research and Development Group",
      role: "Research & Manufacturing",
      description: "The scientific backbone of Fresh, Phoenix India R&D Group brings decades of experience in food science and beverage technology. Our state-of-the-art research facilities ensure that every product meets international quality standards while maintaining authentic Indian flavors.",
      achievements: [
        "ISO 22000:2018 Food Safety Management certification",
        "FSSAI approval for all manufacturing processes",
        "25+ years of experience in food and beverage R&D",
        "Advanced quality testing laboratories"
      ]
    },
    {
      name: "Universe Water House and Development Group",
      role: "Marketing & Distribution",
      description: "Our strategic marketing partner, Universe Water House brings extensive market knowledge and distribution expertise. Their established network ensures Fresh beverages reach every corner of India while maintaining brand consistency.",
      achievements: [
        "Pan-India distribution network",
        "500+ retail partnerships",
        "Digital marketing excellence",
        "Customer satisfaction rating of 4.8/5"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-fresh text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Fresh
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Born from a vision to create India's finest natural beverages, Fresh represents the perfect blend 
            of traditional flavors and modern innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To revolutionize India's beverage industry by creating naturally refreshing drinks that celebrate 
                authentic flavors while promoting health and wellness. We're committed to using only the finest 
                natural ingredients sourced responsibly from local farmers.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-fresh rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground">To become India's most trusted natural beverage brand.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 shadow-card-fresh">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-fresh-mango rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Factory className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">6 Flavours</h4>
                  <p className="text-sm text-muted-foreground">Premium natural beverages</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card-fresh">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-fresh-orange rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Growing distribution network</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card-fresh">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-fresh-lemon rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Premium ingredients</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card-fresh">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-fresh-lichi rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">FSSAI</h4>
                  <p className="text-sm font-semibold text-foreground">Registered company</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing ingredients to serving our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card-fresh transition-all duration-300 hover:scale-105 bg-gradient-card border-0">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-fresh rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Partners
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fresh is the result of a strategic partnership between two industry leaders, each bringing unique expertise.
            </p>
          </div>
          
          <div className="space-y-12">
            {companies.map((company, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card-fresh overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-fresh rounded-lg flex items-center justify-center">
                          <Factory className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{company.name}</CardTitle>
                          <p className="text-primary font-medium">{company.role}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {company.description}
                      </p>
                    </CardContent>
                  </div>

                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From concept to nationwide presence - the Fresh story continues to evolve.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-fresh"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-center gap-6">
                    {/* Timeline dot */}
                    <div className="w-16 h-16 bg-gradient-fresh rounded-full flex items-center justify-center text-white font-bold z-10">
                      {milestone.year}
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 bg-gradient-card border-0 shadow-card-fresh">
                      <CardContent className="p-6">
                        <p className="text-foreground font-medium">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;