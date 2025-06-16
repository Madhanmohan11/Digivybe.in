
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AchievementStats from '@/components/AchievementStats';
import { ArrowRight, Sparkles, Rocket, Code } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden pt-20 lg:pt-24">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-16 sm:w-32 h-16 sm:h-32 bg-violet-500/30 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute top-48 right-20 w-12 sm:w-24 h-12 sm:h-24 bg-blue-500/40 rounded-full animate-bounce blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-8 sm:w-16 h-8 sm:h-16 bg-purple-500/35 rounded-full animate-ping blur-md"></div>
        <div className="absolute bottom-20 right-1/3 w-6 sm:w-12 h-6 sm:h-12 bg-pink-500/30 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-1/2 left-20 w-4 sm:w-8 h-4 sm:h-8 bg-cyan-500/40 rounded-full float-slow blur-sm"></div>
        <div className="absolute top-1/3 right-1/4 w-3 sm:w-6 h-3 sm:h-6 bg-yellow-500/35 rounded-full float-medium blur-xs"></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-1/4 left-1/3 text-violet-400/20 text-lg sm:text-2xl font-mono animate-float">&lt;/&gt;</div>
        <div className="absolute bottom-1/3 right-1/5 text-blue-400/20 text-base sm:text-xl font-mono animate-bounce">{ }</div>
        <div className="absolute top-2/3 left-1/5 text-purple-400/20 text-sm sm:text-lg font-mono animate-pulse">( )</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative z-10">
        <div className="flex flex-col items-center text-center w-full">
          {/* Badge */}
          <div className="mb-6 sm:mb-8 fade-in-up">
            <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-violet-500/20 to-blue-500/20 backdrop-blur-lg border border-white/30 text-white shadow-2xl">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400 animate-spin" />
              #1 AI-Powered Digital Solutions
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 opacity-90 fade-in-up leading-tight text-white">
            <span className="block mb-2">Transform Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 animate-gradient-x glow-text">
              Digital Universe
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl opacity-85 max-w-4xl mx-auto mb-8 sm:mb-10 fade-in-up leading-relaxed text-white" style={{animationDelay: '0.2s'}}>
            We don't just build websites - we craft <span className="text-yellow-300 font-semibold">digital empires</span> that dominate markets, captivate audiences, and deliver explosive growth with revolutionary AI technology.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link to="/services">
              <Button size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-violet-600 via-purple-600 to-blue-500 hover:from-violet-700 hover:via-purple-700 hover:to-blue-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full shadow-2xl hover:shadow-violet-500/50 transition-all duration-500 transform hover:scale-110 text-lg sm:text-xl font-bold relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Launch Your Empire
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-violet-600 rounded-full backdrop-blur-lg bg-white/10 transition-all duration-500 transform hover:scale-110 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold shadow-xl">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Free AI Consultation
              </Button>
            </Link>
          </div>
          
          {/* Achievement Stats */}
          <AchievementStats />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
