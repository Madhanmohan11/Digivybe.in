
import WebDevAnimation from '@/components/WebDevAnimation';

const WebDevShowcase = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-violet-500/10 rounded-full animate-pulse blur-lg"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/10 rounded-full animate-bounce blur-md"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-500/10 rounded-full animate-ping blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Watch Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">Development Process</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            See how we transform ideas into powerful digital solutions with our systematic approach and cutting-edge technology.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <WebDevAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevShowcase;
