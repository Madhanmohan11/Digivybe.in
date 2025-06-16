import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Visionary leader with 10+ years in digital innovation"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Full-stack expert specializing in modern web technologies"
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Design strategist creating engaging user experiences"
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed", icon: "🚀" },
    { number: "98%", label: "Client Satisfaction", icon: "😊" },
    { number: "50+", label: "Team Members", icon: "👥" },
    { number: "4", label: "Years of Excellence", icon: "⏰" }
  ];

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in-up">
            About <span className="text-yellow-300">DigiVybe</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
            We are a creative digital agency passionate about transforming businesses through innovative technology and exceptional design.
          </p>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 fade-in-up" style={{ animationDelay: '0.4s' }}>
            {achievements.map((achievement) => (
              <div key={achievement.label} className="text-center">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">{achievement.number}</div>
                <div className="text-white/80 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div> */}
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
                  DigiVybe is a forward-thinking digital agency that specializes in creating compelling digital experiences that resonate with your audience and drive meaningful results.
                </p>
                <p>
                  Our team of passionate designers, developers, and digital strategists work collaboratively to understand your business goals and translate them into powerful digital solutions.
                </p>
                <p>
                  Since our inception, we've been committed to staying at the forefront of digital innovation, constantly evolving our skills and methodologies to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
            <div className="fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-500 rounded-2xl transform rotate-0 sm:rotate-3"></div>
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

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              The creative minds behind DigiVybe, dedicated to bringing your digital vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 fade-in-up bg-white"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-violet-600 to-blue-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-violet-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              These core principles guide everything we do and shape the way we approach every project and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 fade-in-up bg-white"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to digitize your vibe? We'd love to hear about your project and explore how we can help bring your vision to life.
          </p>
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">
              <Button className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
