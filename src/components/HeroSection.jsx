import heroPortrait from '@/assets/hero-portrait.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-glow-hero">
      <div className="text-fade-bg top-1/2 -translate-y-1/2">SANJAY</div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-neon-teal/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className={`mb-8 animate-float scroll-reveal-scale ${isVisible ? 'revealed' : ''}`}>
            <div className="relative">
              <img src={heroPortrait} alt="Sanjay - UI/UX Designer & React Developer" className="w-40 h-40 md:w-52 md:h-52 object-cover neon-rim" />
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl scale-125" />
            </div>
          </div>
          <h1 className={`font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-3 tracking-wide neon-text-cyan scroll-reveal ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
            SANJAY GUMMADI
          </h1>
          <h2 className={`font-heading text-xl md:text-2xl lg:text-3xl font-semibold mb-6 tracking-wide scroll-reveal ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <span className="text-foreground">UI/UX Designer</span>
            <span className="text-primary mx-3">&</span>
            <span className="text-foreground">React Front-End Developer</span>
          </h2>
          <p className={`text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed scroll-reveal ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.6s' }}>
            Crafting pixel-perfect interfaces with intuitive user experiences. Bringing designs to life through clean, efficient React code.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 scroll-reveal ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.8s' }}>
            <a href="#uiux" className="neon-btn-primary">View My Work</a>
            <a href="#contact" className="neon-btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
