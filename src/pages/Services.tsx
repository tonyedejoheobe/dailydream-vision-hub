import { Code2, Smartphone, Cloud, Palette, Users, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Tech Consulting",
      description:
        "Strategic technology guidance to help you make informed decisions about architecture, platforms, and digital transformation initiatives.",
      features: ["Digital Strategy", "Architecture Design", "Technology Roadmaps", "Risk Assessment"],
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Software Development",
      description:
        "Custom web and enterprise software built with modern frameworks, clean architecture, and scalable design patterns.",
      features: ["Web Applications", "Enterprise Systems", "API Development", "Database Design"],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: ["iOS Apps", "Android Apps", "React Native", "Flutter Development"],
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "IT Outsourcing & Staff Augmentation",
      description:
        "Access world-class engineering talent to scale your team quickly with developers who integrate seamlessly into your workflow.",
      features: ["Dedicated Teams", "Contract Developers", "Skill-specific Hiring", "Flexible Scaling"],
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with user research, accessibility, and conversion optimization in mind.",
      features: ["User Research", "Interface Design", "Prototyping", "Design Systems"],
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Solutions & Product Strategy",
      description:
        "Cloud infrastructure setup, migration, optimization, and strategic product planning to ensure market success.",
      features: ["AWS & Azure", "DevOps & CI/CD", "Product Roadmaps", "Go-to-Market Strategy"],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation
            and drive measurable business results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-fade-in group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-4 text-gold group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-gold/20 shadow-gold bg-gradient-navy overflow-hidden animate-scale-in">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Build Your Next Project Together
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to transform your vision into reality? Get in touch and let's discuss how
                we can help you achieve your goals.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-gold-dark to-gold hover:shadow-gold text-navy-dark font-semibold px-10 py-6 text-lg transition-all hover:scale-105"
              >
                <Link to="/contact">Start a Conversation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
