import ProjectCard from './ProjectCard';
import project1 from '@/assets/uiux-project-1.png';
import project2 from '@/assets/uiux-project-2.png';
import project3 from '@/assets/uiux-project-3.png';

const uiuxProjects = [
  {
    image: project1,
    title: 'FinTech Mobile App',
    description: 'Complete UX redesign for a financial services app, improving user engagement by 45%.',
    primaryBtn: { label: 'Case Study', href: '#' },
    secondaryBtn: { label: 'Demo', href: '#' },
  },
  {
    image: project2,
    title: 'E-Commerce Platform',
    description: 'End-to-end UX design for a modern shopping experience with seamless checkout flow.',
    primaryBtn: { label: 'Case Study', href: '#' },
    secondaryBtn: { label: 'Demo', href: '#' },
  },
  {
    image: project3,
    title: 'Health & Wellness App',
    description: 'Intuitive interface design for tracking fitness goals and mental wellness.',
    primaryBtn: { label: 'Case Study', href: '#' },
    secondaryBtn: { label: 'Demo', href: '#' },
  },
];

const UIUXSection = () => {
  return (
    <section id="uiux" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4 scroll-reveal">UI/UX Case Studies</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          Explore my design process and see how user-centered thinking transforms complex problems into elegant solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiuxProjects.map((project, index) => (
            <div
              key={project.title}
              className="scroll-reveal"
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIUXSection;
