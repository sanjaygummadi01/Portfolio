const ProjectCard = ({ image, title, description, primaryBtn, secondaryBtn }) => {
  return (
    <div className="glass-card-glow overflow-hidden group cursor-pointer neon-border-animated transition-all duration-300">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{description}</p>
        <div className="flex gap-3">
          <a href={primaryBtn.href} target="_blank" rel="noopener noreferrer" className="neon-btn-primary text-xs py-2 px-4 flex-1 text-center">{primaryBtn.label}</a>
          <a href={secondaryBtn.href} target="_blank" rel="noopener noreferrer" className="neon-btn-outline text-xs py-2 px-4 flex-1 text-center">{secondaryBtn.label}</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
