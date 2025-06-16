
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Sparkles } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-white/15 rounded-full animate-pulse blur-2xl"></div>
        <div className="absolute bottom-10 right-10 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-yellow-300/20 rounded-full animate-bounce blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-10 sm:w-20 h-10 sm:h-20 bg-white/10 rounded-full float-slow blur-lg"></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 sm:w-16 h-8 sm:h-16 bg-pink-300/15 rounded-full animate-ping blur-md"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in-up mb-6 sm:mb-8">
          <div className="inline-block p-4 sm:p-6 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 mb-4 sm:mb-6">
            <Target className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-300 animate-pulse" />
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-black text-white mb-6 sm:mb-8 fade-in-up">
          Ready to <span className="text-yellow-300 glow-text">Dominate</span> Your Market?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 mb-12 sm:mb-16 max-w-3xl mx-auto fade-in-up leading-relaxed" style={{animationDelay: '0.2s'}}>
          Join the <span className="text-yellow-300 font-bold">digital revolution</span> with AI-powered solutions that transform your business into tomorrow's success story and market leader.
        </p>
        <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 sm:px-12 lg:px-16 py-6 sm:py-8 rounded-full text-lg sm:text-xl lg:text-2xl font-black transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-white/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/20 to-violet-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 animate-spin" />
              Start Your Success Story
              <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 ml-3 sm:ml-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
