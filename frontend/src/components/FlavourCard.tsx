import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface FlavourCardProps {
  name: string;
  description: string;
  image: string;
  color: string;
  link: string;
}

const FlavourCard = ({ name, description, image, color, link }: FlavourCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-fresh transition-all duration-300 hover:scale-105 bg-gradient-card border-0">
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br opacity-20"
          style={{ 
            backgroundImage: `linear-gradient(135deg, hsl(var(--${color})), transparent)` 
          }}
        />
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <div 
            className="w-4 h-4 rounded-full shadow-md"
            style={{ backgroundColor: `hsl(var(--fresh-${color.split('-')[1]}))` }}
          />
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{name}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>
        
        <Link to={link}>
          <Button 
            variant="outline" 
            className="w-full hover:shadow-md transition-all duration-300"
          >
            Explore {name}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default FlavourCard;