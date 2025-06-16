
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TestimonialCard from '@/components/TestimonialCard';
import { ArrowRight, Star, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Advanced Web Development",
      description: "Next-generation websites with AI integration and lightning-fast performance",
      icon: "🚀",
      gradient: "from-violet-600 to-purple-600",
      features: ["AI-Powered UX", "Lightning Speed", "Mobile-First Design"],
      stats: "500+ Projects"
    },
    {
      title: "Smart E-Commerce Solutions", 
      description: "Revolutionary online stores with predictive analytics and automated conversions",
      icon: "💎",
      gradient: "from-blue-600 to-cyan-600",
      features: ["AI Analytics", "Auto-Optimization", "Smart Inventory"],
      stats: "300% ROI Boost"
    },
    {
      title: "Digital Transformation",
      description: "Complete business digitization with cutting-edge technology and strategic insights",
      icon: "🎯",
      gradient: "from-purple-600 to-pink-600",
      features: ["Process Automation", "Data Intelligence", "Cloud Migration"],
      stats: "99.9% Uptime"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "DigiVybe transformed our digital presence completely. Our sales increased by 500% and we're now market leaders!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      company: "E-Shop Pro",
      text: "The AI-powered e-commerce solution they built is mind-blowing. Our conversion rate tripled overnight!",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      text: "Professional, innovative, and delivered beyond our wildest expectations. They're true digital magicians!",
      rating: 5,
      avatar: "👩‍🎨"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="fade-in-up mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-violet-100 text-violet-600">
              <Star className="w-4 h-4 mr-2" />
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 fade-in-up">
            <span className="gradient-text">Revolutionary</span> Digital Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
            We combine creativity with technology to deliver exceptional results that exceed expectations and drive real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 fade-in-up bg-white overflow-hidden"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <CardContent className="p-6 sm:p-8 text-center relative">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl sm:text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-xs sm:text-sm text-gray-500">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 to-blue-600/0 group-hover:from-violet-600/5 group-hover:to-blue-600/5 transition-all duration-500 rounded-lg"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12 fade-in-up">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">What Our Clients Say</h3>
          <p className="text-gray-600">Real results from real businesses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>

        <div className="text-center fade-in-up">
          <Link to="/services">
            <Button className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-violet-500/25">
              Explore All Services
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
