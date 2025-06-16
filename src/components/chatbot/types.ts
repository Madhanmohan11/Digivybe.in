
export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'text' | 'suggestion' | 'action' | 'interactive';
}

export interface QuickAction {
  label: string;
  action: string;
  icon: string;
  color: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
}

export interface UserProfile {
  name: string;
  interests: string[];
  budget: string;
  timeline: string;
}
