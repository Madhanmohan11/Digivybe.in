
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of digital trends and use cutting-edge technologies to deliver solutions that set you apart from the competition.",
      icon: "💡",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      title: "Quality",
      description: "Every project is crafted with meticulous attention to detail, ensuring the highest standards of performance and design.",
      icon: "⭐",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Partnership",
      description: "We believe in building long-term relationships with our clients, supporting their growth every step of the way.",
      icon: "🤝",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Results",
      description: "Our focus is on delivering measurable outcomes that drive real business value and achieve your objectives.",
      icon: "🎯",
      gradient: "from-green-600 to-teal-600"
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Foundation",
      description: "Digivybe was founded with a vision to revolutionize digital experiences"
    },
    {
      year: "2021",
      title: "Growth",
      description: "Expanded our team and services to meet growing client demands"
    },
    {
      year: "2022",
      title: "Innovation",
      description: "Launched cutting-edge solutions and strategic partnerships"
    },
    {
      year: "2023",
      title: "Excellence",
      description: "Achieved industry recognition and client satisfaction milestones"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in-up">
            About <span className="text-yellow-300">Digivybe</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
            We are a creative digital agency passionate about transforming businesses through innovative technology and exceptional design.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Who We <span className="gradient-text">Are</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Digivybe is a forward-thinking digital agency that specializes in creating compelling digital experiences that resonate with your audience and drive meaningful results. Founded on the principle that every brand has a unique vibe worth digitizing, we combine creativity with technology to bring your vision to life.
                </p>
                <p>
                  Our team of passionate designers, developers, and digital strategists work collaboratively to understand your business goals and translate them into powerful digital solutions. We believe that great design is not just about aesthetics—it's about creating experiences that connect, engage, and convert.
                </p>
                <p>
                  Since our inception, we've been committed to staying at the forefront of digital innovation, constantly evolving our skills and methodologies to deliver cutting-edge solutions that exceed expectations and drive business growth.
                </p>
              </div>
            </div>
            <div className="fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-500 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                  alt="Team working on digital projects"
                  className="relative rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
              These core principles guide everything we do and shape the way we approach every project and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 fade-in-up bg-white"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl transform -rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Creative design process"
                  className="relative rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="fade-in-right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our Service <span className="gradient-text">Philosophy</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Digivybe, we believe that successful digital projects are born from deep understanding, creative collaboration, and meticulous execution. Our philosophy centers around three key principles that guide every project we undertake.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Listen & Understand</h4>
                      <p className="text-gray-600">We start every project by deeply understanding your vision, goals, and challenges to create solutions that truly fit your needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Create & Collaborate</h4>
                      <p className="text-gray-600">We work closely with you throughout the entire process, ensuring transparency and incorporating your feedback every step of the way.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Deliver & Support</h4>
                      <p className="text-gray-600">We deliver exceptional results on time and provide ongoing support to ensure your continued success and growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
              From humble beginnings to industry recognition, here's how we've grown and evolved over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-violet-600 to-blue-500"></div>
              
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center mb-12 fade-in-up ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{animationDelay: `${0.1 * index}s`}}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'} pl-16 md:pl-0`}>
                    <Card className="bg-white shadow-lg border-0">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-violet-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
            Ready to digitize your vibe? We'd love to hear about your project and explore how we can help bring your vision to life.
          </p>
          <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
            <button className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
