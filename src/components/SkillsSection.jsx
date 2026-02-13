import { useScrollReveal } from '@/hooks/useScrollReveal';

const designSkills = [
  { name: 'Figma', icon: '◈' },
  { name: 'UX Research', icon: '◇' },
  { name: 'Wireframing', icon: '▢' },
  { name: 'Prototyping', icon: '◎' },
  { name: 'Design Systems', icon: '⬡' },
  { name: 'Interaction Design', icon: '⟡' },
  { name: 'User Testing', icon: '◉' },
  { name: 'Visual Design', icon: '◈' },
];

const devSkills = [
  { name: 'React', icon: '⚛' },
  { name: 'JavaScript', icon: '◈' },
  { name: 'HTML5', icon: '◇' },
  { name: 'CSS3', icon: '▣' },
  { name: 'Tailwind CSS', icon: '◎' },
  { name: 'REST APIs', icon: '⟡' },
  { name: 'Git', icon: '◉' },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="skills" className="py-24 relative">
      <div ref={ref} className="container mx-auto px-6">
        <h2 className={`section-title text-center mb-16 scroll-reveal ${isVisible ? 'revealed' : ''}`}>Skills & Expertise</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`glass-card-glow p-8 scroll-reveal-left ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="font-heading text-xl font-semibold text-primary mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">◈</span>
              Design Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {designSkills.map((skill, index) => (
                <div key={skill.name} className={`skill-badge scroll-reveal-scale ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: `${0.4 + index * 0.08}s` }}>
                  <span className="text-primary">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
          <div className={`glass-card-glow p-8 scroll-reveal-right ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="font-heading text-xl font-semibold text-accent mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">⟨⟩</span>
              Developer Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {devSkills.map((skill, index) => (
                <div key={skill.name} className={`skill-badge scroll-reveal-scale ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: `${0.4 + index * 0.08}s`, borderColor: 'hsl(280 100% 60% / 0.3)', color: 'hsl(280 100% 60%)', boxShadow: '0 0 10px hsl(280 100% 60% / 0.1)' }}>
                  <span className="text-accent">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
