import Navbar from '@/components/Navbar.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import UIUXSection from '@/components/UIUXSection.jsx';
import ReactDevSection from '@/components/ReactDevSection.jsx';
import SkillsSection from '@/components/SkillsSection.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';
import ContactSection from '@/components/ContactSection.jsx';
import Footer from '@/components/Footer.jsx';
import useScrollReveal from '@/hooks/useScrollReveal.js';

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
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
  );
};

export default Index;
