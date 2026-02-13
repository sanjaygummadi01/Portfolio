import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import UIUXSection from '@/components/UIUXSection';
import ReactDevSection from '@/components/ReactDevSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <UIUXSection />
        <ReactDevSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
