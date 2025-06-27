import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import ScrollToTop from "./hooks/useScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ChatbotAI from "./components/ChatbotAI";

import Index from "./pages/Index";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import EcommerceDevelopment from "./pages/EcommerceDevelopment";
import PhotoVideoEditing from "./pages/PhotoVideoEditing";
import SEOOptimization from "./pages/SEOOptimization";
import SEOCaseStudies from "./pages/SEOCaseStudies";
import LogoDesign from "./pages/LogoDesign";
import WordPressDevelopment from "./pages/WordPressDevelopment";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <Preloader />}
        <BrowserRouter>
          <ScrollToTop />
          <div className={`min-h-screen bg-white flex flex-col ${isLoading ? "hidden" : ""}`}>
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
                <Route path="/services/photo-video-editing" element={<PhotoVideoEditing />} />
                <Route path="/services/seo-optimization" element={<SEOOptimization />} />
                <Route path="/seo-case-studies" element={<SEOCaseStudies />} />
                <Route path="/services/logo-design" element={<LogoDesign />} />
                <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <ChatbotAI />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
