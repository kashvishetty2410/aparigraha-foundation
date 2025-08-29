import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Users, GraduationCap, Heart, Home, TrendingUp, Globe } from "lucide-react";

const ImpactSection = () => {
  const impactStats = [
    {
      icon: Users,
      number: "500,000+",
      label: "Lives Transformed",
      description: "Individuals directly impacted by our programs across 45 countries",
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      number: "25,000",
      label: "Students Educated",
      description: "Children and adults provided with quality education opportunities",
      color: "text-secondary"
    },
    {
      icon: Heart,
      number: "75,000",
      label: "Healthcare Recipients",
      description: "People who received medical care through our health programs",
      color: "text-accent"
    },
    {
      icon: Home,
      number: "10,000",
      label: "Homes Built",
      description: "Families provided with safe, sustainable housing solutions",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      number: "2,500",
      label: "Jobs Created",
      description: "Employment opportunities generated through our development programs",
      color: "text-secondary"
    },
    {
      icon: Globe,
      number: "45",
      label: "Countries Served",
      description: "Nations where we've implemented successful development projects",
      color: "text-accent"
    }
  ];

  const documents = [
    {
      title: "Annual Impact Report 2023",
      description: "Comprehensive overview of our achievements, programs, and financial transparency",
      size: "2.4 MB"
    },
    {
      title: "Financial Statements 2023",
      description: "Detailed breakdown of funding sources, expenditures, and financial accountability",
      size: "1.8 MB"
    },
    {
      title: "Program Evaluation Report",
      description: "Third-party assessment of program effectiveness and community outcomes",
      size: "3.2 MB"
    },
    {
      title: "Safeguarding Policies",
      description: "Our commitment to protecting vulnerable populations and ethical practices",
      size: "1.2 MB"
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "UN Sustainable Development Goals Recognition",
      description: "Awarded for outstanding contribution to SDG 4 (Quality Education)"
    },
    {
      year: "2022",
      title: "GuideStar Platinum Seal",
      description: "Highest level of transparency and accountability certification"
    },
    {
      year: "2021",
      title: "Community Choice Award",
      description: "Voted #1 NGO for community development by beneficiary communities"
    }
  ];

  return (
    <section id="impact" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Our Impact
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Measuring What Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparency and accountability drive everything we do. Here's how we're 
            making a measurable difference in communities worldwide.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <Card key={stat.label} className={`impact-card text-center fade-in-up stagger-${index % 3 + 1}`}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`counter ${stat.color} mb-2`}>{stat.number}</div>
                <h3 className="text-xl font-semibold mb-3">{stat.label}</h3>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Transparency & Reports */}
          <div className="fade-in-up">
            <h3 className="text-3xl font-bold mb-8 flex items-center">
              <Download className="h-8 w-8 text-primary mr-3" />
              Transparency Reports
            </h3>
            <p className="text-muted-foreground mb-8">
              We believe in complete transparency. Access our detailed reports, 
              financial statements, and program evaluations to see exactly how 
              your support creates lasting change.
            </p>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <Card key={doc.title} className={`program-card cursor-pointer hover:shadow-medium transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{doc.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{doc.description}</p>
                        <span className="text-xs text-primary font-medium">{doc.size}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-4">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recognition & Achievements */}
          <div className="fade-in-up stagger-1">
            <h3 className="text-3xl font-bold mb-8 flex items-center">
              <TrendingUp className="h-8 w-8 text-secondary mr-3" />
              Recognition & Awards
            </h3>
            <p className="text-muted-foreground mb-8">
              Our commitment to excellence and impact has been recognized by 
              leading organizations and the communities we serve worldwide.
            </p>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={achievement.year} className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {achievement.year}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="impact-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">See Our Impact in Action</h3>
              <p className="text-muted-foreground mb-6">
                Want to learn more about our programs and see detailed impact metrics? 
                Download our comprehensive annual report.
              </p>
              <Button className="btn-hero">
                <Download className="mr-2 h-5 w-5" />
                Download Annual Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;