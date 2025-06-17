import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    const initObserver = () => {
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
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(initObserver);
    } else {
      setTimeout(initObserver, 300);
    }

    return () => observer?.disconnect();
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies like React, Next.js, and Node.js.",
      icon: "🌐",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Modern Tech Stack"],
      gradient: "from-violet-600 to-purple-600",
      route: "/services/web-development"
    },
    {
      title: "E-Commerce Development",
      description: "Complete online stores with payment integration, inventory management, and user-friendly shopping experiences.",
      icon: "🛒",
      features: ["Payment Integration", "Inventory Management", "Shopping Cart", "Order Tracking"],
      gradient: "from-blue-600 to-cyan-600",
      route: "/services/ecommerce-development"
    },
    {
      title: "Photos and Video Editing",
      description: "Professional editing services to enhance your brand’s visual content.",
      icon: "📸",
      features: ["Color Correction", "Visual Effects", "Professional Editing", "Creative Enhancement"],
      gradient: "from-purple-600 to-pink-600",
      route: "/services/photo-video-editing"
    },
    {
      title: "SEO Optimizing",
      description: "Improve your site ranking and visibility with our SEO strategies.",
      icon: "📈",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics Tracking"],
      gradient: "from-green-600 to-teal-600",
      route: "/services/seo-optimization"
    },
    {
      title: "Logo Design",
      description: "Memorable logos that reflect your brand identity.",
      icon: "🎨",
      features: ["Brand Identity", "Vector Graphics", "Multiple Formats", "Brand Guidelines"],
      gradient: "from-orange-600 to-red-600",
      route: "/services/logo-design"
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress solutions tailored for your business.",
      icon: "📝",
      features: ["Custom Themes", "Plugin Development", "Performance Optimization", "Security"],
      gradient: "from-indigo-600 to-blue-600",
      route: "/services/wordpress-development"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in-up will-change-transform">
            Our <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto fade-in-up will-change-transform" style={{ animationDelay: '0.2s' }}>
            We offer comprehensive digital solutions to transform your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 fade-in-up will-change-transform bg-white overflow-hidden"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${service.gradient} p-8 text-center`}>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link to={service.route}>
                      <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105`}>
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              We follow a proven methodology to ensure every project exceeds expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision and requirements" },
              { step: "02", title: "Strategy", description: "Creating a tailored plan for your project" },
              { step: "03", title: "Development", description: "Building your solution with precision" },
              { step: "04", title: "Launch", description: "Delivering and supporting your success" }
            ].map((process, index) => (
              <div key={process.step} className="text-center fade-in-up will-change-transform" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            Let's discuss your project and create something amazing together.
          </p>
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
