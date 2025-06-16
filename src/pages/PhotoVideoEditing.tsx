import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Camera, Video, Palette, Sparkles, Star, ArrowRight, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const PhotoVideoEditing = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const services = [
    { icon: <Camera className="w-6 h-6" />, title: "Photo Editing", description: "Professional photo retouching and enhancement" },
    { icon: <Video className="w-6 h-6" />, title: "Video Editing", description: "Creative video production and post-processing" },
    { icon: <Palette className="w-6 h-6" />, title: "Color Grading", description: "Professional color correction and grading" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Visual Effects", description: "Stunning visual effects and motion graphics" }
  ];

  const packages = [
    {
      id: "basic",
      name: "Basic",
      price: "₹8,000",
      originalPrice: "₹12,000",
      features: ["5 photos or 1 video", "Basic editing", "Color correction", "24-hour delivery", "2 revisions", "HD Quality"],
      gradient: "from-purple-500 to-pink-500",
      badge: "Perfect for Small Projects",
      popular: false
    },
    {
      id: "professional",
      name: "Professional",
      price: "₹25,000",
      originalPrice: "₹35,000",
      features: ["20 photos or 5 videos", "Advanced editing", "Creative effects", "12-hour delivery", "Unlimited revisions", "4K Quality", "Background Removal", "Social Media Formats"],
      gradient: "from-pink-500 to-rose-500",
      badge: "Most Popular",
      popular: true
    },
    {
      id: "premium",
      name: "Premium",
      price: "₹50,000",
      originalPrice: "₹70,000",
      features: ["50 photos or 10 videos", "Expert editing", "Custom effects", "6-hour delivery", "Priority support", "8K Quality", "Animation & Motion Graphics", "Brand Integration"],
      gradient: "from-rose-500 to-red-500",
      badge: "Professional Grade",
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Photo & Video <span className="text-yellow-300">Editing</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Transform your visual content with professional photo and video editing services that bring your creative vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Changed Link to a Button with onClick for smooth scroll, added responsive width */}
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 w-full sm:w-auto"
                  onClick={scrollToPricing}
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <video
                  src="/assets/Photo-video.mp4"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Editing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional editing services to enhance your visual content.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-purple-600 mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pricing Section - ADDED ID HERE */}
      <section id="pricing-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Choose Your Perfect Editing Package</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the ideal editing package for your creative needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id}
                className={`relative overflow-hidden cursor-pointer transition-all duration-300 transform ${
                  pkg.popular ? 'ring-2 ring-purple-600 scale-105' : ''
                } ${
                  selectedPackage === pkg.id ? 'ring-4 ring-green-500 scale-105 shadow-2xl' : 
                  hoveredPackage === pkg.id ? 'scale-102 shadow-lg' : ''
                }`}
                onClick={() => handlePackageSelect(pkg.id)}
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
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${pkg.gradient} rounded-full flex items-center justify-center text-white text-2xl transition-transform duration-300 ${hoveredPackage === pkg.id ? 'scale-110' : ''}`}>
                    📸
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                      <span className="text-4xl font-bold text-green-600">{pkg.price}</span>
                    </div>
                    <span className="text-gray-600 text-sm">Per package</span>
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
            <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 text-center animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Ready to Transform Your Content?</h3>
              <p className="text-gray-700 mb-6">
                You've selected the **{packages.find(p => p.id === selectedPackage)?.name}** package. 
                Let's bring your creative vision to life!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={handleContactNow}>
                  Start Editing Project
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's bring your photos and videos to life with professional editing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Added responsive width to View Our Work button */}
            <Link to="/portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-purple-600 hover:bg-white w-full sm:w-auto"
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
            service: 'Photo & Video Editing'
          }}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  );
};

export default PhotoVideoEditing;