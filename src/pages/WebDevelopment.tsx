import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Check, Code, Smartphone, Globe, Zap,
  Star, ArrowRight, ExternalLink
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const WebDevelopment = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const services = [
    { icon: <Code className="w-6 h-6" />, title: "Custom Development", description: "Tailored solutions built from scratch" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Responsive Design", description: "Perfect display on all devices" },
    { icon: <Globe className="w-6 h-6" />, title: "Modern Frameworks", description: "React, Next.js, and latest technologies" },
    { icon: <Zap className="w-6 h-6" />, title: "Fast Performance", description: "Optimized for speed and efficiency" }
  ];

  const packages = [
    {
      id: "basic",
      name: "Starter",
      price: "₹8999",
      originalPrice: "₹10000",
      features: [
        "5 Pages Website", "Responsive Design", "Basic SEO", "Contact Form",
        "2 Month Support", "Mobile Optimized", "WhatsApp Button Integration", "Social Media Integration"
      ],
      gradient: "from-blue-500 to-purple-500",
      badge: "Best for Small Business",
      popular: false
    },
    {
      id: "Startup",
      name: "Startup",
      price: "₹17999",
      originalPrice: "₹25,000",
      features: [
        "5-15 Pages Website", "Responsive Design", "On Page SEO ", "Contact Form",
        "5 Month Support", "Admin Access", "Inquiry Form", "WhatsApp Button Integration", "Social Media Integration"
      ],
      gradient: "from-green-500 to-yellow-500",
      badge: "Best for Startup Business",
      popular: false
    },
    {
      id: "professional",
      name: "Professional",
      price: "₹35,000",
      originalPrice: "₹65,000",
      features: [
        "20+ Pages Website", "Custom Design", "Advanced SEO", "E-commerce Ready",
        "1 Year Support", "Performance Optimization", "Analytics Setup", "WhatsApp Button Integration", "Social Media Integration"
      ],
      gradient: "from-purple-500 to-pink-500",
      badge: "Most Popular",
      popular: true
    },
    {
      id: "premium",
      name: "Enterprise",
      features: [
        "Unlimited Pages", "Custom Functionality", "Advanced Integrations", "API Development",
        "Priority Support", "1 Year Maintenance", "Performance Monitoring",
        "Security Audits", "Custom Admin Panel", "WhatsApp Button Integration", "Social Media Integration"
      ],
      gradient: "from-pink-500 to-red-500",
      badge: "Enterprise Solution",
      popular: false
    }
  ];

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    setTimeout(() => {
      const section = document.getElementById('ready-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleContactNow = () => {
    const selected = packages.find(p => p.id === selectedPackage);
    if (selected) {
      setShowContactForm(true);
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/services" className="inline-flex items-center text-violet-600 hover:text-violet-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Web <span className="text-yellow-300">Development</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Create stunning, fast, and user-friendly websites that drive results.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto"
                onClick={scrollToPricing}
              >
                Get Started
              </Button>
            </div>
            <div className="text-center">
              <video
                src="/assets/web-ills.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                className="w-50 h-60 rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development services using the latest technologies and best practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-blue-600 mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Choose Your Perfect Package</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the ideal web development package for your business needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden cursor-pointer transition-all duration-300 transform ${
                  pkg.popular ? 'ring-2 ring-purple-600 scale-105' : ''
                } ${
                  selectedPackage === pkg.id ? 'ring-4 ring-blue-500 scale-105 shadow-2xl' :
                  hoveredPackage === pkg.id ? 'scale-102 shadow-lg' : ''
                }`}
                onMouseEnter={() => setHoveredPackage(pkg.id)}
                onMouseLeave={() => setHoveredPackage(null)}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-purple-600 text-white text-center py-2 text-sm font-medium">
                    <Star className="w-4 h-4 inline mr-1" />
                    {pkg.badge}
                  </div>
                )}
                {!pkg.popular && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${pkg.gradient}`}>
                    {pkg.badge}
                  </div>
                )}
                <CardContent className="p-8 pt-12">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${pkg.gradient} rounded-full flex items-center justify-center text-white text-2xl ${hoveredPackage === pkg.id ? 'scale-110' : ''}`}>
                    💻
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                      <span className="text-4xl font-bold text-green-600">{pkg.price}</span>
                    </div>
                    <span className="text-gray-600 text-sm">One-time payment</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => handlePackageSelect(pkg.id)}
                    className={`w-full transition-all duration-300 ${
                      selectedPackage === pkg.id
                        ? 'bg-green-600 hover:bg-green-700'
                        : `bg-gradient-to-r ${pkg.gradient} hover:opacity-90`
                    }`}
                  >
                    {selectedPackage === pkg.id ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Selected
                      </>
                    ) : (
                      <>
                        Choose Plan
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Ready to Get Started Section */}
          {selectedPackage && (
            <div
              id="ready-section"
              className="scroll-mt-32 mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 text-center animate-fade-in"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6">
                You've selected the <strong>{packages.find(p => p.id === selectedPackage)?.name}</strong> package.
                Let's discuss your project requirements and get started!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleContactNow}>
                  Contact Us Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's turn your vision into a powerful web presence that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-600 hover:bg-white w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && selectedPackage && (
        <ContactForm
          selectedPackage={{
            name: packages.find(p => p.id === selectedPackage)?.name || '',
            price: packages.find(p => p.id === selectedPackage)?.price || '',
            service: 'Web Development'
          }}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  );
};

export default WebDevelopment;
