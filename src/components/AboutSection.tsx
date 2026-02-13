import aboutImage from '@/assets/about-portrait.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-glow-radial">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-16 scroll-reveal">About Me</h2>

        <div className="glass-card-glow p-8 md:p-12 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground scroll-reveal" style={{ transitionDelay: '0.2s' }}>
                Passionate About Design & Code
              </h3>
              <p className="text-muted-foreground leading-relaxed scroll-reveal" style={{ transitionDelay: '0.3s' }}>
                I'm a creative professional with a deep passion for both UI/UX design and front-end development. 
                My journey began with a fascination for how beautiful interfaces can create meaningful connections 
                between users and digital products.
              </p>
              <p className="text-muted-foreground leading-relaxed scroll-reveal" style={{ transitionDelay: '0.4s' }}>
                With expertise in user research, wireframing, and prototyping, I design experiences that are 
                not only visually stunning but also intuitive and accessible. As a React developer, I bring 
                these designs to life with clean, maintainable code that performs flawlessly across all devices.
              </p>
              <p className="text-muted-foreground leading-relaxed scroll-reveal" style={{ transitionDelay: '0.5s' }}>
                I believe that the best digital products are born from the seamless fusion of design thinking 
                and technical excellence. This dual expertise allows me to bridge the gap between design and 
                development, ensuring pixel-perfect implementation every time.
              </p>

              <div className="flex flex-wrap gap-8 pt-4 scroll-reveal" style={{ transitionDelay: '0.6s' }}>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary neon-text">5+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary neon-text">50+</div>
                  <div className="text-muted-foreground text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary neon-text">30+</div>
                  <div className="text-muted-foreground text-sm">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center scroll-reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                <div className="relative glass-card p-2 rounded-2xl" style={{ 
                  boxShadow: '0 0 30px hsl(180 100% 50% / 0.2), 0 0 60px hsl(280 100% 60% / 0.1)',
                  border: '1px solid hsl(180 100% 50% / 0.3)'
                }}>
                  <img
                    src={aboutImage}
                    alt="Sanjay working on design"
                    className="w-full max-w-sm rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center scroll-reveal" style={{ transitionDelay: '0.7s' }}>
            <a
              href="/Sanjay_Gummadi_Resume.pdf"
              download="Sanjay_Gummadi_Resume.pdf"
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, hsl(180 100% 50% / 0.2), hsl(280 100% 60% / 0.2))',
                border: '2px solid hsl(180 100% 50% / 0.6)',
                boxShadow: '0 0 20px hsl(180 100% 50% / 0.3), 0 0 40px hsl(180 100% 50% / 0.1), inset 0 0 20px hsl(180 100% 50% / 0.1)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <svg className="w-6 h-6 text-primary transition-transform group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <span className="relative text-foreground">Download My Resume</span>
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
