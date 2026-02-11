const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Slow drifting gradient blobs */}
      <div className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px] bg-primary animate-drift-1" />
      <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[100px] bg-accent animate-drift-2" />
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.035] blur-[110px] bg-neon-teal animate-drift-3" />

      {/* Soft ambient glow */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          background: `radial-gradient(ellipse at 20% 50%, hsl(var(--neon-cyan) / 0.15) 0%, transparent 60%),
                       radial-gradient(ellipse at 80% 30%, hsl(var(--neon-purple) / 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Gentle floating motes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/20 animate-mote"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${12 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
