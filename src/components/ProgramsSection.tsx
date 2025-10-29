import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, Heart, ArrowRight, Users, Target, TrendingUp } from "lucide-react";
import educationImage from "@/assets/education-impact.jpg";
import communityImage from "@/assets/community-impact.jpg";

const ProgramsSection = () => {
  const programs = [
    {
      id: "aursunao",
      title: "AurSunao",
      description: "Providing quality education and learning resources to underserved communities.",
      image: educationImage,
      icon: BookOpen,
      stats: {
        beneficiaries: "25,000+",
        schools: "150",
        graduates: "5,000+"
      },
      objectives: [
        "Build and renovate schools in rural areas",
        "Train local teachers and educators",
        "Provide scholarships for promising students",
        "Develop digital learning programs"
      ],
      testimonial: {
        quote: "Thanks to the scholarship program, I was able to complete my nursing degree and now serve my community as a healthcare worker.",
        author: "Maria Santos, Scholarship Recipient"
      }
    },
    {
      id: "indradhanush",
      title: "Indradhanush",
      description: "Empowering communities through infrastructure and economic development projects.",
      image: communityImage,
      icon: Home,
      stats: {
        beneficiaries: "100,000+",
        projects: "300",
        jobs: "2,500"
      },
      objectives: [
        "Develop clean water and sanitation systems",
        "Support small business and microfinance",
        "Build sustainable infrastructure",
        "Promote environmental conservation"
      ],
      testimonial: {
        quote: "The clean water project transformed our village. Children no longer get sick from contaminated water, and women can focus on other activities.",
        author: "James Mukasa, Community Leader"
      }
    },
    {
      id: "pragya",
      title: "Pragya",
      description: "Improving healthcare accessibility and quality in remote and underserved areas.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      icon: Heart,
      stats: {
        beneficiaries: "75,000+",
        clinics: "50",
        professionals: "200"
      },
      objectives: [
        "Establish mobile health clinics",
        "Train community health workers",
        "Provide essential medicines and equipment",
        "Implement preventive health programs"
      ],
      testimonial: {
        quote: "The mobile clinic brings hope to our remote area. My daughter received life-saving treatment that wasn't available before.",
        author: "Grace Achieng, Mother of Patient"
      }
    }
  ];

  const processSteps = [
    {
      step: "Identify",
      title: "Community Assessment",
      description: "We work with local communities to identify their most pressing needs and priorities."
    },
    {
      step: "Enable",
      title: "Resource Mobilization",
      description: "We mobilize resources, partners, and expertise to address identified challenges."
    },
    {
      step: "Empower",
      title: "Sustainable Solutions",
      description: "We implement programs that empower communities to sustain positive change."
    }
  ];

  return (
    <section id="programs" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Our Work
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Core Programs & Initiatives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Through our comprehensive programs, we address the root causes of poverty 
            and inequality while building sustainable pathways to prosperity.
          </p>
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Approach</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center fade-in-up stagger-1">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-10 -right-16 h-8 w-8 text-muted-foreground/30" />
                  )}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-primary">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="space-y-20">
          {programs.map((program, index) => (
            <div key={program.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} fade-in-up`}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-medium"
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} fade-in-up stagger-1`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">{program.title}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6">{program.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(program.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Objectives */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Key Objectives
                  </h4>
                  <ul className="space-y-2">
                    {program.objectives.map((objective, i) => (
                      <li key={i} className="flex items-start">
                        <TrendingUp className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <Card className="bg-primary/5 border-primary/20 mb-6">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-3 italic">
                      "{program.testimonial.quote}"
                    </p>
                    <p className="text-sm font-medium text-primary">
                      — {program.testimonial.author}
                    </p>
                  </CardContent>
                </Card>

                <Link to={`/${program.id}`}>
                  <Button className="btn-hero">
                    Learn More About {program.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;