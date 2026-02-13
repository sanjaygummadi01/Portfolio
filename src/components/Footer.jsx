const Footer = () => {
  return (
    <footer className="py-8 border-t border-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-heading text-lg font-bold text-primary neon-text">
            SANJAY
          </div>
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Sanjay. Designed & Developed with passion.
          </p>
          <div className="flex gap-4">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
