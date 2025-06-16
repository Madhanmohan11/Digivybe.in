// chatbot/ChatbotAI.tsx - UPDATED to remove the notificationDiv
import { useState, useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Message, ServiceCard, UserProfile } from './chatbot/types';
import { quickActions, serviceCards, initialMessage } from './chatbot/constants';
import { getAIResponse, getQuickActionResponse } from './chatbot/utils';
import ChatbotButton from './chatbot/ChatbotButton';
import ChatbotHeader from './chatbot/ChatbotHeader';
import QuickActions from './chatbot/QuickActions';
import ServiceCards from './chatbot/ServiceCards'; // Ensure this is the most updated version
import ChatMessage from './chatbot/ChatMessage';
import TypingIndicator from './chatbot/TypingIndicator';
import ChatInput from './chatbot/ChatInput';

const ChatbotAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '',
    interests: [],
    budget: '',
    timeline: ''
  });
  const [showQuickActions, setShowQuickActions] = useState(true);
  const scrollAreaRef = useRef<HTMLHTMLDivElement>(null);

  const handleQuickAction = (action: string) => {
    const userActionMessage: Message = {
      id: (Date.now() - 1).toString(),
      text: action,
      isUser: true,
      timestamp: new Date(),
      type: 'text'
    };
    setMessages(prev => [...prev, userActionMessage]);

    setIsTyping(true);
    setShowQuickActions(false);

    setTimeout(() => {
      const responseText = getQuickActionResponse(action);
      const actionMessage: Message = {
        id: Date.now().toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, actionMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleServiceInteraction = (service: ServiceCard) => {
    const serviceMessage: Message = {
      id: Date.now().toString(),
      text: `Tell me more about ${service.title} - I'm interested in ${service.description}`,
      isUser: true,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, serviceMessage]);

    setIsTyping(true);
    
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(service.title),
        isUser: false,
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowQuickActions(false);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
        type: 'text'
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // REMOVED THE FOLLOWING useEffect BLOCK TO REMOVE THE NOTIFICATION DIV
  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        const notificationDiv = document.createElement('div');
        notificationDiv.className = 'fixed bottom-20 right-4 bg-gradient-to-r from-violet-600 to-blue-500 text-white px-3 py-2 rounded-lg shadow-lg z-40 animate-bounce text-sm';
        document.body.appendChild(notificationDiv);
        
        setTimeout(() => {
          if (document.body.contains(notificationDiv)) {
            document.body.removeChild(notificationDiv);
          }
        }, 5000);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen]);
  */

  useEffect(() => {
    const handleOpenChatbot = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChatbot', handleOpenChatbot);
    
    return () => {
      window.removeEventListener('openChatbot', handleOpenChatbot);
    };
  }, []);

  return (
    <>
      <ChatbotButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end md:items-end md:justify-end">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="
              relative h-full w-full flex flex-col bg-white shadow-xl
              rounded-none m-0                                      
              md:max-h-[85vh] md:max-w-md md:rounded-xl md:m-4     
          "> 
            <ChatbotHeader onClose={() => setIsOpen(false)} />

            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                <div className="space-y-4 max-w-4xl mx-auto">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  
                  {isTyping && <TypingIndicator />}

                  {showQuickActions && messages.length === 1 && (
                    <QuickActions actions={quickActions} onActionClick={handleQuickAction} />
                  )}

                  {!isTyping && messages.length > 2 && messages.length % 4 === 0 && (
                     <ServiceCards services={serviceCards} onServiceClick={handleServiceInteraction} />
                  )}
                </div>
              </ScrollArea>
            </div>

            <ChatInput
              value={inputValue}
              onChange={setInputValue}
              onSend={handleSendMessage}
              onKeyPress={handleKeyPress}
              onSuggestionClick={setInputValue}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotAI;