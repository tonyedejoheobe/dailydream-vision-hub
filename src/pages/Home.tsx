import { Link } from "react-router-dom";
import { ArrowRight, Code, Users, Zap, Shield, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const benefits = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Modern Solutions",
      description: "Cutting-edge technology with elegant, scalable architecture",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "World-class engineers and strategists at your service",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Rapid deployment without compromising quality",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and performance",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Supporting clients across continents and time zones",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Growth",
      description: "Solutions designed to scale with your success",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full">
              <span className="text-gold font-medium text-sm">PREMIUM TECH CONSULTING</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Vision
              <br />
              Into <span className="text-gradient-gold">Digital Reality</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We deliver world-class software development, IT consulting, and digital solutions
              with precision, elegance, and innovation that drives real business impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-gold-dark to-gold hover:shadow-gold text-navy-dark font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
              >
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/90 text-white hover:bg-white hover:text-navy-dark px-8 py-6 text-lg transition-all hover:scale-105 backdrop-blur-sm"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient-gold">DAILYDREAM</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical excellence with business strategy to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-border shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-scale-in group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-navy">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's discuss how we can transform your business with cutting-edge technology
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-gold-dark to-gold hover:shadow-gold text-navy-dark font-semibold px-10 py-6 text-lg transition-all hover:scale-105"
          >
            <Link to="/contact">
              Book a Consultation <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
