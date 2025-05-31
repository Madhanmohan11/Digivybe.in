import { useEffect, useState } from 'react';
import log from './Log/log.png'; // Ensure the image path is correct

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Hide after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center animate-fade-in">
        {/* Digivybe Logo */}
        <img 
          src={log} 
          alt="Digivybe Logo" 
          className="h-20 lg:h-28 w-auto mx-auto mb-4 animate-scale"
        />

        {/* Animated Loading Bar */}
        <div className="w-32 h-1 bg-gradient-to-r from-violet-600 to-blue-500 mx-auto rounded-full overflow-hidden mb-4">
          <div className="h-full bg-white rounded-full animate-loader"></div>
        </div>

        <p className="text-gray-600 mt-2">Loading your digital experience...</p>

        {/* Animated Bouncing Dots */}
        {/* <div className="flex justify-center space-x-2 mt-6">
          <div className="w-3 h-3 bg-violet-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div> */}
      </div>
    </div>
  );
};

export default Preloader;
