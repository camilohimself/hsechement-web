import { Phone, MessageCircle, Clock, AlertTriangle } from 'lucide-react';

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'urgency' | 'contact';
  icon?: 'phone' | 'message' | 'clock' | 'alert';
  className?: string;
  animate?: boolean;
}

export default function CTAButton({
  href,
  text,
  variant = 'primary',
  icon = 'phone',
  className = "",
  animate = false
}: CTAButtonProps) {

  const getIcon = () => {
    const iconClasses = "w-5 h-5 mr-2";

    switch (icon) {
      case 'phone':
        return <Phone className={iconClasses} />;
      case 'message':
        return <MessageCircle className={iconClasses} />;
      case 'clock':
        return <Clock className={iconClasses} />;
      case 'alert':
        return <AlertTriangle className={iconClasses} />;
      default:
        return <Phone className={iconClasses} />;
    }
  };

  const getButtonClasses = () => {
    const baseClasses = "inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 shadow-xl";
    const animateClasses = animate ? "hover:scale-105" : "";

    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-hsechement-red text-white hover:bg-hsechement-red/90 ${animateClasses}`;
      case 'secondary':
        return `${baseClasses} bg-hsechement-orange text-white hover:bg-hsechement-orange/90 ${animateClasses}`;
      case 'urgency':
        return `${baseClasses} bg-white text-hsechement-red hover:bg-gray-100 animate-pulse ${animateClasses}`;
      case 'contact':
        return `${baseClasses} bg-transparent border-2 border-white text-white hover:bg-white hover:text-hsechement-red`;
      default:
        return `${baseClasses} bg-hsechement-red text-white hover:bg-hsechement-red/90 ${animateClasses}`;
    }
  };

  return (
    <a href={href} className={`${getButtonClasses()} ${className}`}>
      {getIcon()}
      {text}
    </a>
  );
}