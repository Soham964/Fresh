import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Users, TrendingUp, Shield, Award } from "lucide-react";

const Distributors = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    businessType: "",
    experience: "",
    coverageArea: "",
    monthlySales: "",
    flavoursInterested: [] as string[],
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. Our team will contact you within 24-48 hours.",
    });
    
    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      businessType: "",
      experience: "",
      coverageArea: "",
      monthlySales: "",
      flavoursInterested: [],
      message: ""
    });
  };

  const flavours = ["Mango", "Jeera", "Lichi", "Pineapple", "Orange", "Lemon"];

  const handleFlavourChange = (flavour: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        flavoursInterested: [...prev.flavoursInterested, flavour]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        flavoursInterested: prev.flavoursInterested.filter(f => f !== flavour)
      }));
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "High Profit Margins",
      description: "Competitive wholesale pricing with attractive profit margins for our distribution partners."
    },
    {
      icon: Shield,
      title: "Territory Protection",
      description: "Exclusive territorial rights and protection from direct competition in your assigned area."
    },
    {
      icon: Award,
      title: "Marketing Support",
      description: "Comprehensive marketing materials, promotional campaigns, and brand support."
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Complete product training and ongoing support from our dedicated team."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-fresh text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Partner With Fresh
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Join our growing network of distributors and be part of India's premium beverage revolution. 
            Together, we'll bring natural refreshment to every corner of the country.
          </p>
          <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
            <a href="#apply">Apply Now</a>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer comprehensive support and attractive terms to help our partners succeed in the beverage market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-card-fresh transition-all duration-300 hover:scale-105 bg-gradient-card border-0">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-fresh rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-fresh rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-muted-foreground">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-fresh rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">theuniversewaterhouse@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-fresh rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Phoenix India Research and Development Group<br />
                      Head Office - 286 A.P.C Road<br />
                      Kolkata - 700009
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Company Information</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Manufacturer:</strong> Phoenix India Research and Development Group</p>
                    <p><strong>Marketing Partner:</strong> Universe Water House and Development Group</p>
                    <p><strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Application Form */}
            <div id="apply">
              <Card className="bg-gradient-card border-0 shadow-card-fresh">
                <CardHeader>
                  <CardTitle className="text-2xl">Distributor Application</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out this form to start your partnership journey with Fresh.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactName">Contact Person *</Label>
                        <Input
                          id="contactName"
                          value={formData.contactName}
                          onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wholesaler">Wholesaler</SelectItem>
                            <SelectItem value="retailer">Retailer</SelectItem>
                            <SelectItem value="distributor">Distributor</SelectItem>
                            <SelectItem value="supermarket">Supermarket Chain</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="coverageArea">Coverage Area</Label>
                      <Input
                        id="coverageArea"
                        placeholder="e.g., North Delhi, Gurgaon, etc."
                        value={formData.coverageArea}
                        onChange={(e) => setFormData(prev => ({ ...prev, coverageArea: e.target.value }))}
                      />
                    </div>

                    <div>
                      <Label htmlFor="monthlySales">Expected Monthly Sales Volume</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, monthlySales: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select sales volume" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1000-5000">1,000 - 5,000 units</SelectItem>
                          <SelectItem value="5000-10000">5,000 - 10,000 units</SelectItem>
                          <SelectItem value="10000-25000">10,000 - 25,000 units</SelectItem>
                          <SelectItem value="25000+">25,000+ units</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-base font-semibold">Flavours of Interest</Label>
                      <p className="text-sm text-muted-foreground mb-3">Select the flavours you'd like to distribute</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {flavours.map((flavour) => (
                          <div key={flavour} className="flex items-center space-x-2">
                            <Checkbox
                              id={flavour}
                              checked={formData.flavoursInterested.includes(flavour)}
                              onCheckedChange={(checked) => handleFlavourChange(flavour, checked as boolean)}
                            />
                            <Label htmlFor={flavour} className="text-sm">{flavour}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your business, distribution network, or any specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="fresh" size="lg" className="w-full">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Distributors;