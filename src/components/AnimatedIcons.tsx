import { Droplets, Zap, Home, Waves } from 'lucide-react';

interface AnimatedIconsProps {
  className?: string;
}

export default function AnimatedIcons({ className = "" }: AnimatedIconsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute animate-ping top-10 left-10 text-white/30">
        <Waves className="w-8 h-8" />
      </div>
      <div className="absolute animate-ping top-20 right-20 delay-100 text-white/30">
        <Droplets className="w-6 h-6" />
      </div>
      <div className="absolute animate-ping bottom-20 left-20 delay-200 text-white/30">
        <Home className="w-8 h-8" />
      </div>
      <div className="absolute animate-ping bottom-10 right-10 delay-300 text-white/30">
        <Zap className="w-6 h-6" />
      </div>
    </div>
  );
}