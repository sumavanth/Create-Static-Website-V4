import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, Users, TrendingDown, Globe, Clock, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OutsourcingServices() {
  const services = [
    'IT Outsourcing',
    'Application Development',
    'Infrastructure Management',
    'Help Desk Support',
    'Software Testing & QA',
    'Database Administration',
    'Network Operations',
    'Security Operations'
  ];

  const benefits = [
    { icon: TrendingDown, title: '40% Cost Savings', desc: 'Reduce operational costs significantly' },
    { icon: Zap, title: 'Faster Delivery', desc: '50% faster time to market' },
    { icon: Users, title: 'Expert Teams', desc: 'Access to specialized talent' },
    { icon: Globe, title: 'Global Presence', desc: '24/7 coverage across time zones' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Business Solutions</p>
            <h1 className="text-5xl mb-6">Outsourcing Services</h1>
            <p className="text-xl text-gray-300">
              Scale your business efficiently with our comprehensive outsourcing solutions. Access world-class talent, reduce costs, and focus on your core competencies while we handle your IT and business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Strategic Outsourcing Partner</h2>
              <p className="text-gray-600 mb-6">
                In today's competitive landscape, outsourcing is a strategic imperative. We help organizations optimize costs, access specialized skills, and scale operations efficiently through our comprehensive outsourcing services.
              </p>
              <p className="text-gray-600 mb-6">
                Our global delivery model combines onshore, nearshore, and offshore capabilities to provide flexible, scalable, and cost-effective solutions tailored to your business needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC33]" />
                  <span>ISO 9001:2015 & CMMI Level 5 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC33]" />
                  <span>24/7 Global Service Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC33]" />
                  <span>Proven Track Record Across Industries</span>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Outsourcing Services"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Outsourcing Service Offerings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <h3 className="text-lg mb-2">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Comprehensive Outsourcing Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Application Development Outsourcing</h3>
                <p className="text-gray-600 mb-4">
                  Build custom applications faster and more cost-effectively with our experienced development teams.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Custom software development</li>
                  <li>• Mobile app development</li>
                  <li>• Web application development</li>
                  <li>• Legacy application modernization</li>
                  <li>• API development and integration</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Infrastructure Management</h3>
                <p className="text-gray-600 mb-4">
                  Outsource your IT infrastructure management to reduce costs and improve reliability.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Server management and monitoring</li>
                  <li>• Cloud infrastructure management</li>
                  <li>• Network operations center (NOC)</li>
                  <li>• Disaster recovery and backup</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Application Support & Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Ensure your applications run smoothly with our comprehensive support services.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• L1, L2, L3 application support</li>
                  <li>• Bug fixes and enhancements</li>
                  <li>• Performance tuning</li>
                  <li>• Version upgrades</li>
                  <li>• Documentation and knowledge transfer</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Software Testing & QA</h3>
                <p className="text-gray-600 mb-4">
                  Deliver quality software with our comprehensive testing and QA outsourcing services.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Functional and regression testing</li>
                  <li>• Performance and load testing</li>
                  <li>• Security testing</li>
                  <li>• Test automation</li>
                  <li>• Mobile app testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Benefits of Outsourcing</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <Icon className="w-12 h-12 text-[#FFCC33] mx-auto mb-4" />
                    <h3 className="text-xl mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Flexible Engagement Models</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <Clock className="w-12 h-12 text-[#FFCC33] mx-auto mb-4" />
                <h3 className="text-2xl mb-4">Time & Material</h3>
                <p className="text-gray-600 mb-4">
                  Flexible model for projects with evolving requirements
                </p>
                <ul className="space-y-2 text-sm text-gray-600 text-left">
                  <li>• Pay for actual hours worked</li>
                  <li>• Maximum flexibility</li>
                  <li>• Easy to scale up/down</li>
                  <li>• Transparent billing</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <Award className="w-12 h-12 text-[#FFCC33] mx-auto mb-4" />
                <h3 className="text-2xl mb-4">Fixed Price</h3>
                <p className="text-gray-600 mb-4">
                  Predictable costs for well-defined projects
                </p>
                <ul className="space-y-2 text-sm text-gray-600 text-left">
                  <li>• Fixed scope and timeline</li>
                  <li>• Predictable budget</li>
                  <li>• Clear deliverables</li>
                  <li>• Reduced risk</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <Users className="w-12 h-12 text-[#FFCC33] mx-auto mb-4" />
                <h3 className="text-2xl mb-4">Dedicated Team</h3>
                <p className="text-gray-600 mb-4">
                  Your own extended team working exclusively for you
                </p>
                <ul className="space-y-2 text-sm text-gray-600 text-left">
                  <li>• Dedicated resources</li>
                  <li>• Long-term partnership</li>
                  <li>• Direct communication</li>
                  <li>• Team integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Delivery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Global Delivery Model</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Onshore</h3>
                <p className="text-gray-600 mb-4">
                  Resources in your country for maximum collaboration
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Same time zone</li>
                  <li>• Cultural alignment</li>
                  <li>• Easy communication</li>
                  <li>• On-site presence</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Nearshore</h3>
                <p className="text-gray-600 mb-4">
                  Nearby locations for cost optimization
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Similar time zones</li>
                  <li>• Cost-effective</li>
                  <li>• Easy travel</li>
                  <li>• Cultural proximity</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Offshore</h3>
                <p className="text-gray-600 mb-4">
                  Global centers for maximum cost savings
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Significant cost savings</li>
                  <li>• Large talent pool</li>
                  <li>• 24/7 operations</li>
                  <li>• Scalability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Our Outsourcing Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl mb-2">1000+</div>
                <p className="text-[#FFCC33]">Resources Deployed</p>
              </div>
              <div>
                <div className="text-5xl mb-2">40%</div>
                <p className="text-[#FFCC33]">Average Cost Savings</p>
              </div>
              <div>
                <div className="text-5xl mb-2">98%</div>
                <p className="text-[#FFCC33]">Client Retention</p>
              </div>
              <div>
                <div className="text-5xl mb-2">24/7</div>
                <p className="text-[#FFCC33]">Global Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Industries We Serve</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors">
                Financial Services
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors">
                Healthcare
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors">
                Retail & E-commerce
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors">
                Manufacturing
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors">
                Technology
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors">
                Telecommunications
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFCC33] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Optimize Your Operations?</h2>
          <p className="text-xl mb-8">Let's discuss how outsourcing can benefit your business</p>
          <Link 
            to="/contact"
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
