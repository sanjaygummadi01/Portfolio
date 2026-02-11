import heroPortrait from '@/assets/hero-portrait.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#050B0E' }}
    >
      {/* Large portrait - right side, close-up zoom, dark dramatic shading */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-10%] md:right-[-5%] h-[130%] w-[75%] md:w-[65%]">
          <img
            src={heroPortrait}
            alt="Sanjay Gummadi"
            className="h-full w-full object-cover"
            style={{
              objectPosition: '50% 15%',
              filter: 'brightness(0.35) contrast(1.1)',
            }}
          />
          {/* Heavy left fade into black */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #050B0E 0%, #050B0E 5%, transparent 45%)',
            }}
          />
          {/* Top fade */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, #050B0E 0%, transparent 30%)',
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, #050B0E 0%, transparent 25%)',
            }}
          />
          {/* Right edge fade */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to left, #050B0E 0%, transparent 20%)',
            }}
          />
        </div>
      </div>

      {/* Text content - left aligned */}
      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-2xl">
          <h1
            className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-wide text-foreground scroll-reveal ${isVisible ? 'revealed' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            I'm Sanjay Gummadi
          </h1>

          <h2
            className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide scroll-reveal ${isVisible ? 'revealed' : ''}`}
            style={{ transitionDelay: '0.4s', color: 'hsl(var(--primary))' }}
          >
            UI/UX Designer &<br />React Developer
          </h2>

          <p
            className={`text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed scroll-reveal ${isVisible ? 'revealed' : ''}`}
            style={{ transitionDelay: '0.6s' }}
          >
            Crafting pixel-perfect interfaces with intuitive user experiences.
            Bringing designs to life through clean, efficient React code.
          </p>

          <div
            className={`flex gap-4 scroll-reveal ${isVisible ? 'revealed' : ''}`}
            style={{ transitionDelay: '0.8s' }}
          >
            <a
              href="/Sanjay_Gummadi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 font-heading font-semibold text-sm tracking-wider uppercase border-2 transition-all duration-300"
              style={{
                backgroundColor: 'hsl(var(--primary))',
                borderColor: 'hsl(var(--primary))',
                color: '#050B0E',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'hsl(var(--primary))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--primary))';
                e.currentTarget.style.color = '#050B0E';
              }}
            >
              Download CV
            </a>
            <a href="#contact" className="neon-btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
