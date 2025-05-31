
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      title: "Email Us",
      description: "hello@digivybe.com",
      icon: "📧",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      title: "Call Us",
      description: "+91-9150387980",
      icon: "📞",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Visit Us",
      description: "Navalur, Chennai, India",
      icon: "📍",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in-up">
            Get In <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-left">
              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-violet-500 focus:ring-violet-500 resize-none"
                        placeholder="Tell us about your project"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="fade-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Contact Information</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Have a question or want to work together? We're here to help. Reach out to us using any of the methods below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={info.title} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                      <CardContent className="p-6 flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.gradient} flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110`}>
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                            {info.title}
                          </h3>
                          <p className="text-gray-600">{info.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Social Media */}
              {/* <div className="flex flex-col items-center justify-center min-h-[150px]">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Follow Us</h3>
              <div className="flex space-x-4">
              {[
               { name: "Facebook", icon: "📘", url: "#" },
                { name: "Instagram", icon: "📷", url: "#" },
                 { name: "YouTube", icon: "📺", url: "#" },
                     ].map((social) => (
                                  <a
                        key={social.name}
                        href={social.url}
                        className="w-12 h-12 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full flex items-center justify-center text-white text-xl hover:from-violet-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
     <section className="py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 fade-in-up">
        Find <span className="gradient-text">Us</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
        Visit our office for a coffee and let's discuss your project in person.
      </p>
    </div>

    <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
      <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Digivybe Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.8081652537483!2d80.24426021479243!3d12.878354590910053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d72440c3907%3A0x50a1d8aa72a6ad9f!2sNavalur%2C%20Chennai%2C%20Tamil%20Nadu%20600096%2C%20India!5e0!3m2!1sen!2sus!4v1689338021234!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Contact;
