import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// Define the shape of your form data for TypeScript
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form element

  // Effect for dynamic background element based on mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Effect for intersection observer animations (fade-in effects)
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Element is 10% visible
      rootMargin: '0px 0px -50px 0px' // Reduce trigger area slightly from bottom
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add 'visible' class when in view
        }
      });
    }, observerOptions);

    // Select all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el)); // Start observing them

    return () => observer.disconnect(); // Clean up observer on component unmount
  }, []);

  // Handler for updating form data state on input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Web3Forms Submission Logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default browser form submission
    setIsSubmitting(true); // Set submitting state to true

    let accessKey: string | undefined;
    // For Vite projects:
     accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;


    if (!accessKey) {
      toast({
        title: "Configuration Error",
        description: "Web3Forms Access Key is missing. Please check your .env file and restart your development server.",
        variant: "destructive",  
      });
      setIsSubmitting(false);
      return;
    }

    // Ensure the form reference exists before proceeding
    if (!formRef.current) {
        toast({
            title: "Error",
            description: "Form element reference not found. This is an internal error.",
            variant: "destructive",
        });
        setIsSubmitting(false);
        return;
    }

    try {
      // Create FormData object directly from the form element
      const data = new FormData(formRef.current);

      // Append the Web3Forms access key
      data.append('access_key', accessKey);

      // Add a custom subject for the email you receive
      data.append('subject', 'New Contact Form Submission from Digivybe.com Website');
 

      // Send the form data to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,  
      });

      const result = await response.json(); // Parse the JSON response from Web3Forms

      if (result.success) {
        toast({
          title: "🚀 Message Sent Successfully!",
          description: "Our AI will analyze your request and we'll respond within 24 hours.",
        });
        setFormData({ name: '', email: '', message: '' }); // Clear the form fields on success
      } else {
        // Log the detailed error from Web3Forms for debugging
        console.error('Web3Forms Submission Error:', result.message);
        toast({
          title: "❌ Submission Failed",
          description: result.message || "There was an error sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Handle network or other unexpected errors
      console.error("Form submission network or processing error:", error);
      toast({
        title: "🚨 Network Error",
        description: "Could not connect to the server. Please check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false); // Reset submitting state regardless of success or failure
    }
  };

  // Handler for opening an external chatbot (if applicable)
  const handleChatbotOpen = () => {
    // This dispatches a custom event that a separate chatbot component might listen for
    window.dispatchEvent(new CustomEvent('openChatbot'));
  };

  // Static contact information data
  const contactInfo = [
    {
      title: "AI-Powered Support",
      description: "hello.digivybe@gmail.com", // Your primary email
      icon: "🤖",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      title: "Real-Time Connect",
      description: "+91 93630 19747", // Corrected phone number
      icon: "⚡",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Innovation Hub",
      description: "Thazhambur, Tamil Nadu, India (Remote-first Agency)", // Corrected address
      icon: "🏢",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-bounce" />
      </div>

      {/* Hero Section */}
      <section id='contact' className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <div className="inline-block p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                  <span className="text-6xl">🚀</span>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in-up">
                Connect with <span className="text-yellow-300 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Tomorrow</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl fade-in-up" style={{animationDelay: '0.2s'}}>
                Experience next-generation communication. Our AI-powered platform ensures your message reaches the right team instantly.
              </p>
            </div>

            {/* Contact Preview (Clickable to open chatbot) */}
            <div className="fade-in-right">
              <div
                className="relative w-full h-96 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 flex items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/15 transition-all duration-300"
                onClick={handleChatbotOpen} // Triggers custom event for chatbot
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-4 animate-bounce">💬</div>
                  <p className="text-white/90 font-medium text-xl">Get in Touch</p>
                  <p className="text-white/70 text-sm mt-2">Digital communication hub</p>
                  <Button className="mt-4 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm">
                    Start Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-left">
              <Card className="bg-white/70 backdrop-blur-xl shadow-2xl border-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">💬</span>
                    </div>
                    <h2 className="text-3xl font-bold gradient-text">Smart Contact Form</h2>
                  </div>
                  {/* The form element with ref and onSubmit handler */}
                  <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
                    <div className="relative group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name" // Important for FormData to pick up the value
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-gray-300 focus:border-violet-500 focus:ring-violet-500 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                        placeholder="Enter your name"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    <div className="relative group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email" // Important for FormData
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-gray-300 focus:border-violet-500 focus:ring-violet-500 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                        placeholder="Enter your email"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    <div className="relative group">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details
                      </label>
                      <Textarea
                        id="message"
                        name="message" // Important for FormData
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border-gray-300 focus:border-violet-500 focus:ring-violet-500 resize-none transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                        placeholder="Describe your vision and requirements"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Web3Forms Honeypot field for basic spam protection */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <Button
                      type="submit"
                      disabled={isSubmitting} // Disable button during submission
                      className="w-full bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          AI Processing... {/* Loading state text */}
                        </div>
                      ) : (
                        <span className="flex items-center justify-center">
                          🚀 Launch Project {/* Default button text */}
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Cards */}
            <div className="fade-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Future-Ready Communication</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Connect with our innovation team through cutting-edge communication channels. Our AI-powered system ensures every message is routed to the perfect specialist.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-sm font-medium">24/7 Response</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl">
                      <div className="text-2xl mb-2">🤖</div>
                      <div className="text-sm font-medium">AI Powered</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl">
                      <div className="text-2xl mb-2">🔒</div>
                      <div className="text-sm font-medium">Secure</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={info.title} className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/70 backdrop-blur-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <CardContent className="p-6 flex items-center space-x-4 relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.gradient} flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 group-hover:text-violet-600 transition-colors duration-300 text-lg">
                            {info.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">{info.description}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center">
                            <span className="text-white text-sm">→</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Connect Digitally</h3>
                  <div className="flex space-x-4">
                    {[
                      { name: 'LinkedIn', icon: '💼', url: '#', color: 'from-blue-600 to-blue-700' },
                      { name: 'Instagram', icon: '📸', url: '#', color: 'from-pink-500 to-purple-600' },
                      { name: 'YouTube', icon: '🎥', url: '#', color: 'from-red-500 to-red-600' },
                      { name: 'Twitter', icon: '🐦', url: '#', color: 'from-sky-400 to-sky-600' }
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className={`group relative w-14 h-14 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center text-white text-xl hover:scale-110 transition-all duration-300 overflow-hidden`}
                        aria-label={social.name}
                      >
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
                        <span className="relative z-10">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 fade-in-up">
              Visit Our <span className="gradient-text">Innovation Hub</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
              Experience the future of digital innovation at our cutting-edge facility equipped with the latest technology.
            </p>
          </div>

          <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-center relative z-10">
                <div className="text-6xl mb-4 animate-bounce">📍</div>
                <p className="text-gray-600 font-medium text-lg">Interactive Location Preview</p>
                <p className="text-sm text-gray-500 mt-2">Google Maps integration available</p>
                <Button className="mt-4 bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 rounded-full px-6">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-bounce" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up">
            Ready to <span className="text-yellow-300">Revolutionize</span> Your Digital Presence?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
            Join the digital evolution with AI-powered solutions that transform your business into tomorrow's success story.
          </p>
          <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-12 py-6 rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-110 shadow-2xl">
              🚀 Launch Innovation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;