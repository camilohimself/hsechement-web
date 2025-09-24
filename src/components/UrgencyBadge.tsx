import { AlertTriangle, Clock } from 'lucide-react';

interface UrgencyBadgeProps {
  text: string;
  variant?: 'alert' | 'time' | 'service';
  className?: string;
}

export default function UrgencyBadge({ text, variant = 'alert', className = "" }: UrgencyBadgeProps) {
  const getIcon = () => {
    switch (variant) {
      case 'alert':
        return <AlertTriangle className="w-4 h-4 mr-2" />;
      case 'time':
        return <Clock className="w-4 h-4 mr-2" />;
      case 'service':
        return <AlertTriangle className="w-4 h-4 mr-2" />;
      default:
        return <AlertTriangle className="w-4 h-4 mr-2" />;
    }
  };

  const getBadgeClasses = () => {
    const baseClasses = "px-4 py-2 rounded-lg font-semibold flex items-center justify-center transition-all";

    switch (variant) {
      case 'alert':
        return `${baseClasses} bg-hsechement-red/10 text-hsechement-red hover:bg-hsechement-red/20`;
      case 'time':
        return `${baseClasses} bg-hsechement-orange/10 text-hsechement-orange hover:bg-hsechement-orange/20`;
      case 'service':
        return `${baseClasses} bg-hsechement-red/10 text-hsechement-red`;
      default:
        return `${baseClasses} bg-hsechement-red/10 text-hsechement-red`;
    }
  };

  return (
    <div className={`${getBadgeClasses()} ${className}`}>
      {getIcon()}
      {text}
    </div>
  );
}