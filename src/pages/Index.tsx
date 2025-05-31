
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies",
      icon: "🌐",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      title: "E-Commerce Solutions", 
      description: "Complete online stores that drive sales",
      icon: "🛒",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Digital Marketing",
      description: "SEO optimization and brand growth strategies",
      icon: "📈",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 fade-in-up">
            <span className="gradient-text">Digivybe</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 fade-in-up" style={{animationDelay: '0.2s'}}>
            We Digitize Your Vibe
          </p>
          <p className="text-lg sm:text-xl text-gray-500 mb-12 max-w-2xl mx-auto fade-in-up" style={{animationDelay: '0.4s'}}>
            Transform your digital presence with cutting-edge solutions that capture your unique essence and drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up" style={{animationDelay: '0.6s'}}>
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
                Explore Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
              What We <span className="gradient-text">Create</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
              We specialize in creating digital experiences that not only look amazing but also deliver exceptional results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 fade-in-up bg-white"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-up">
            <Link to="/services">
              <Button className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
            Let's collaborate to create something extraordinary that truly represents your brand's unique vibe.
          </p>
          <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
