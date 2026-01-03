import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface CertificateCardProps {
  name: string;
  issuer: string;
  year: string;
  image: string;
  description: string;
  variant?: 'design' | 'dev';
  delay?: number;
}

const CertificateCard = ({
  name,
  issuer,
  year,
  image,
  description,
  variant = 'design',
  delay = 0,
}: CertificateCardProps) => {
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
          {/* Thumbnail */}
          <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-border/50 group-hover:border-primary/50 transition-colors">
            <img
              src={image}
              alt={`${name} certificate`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Info */}
          <div className="flex-1 text-left">
            <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h4>
            <p className="text-muted-foreground text-sm">{issuer}</p>
          </div>
          
          {/* Year */}
          <span className={`font-heading text-${accentColor} text-sm font-semibold`}>
            {year}
          </span>
          
          {/* View indicator */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <svg
              className={`w-5 h-5 text-${accentColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Full Certificate Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl glass-panel border-primary/30">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-foreground">
              {name}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Issued by {issuer} • {year}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Full Certificate Image */}
            <div className="rounded-lg overflow-hidden border border-border/50 neon-glow">
              <img
                src={image}
                alt={`${name} full certificate`}
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Description */}
            <div className="glass-panel p-4 rounded-lg">
              <h4 className="font-heading text-sm font-semibold text-primary mb-2">
                About this certification
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CertificateCard;
