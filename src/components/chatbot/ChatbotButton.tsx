
import { Button } from '@/components/ui/button';

interface ChatbotButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatbotButton = ({ isOpen, onClick }: ChatbotButtonProps) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 opacity-30 animate-ping"></div>
        
        <Button
          onClick={onClick}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-blue-500 hover:from-violet-700 hover:via-purple-700 hover:to-blue-600 text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          {isOpen ? (
            <svg className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="relative z-10 flex flex-col items-center">
              <svg className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ChatbotButton;
