import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import ExpertisePillars from "@/components/ExpertisePillars";
import SocialLinks from "@/components/SocialLinks";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SocialMetrics from "@/components/SocialMetrics";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProfileHeader />
      <AboutSection />
      <ExpertisePillars />
      <SocialLinks />
      <SocialMetrics/>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
