// chatbot/ServiceCards.tsx - FINAL UPDATED VERSION
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ServiceCard } from './types';

interface ServiceCardsProps {
  services: ServiceCard[];
  onServiceClick: (service: ServiceCard) => void;
}

const ServiceCards = ({ services, onServiceClick }: ServiceCardsProps) => {
  return (
    <div className="space-y-3 mb-6">
      <div className="text-center text-sm text-gray-600 font-medium">
        🌟 Popular Services
      </div>
      {/* Ensure grid behavior is correct for the desktop chatbot size */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2"> 
        {services.slice(0, 2).map((service, index) => (
          <div
            key={index}
            onClick={() => onServiceClick(service)}
            className="bg-gradient-to-r from-violet-50 to-blue-50 border border-violet-200 rounded-xl p-4 cursor-pointer hover:from-violet-100 hover:to-blue-100 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
          >
            {/* Flex layout for title and price, stacking on small, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-2">
              {/* Title: added leading-tight, pr-2, and break-words for better wrapping */}
              <h4 className="font-bold text-violet-700 text-lg leading-tight mb-1 sm:mb-0 pr-2 break-words">{service.title}</h4> 
              {/* Price: ensured no wrapping within its own text, flex-shrink-0 for priority */}
              <span className="text-sm font-bold text-green-600 whitespace-nowrap flex-shrink-0">{service.price}</span> 
            </div>
            {/* Description: added leading-snug for tighter line height */}
            <p className="text-sm text-gray-600 mb-3 leading-snug">{service.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {service.features.slice(0, 2).map((feature, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
            <Button size="sm" className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-lg">
              {service.cta} →
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;