<<<<<<< HEAD
// // import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { ArrowRight, BookOpen, Calendar, Clock, ExternalLink, Film, Image, Mic, Play } from "lucide-react";

// // const NewsSection = () => {
//   const featuredStory = {
//     title: "Breaking Ground: New Community Health Center Opens in Rural Kenya",
//     excerpt: "After two years of collaborative planning and construction, our latest community health center in Nakuru County is now serving over 5,000 residents with essential healthcare services.",
//     image: "https://images.unsplash.com/photo-1612277795421-9bc5d3a32b1a?w=800&h=600&fit=crop",
//     date: "March 15, 2024",
//     readTime: "5 min read",
//     category: "Healthcare"
//   };

//   const newsArticles = [
//     {
//       title: "Scholarship Program Graduates 500th Student",
//       excerpt: "Maria Santos becomes our 500th scholarship graduate, completing her nursing degree and returning to serve her community.",
//       image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
//       date: "March 10, 2024",
//       readTime: "3 min read",
//       category: "Education"
//     },
//     {
//       title: "Clean Water Initiative Reaches Major Milestone",
//       excerpt: "Our water projects have now provided clean, safe drinking water to over 100,000 people across 15 countries.",
//       image: "https://images.unsplash.com/photo-1541890289-e8dae4326300?w=400&h=300&fit=crop",
//       date: "March 5, 2024",
//       readTime: "4 min read",
//       category: "Community Development"
//     },
//     {
//       title: "New Partnership with Local Universities",
//       excerpt: "Expanding our education programs through strategic partnerships with three leading universities in East Africa.",
//       image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
//       date: "February 28, 2024",
//       readTime: "6 min read",
//       category: "Education"
//     }
//   ];

//   const upcomingEvents = [
//     {
//       title: "Annual Gala: Hope for Tomorrow",
//       date: "April 15, 2024",
//       time: "7:00 PM EST",
//       location: "New York Marriott Downtown",
//       description: "Join us for an evening celebrating our impact and raising funds for next year's programs.",
//       type: "Fundraising Event"
//     },
//     {
//       title: "Virtual Volunteer Training",
//       date: "March 25, 2024",
//       time: "2:00 PM EST",
//       location: "Online",
//       description: "Learn about volunteer opportunities and how you can make a difference from anywhere in the world.",
//       type: "Training"
//     },
//     {
//       title: "Impact Showcase Webinar",
//       date: "April 2, 2024",
//       time: "12:00 PM EST",
//       location: "Online",
//       description: "See firsthand how your support has transformed communities in our 2023 programs.",
//       type: "Webinar"
//     }
//   ];

//   const videos = [
//     {
//       title: "Voices from the Field: Education in Action",
//       type: "video",
//       thumbnail: "https://images.unsplash.com/photo-1497486751825-1233dd2dc32a?w=400&h=300&fit=crop",
//       duration: "8:45",
//       views: "12.4K views",
//       date: "Mar 12, 2024"
//     },
//     {
//       title: "Community Stories: Healthcare Heroes",
//       type: "video",
//       thumbnail: "https://images.unsplash.com/photo-1612277795421-9bc5d3a32b1a?w=400&h=300&fit=crop",
//       duration: "12:20",
//       views: "8.7K views",
//       date: "Mar 8, 2024"
//     },
//     {
//       title: "Building Futures: Construction Timelapse",
//       type: "video",
//       thumbnail: "https://images.unsplash.com/photo-1504306700585-5b5b1d47d3e6?w=400&h=300&fit=crop",
//       duration: "5:30",
//       views: "15.2K views",
//       date: "Mar 5, 2024"
//     },
//     {
//       title: "Impact Stories: One Year Later",
//       type: "video",
//       thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
//       duration: "10:15",
//       views: "9.3K views",
//       date: "Feb 28, 2024"
//     }
//   ];

//   const photoGalleries = [
//     {
//       title: "Before & After: Water Project Transformation",
//       type: "gallery",
//       thumbnail: "https://images.unsplash.com/photo-1541890289-e8dae4326300?w=400&h=300&fit=crop",
//       count: "12 photos",
//       date: "Mar 10, 2024"
//     },
//     {
//       title: "Children's Day Celebration 2024",
//       type: "gallery",
//       thumbnail: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=300&fit=crop",
//       count: "24 photos",
//       date: "Mar 7, 2024"
//     },
//     {
//       title: "Volunteer Appreciation Event",
//       type: "gallery",
//       thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop",
//       count: "18 photos",
//       date: "Mar 3, 2024"
//     }
//   ];

//   const podcasts = [
//     {
//       title: "Episode 24: Empowering Women Through Education",
//       type: "podcast",
//       thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop",
//       duration: "32:45",
//       date: "Mar 14, 2024",
//       host: "Dr. Sarah Johnson"
//     },
//     {
//       title: "Episode 23: Sustainable Development in Rural Areas",
//       type: "podcast",
//       thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
//       duration: "28:12",
//       date: "Mar 7, 2024",
//       host: "Michael Chen"
//     }
//   ];

//   const infographics = [
//     {
//       title: "Our Global Impact in Numbers",
//       type: "infographic",
//       thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop",
//       date: "Mar 11, 2024"
//     },
//     {
//       title: "Education Program Outcomes 2023",
//       type: "infographic",
//       thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
//       date: "Mar 6, 2024"
//     }
//   ];

//   return (
//     <section id="news" className="section-padding bg-gradient-subtle">
//       <div className="container-custom">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <Badge variant="secondary" className="mb-4 text-sm font-medium">
//             News & Stories
//           </Badge>
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
//             Latest Updates
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Stay informed about our latest programs, success stories, and upcoming 
//             events as we continue our mission to transform communities worldwide.
//           </p>
//         </div>

//         {/* Featured Story */}
//         <div className="mb-16 fade-in-up">
//           <Card className="impact-card overflow-hidden">
//             <div className="grid lg:grid-cols-2 gap-0">
//               <div className="relative">
//                 <img
//                   src={featuredStory.image}
//                   alt={featuredStory.title}
//                   className="w-full h-64 lg:h-full object-cover"
//                 />
//                 <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
//                   Featured Story
//                 </Badge>
//               </div>
//               <CardContent className="p-8 lg:p-12">
//                 <Badge variant="outline" className="mb-4">
//                   {featuredStory.category}
//                 </Badge>
//                 <h3 className="text-2xl lg:text-3xl font-bold mb-4">{featuredStory.title}</h3>
//                 <p className="text-muted-foreground mb-6 text-lg">{featuredStory.excerpt}</p>
//                 <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
//                   <span className="flex items-center">
//                     <Calendar className="h-4 w-4 mr-2" />
//                     {featuredStory.date}
//                   </span>
//                   <span className="flex items-center">
//                     <Clock className="h-4 w-4 mr-2" />
//                     {featuredStory.readTime}
//                   </span>
//                 </div>
//                 <Button className="btn-hero">
//                   Read Full Story
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </CardContent>
//             </div>
//           </Card>
//         </div>

//         <div className="space-y-16">
//           {/* Recent Articles */}
//           <div>
//             <h3 className="text-3xl font-bold mb-8">Recent Articles</h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {newsArticles.map((article, index) => (
//                 <Card key={article.title} className={`program-card fade-in-up stagger-${index + 1}`}>
//                   <div className="relative">
//                     <img
//                       src={article.image}
//                       alt={article.title}
//                       className="w-full h-48 object-cover rounded-t-lg"
//                     />
//                   </div>
//                   <CardContent className="p-6">
//                     <Badge variant="outline" className="mb-3 text-xs">
//                       {article.category}
//                     </Badge>
//                     <h4 className="text-xl font-semibold mb-3">{article.title}</h4>
//                     <p className="text-muted-foreground mb-4">{article.excerpt}</p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//                         <span className="flex items-center">
//                           <Calendar className="h-3 w-3 mr-1" />
//                           {article.date}
//                         </span>
//                         <span className="flex items-center">
//                           <Clock className="h-3 w-3 mr-1" />
//                           {article.readTime}
//                         </span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//             <div className="text-center mt-8">
//               <Button variant="outline">
//                 View All Articles
//                 <ExternalLink className="ml-2 h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           {/* Upcoming Events */}
//           <div>
//             <h3 className="text-3xl font-bold mb-8">Upcoming Events</h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {upcomingEvents.map((event, index) => (
//                 <Card key={event.title} className="program-card">
//                   <CardContent className="p-6">
//                     <Badge variant="outline" className="mb-2 text-xs">
//                       {event.type}
//                     </Badge>
//                     <h4 className="font-semibold mb-2">{event.title}</h4>
//                     <div className="space-y-1 text-sm text-muted-foreground mb-3">
//                       <div className="flex items-center">
//                         <Calendar className="h-3 w-3 mr-2" />
//                         {event.date} at {event.time}
//                       </div>
//                       <div className="flex items-center">
//                         <span className="w-3 h-3 mr-2"></span>
//                         {event.location}
//                       </div>
//                     </div>
//                     <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
//                     <Button size="sm" variant="outline" className="w-full">
//                       Register Now
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           {/* Multimedia Gallery */}
//           <div>
//             <div className="flex justify-between items-center mb-8">
//               <h3 className="text-3xl font-bold">Multimedia Stories</h3>
//               <Button variant="outline">
//                 View All Multimedia
//                 <ExternalLink className="ml-2 h-4 w-4" />
//               </Button>
//             </div>
            
//             <Tabs defaultValue="all" className="w-full mb-8">
//               <TabsList className="grid w-full grid-cols-5">
//                 <TabsTrigger value="all">All</TabsTrigger>
//                 <TabsTrigger value="videos" className="flex items-center justify-center">
//                   <Film className="h-4 w-4 mr-1" />
//                   <span className="hidden sm:inline">Videos</span>
//                 </TabsTrigger>
//                 <TabsTrigger value="photos" className="flex items-center justify-center">
//                   <Image className="h-4 w-4 mr-1" />
//                   <span className="hidden sm:inline">Photos</span>
//                 </TabsTrigger>
//                 <TabsTrigger value="podcasts" className="flex items-center justify-center">
//                   <Mic className="h-4 w-4 mr-1" />
//                   <span className="hidden sm:inline">Podcasts</span>
//                 </TabsTrigger>
//                 <TabsTrigger value="info" className="flex items-center justify-center">
//                   <BookOpen className="h-4 w-4 mr-1" />
//                   <span className="hidden sm:inline">Info</span>
//                 </TabsTrigger>
//               </TabsList>
              
//               <TabsContent value="all" className="mt-6">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {videos.map((item, index) => (
//                     <Card key={`${item.title}-video`} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
//                       <div className="relative">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-full h-48 object-cover rounded-t-lg"
//                         />
//                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                           <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                             <Play className="h-6 w-6 text-white ml-1" />
//                           </div>
//                         </div>
//                         <Badge className="absolute top-2 right-2 bg-black/50">
//                           {item.duration}
//                         </Badge>
//                       </div>
//                       <CardContent className="p-4">
//                         <Badge variant="secondary" className="mb-2 text-xs">
//                           Video
//                         </Badge>
//                         <h4 className="font-medium text-sm mb-1">{item.title}</h4>
//                         <div className="flex justify-between text-xs text-muted-foreground">
//                           <span>{item.views}</span>
//                           <span>{item.date}</span>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                   {photoGalleries.map((item, index) => (
//                     <Card key={`${item.title}-gallery`} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
//                       <div className="relative">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-full h-48 object-cover rounded-t-lg"
//                         />
//                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                           <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                             <Image className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                         <Badge className="absolute top-2 right-2 bg-black/50">
//                           {item.count}
//                         </Badge>
//                       </div>
//                       <CardContent className="p-4">
//                         <Badge variant="secondary" className="mb-2 text-xs">
//                           Gallery
//                         </Badge>
//                         <h4 className="font-medium text-sm mb-1">{item.title}</h4>
//                         <div className="text-xs text-muted-foreground">
//                           {item.date}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                   {podcasts.map((item, index) => (
//                     <Card key={`${item.title}-podcast`} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
//                       <div className="relative">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-full h-48 object-cover rounded-t-lg"
//                         />
//                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                           <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                             <Mic className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                         <Badge className="absolute top-2 right-2 bg-black/50">
//                           {item.duration}
//                         </Badge>
//                       </div>
//                       <CardContent className="p-4">
//                         <Badge variant="secondary" className="mb-2 text-xs">
//                           Podcast
//                         </Badge>
//                         <h4 className="font-medium text-sm mb-1">{item.title}</h4>
//                         <div className="text-xs text-muted-foreground">
//                           {item.host} • {item.date}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                   {infographics.map((item, index) => (
//                     <Card key={`${item.title}-info`} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
//                       <div className="relative">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-full h-48 object-cover rounded-t-lg"
//                         />
//                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                           <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                             <BookOpen className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                       </div>
//                       <CardContent className="p-4">
//                         <Badge variant="secondary" className="mb-2 text-xs">
//                           Infographic
//                         </Badge>
//                         <h4 className="font-medium text-sm mb-1">{item.title}</h4>
//                         <div className="text-xs text-muted-foreground">
//                           {item.date}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>
              
//               <TabsContent value="videos" className="mt-6">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {videos.map((item, index) => (
//                     <Card key={item.title} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
//                       <div className="relative">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-full h-48 object-cover rounded-t-lg"
//                         />
//                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                           <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                             <Play className="h-6 w-6 text-white ml-1" />
//                           </div>
//                         </div>
//                         <Badge className="absolute top-2 right-2 bg-black/50">
//                           {item.duration}
//                         </Badge>
//                       </div>
//                       <CardContent className="p-4">
//                         <Badge variant="secondary" className="mb-2 text-xs">
//                           Video
//                         </Badge>
//                         <h4 className="font-medium text-sm mb-1">{item.title}</h4>
//                         <div className="flex justify-between text-xs text-muted-foreground">
//                           <span>{item.views}</span>
//                           <span>{item.date}</span>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>
              
//               <TabsContent value="photos" className="mt-6">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {photoGalleries.map((item, index) => (
//                     <Card key={item.title} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
//                       <div className="relative">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-full h-48 object-cover rounded-t-lg"
//                         />
//                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                           <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                             <Image className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                         <Badge className="absolute top-2 right-2 bg-black/50">
//                           {item.count}
//                         </Badge>
//                       </div>
//                       <CardContent className="p-4">
//                         <Badge variant="secondary" className="mb-2 text-xs">
//                           Gallery
//                         </Badge>
//                         <h4 className="font-medium text-sm mb-1">{item.title}</h4>
//                         <div className="text-xs text-muted-foreground">
//                           {item.date}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>
              
//               <TabsContent value="podcasts" className="mt-6">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {podcasts.map((item, index) => (
//                     <Card key={item.title} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
//                       <div className="relative">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-full h-48 object-cover rounded-t-lg"
//                         />
//                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                           <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                             <Mic className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                         <Badge className="absolute top-2 right-2 bg-black/50">
//                           {item.duration}
//                         </Badge>
//                       </div>
//                       <CardContent className="p-4">
//                         <Badge variant="secondary" className="mb-2 text-xs">
//                           Podcast
//                         </Badge>
//                         <h4 className="font-medium text-sm mb-1">{item.title}</h4>
//                         <div className="text-xs text-muted-foreground">
//                           {item.host} • {item.date}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>
              
//               <TabsContent value="info" className="mt-6">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {infographics.map((item, index) => (
//                     <Card key={item.title} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
//                       <div className="relative">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-full h-48 object-cover rounded-t-lg"
//                         />
//                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                           <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                             <BookOpen className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                       </div>
//                       <CardContent className="p-4">
//                         <Badge variant="secondary" className="mb-2 text-xs">
//                           Infographic
//                         </Badge>
//                         <h4 className="font-medium text-sm mb-1">{item.title}</h4>
//                         <div className="text-xs text-muted-foreground">
//                           {item.date}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// // };

// // export default NewsSection;
=======
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NewsSection() {
  return (
    <section className="py-16 px-6 md:px-16 bg-background text-foreground" id="multimedia">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Multimedia Stories</h2>
        <p className="text-muted-foreground">Explore our video stories and photo gallery</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex justify-center mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
        </TabsList>

        {/* ----------- ALL TAB ----------- */}
        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Existing 3 YouTube Videos */}
          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/Edg4oS5Gni0"
                title="Story of Front Line Warrior Series - Episode 1 - Dr Bindal Vala"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">
                Video
              </Badge>
              <h4 className="font-medium text-sm mb-1">
                Story of Front line Warrior Series - Episode 1 - Dr Bindal Vala
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>May 11, 2021</span>
              </div>
            </CardContent>
          </Card>

          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/x7lEcmqcjPU"
                title="Story of Front Line Warriors Series - Episode 2 - ACP Avinash Dharmadhikari"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">
                Video
              </Badge>
              <h4 className="font-medium text-sm mb-1">
                Story of Front Line Warriors Series - Episode 2 - ACP Avinash Dharmadhikari
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>May 12, 2021</span>
              </div>
            </CardContent>
          </Card>

          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/7dgTMtKWCa4"
                title="Story of Front Line Warriors Series - Episode 3 - K K Rana"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">
                Video
              </Badge>
              <h4 className="font-medium text-sm mb-1">
                Story of Front Line Warriors Series - Episode 3 - K K Rana
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>May 16, 2021</span>
              </div>
            </CardContent>
          </Card>

          {/* ----------- New 3 YouTube Videos ----------- */}

          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/P67vzbc0C28"
                title="Story of Front Line Warriors Series - Episode 4 - Himanshu Sharma"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">
                Video
              </Badge>
              <h4 className="font-medium text-sm mb-1">
                Story of Front Line Warriors Series - Episode 4 - Himanshu Sharma
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>May 23, 2021</span>
              </div>
            </CardContent>
          </Card>

          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/fJt4i09Zu2E"
                title="Story of Front Line Warriors Series - Episode 5 - Dr. Kunal P. Shah"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">
                Video
              </Badge>
              <h4 className="font-medium text-sm mb-1">
                Story of Front Line Warriors Series - Episode 5 - Dr. Kunal P. Shah
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>June 7, 2021</span>
              </div>
            </CardContent>
          </Card>

          <Card className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
            <div className="relative">
              <iframe
                className="w-full h-48 object-cover rounded-t-lg"
                src="https://www.youtube.com/embed/uiWi0EPo5oM"
                title="Story of Front Line Warriors Series - Episode 6 - Col. Venkat Raman (Retd.)"
                allowFullScreen
              ></iframe>
            </div>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">
                Video
              </Badge>
              <h4 className="font-medium text-sm mb-1">
                Story of Front Line Warriors Series - Episode 6 - Col. Venkat Raman (Retd.)
              </h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>June 13, 2021</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ----------- VIDEOS TAB ----------- */}
        <TabsContent value="videos" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Reuse the same 6 videos */}
          {[ 
            "https://www.youtube.com/embed/Edg4oS5Gni0",
            "https://www.youtube.com/embed/x7lEcmqcjPU",
            "https://www.youtube.com/embed/7dgTMtKWCa4",
            "https://www.youtube.com/embed/P67vzbc0C28",
            "https://www.youtube.com/embed/fJt4i09Zu2E",
            "https://www.youtube.com/embed/uiWi0EPo5oM"
          ].map((src, index) => (
            <Card key={index} className="program-card cursor-pointer hover:shadow-medium transition-all duration-300">
              <div className="relative">
                <iframe
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={src}
                  title={`Video ${index + 1}`}
                  allowFullScreen
                ></iframe>
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2 text-xs">
                  Video
                </Badge>
                <h4 className="font-medium text-sm mb-1">
                  Story of Front Line Warriors Series - Episode {index + 1}
                </h4>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* ----------- IMAGES TAB ----------- */}
        <TabsContent value="images" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Two image sections only */}
          <Card className="overflow-hidden">
            <img
              src="/images/gallery1.jpg"
              alt="Gallery 1"
              className="w-full h-64 object-cover"
            />
          </Card>
          <Card className="overflow-hidden">
            <img
              src="/images/gallery2.jpg"
              alt="Gallery 2"
              className="w-full h-64 object-cover"
            />
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
>>>>>>> ab3ea4298076eb9302e4442ef3109c064af48e7f
