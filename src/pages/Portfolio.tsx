
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Eye, Code, Star, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Fashion Store",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "Modern fashion e-commerce platform with shopping cart, payment integration, and inventory management.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "https://fashion-store-demo.vercel.app",
      codeUrl: "https://github.com/example/fashion-store",
      featured: true
    },
    {
      id: 2,
      title: "Restaurant Website",
      category: "web-development",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      description: "Responsive restaurant website with online menu, reservation system, and contact information.",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      liveUrl: "https://restaurant-demo.netlify.app",
      codeUrl: "https://github.com/example/restaurant-site",
      featured: false
    },
    {
      id: 3,
      title: "Brand Identity Package",
      category: "logo-design",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      description: "Complete brand identity design including logo, business cards, and brand guidelines.",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
      liveUrl: "https://brand-showcase.behance.net",
      codeUrl: "#",
      featured: true
    },
    // {
    //   id: 4,
    //   title: "Travel Blog",
    //   category: "wordpress",
    //   image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    //   description: "WordPress travel blog with custom theme, SEO optimization, and social media integration.",
    //   technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
    //   liveUrl: "https://travel-blog-demo.wordpress.com",
    //   codeUrl: "https://github.com/example/travel-blog-theme",
    //   featured: false
    // },
    {
      id: 5,
      title: "Corporate Video Campaign",
      category: "photo-video",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      description: "Professional corporate video with motion graphics, color grading, and sound design.",
      technologies: ["After Effects", "Premiere Pro", "Audition"],
      liveUrl: "https://vimeo.com/example-corporate-video",
      codeUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Local Business SEO",
      category: "seo",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Complete SEO optimization for local business resulting in 300% increase in organic traffic.",
      technologies: ["Google Analytics", "Search Console", "SEMrush"],
      liveUrl: "https://local-business-example.com",
      codeUrl: "#",
      featured: false
    }
    ,
    {
      id: 7,
      title: "Madras Villa Resort Booking Website",
      category: "web-development",
      image: "https://res.cloudinary.com/dxozetwzm/image/upload/v1750078140/Madrasvilla_qfeyod.png",
      description: "A fully responsive resort booking website built with React.js, Tailwind CSS, and Firebase. Users can check availability, select check-in and check-out dates, enter guest details, and confirm bookings in real-time. The site also features resort information, gallery, and contact options.",
      technologies: ["React.js", "Tailwind CSS", "Firebase", "React Router", "Framer Motion"],
      liveUrl: "https://madrasvilla.netlify.app/",
      codeUrl: "https://github.com/yourusername/madrasvilla",  
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web-development', name: 'Web Development', count: projects.filter(p => p.category === 'web-development').length },
    { id: 'ecommerce', name: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'logo-design', name: 'Logo Design', count: projects.filter(p => p.category === 'logo-design').length },
    // { id: 'wordpress', name: 'WordPress', count: projects.filter(p => p.category === 'wordpress').length },
    { id: 'photo-video', name: 'Photo & Video', count: projects.filter(p => p.category === 'photo-video').length },
    { id: 'seo', name: 'SEO', count: projects.filter(p => p.category === 'seo').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

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
      <section className="py-20 bg-gradient-to-r from-violet-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-yellow-300">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Explore our successful projects across web development, e-commerce, design, and digital marketing. 
            See how we've helped businesses grow with our creative solutions.
          </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="w-full sm:w-auto bg-white text-violet-600 hover:bg-gray-100"
        >
          View All Projects
        </Button>
        <Link to="/contact" className="w-full sm:w-auto">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-white text-violet-600 hover:bg-gray-100"
          >
            Contact Us
          </Button>
        </Link>
      </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Highlighting our most successful and impactful projects that showcase our expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3 inline mr-1" />
                    Featured
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    {project.codeUrl !== '#' && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Code className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects with Filter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">All Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our complete portfolio organized by service categories.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="transition-all duration-300"
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      {project.codeUrl !== '#' && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                            <Code className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
