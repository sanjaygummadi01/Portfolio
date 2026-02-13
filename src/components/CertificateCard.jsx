import { useState } from 'react';

const CertificateCard = ({ name, issuer, year, image, description, variant = 'design', delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accentColor = variant === 'design' ? 'primary' : 'accent';
  const borderStyle = variant === 'dev' ? { borderColor: 'hsl(280 100% 60% / 0.3)' } : {};

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cert-badge opacity-0 animate-fade-in cursor-pointer group" style={{ animationDelay: `${delay}s`, ...borderStyle }}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-border/50 group-hover:border-primary/50 transition-colors">
            <img src={image} alt={`${name} certificate`} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-left">
            <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{name}</h4>
            <p className="text-muted-foreground text-sm">{issuer}</p>
          </div>
          <span className={`font-heading text-${accentColor} text-sm font-semibold`}>{year}</span>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className={`w-5 h-5 text-${accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="relative w-full max-w-2xl glass-card-glow p-6 rounded-xl border border-primary/30 animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors" aria-label="Close">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mb-4">
              <h3 className="font-heading text-2xl text-foreground">{name}</h3>
              <p className="text-muted-foreground">Issued by {issuer} • {year}</p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border border-border/50" style={{ boxShadow: 'var(--shadow-neon-sm)' }}>
                <img src={image} alt={`${name} full certificate`} className="w-full h-auto object-contain" />
              </div>
              <div className="glass-card p-4 rounded-lg" style={{ background: 'hsl(var(--glass-bg))' }}>
                <h4 className="font-heading text-sm font-semibold text-primary mb-2">About this certification</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
