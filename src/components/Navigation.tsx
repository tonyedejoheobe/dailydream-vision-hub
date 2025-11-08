import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 transition-transform group-hover:scale-110 duration-500">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold/50 group-hover:border-gold transition-colors duration-300"></div>
              {/* Inner gradient background */}
              <div className="absolute inset-1 bg-gradient-to-br from-gold to-gold-dark rounded-full shadow-gold flex items-center justify-center">
                <span className="text-navy-dark font-bold text-lg tracking-tighter">DD</span>
              </div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              DAILY<span className="text-gradient-gold">DREAM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(link.path)
                    ? "text-gold bg-gold/10"
                    : "text-white hover:text-gold hover:bg-gold/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default" className="ml-4 bg-gradient-to-r from-gold-dark to-gold hover:shadow-gold transition-all hover:scale-105 text-navy-dark font-semibold">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gold transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.path)
                      ? "text-gold bg-gold/10"
                      : "text-white hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-gradient-to-r from-gold-dark to-gold text-navy-dark font-semibold">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
