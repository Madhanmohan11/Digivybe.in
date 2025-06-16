
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
  index: number;
}

const TestimonialCard = ({ name, company, text, rating, avatar, index }: TestimonialCardProps) => {
  return (
    <Card className="fade-in-up hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{animationDelay: `${0.2 * index}s`}}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-sm sm:text-base text-gray-600 mb-4 italic">"{text}"</p>
        <div>
          <div className="font-semibold text-gray-800 text-sm sm:text-base">{name}</div>
          <div className="text-xs sm:text-sm text-gray-500">{company}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
