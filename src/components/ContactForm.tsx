import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, User, Building, MessageSquare, MessageCircle, X } from 'lucide-react'; // Import X icon

interface ContactFormProps {
  selectedPackage: {
    name: string;
    price: string;
    service: string;
  };
  onClose: () => void;
}

const ContactForm = ({ selectedPackage, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''  
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsAppClick = () => {
    const { name, email, phone, company, message } = formData;
    const { service, name: packageName, price } = selectedPackage;

    // *** Validation Check - Now includes 'message' field ***
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, Phone, and Project Details) to connect via WhatsApp.",
        variant: "destructive",
      });
      return; // Stop the function if validation fails
    }

    const whatsappMessage = encodeURIComponent(
      `Hello, I'm interested in the following service:\n\n` +
      `*Service:* ${service}\n` +
      `*Package:* ${packageName}\n` +
      `*Price:* ${price}\n\n` +
      `*My Details:*\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Company: ${company || 'Not provided'}\n\n` +
      `*Message:*\n` +
      `${message}\n\n` +  
      `Please get back to me. Thank you!`
    );

    const whatsappUrl = `https://wa.me/918680996316?text=${whatsappMessage}`;

    try {
      window.open(whatsappUrl, '_blank');
      toast({
        title: "Opening WhatsApp",
        description: "Please confirm and send the pre-filled message in WhatsApp.",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not open WhatsApp. Please ensure you have WhatsApp installed or try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Start Your Project</CardTitle>
          <div className="text-center text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
            <p><strong>Selected:</strong> {selectedPackage.service} - {selectedPackage.name}</p>
            <p><strong>Price:</strong> {selectedPackage.price}</p>
          </div>
          {/* Close button at top right */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full"
          >
            <X className="h-6 w-6 text-gray-500" />
            <span className="sr-only">Close</span>
          </Button>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 9563257846"
                />
              </div>
              <div>
                <Label htmlFor="company" className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name (optional)"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Project Details * {/* Updated label to indicate it's required */}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required // Added required attribute
                placeholder="Tell us more about your project requirements, timeline, and any specific needs..."
                rows={4}
              />
            </div>

            <div className="pt-4">
              <Button
                type="button"
                variant="default"
                className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
                onClick={handleWhatsAppClick}
                disabled={isSubmitting}
              >
                <MessageCircle className="w-5 h-5" />
                Connect via WhatsApp
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;