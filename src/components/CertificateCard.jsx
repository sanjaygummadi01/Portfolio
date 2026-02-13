import { useState } from "react";
import { createPortal } from "react-dom";

const CertificateCard = ({
  name,
  issuer,
  year,
  image,
  description,
  variant = 'design',
  delay = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const accentColor = variant === 'design' ? 'primary' : 'accent';
  const borderStyle = variant === 'dev' ? { borderColor: 'hsl(280 100% 60% / 0.3)' } : {};

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cert-badge opacity-0 animate-fade-in cursor-pointer group"
        style={{ animationDelay: `${delay}s`, ...borderStyle }}
      >
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

      {isOpen && createPortal(
        <div
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ zIndex: 9999 }}
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-2xl p-6 rounded-xl animate-fade-in"
            style={{
              background: 'hsl(var(--background))',
              border: '1.5px solid hsl(180 100% 50% / 0.5)',
              boxShadow: '0 0 20px hsl(180 100% 50% / 0.15), 0 0 60px hsl(180 100% 50% / 0.08), inset 0 0 20px hsl(180 100% 50% / 0.03)',
              zIndex: 10000,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
              style={{ border: '1.5px solid hsl(180 100% 50% / 0.6)', color: 'hsl(180 100% 50%)' }}
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-4">
              <h3 className="font-heading text-2xl text-foreground">{name}</h3>
              <p className="text-muted-foreground">Issued by {issuer} • {year}</p>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid hsl(180 100% 50% / 0.3)', boxShadow: '0 0 15px hsl(180 100% 50% / 0.1)' }}>
                <img src={image} alt={`${name} full certificate`} className="w-full h-auto object-contain" />
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'hsl(180 100% 50% / 0.03)', border: '1px solid hsl(180 100% 50% / 0.15)' }}>
                <h4 className="font-heading text-sm font-semibold text-primary mb-2">About this certification</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default CertificateCard;
