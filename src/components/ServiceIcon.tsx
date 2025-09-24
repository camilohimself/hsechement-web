import {
  Droplets,
  Home,
  ArrowDown,
  Search,
  AlertTriangle,
  Zap,
  Phone,
  Settings,
  LucideIcon
} from 'lucide-react';

interface ServiceIconProps {
  iconName: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  'Droplets': Droplets,
  'Home': Home,
  'ArrowDown': ArrowDown,
  'Search': Search,
  'AlertTriangle': AlertTriangle,
  'Zap': Zap,
  'Phone': Phone,
  'Settings': Settings,
};

export default function ServiceIcon({ iconName, className = "w-8 h-8" }: ServiceIconProps) {
  const IconComponent = iconMap[iconName] || AlertTriangle;

  return <IconComponent className={className} />;
}