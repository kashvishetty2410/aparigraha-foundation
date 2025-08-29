import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Hope Foundation making impact in communities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="hero-title mb-6 fade-in-up">
            Empowering Communities,
            <span className="block text-secondary">Transforming Lives</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed fade-in-up stagger-1">
            Together, we're building sustainable solutions that create lasting change 
            in education, healthcare, and community development across the globe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-2">
            <Button className="btn-hero text-lg px-10 py-5">
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-outline-hero text-lg px-10 py-5">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 fade-in-up stagger-3">
            <div className="text-center">
              <div className="counter text-secondary mb-2">500K+</div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Lives Impacted</p>
            </div>
            <div className="text-center">
              <div className="counter text-secondary mb-2">1,200</div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="counter text-secondary mb-2">45</div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="counter text-secondary mb-2">25</div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Years of Impact</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;