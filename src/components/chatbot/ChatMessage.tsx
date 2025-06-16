
import { Button } from '@/components/ui/button';
import { Message } from './types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] sm:max-w-[70%] p-4 rounded-2xl transition-all duration-300 ${
          message.isUser
            ? 'bg-gradient-to-r from-violet-600 to-blue-500 text-white transform hover:scale-105 shadow-lg'
            : 'bg-gray-50 text-gray-800 border border-gray-100 hover:bg-gray-100 hover:shadow-md'
        }`}
      >
        <p className="text-sm leading-relaxed break-words">{message.text}</p>
        {message.type === 'interactive' && !message.isUser && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <Button size="sm" className="text-xs bg-violet-100 text-violet-700 hover:bg-violet-200 border-0 rounded-full px-3 py-1">
                👍 Helpful
              </Button>
              <Button size="sm" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 rounded-full px-3 py-1">
                📞 Call Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
