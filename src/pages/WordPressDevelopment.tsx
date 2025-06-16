import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, FileText, Puzzle, Shield, Zap, Star, ArrowRight, ExternalLink } from 'lucide-react'; // Ensure ExternalLink is imported
import ContactForm from '@/components/ContactForm';

const WordPressDevelopment = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const services = [
    { icon: <FileText className="w-6 h-6" />, title: "Custom Themes", description: "Unique WordPress themes tailored to your brand" },
    { icon: <Puzzle className="w-6 h-6" />, title: "Plugin Development", description: "Custom plugins for specific functionality needs" },
    { icon: <Shield className="w-6 h-6" />, title: "Security & Maintenance", description: "Keep your WordPress site secure and updated" },
    { icon: <Zap className="w-6 h-6" />, title: "Performance Optimization", description: "Fast-loading WordPress sites with optimized code" }
  ];

  const packages = [
    {
      id: "basic",
      name: "Basic WordPress",
      price: "₹35,000",
      originalPrice: "₹50,000",
      features: ["Custom theme setup", "5 pages", "Basic plugins", "Mobile responsive", "2 months support", "SEO Optimization"],
      gradient: "from-indigo-500 to-blue-500",
      badge: "Great for Blogs",
      popular: false
    },
    {
      id: "professional",
      name: "Professional WordPress",
      price: "₹75,000",
      originalPrice: "₹1,10,000",
      features: ["Custom theme development", "10 pages", "Advanced plugins", "SEO optimization", "Performance optimization", "4 months support", "Contact Forms", "Gallery Integration"],
      gradient: "from-blue-500 to-purple-500",
      badge: "Most Popular",
      popular: true
    },
    {
      id: "enterprise",
      name: "Enterprise WordPress",
      price: "₹1,50,000",
      originalPrice: "₹2,25,000",
      features: ["Fully custom solution", "Unlimited pages", "Custom plugin development", "Multi-site setup", "Advanced security", "6 months support", "E-commerce Integration", "Custom Dashboard"],
      gradient: "from-purple-500 to-indigo-500",
      badge: "Enterprise Solution",
      popular: false
    }
  ];

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
  };

  const handleContactNow = () => {
    const selected = packages.find(p => p.id === selectedPackage);
    if (selected) {
      setShowContactForm(true);
    }
  };

  // Function to scroll to the pricing section
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                WordPress <span className="text-yellow-300">Development</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Build powerful, flexible WordPress websites with custom themes, plugins, and functionality that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-gray-100 w-full sm:w-auto"
                  onClick={scrollToPricing}
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="text-center mb-4">
              <video
                src="/assets/Wordpress.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                className="mx-auto w-50 h-60 rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">WordPress Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive WordPress development services for all your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-indigo-600 mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <section id="pricing-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Choose Your Perfect WordPress Package</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the ideal WordPress package for your project needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden cursor-pointer transition-all duration-300 transform ${
                  pkg.popular ? 'ring-2 ring-indigo-600 scale-105' : ''
                } ${
                  selectedPackage === pkg.id ? 'ring-4 ring-green-500 scale-105 shadow-2xl' :
                  hoveredPackage === pkg.id ? 'scale-102 shadow-lg' : ''
                }`}
                onClick={() => handlePackageSelect(pkg.id)}
                onMouseEnter={() => setHoveredPackage(pkg.id)}
                onMouseLeave={() => setHoveredPackage(null)}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-indigo-600 text-white text-center py-2 text-sm font-medium">
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
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${pkg.gradient} rounded-full flex items-center justify-center text-white text-2xl transition-transform duration-300 ${hoveredPackage === pkg.id ? 'scale-110' : ''}`}>
                    📝
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                      <span className="text-4xl font-bold text-green-600">{pkg.price}</span>
                    </div>
                    <span className="text-gray-600 text-sm">Per project</span>
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

          {selectedPackage && (
            <div className="mt-12 p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border-2 border-indigo-200 text-center animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-indigo-800">Ready to Build with WordPress?</h3>
              <p className="text-gray-700 mb-6">
                You've selected the **{packages.find(p => p.id === selectedPackage)?.name}** package.
                Let's create a powerful WordPress website for you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" onClick={handleContactNow}>
                  Start WordPress Project
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build with WordPress?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create a powerful WordPress website that meets your specific needs and goals.
          </p>
          {/* Changed this button to "View Our Work" with Link and ExternalLink icon */}
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
      </section>

      {/* Contact Form Modal */}
      {showContactForm && selectedPackage && (
        <ContactForm
          selectedPackage={{
            name: packages.find(p => p.id === selectedPackage)?.name || '',
            price: packages.find(p => p.id === selectedPackage)?.price || '',
            service: 'WordPress Development'
          }}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  );
};

export default WordPressDevelopment;