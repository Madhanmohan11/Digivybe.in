
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Digivybe
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-600 to-blue-500 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        <p className="text-gray-600 mt-4 animate-fade-in">Loading your digital experience...</p>
        
        {/* Animated circles */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-3 h-3 bg-violet-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
