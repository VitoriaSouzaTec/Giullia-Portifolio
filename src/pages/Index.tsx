import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import ExpertisePillars from "@/components/ExpertisePillars";
import SocialLinks from "@/components/SocialLinks";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProfileHeader />
      <AboutSection />
      <ExpertisePillars />
      <SocialLinks />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
