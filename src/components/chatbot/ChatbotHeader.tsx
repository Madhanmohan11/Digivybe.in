
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ChatbotHeaderProps {
  onClose: () => void;
}

const ChatbotHeader = ({ onClose }: ChatbotHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-500 p-4 text-white relative overflow-hidden flex-shrink-0">
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-pulse" />
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">🤖</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div>
            <h3 className="font-bold text-xl">DigiBot AI</h3>
            <div className="flex items-center text-sm opacity-90">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Online • Instant Response
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right text-sm">
            <div className="opacity-75">Response Time</div>
            <div className="font-bold">~1.2s</div>
          </div>
          
          <Button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-white/20 text-white border-white/30">🚀 AI Powered</Badge>
        <Badge className="bg-white/20 text-white border-white/30">💡 Smart Quotes</Badge>
        <Badge className="bg-white/20 text-white border-white/30">⚡ 24/7 Support</Badge>
      </div>
    </div>
  );
};

export default ChatbotHeader;
