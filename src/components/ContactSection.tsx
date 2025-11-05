import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@aparigrahafoundation.org",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Mon-Fri from 9AM to 5PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "1234 Hope Street",
      description: "Mumbai, Maharashtra 400001"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday",
      description: "9:00 AM - 5:00 PM IST"
    }
  ];

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject) {
      toast({
        title: "Missing Information",
        description: "Please provide your name, email, and subject to proceed.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // In a real application, you would send this data to your backend
      console.log("Contact form submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, feedback, or want to get involved? We'd love to hear from you. 
            Reach out through any of the channels below or use our contact form.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-primary font-medium">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="e.g. Arjun Patel"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="e.g. arjun@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select onValueChange={(value) => handleInputChange('subject', value)} value={formData.subject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Partnership Opportunity">Partnership Opportunity</SelectItem>
                        <SelectItem value="Volunteer Application">Volunteer Application</SelectItem>
                        <SelectItem value="Donation Inquiry">Donation Inquiry</SelectItem>
                        <SelectItem value="Program Information">Program Information</SelectItem>
                        <SelectItem value="Media Request">Media Request</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    className="btn-hero w-full" 
                    type="submit" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;