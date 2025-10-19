import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { title: "About Us", href: "/#about" },
    { title: "Our Programs", href: "/#programs" },
    { title: "Impact Reports", href: "/#impact" },
    { title: "Get Involved", href: "/#get-involved" },
    { title: "Latest News", href: "/#news" },
    { title: "Contact Us", href: "/contact" }
  ];

  const programs = [
    { title: "AurSunao", href: "/aursunao" },
    { title: "Indradhanush", href: "/indradhanush" },
    { title: "Pragya", href: "/pragya" },
  ];

  const policies = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Accessibility Statement", href: "/accessibility" },
    { title: "Cookie Policy", href: "/cookies" },
    { title: "Financial Transparency", href: "/finances" },
    { title: "Safeguarding Policy", href: "/safeguarding" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-light/20">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Connected with Our Impact
            </h3>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Get monthly updates on our programs, success stories, and ways to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/20"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Subscribe
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Aparigraha Foundation</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering communities worldwide through sustainable education, healthcare, 
              and development programs that create lasting positive change.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <div className="text-sm">
                  <p>1234 Hope Street</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-sm">info@hopefoundation.org</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.title}>
                  <Link
                    to={program.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal & Policies</h4>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.title}>
                  <Link
                    to={policy.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {policy.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Certifications</h5>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>• GuideStar Platinum Seal</p>
                <p>• Charity Navigator 4-Star</p>
                <p>• BBB Accredited Charity</p>
                <p>• UN Consultative Status</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-primary-light/20" />
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © 2024 Aparigraha Foundation. All rights reserved. | EIN: 12-3456789
          </div>
          <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
            <span>Made with ❤️ for a better world</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;