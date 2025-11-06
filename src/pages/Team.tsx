import { Card, CardContent } from "@/components/ui/card";
import tonyImage from "@/assets/team-tony.jpg";
import davidImage from "@/assets/team-david.jpg";
import hannahImage from "@/assets/team-hannah.png";
import aminaImage from "@/assets/team-amina.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. Tony Ede",
      role: "Founder & CEO",
      image: tonyImage,
      bio: "Tony is a visionary tech leader driven by a passion for innovation and business transformation. After years of consulting for startups and enterprises, he founded Dailydream to help organizations unlock modern digital solutions with elegance, clarity, and precision.",
    },
    {
      name: "David Taiwo",
      role: "Back-End Engineering Team Lead",
      image: davidImage,
      bio: "David is known for building powerful, scalable systems with clean architecture. He leads the back-end engineering unit with a focus on performance, reliability, and secure infrastructure that drives world-class digital products.",
    },
    {
      name: "Hannah Johnson",
      role: "Customer Success Manager",
      image: hannahImage,
      bio: "Hannah ensures every client's journey with Dailydream is exceptional. With a people-first approach and a passion for experience design, she builds lasting client relationships and ensures our solutions deliver real business impact.",
    },
    {
      name: "Abdullahi Amina",
      role: "Front-End Engineering Team Lead",
      image: aminaImage,
      bio: "Amina specializes in crafting visually stunning and user-centric digital interfaces. She leads the front-end team, making sure every product reflects beauty, accessibility, intuitive design, and a premium user experience.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Meet Our <span className="text-gradient-gold">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A passionate group of innovators, engineers, and strategists dedicated to transforming
            your vision into exceptional digital solutions.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-border shadow-card hover:shadow-luxury transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col items-center text-center">
                    {/* Circular Image */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-gold-dark opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gold/30 shadow-gold group-hover:scale-105 transition-transform">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Member Info */}
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-6">
                      <span className="text-gold font-medium text-sm">{member.role}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="px-4 mt-20">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-gold/20 shadow-gold bg-gradient-navy overflow-hidden animate-scale-in">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to Join Our Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals who are passionate about technology
                and innovation.
              </p>
              <a
                href="mailto:careers@dailydream.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-dark to-gold hover:shadow-gold text-navy-dark font-semibold rounded-lg text-lg transition-all hover:scale-105"
              >
                Get In Touch
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Team;
