import CertificateCard from './CertificateCard';

import certGoogleUx from '@/assets/cert-google-ux.png';
import certIxdf from '@/assets/cert-ixdf.png';
import certFigma from '@/assets/cert-figma.png';
import certMeta from '@/assets/cert-meta.png';
import certReact from '@/assets/cert-react.png';
import certTypescript from '@/assets/cert-typescript.png';

const designCertifications = [
  {
    name: 'Google UX Design',
    issuer: 'Google',
    year: '2024',
    image: certGoogleUx,
    description:
      'Professional certification in UX design covering the end-to-end design process including empathizing with users, defining pain points, ideating solutions, creating wireframes and prototypes, and conducting usability testing.',
  },
  {
    name: 'Interaction Design',
    issuer: 'IxDF',
    year: '2023',
    image: certIxdf,
    description:
      'Comprehensive training in interaction design principles from the Interaction Design Foundation, covering user-centered design, usability, and creating engaging digital experiences that delight users.',
  },
  {
    name: 'Advanced Figma',
    issuer: 'Figma Academy',
    year: '2023',
    image: certFigma,
    description:
      'Advanced certification in Figma covering complex prototyping, design systems, component variants, auto-layout mastery, and collaborative design workflows for enterprise teams.',
  },
];

const devCertifications = [
  {
    name: 'Meta Front-End Developer',
    issuer: 'Meta',
    year: '2024',
    image: certMeta,
    description:
      'Professional certification from Meta covering HTML, CSS, JavaScript, React, version control, and front-end development best practices for building modern web applications.',
  },
  {
    name: 'React Advanced',
    issuer: 'Udemy',
    year: '2023',
    image: certReact,
    description:
      'Advanced React certification covering hooks, context API, Redux, performance optimization, testing, and building scalable React applications with modern patterns.',
  },
  {
    name: 'TypeScript Mastery',
    issuer: 'Frontend Masters',
    year: '2023',
    image: certTypescript,
    description:
      'Comprehensive TypeScript certification covering advanced types, generics, decorators, type guards, and integrating TypeScript with React for type-safe front-end development.',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative bg-glow-radial">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="section-title text-center mb-16">Certifications</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Design Certifications */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-6 text-center">
              Design Certifications
            </h3>
            <div className="grid gap-4">
              {designCertifications.map((cert, index) => (
                <CertificateCard
                  key={cert.name}
                  {...cert}
                  variant="design"
                  delay={index * 0.15}
                />
              ))}
            </div>
          </div>

          {/* Developer Certifications */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-accent mb-6 text-center">
              Developer Certifications
            </h3>
            <div className="grid gap-4">
              {devCertifications.map((cert, index) => (
                <CertificateCard
                  key={cert.name}
                  {...cert}
                  variant="dev"
                  delay={index * 0.15}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
