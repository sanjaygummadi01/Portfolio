import ProjectCard from './ProjectCard';
import reactProject1 from '@/assets/react-project-1.png';
import reactProject2 from '@/assets/react-project-2.png';
import reactProject3 from '@/assets/react-project-3.png';

const reactProjects = [
  {
    image: reactProject1,
    title: 'Task Management Dashboard',
    description: 'Real-time collaborative task board built with React, TypeScript, and Firebase.',
    primaryBtn: { label: 'GitHub', href: '#' },
    secondaryBtn: { label: 'Go Live', href: '#' },
  },
  {
    image: reactProject2,
    title: 'AI Chat Interface',
    description: 'Modern chat application with AI integration, featuring real-time messaging and code highlighting.',
    primaryBtn: { label: 'GitHub', href: '#' },
    secondaryBtn: { label: 'Go Live', href: '#' },
  },
  {
    image: reactProject3,
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard with charts, filters, and export functionality.',
    primaryBtn: { label: 'GitHub', href: '#' },
    secondaryBtn: { label: 'Go Live', href: '#' },
  },
];

const ReactDevSection = () => {
  return (
    <section id="react-dev" className="py-24 relative bg-glow-radial">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4 scroll-reveal">React Front-End Development</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          Building performant, scalable web applications with React and modern JavaScript technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reactProjects.map((project, index) => (
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

export default ReactDevSection;
