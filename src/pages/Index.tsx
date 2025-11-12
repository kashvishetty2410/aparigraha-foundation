import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EngagementSection from "@/components/EngagementSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import Navigation from "@/components/Navigation";
import ProgramsSection from "@/components/ProgramsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <div className="bg-[#f3e2ea]">
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
          <ImpactSection />
          <EngagementSection />
          <ContactSection />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;