
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import WebDevShowcase from '@/components/WebDevShowcase';
import ServicesSection from '@/components/ServicesSection';
import CallToActionSection from '@/components/CallToActionSection';

const Index = () => {
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

  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
      <WebDevShowcase />
      <ServicesSection />
      <CallToActionSection />
    </div>
  );
};

export default Index;
