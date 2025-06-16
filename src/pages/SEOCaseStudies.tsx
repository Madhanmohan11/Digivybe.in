import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, DollarSign, Clock, Target, BarChart3, ArrowUpRight } from 'lucide-react';

const SEOCaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Fashion Store SEO Success",
      client: "StyleHub Fashion",
      industry: "E-commerce/Fashion",
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      challenge: "StyleHub Fashion was struggling with low organic visibility and poor search rankings for competitive fashion keywords.",
      solution: "Implemented comprehensive SEO strategy including technical optimization, content marketing, and link building campaigns.",
      results: [
        { metric: "Organic Traffic", improvement: "320% increase", icon: <TrendingUp className="w-5 h-5" /> },
        { metric: "Keyword Rankings", improvement: "150+ keywords in top 10", icon: <Target className="w-5 h-5" /> },
        { metric: "Revenue", improvement: "250% increase from organic", icon: <DollarSign className="w-5 h-5" /> },
        { metric: "Conversion Rate", improvement: "45% improvement", icon: <BarChart3 className="w-5 h-5" /> }
      ],
      testimonial: "The SEO team at Digivybe transformed our online presence. We went from page 3 to page 1 for our most important keywords, and our sales have tripled!",
      clientName: "Sarah Johnson, Marketing Director"
    },
    {
      id: 2,
      title: "Local Restaurant Chain SEO Domination",
      client: "Spice Garden Restaurants",
      industry: "Food & Beverage",
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      challenge: "Multiple restaurant locations were invisible in local search results, losing customers to competitors.",
      solution: "Executed local SEO strategy with Google My Business optimization, local citations, and location-specific content.",
      results: [
        { metric: "Local Visibility", improvement: "400% increase", icon: <Users className="w-5 h-5" /> },
        { metric: "Google My Business Views", improvement: "800% increase", icon: <TrendingUp className="w-5 h-5" /> },
        { metric: "Phone Calls", improvement: "180% increase", icon: <Target className="w-5 h-5" /> },
        { metric: "Reservations", improvement: "220% increase", icon: <BarChart3 className="w-5 h-5" /> }
      ],
      testimonial: "Our restaurants are now the first thing people see when searching for food in our area. The increase in walk-ins and reservations has been incredible!",
      clientName: "Michael Chen, Owner"
    },
    {
      id: 3,
      title: "B2B Software Company SEO Growth",
      client: "TechFlow Solutions",
      industry: "B2B Software",
      duration: "8 months",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      challenge: "B2B software company needed to establish authority and generate qualified leads through organic search.",
      solution: "Developed thought leadership content strategy, technical SEO improvements, and strategic link building campaign.",
      results: [
        { metric: "Organic Leads", improvement: "350% increase", icon: <Users className="w-5 h-5" /> },
        { metric: "Authority Score", improvement: "From 25 to 65", icon: <TrendingUp className="w-5 h-5" /> },
        { metric: "Qualified Demos", improvement: "280% increase", icon: <Target className="w-5 h-5" /> },
        { metric: "Content Engagement", improvement: "450% increase", icon: <BarChart3 className="w-5 h-5" /> }
      ],
      testimonial: "The SEO strategy didn't just improve our rankings - it positioned us as industry leaders. Our sales team is now closing deals from inbound leads daily.",
      clientName: "David Rodriguez, VP Marketing"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/services/seo-optimization" className="inline-flex items-center text-violet-600 hover:text-violet-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to SEO Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            SEO <span className="text-yellow-300">Case Studies</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses achieve remarkable SEO success with proven strategies and measurable results.
          </p>
         <div className="text-center">
              <div className="mb-4 flex justify-center">
              <img
                src="/assets/seo case.png"  
                alt="Start your SEO Journey"
                className="w-50 h-60 rounded-xl shadow-lg object-cover" 
              />
          </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="mb-4">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2">{study.title}</h2>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {study.duration}
                      </span>
                      <span>•</span>
                      <span>{study.client}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-red-600">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-600">Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-600">Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="bg-green-50 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="text-green-600">{result.icon}</div>
                              <span className="text-sm font-medium text-gray-700">{result.metric}</span>
                            </div>
                            <p className="text-lg font-bold text-green-600">{result.improvement}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <blockquote className="text-gray-700 italic mb-3">
                        "{study.testimonial}"
                      </blockquote>
                      <cite className="text-sm font-medium text-gray-900">— {study.clientName}</cite>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our SEO Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses across different industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-white shadow-lg">
              <CardContent className="p-0">
                <div className="text-green-600 mb-4 flex justify-center">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">300%+</div>
                <p className="text-gray-600">Average Traffic Increase</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white shadow-lg">
              <CardContent className="p-0">
                <div className="text-green-600 mb-4 flex justify-center">
                  <Target className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1500+</div>
                <p className="text-gray-600">Keywords Ranked</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white shadow-lg">
              <CardContent className="p-0">
                <div className="text-green-600 mb-4 flex justify-center">
                  <DollarSign className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">250%+</div>
                <p className="text-gray-600">Revenue Growth</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white shadow-lg">
              <CardContent className="p-0">
                <div className="text-green-600 mb-4 flex justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <p className="text-gray-600">Happy Clients</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join the businesses that have transformed their online presence with our proven SEO strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services/seo-optimization">
              <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
                View SEO Packages
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOCaseStudies;