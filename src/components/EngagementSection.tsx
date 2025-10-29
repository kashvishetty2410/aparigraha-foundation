import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Building, Calendar, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const EngagementSection = () => {
  const donationOptions = [
    {
      amount: "₹250",
      impact: "Provides school supplies for 5 children",
      popular: false
    },
    {
      amount: "₹500",
      impact: "Funds clean water for a family for 6 months",
      popular: true
    },
    {
      amount: "₹1,000",
      impact: "Sponsors a child's education for one semester",
      popular: false
    },
    {
      amount: "₹2,500",
      impact: "Builds a well that serves an entire village",
      popular: false
    }
  ];

  const volunteerOpportunities = [
    {
      title: "Field Volunteer",
      location: "Various Countries",
      duration: "3-12 months",
      description: "Work directly with communities to implement development projects",
      requirements: ["Bachelor's degree", "2+ years experience", "Flexible schedule"]
    },
    {
      title: "Fundraising Coordinator",
      location: "Remote/Local",
      duration: "Ongoing",
      description: "Help organize fundraising events and campaigns in your area",
      requirements: ["Event planning experience", "Strong communication", "Marketing skills"]
    },
    {
      title: "Skills-Based Volunteer",
      location: "Remote",
      duration: "Flexible",
      description: "Contribute your professional skills in areas like design, IT, or consulting",
      requirements: ["Professional expertise", "5+ hours/week", "Reliable internet"]
    }
  ];

  const partnershipTiers = [
    {
      title: "Community Partner",
      amount: "₹10,000+",
      benefits: [
        "Quarterly impact reports",
        "Recognition on website",
        "Tax-deductible receipt"
      ]
    },
    {
      title: "Impact Partner",
      amount: "₹50,000+",
      benefits: [
        "All Community Partner benefits",
        "Site visit opportunity",
        "Custom impact dashboard",
        "Direct beneficiary updates"
      ]
    },
    {
      title: "Transformational Partner",
      amount: "₹2,50,000+",
      benefits: [
        "All Impact Partner benefits",
        "Program naming opportunity",
        "Board meeting invitations",
        "Executive briefings"
      ]
    }
  ];

  return (
    <section id="get-involved" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Get Involved
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Join Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to support our work and create lasting change. 
            Whether through donations, volunteering, or partnerships, your contribution matters.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          {/* Donation Section */}
          <div className="lg:col-span-2">
            <Card className="impact-card fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Heart className="h-6 w-6 text-red-500 mr-3" />
                  Make a Donation
                </CardTitle>
                <p className="text-muted-foreground">
                  Your financial support directly funds our programs and creates tangible impact in communities worldwide.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Donation Amounts */}
                <div>
                  <h4 className="font-semibold mb-4">Choose an amount:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {donationOptions.map((option) => (
                      <Link to="/volunteer" key={option.amount}>
                        <Button
                          variant={option.popular ? "default" : "outline"}
                          className={`relative flex-col h-auto p-4 text-wrap w-full ${
                            option.popular ? "ring-2 ring-secondary" : ""
                          }`}
                        >
                          {option.popular && (
                            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                              Popular
                            </Badge>
                          )}
                          <span className="text-lg font-bold">{option.amount}</span>
                          <span className="text-xs text-center mt-1 opacity-80">
                            {option.impact}
                          </span>
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <h4 className="font-semibold mb-3">Or enter a custom amount:</h4>
                  <div className="flex space-x-3">
                    <div className="flex-1">
                      <Input type="number" placeholder="Enter amount" className="text-lg" />
                    </div>
                    <Link to="/volunteer">
                      <Button className="btn-hero">
                        Donate Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Recurring Donation */}
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">💚 Make it monthly for greater impact</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Monthly donations help us plan long-term projects and provide stable support to communities.
                  </p>
                  <Link to="/volunteer">
                    <Button variant="outline" size="sm">
                      Set up Monthly Donation
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Impact */}
          <div className="fade-in-up stagger-1">
            <Card className="program-card h-full">
              <CardHeader>
                <CardTitle className="text-lg">Impact Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">₹500</div>
                    <div className="text-sm text-muted-foreground">Your donation could provide:</div>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>✓ Clean water for 1 family (6 months)</li>
                      <li>✓ School meals for 10 children (1 week)</li>
                      <li>✓ Medical supplies for 5 patients</li>
                    </ul>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    95% of every rupee goes directly to programs
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary mr-3" />
              Volunteer Opportunities
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share your skills, time, and passion to make a direct difference in our programs and communities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={opportunity.title} className={`program-card fade-in-up stagger-${index + 1}`}>
                <CardHeader>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {opportunity.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {opportunity.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Requirements:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {opportunity.requirements.map((req, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/volunteer" className="w-full">
                    <Button variant="outline" className="w-full">
                      Apply to Volunteer
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Corporate Partnerships */}
        <div className="fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Building className="h-8 w-8 text-secondary mr-3" />
              Corporate & Institutional Partnerships
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partner with us to align your organization's values with meaningful social impact while engaging your stakeholders.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <Card key={tier.title} className={`program-card text-center ${
                index === 1 ? "ring-2 ring-secondary scale-105" : ""
              }`}>
                <CardHeader>
                  <CardTitle className="text-xl">{tier.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{tier.amount}</div>
                  <p className="text-sm text-muted-foreground">annually</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link to="/volunteer" className="w-full">
                    <Button variant="outline" className="w-full">
                      Become a Partner
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;