import { Target, Eye, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-gradient-gold">DAILYDREAM</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a luxury tech consulting and outsourcing firm dedicated to delivering modern
            digital solutions with elegance, clarity, and precision.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-border shadow-luxury overflow-hidden animate-scale-in">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  DAILYDREAM was founded with a singular vision: to bridge the gap between
                  cutting-edge technology and elegant business solutions. We believe that great
                  software is not just about functionality—it's about creating experiences that
                  inspire, empower, and transform.
                </p>
                <p>
                  Our journey began when our founder recognized that many organizations struggle
                  to find partners who truly understand both the technical complexities and the
                  strategic business implications of modern digital transformation. We set out to
                  be that partner.
                </p>
                <p>
                  Today, we work with startups, scale-ups, and established enterprises around the
                  world, helping them unlock the full potential of modern technology. From
                  innovative product development to strategic IT consulting, we deliver solutions
                  that don't just meet expectations—they exceed them.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Our Core <span className="text-gradient-gold">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-fade-in hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-6">
                  <Target className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To help organizations unlock modern digital solutions through innovation,
                  expertise, and a commitment to excellence that transforms ideas into impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-fade-in hover:-translate-y-2" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-6">
                  <Eye className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world's most trusted partner for businesses seeking to leverage
                  technology as a competitive advantage and driver of sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-fade-in hover:-translate-y-2" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We pursue perfection in every detail, from code quality to client relationships,
                  ensuring that every solution we deliver exceeds expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
