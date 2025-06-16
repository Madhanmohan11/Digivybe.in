
import { QuickAction, ServiceCard } from './types';

export const quickActions: QuickAction[] = [
  { label: "Get Quote", action: "quote", icon: "💰", color: "bg-green-500" },
  { label: "View Portfolio", action: "portfolio", icon: "🎨", color: "bg-purple-500" },
  { label: "Book Call", action: "call", icon: "📞", color: "bg-blue-500" },
  { label: "Live Chat", action: "chat", icon: "💬", color: "bg-orange-500" }
];

export const serviceCards: ServiceCard[] = [
  {
    title: "Custom Website",
    description: "Professional, responsive design with modern features",
    price: "Starting at ₹25,000",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
    cta: "Get Started"
  },
  {
    title: "E-commerce Store",
    description: "Complete online shopping solution with payment integration",
    price: "Starting at ₹50,000",
    features: ["Payment Gateway", "Inventory Management", "Analytics", "Mobile App"],
    cta: "Launch Store"
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive SEO and social media marketing",
    price: "From ₹15,000/month",
    features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"],
    cta: "Boost Traffic"
  }
];

export const initialMessage = {
  id: '1',
  text: "🚀 Welcome to DigiVybe! I'm your AI assistant ready to transform your digital dreams into reality. What amazing project can I help you create today?",
  isUser: false,
  timestamp: new Date(),
  type: 'text' as const
};
