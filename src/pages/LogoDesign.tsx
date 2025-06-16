import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Palette, Eye, Layers, Download, Star, ArrowRight, ExternalLink } from 'lucide-react'; // Ensure ExternalLink is imported
import ContactForm from '@/components/ContactForm';

const LogoDesign = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const services = [
    { icon: <Palette className="w-6 h-6" />, title: "Brand Identity", description: "Complete brand identity development and guidelines" },
    { icon: <Eye className="w-6 h-6" />, title: "Logo Concepts", description: "Multiple logo concepts and design variations" },
    { icon: <Layers className="w-6 h-6" />, title: "Vector Graphics", description: "High-quality vector logos for all applications" },
    { icon: <Download className="w-6 h-6" />, title: "File Formats", description: "All necessary file formats for print and digital" }
  ];

  const packages = [
    {
      id: "basic",
      name: "Basic Logo",
      price: "₹12,000",
      originalPrice: "₹18,000",
      features: ["3 logo concepts", "2 revisions", "High-res files", "Basic brand colors", "Email support", "Logo Guidelines"],
      gradient: "from-orange-500 to-red-500",
      badge: "Perfect for Startups",
      popular: false
    },
    {
      id: "professional",
      name: "Professional Logo",
      price: "₹30,000",
      originalPrice: "₹45,000",
      features: ["5 logo concepts", "Unlimited revisions", "Vector files", "Brand guidelines", "Social media kit", "Priority support", "Business Card Design", "Letterhead Design"],
      gradient: "from-red-500 to-pink-500",
      badge: "Most Popular",
      popular: true
    },
    {
      id: "complete",
      name: "Complete Branding",
      price: "₹60,000",
      originalPrice: "₹85,000",
      features: ["10 logo concepts", "Complete brand identity", "Business card design", "Letterhead design", "Brand style guide", "1-on-1 consultation", "Brand Mockups", "Website Favicon"],
      gradient: "from-pink-500 to-purple-500",
      badge: "Premium Brand Identity",
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Logo <span className="text-yellow-300">Design</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Create a memorable brand identity with professional logo design that captures your business essence and connects with your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 w-full sm:w-auto"
                  onClick={scrollToPricing}
                >
                  Start Design
                </Button>
              </div>
            </div>
            <div className="text-center mb-4">
              <video
                src="/assets/Logo.mp4"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Logo Design Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive logo design services to build your brand identity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-orange-600 mb-4 flex justify-center">{service.icon}</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Choose Your Perfect Logo Package</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the ideal logo design package for your brand needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden cursor-pointer transition-all duration-300 transform ${
                  pkg.popular ? 'ring-2 ring-orange-600 scale-105' : ''
                } ${
                  selectedPackage === pkg.id ? 'ring-4 ring-green-500 scale-105 shadow-2xl' :
                  hoveredPackage === pkg.id ? 'scale-102 shadow-lg' : ''
                }`}
                onClick={() => handlePackageSelect(pkg.id)}
                onMouseEnter={() => setHoveredPackage(pkg.id)}
                onMouseLeave={() => setHoveredPackage(null)}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-600 text-white text-center py-2 text-sm font-medium">
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
                    🎨
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
            <div className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200 text-center animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-orange-800">Ready to Create Your Brand?</h3>
              <p className="text-gray-700 mb-6">
                You've selected the **{packages.find(p => p.id === selectedPackage)?.name}** package.
                Let's design a logo that represents your brand perfectly!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" onClick={handleContactNow}>
                  Start Logo Project
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Create Your Brand?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's design a logo that represents your brand and makes a lasting impression.
          </p>
          {/* Updated button as per your request */}
          <Link to="/portfolio">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-orange-600 hover:bg-gray-100 w-full sm:w-auto"  
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
            service: 'Logo Design'
          }}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  );
};

export default LogoDesign;