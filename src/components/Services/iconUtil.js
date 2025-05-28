import { 
  Sofa, 
  Building, 
  Hammer,
  // Add other Lucide icons as needed
} from 'lucide-react';

export function getIconComponent(iconName) {
  const icons = {
    Sofa,
    Building,
    Hammer,
    // Map other icon names
  };
  
  return icons[iconName] || Sofa; // Default fallback
}