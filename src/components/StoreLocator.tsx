import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  distance: string;
}

const StoreLocator = () => {
  const [location, setLocation] = useState("");
  const [stores] = useState<Store[]>([
    {
      id: 1,
      name: "FreshMart Central",
      address: "123 Main Street, Delhi, 110001",
      phone: "+91 98765 43210",
      hours: "9:00 AM - 9:00 PM",
      distance: "2.5 km"
    },
    {
      id: 2,
      name: "Universe Superstore",
      address: "456 Market Road, Mumbai, 400001",
      phone: "+91 98765 43211",
      hours: "8:00 AM - 10:00 PM",
      distance: "3.2 km"
    },
    {
      id: 3,
      name: "Phoenix Retail Hub",
      address: "789 Commerce Lane, Bangalore, 560001",
      phone: "+91 98765 43212",
      hours: "10:00 AM - 8:00 PM",
      distance: "4.1 km"
    }
  ]);

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Find Fresh Near You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Locate stores in your area that carry our refreshing beverages
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 mb-8">
            <Input
              placeholder="Enter your location or ZIP code"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1"
            />
            <Button variant="fresh" className="px-8">
              Search
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stores.map((store) => (
              <Card key={store.id} className="hover:shadow-card-fresh transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    {store.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{store.address}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    {store.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    {store.hours}
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-medium text-primary">{store.distance} away</span>
                    <Button variant="outline" size="sm">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;