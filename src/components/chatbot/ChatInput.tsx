
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onSuggestionClick: (suggestion: string) => void;
}

const ChatInput = ({ value, onChange, onSend, onKeyPress, onSuggestionClick }: ChatInputProps) => {
  const suggestions = ["💰 Get Quote", "🎨 View Work", "📞 Book Call", "⚡ Quick Start"];

  return (
    <div className="p-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white flex-shrink-0">
      <div className="max-w-4xl mx-auto">
        <div className="flex space-x-3 mb-3">
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder="Ask me anything about digital services..."
            className="flex-1 border-gray-200 rounded-2xl px-4 py-3 focus:ring-violet-500 focus:border-violet-500 bg-white shadow-sm text-base"
          />
          <Button
            onClick={onSend}
            disabled={!value.trim()}
            className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 rounded-2xl px-6 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </Button>
        </div>
        
        <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide">
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              onClick={() => onSuggestionClick(suggestion.replace(/[💰🎨📞⚡] /, ''))}
              variant="outline"
              size="sm"
              className="text-xs whitespace-nowrap rounded-full border-violet-200 text-violet-600 hover:bg-violet-50 flex-shrink-0 px-3 py-1"
            >
              {suggestion}
            </Button>
          ))}
        </div>
        
        <div className="flex justify-center mt-2">
          <p className="text-xs text-gray-500">Powered by DigiBot AI • Always Learning</p>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
