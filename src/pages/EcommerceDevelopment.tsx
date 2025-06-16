import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingCart, CreditCard, Package, BarChart3, Star, ArrowRight, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const EcommerceDevelopment = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const features = [
    { icon: <ShoppingCart className="w-6 h-6" />, title: "Shopping Cart", description: "Advanced cart functionality with save for later options" },
    { icon: <CreditCard className="w-6 h-6" />, title: "Payment Gateway", description: "Secure payment processing with multiple payment options" },
    { icon: <Package className="w-6 h-6" />, title: "Inventory Management", description: "Real-time inventory tracking and management system" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Analytics Dashboard", "description": "Comprehensive sales and customer analytics" }
  ];

  const platforms = [
    { name: "Shopify", description: "Popular e-commerce platform with extensive customization", icon: "🛍️" },
    { name: "WooCommerce", description: "WordPress-based solution for flexible online stores", icon: "🔧" },
    { name: "Custom Development", description: "Tailored solutions built from scratch for unique needs", icon: "⚡" },
    { name: "Magento", description: "Enterprise-level e-commerce platform for large businesses", icon: "🏢" }
  ];

  const packages = [
    {
      id: "basic",
      name: "Basic Store",
      price: "₹50,000",
      originalPrice: "₹75,000",
      features: ["Up to 50 products", "Basic payment gateway", "Mobile responsive", "Order management", "2 months support", "SSL Certificate"],
      gradient: "from-blue-500 to-cyan-500",
      badge: "Perfect for Startups",
      popular: false
    },
    {
      id: "professional",
      name: "Professional Store",
      price: "₹1,25,000",
      originalPrice: "₹1,75,000",
      features: ["Up to 500 products", "Multiple payment gateways", "Advanced SEO", "Inventory management", "Customer reviews", "4 months support", "Analytics Integration", "Social Media Integration"],
      gradient: "from-purple-500 to-pink-500",
      badge: "Most Popular",
      popular: true
    },
    {
      id: "enterprise",
      name: "Enterprise Store",
      price: "₹2,50,000",
      originalPrice: "₹3,50,000",
      features: ["Unlimited products", "Custom integrations", "Advanced analytics", "Multi-vendor support", "API development", "6 months support", "Custom Admin Panel", "24/7 Monitoring"],
      gradient: "from-orange-500 to-red-500",
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
                E-Commerce <span className="text-yellow-300">Development</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Build powerful online stores that drive sales and provide exceptional shopping experiences. From product catalogs to secure checkout processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto" // Added w-full and sm:w-auto
                  onClick={scrollToPricing}
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <video
                  src="/assets/E-com.mp4"
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
              <p className="text-white/80">Build Your Dream Store</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">E-Commerce Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a successful online business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">E-Commerce Platforms</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with leading e-commerce platforms to build your perfect online store.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg border hover:shadow-md transition-shadow">
                <div className="text-3xl">{platform.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{platform.name}</h3>
                  <p className="text-gray-600">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - ADDED ID HERE */}
      <section id="pricing-section" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Choose Your Perfect E-Commerce Package</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Select the ideal e-commerce package for your business needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative overflow-hidden cursor-pointer transition-all duration-300 transform ${
                  pkg.popular ? 'ring-2 ring-white scale-105' : ''
                } ${
                  selectedPackage === pkg.id ? 'ring-4 ring-green-400 scale-105 shadow-2xl' : 
                  hoveredPackage === pkg.id ? 'scale-102 shadow-lg' : ''
                }`}
                onClick={() => handlePackageSelect(pkg.id)}
                onMouseEnter={() => setHoveredPackage(pkg.id)}
                onMouseLeave={() => setHoveredPackage(null)}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-medium">
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
                    🛒
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
            <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Build Your Store?</h3>
              <p className="text-white/90 mb-6">
                You've selected the <strong>{packages.find(p => p.id === selectedPackage)?.name}</strong> package. 
                Let's discuss your e-commerce requirements and get started!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={handleContactNow}>
                  Contact Us Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build an e-commerce platform that converts visitors into customers and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-blue-600 hover:bg-white w-full sm:w-auto" // Added w-full and sm:w-auto
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Portfolio
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
            service: 'E-commerce Development'
          }}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  );
};

export default EcommerceDevelopment;