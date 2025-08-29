import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import ImpactSection from "@/components/ImpactSection";
import EngagementSection from "@/components/EngagementSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <ImpactSection />
        <EngagementSection />
        <NewsSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
