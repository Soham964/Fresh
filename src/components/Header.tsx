import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Droplets } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const flavours = [
    { name: "Mango", path: "/flavours/mango" },
    { name: "Jeera", path: "/flavours/jeera" },
    { name: "Lichi", path: "/flavours/lichi" },
    { name: "Pineapple", path: "/flavours/pineapple" },
    { name: "Orange", path: "/flavours/orange" },
    { name: "Nimbu", path: "/flavours/nimbu" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card-fresh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img 
                src="/fresh-logo.svg" 
                alt="Fresh Natural Beverages" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Fresh</h1>
              <p className="text-xs text-muted-foreground">Natural Beverages</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            
            {/* Flavours Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Flavours
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-card rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {flavours.map((flavour) => (
                    <Link
                      key={flavour.name}
                      to={flavour.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {flavour.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/distributors"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/distributors") ? "text-primary" : "text-foreground"
              }`}
            >
              Distributors
            </Link>

            <Link
              to="/product-details"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/product-details") ? "text-primary" : "text-foreground"
              }`}
            >
              Partnership Benefits
            </Link>
            
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/distributors">
              <Button variant="fresh">
                Partner With Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link
                to="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Flavours</p>
                <div className="ml-4 space-y-2">
                  {flavours.map((flavour) => (
                    <Link
                      key={flavour.name}
                      to={flavour.path}
                      className="block text-sm text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {flavour.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/distributors"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Distributors
              </Link>

              <Link
                to="/product-details"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Partnership Benefits
              </Link>
              
              <Link
                to="/about"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Link to="/distributors">
                <Button variant="fresh" className="w-full mt-4">
                  Partner With Us
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;