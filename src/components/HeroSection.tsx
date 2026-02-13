import heroPortrait from '@/assets/hero-portrait.png';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-glow-hero"
    >
      {/* Faded Background Text */}
      <div className="text-fade-bg top-1/2 -translate-y-1/2">
        SANJAY
      </div>

      {/* Subtle Glow Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-neon-teal/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Portrait Image with neon ring matching uploaded image style */}
          <div className="mb-8 animate-float">
            <div className="relative">
              {/* Outer neon glow ring - cyan to purple gradient */}
              <div className="absolute inset-[-16px] rounded-full" style={{
                background: 'conic-gradient(from 180deg, hsl(180 100% 50%), hsl(280 100% 60%), hsl(320 100% 55%), hsl(280 100% 60%), hsl(180 100% 50%))',
                filter: 'blur(12px)',
                opacity: 0.6,
              }} />
              <div className="absolute inset-[-8px] rounded-full" style={{
                background: 'conic-gradient(from 180deg, hsl(180 100% 50%), hsl(280 100% 60%), hsl(320 100% 55%), hsl(280 100% 60%), hsl(180 100% 50%))',
                opacity: 0.8,
              }} />
              <div className="absolute inset-[-4px] rounded-full bg-background" />
              <img
                src={heroPortrait}
                alt="Sanjay - UI/UX Designer & React Developer"
                className="relative w-48 h-48 md:w-60 md:h-60 rounded-full object-cover object-top"
                style={{
                  boxShadow: '0 0 40px hsl(180 100% 50% / 0.3), 0 0 80px hsl(280 100% 60% / 0.2)',
                }}
              />
            </div>
          </div>

          {/* Main Headline - Name */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-3 tracking-wide neon-text-cyan">
            SANJAY GUMMADI
          </h1>

          {/* Secondary Heading - Role */}
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-semibold mb-6 tracking-wide">
            <span className="text-foreground">UI/UX Designer</span>
            <span className="text-primary mx-3">&</span>
            <span className="text-foreground">React Front-End Developer</span>
          </h2>

          {/* Sub-text */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Crafting pixel-perfect interfaces with intuitive user experiences. 
            Bringing designs to life through clean, efficient React code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#uiux" className="neon-btn-primary">
              View My Work
            </a>
            <a href="#contact" className="neon-btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
