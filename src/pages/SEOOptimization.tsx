import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Search, TrendingUp, Target, BarChart, Star, ArrowRight, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const SEOOptimization = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
 
  const readyToBoostRef = useRef<HTMLDivElement>(null);
  const getFixedHeaderHeight = () => {
    const headerElement = document.getElementById('digivybe-header');  
    if (headerElement) {
      return headerElement.offsetHeight;
    }
    return 80;  
  };
  // ------------------------------------------------------------------

  const services = [
    { icon: <Search className="w-6 h-6" />, title: "Keyword Research", description: "In-depth keyword analysis and strategy development" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "On-Page SEO", description: "Optimize content and meta tags for better rankings" },
    { icon: <Target className="w-6 h-6" />, title: "Technical SEO", description: "Fix technical issues affecting search performance" },
    { icon: <BarChart className="w-6 h-6" />, title: "SEO Analytics", description: "Track and measure SEO performance and ROI" }
  ];

  const packages = [
    {
      id: "starter",
      name: "Starter SEO",
      price: "₹2999",
      originalPrice: "From",
      features: ["Keyword research", "On-page optimization", "Meta tag optimization", "Basic reporting", "1 month support", "Google Analytics Setup"],
      gradient: "from-green-500 to-teal-500",
      badge: "Great for New Websites",
      popular: false
    },
    {
      id: "professional",
      name: "Professional SEO",
      price: "₹6999",
      originalPrice: "From",
      features: ["Advanced keyword strategy", "Technical SEO audit", "Content optimization", "Link building", "Monthly reports", "3 months support", "Local SEO", "Competitor Analysis"],
      gradient: "from-teal-500 to-blue-500",
      badge: "Most Popular",
      popular: true
    },
    {
      id: "enterprise",
      name: "Enterprise SEO",
      price: "₹15999",
      originalPrice: "From",
      features: ["Comprehensive SEO strategy", "Advanced competitor analysis", "Advanced analytics", "24/7 monitoring", "Dedicated SEO manager", "6 months support", "E-commerce SEO", "Schema Markup"],
      gradient: "from-blue-500 to-indigo-500",
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
      const headerHeight = getFixedHeaderHeight();
      const elementPosition = pricingSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20;  

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  
  useEffect(() => {
    if (selectedPackage && readyToBoostRef.current) {
      const headerHeight = getFixedHeaderHeight();
      const elementPosition = readyToBoostRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20;  

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [selectedPackage]);  

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
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                SEO <span className="text-yellow-300">Optimization</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Boost your search engine rankings and drive organic traffic with comprehensive SEO strategies that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100"
                  onClick={scrollToPricing}  
                >
                  Get SEO Audit
                </Button>
                <Link to="/seo-case-studies" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-green-600 hover:bg-white"
                  >
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <video
                  src="/assets/Seo.mp4"
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">SEO Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO solutions to improve your online visibility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-green-600 mb-4 flex justify-center">{service.icon}</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Choose Your Perfect SEO Package</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the ideal SEO package for your business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden cursor-pointer transition-all duration-300 transform ${
                  pkg.popular ? 'ring-2 ring-green-600 scale-105' : ''
                } ${
                  selectedPackage === pkg.id ? 'ring-4 ring-green-500 scale-105 shadow-2xl' :
                  hoveredPackage === pkg.id ? 'scale-102 shadow-lg' : ''
                }`}
                onClick={() => handlePackageSelect(pkg.id)}
                onMouseEnter={() => setHoveredPackage(pkg.id)}
                onMouseLeave={() => setHoveredPackage(null)}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-green-600 text-white text-center py-2 text-sm font-medium">
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
                    📈
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl font-bold text-red-600">{pkg.originalPrice}</span>
                      <span className="text-3xl font-bold text-green-600">{pkg.price}</span>
                    </div>
                    <span className="text-gray-600 text-sm">Per month</span>
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
                    onClick={() => handlePackageSelect(pkg.id)}
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
            <div
              ref={readyToBoostRef}  
              className="mt-12 p-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border-2 border-green-200 text-center animate-fade-in"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-800">Ready to Boost Your Rankings?</h3>
              <p className="text-gray-700 mb-6">
                You've selected the **{packages.find(p => p.id === selectedPackage)?.name}** package.
                Let's optimize your website for search engines!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={handleContactNow}>
                  Start SEO Campaign
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - This is the section visible in your screenshot that was being cut off */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Rank Higher?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's optimize your website for search engines and drive more organic traffic.
          </p>
          <Link to="/portfolio">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white text-green-600 hover:bg-white"
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
            service: 'SEO Optimization'
          }}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  );
};

export default SEOOptimization;