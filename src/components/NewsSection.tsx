import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, ExternalLink, Play } from "lucide-react";

const NewsSection = () => {
  const featuredStory = {
    title: "Breaking Ground: New Community Health Center Opens in Rural Kenya",
    excerpt: "After two years of collaborative planning and construction, our latest community health center in Nakuru County is now serving over 5,000 residents with essential healthcare services.",
    image: "https://images.unsplash.com/photo-1612277795421-9bc5d3a32b1a?w=800&h=600&fit=crop",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Healthcare"
  };

  const newsArticles = [
    {
      title: "Scholarship Program Graduates 500th Student",
      excerpt: "Maria Santos becomes our 500th scholarship graduate, completing her nursing degree and returning to serve her community.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
      date: "March 10, 2024",
      readTime: "3 min read",
      category: "Education"
    },
    {
      title: "Clean Water Initiative Reaches Major Milestone",
      excerpt: "Our water projects have now provided clean, safe drinking water to over 100,000 people across 15 countries.",
      image: "https://images.unsplash.com/photo-1541890289-e8dae4326300?w=400&h=300&fit=crop",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Community Development"
    },
    {
      title: "New Partnership with Local Universities",
      excerpt: "Expanding our education programs through strategic partnerships with three leading universities in East Africa.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Education"
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Gala: Hope for Tomorrow",
      date: "April 15, 2024",
      time: "7:00 PM EST",
      location: "New York Marriott Downtown",
      description: "Join us for an evening celebrating our impact and raising funds for next year's programs.",
      type: "Fundraising Event"
    },
    {
      title: "Virtual Volunteer Training",
      date: "March 25, 2024",
      time: "2:00 PM EST",
      location: "Online",
      description: "Learn about volunteer opportunities and how you can make a difference from anywhere in the world.",
      type: "Training"
    },
    {
      title: "Impact Showcase Webinar",
      date: "April 2, 2024",
      time: "12:00 PM EST",
      location: "Online",
      description: "See firsthand how your support has transformed communities in our 2023 programs.",
      type: "Webinar"
    }
  ];

  const multimedia = [
    {
      title: "Voices from the Field: Education in Action",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1497486751825-1233dd2dc32a?w=400&h=300&fit=crop",
      duration: "8:45"
    },
    {
      title: "Before & After: Water Project Transformation",
      type: "gallery",
      thumbnail: "https://images.unsplash.com/photo-1541890289-e8dae4326300?w=400&h=300&fit=crop",
      count: "12 photos"
    },
    {
      title: "Community Stories: Healthcare Heroes",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1612277795421-9bc5d3a32b1a?w=400&h=300&fit=crop",
      duration: "12:20"
    }
  ];

  return (
    <section id="news" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            News & Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Latest Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our latest programs, success stories, and upcoming 
            events as we continue our mission to transform communities worldwide.
          </p>
        </div>

        {/* Featured Story */}
        <div className="mb-16 fade-in-up">
          <Card className="impact-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  Featured Story
                </Badge>
              </div>
              <CardContent className="p-8 lg:p-12">
                <Badge variant="outline" className="mb-4">
                  {featuredStory.category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{featuredStory.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg">{featuredStory.excerpt}</p>
                <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {featuredStory.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {featuredStory.readTime}
                  </span>
                </div>
                <Button className="btn-hero">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Recent Articles */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-8">Recent Articles</h3>
            <div className="space-y-8">
              {newsArticles.map((article, index) => (
                <Card key={article.title} className={`program-card fade-in-up stagger-${index + 1}`}>
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <CardContent className="md:col-span-2 p-6">
                      <Badge variant="outline" className="mb-3 text-xs">
                        {article.category}
                      </Badge>
                      <h4 className="text-xl font-semibold mb-3">{article.title}</h4>
                      <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {article.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline">
                View All Articles
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className="fade-in-up stagger-2">
              <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={event.title} className="program-card">
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {event.type}
                      </Badge>
                      <h4 className="font-semibold mb-2">{event.title}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-2" />
                          {event.date} at {event.time}
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 mr-2"></span>
                          {event.location}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Multimedia */}
            <div className="fade-in-up stagger-3">
              <h3 className="text-2xl font-bold mb-6">Multimedia Stories</h3>
              <div className="space-y-4">
                {multimedia.map((item, index) => (
                  <Card key={item.title} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
                    <div className="relative">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="h-6 w-6 text-white ml-1" />
                        </div>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-black/50">
                        {item.type === 'video' ? item.duration : item.count}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-sm">{item.title}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;