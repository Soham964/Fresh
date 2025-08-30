import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  flavour: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Fresh Mango is absolutely delicious! The taste is so authentic and refreshing. It's become my go-to drink during hot summer days.",
      flavour: "Mango"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      location: "Delhi, NCR",
      rating: 5,
      text: "I love the Jeera flavour - it's perfectly spiced and really helps with digestion. Great quality and natural taste!",
      flavour: "Jeera"
    },
    {
      id: 3,
      name: "Anjali Patel",
      location: "Bangalore, Karnataka",
      rating: 4,
      text: "The Lichi flavour is exotic and refreshing. Fresh really knows how to capture the essence of natural fruits.",
      flavour: "Lichi"
    },
    {
      id: 4,
      name: "Vikash Singh",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "Fresh Orange is my morning energizer! The vitamin C content and natural taste make it perfect for starting the day.",
      flavour: "Orange"
    },
    {
      id: 5,
      name: "Meera Joshi",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      text: "Pineapple flavour is tropical paradise in a bottle! Love how Fresh maintains the natural sweetness without being too sugary.",
      flavour: "Pineapple"
    },
    {
      id: 6,
      name: "Arjun Reddy",
      location: "Hyderabad, Telangana",
      rating: 4,
      text: "Fresh Lemon is incredibly refreshing and tangy. Perfect for post-workout hydration and tastes completely natural.",
      flavour: "Lemon"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from satisfied customers who love our natural and refreshing beverages
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-card-fresh transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {testimonial.flavour}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;