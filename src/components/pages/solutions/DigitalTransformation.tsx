import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, ArrowRight, Cloud, Smartphone, Globe, Zap, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DigitalTransformation() {
  const services = [
    'Digital Strategy & Roadmap',
    'Cloud Transformation',
    'Process Automation',
    'Data & Analytics',
    'Mobile Solutions',
    'IoT Integration',
    'AI & Machine Learning',
    'Customer Experience',
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Revenue Growth', desc: 'Drive 30% revenue increase through digital channels' },
    { icon: Zap, title: 'Faster Time to Market', desc: 'Reduce product launch cycles by 50%' },
    { icon: Users, title: 'Enhanced CX', desc: 'Improve customer satisfaction by 40%' },
    { icon: Globe, title: 'Market Expansion', desc: 'Enter new markets with digital capabilities' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Digital Solutions</p>
            <h1 className="text-5xl mb-6">Digital Transformation Services</h1>
            <p className="text-xl text-gray-300">
              Accelerate your digital journey with comprehensive transformation services that modernize operations, enhance customer experiences, and drive sustainable growth in the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Transform Your Business for the Digital Age</h2>
              <p className="text-gray-600 mb-6">
                Digital transformation is no longer optional—it's essential for survival and growth. Our comprehensive services help you leverage technology to reimagine business processes, customer experiences, and operating models.
              </p>
              <p className="text-gray-600 mb-6">
                We partner with you to develop and execute a digital strategy that aligns with your business objectives, drives innovation, and creates competitive advantage in today's rapidly evolving marketplace.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-[#FFCC33] text-black px-8 py-4 hover:bg-[#FFD966] transition-colors"
              >
                Start Your Transformation
              </Link>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                alt="Digital Transformation"
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
            <h2 className="text-4xl mb-12 text-center">Our Digital Transformation Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-12 h-12 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg mb-2">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Transformation Focus Areas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <Cloud className="w-12 h-12 text-[#FFCC33] mb-4" />
                <h3 className="text-2xl mb-4">Cloud Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Migrate to cloud infrastructure for scalability, flexibility, and cost optimization. We help you choose the right cloud strategy—public, private, or hybrid—and execute seamless migrations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud strategy and roadmap</li>
                  <li>• Migration planning and execution</li>
                  <li>• Cloud-native application development</li>
                  <li>• Multi-cloud management</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <Smartphone className="w-12 h-12 text-[#FFCC33] mb-4" />
                <h3 className="text-2xl mb-4">Customer Experience</h3>
                <p className="text-gray-600 mb-4">
                  Transform customer interactions across all touchpoints with omnichannel strategies, personalization, and digital engagement platforms that drive loyalty and satisfaction.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Customer journey mapping</li>
                  <li>• Omnichannel strategies</li>
                  <li>• Personalization engines</li>
                  <li>• Digital customer service</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <Zap className="w-12 h-12 text-[#FFCC33] mb-4" />
                <h3 className="text-2xl mb-4">Process Automation</h3>
                <p className="text-gray-600 mb-4">
                  Streamline operations and reduce costs through intelligent automation. From RPA to AI-powered workflows, we help you automate repetitive tasks and focus on strategic initiatives.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Robotic Process Automation</li>
                  <li>• Workflow optimization</li>
                  <li>• Intelligent document processing</li>
                  <li>• End-to-end automation</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <Globe className="w-12 h-12 text-[#FFCC33] mb-4" />
                <h3 className="text-2xl mb-4">Data & Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Harness the power of data to drive decision-making. Build data lakes, implement advanced analytics, and leverage AI/ML to extract actionable insights from your data.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data strategy and governance</li>
                  <li>• Business intelligence</li>
                  <li>• Predictive analytics</li>
                  <li>• Real-time dashboards</li>
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
            <h2 className="text-4xl mb-12 text-center">Business Benefits</h2>
            
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

      {/* Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Our Transformation Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="mb-2">Assess</h3>
                <p className="text-sm text-gray-600">Evaluate current state and identify opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="mb-2">Strategize</h3>
                <p className="text-sm text-gray-600">Develop roadmap aligned with business goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="mb-2">Execute</h3>
                <p className="text-sm text-gray-600">Implement solutions with agile methodology</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">4</span>
                </div>
                <h3 className="mb-2">Optimize</h3>
                <p className="text-sm text-gray-600">Continuously improve and scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Our Track Record</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl mb-2">300+</div>
                <p className="text-[#FFCC33]">Transformations</p>
              </div>
              <div>
                <div className="text-5xl mb-2">85%</div>
                <p className="text-[#FFCC33]">Cost Reduction</p>
              </div>
              <div>
                <div className="text-5xl mb-2">2x</div>
                <p className="text-[#FFCC33]">Productivity Gains</p>
              </div>
              <div>
                <div className="text-5xl mb-2">95%</div>
                <p className="text-[#FFCC33]">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFCC33] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's build your digital future together</p>
          <Link 
            to="/contact"
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
