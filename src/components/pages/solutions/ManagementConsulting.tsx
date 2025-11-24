import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, Target, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ManagementConsulting() {
  const services = [
    {
      icon: Target,
      title: 'Strategy Development',
      description: 'Define clear strategic direction aligned with your business objectives and market opportunities.'
    },
    {
      icon: TrendingUp,
      title: 'Operational Excellence',
      description: 'Optimize operations, reduce costs, and improve efficiency across your organization.'
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Successfully navigate organizational change with structured change management programs.'
    },
    {
      icon: Lightbulb,
      title: 'Digital Transformation',
      description: 'Leverage technology to transform business models and create competitive advantages.'
    }
  ];

  const offerings = [
    'Business Strategy Consulting',
    'Organizational Design & Restructuring',
    'Process Improvement & Optimization',
    'Performance Management',
    'Risk Management & Compliance',
    'Merger & Acquisition Support',
    'Digital Transformation Strategy',
    'Change Management & Training',
    'Program & Portfolio Management',
    'IT Strategy & Roadmap'
  ];

  const approach = [
    {
      phase: 'Assess',
      description: 'Comprehensive analysis of current state, challenges, and opportunities'
    },
    {
      phase: 'Design',
      description: 'Develop strategies, solutions, and roadmaps tailored to your goals'
    },
    {
      phase: 'Implement',
      description: 'Execute transformation initiatives with proven methodologies'
    },
    {
      phase: 'Sustain',
      description: 'Ensure lasting change through ongoing support and optimization'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop"
            alt="Management Consulting"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Solutions</p>
            <h1 className="text-5xl mb-6">Management Consulting</h1>
            <p className="text-xl text-gray-300">
              Strategic guidance and expert advisory services to help your organization navigate complex challenges and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Strategic Advisory for Business Success</h2>
              <p className="text-gray-600 mb-4">
                Our management consulting services help organizations tackle their most critical challenges, from strategy formulation to operational transformation. We bring deep industry expertise and proven methodologies to drive meaningful change.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you're looking to optimize operations, drive digital transformation, or navigate organizational change, our experienced consultants provide the insights and guidance needed for success.
              </p>
              <p className="text-gray-600">
                We work collaboratively with your leadership team to develop and implement solutions that deliver sustainable results and create lasting value.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Strategic consulting"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Consulting Services</h2>
            <p className="text-gray-600">Comprehensive advisory across all business functions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <Icon className="w-12 h-12 text-[#FFCC33] mb-4" />
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">What We Offer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FFCC33] flex-shrink-0 mt-1" />
                  <span className="text-lg">{offering}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Our Consulting Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {approach.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl mb-3">{item.phase}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Industry Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Financial Services</h3>
                <p className="text-gray-600">
                  Banking, insurance, asset management, and fintech transformation initiatives.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Healthcare</h3>
                <p className="text-gray-600">
                  Provider operations, payer optimization, and healthcare technology implementations.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Manufacturing</h3>
                <p className="text-gray-600">
                  Supply chain optimization, lean manufacturing, and Industry 4.0 initiatives.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Technology</h3>
                <p className="text-gray-600">
                  Product strategy, go-to-market, and scaling technology businesses.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Retail & Consumer</h3>
                <p className="text-gray-600">
                  Omnichannel strategy, customer experience, and retail transformation.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Public Sector</h3>
                <p className="text-gray-600">
                  Government modernization, citizen services, and public sector efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-[#FFCC33]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Why Choose Our Consulting Services?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="text-2xl mb-3">Experienced Team</h3>
                <p className="text-gray-600">
                  Seasoned consultants with decades of combined experience across industries
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="text-2xl mb-3">Proven Methods</h3>
                <p className="text-gray-600">
                  Battle-tested frameworks and methodologies that deliver results
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="text-2xl mb-3">Lasting Impact</h3>
                <p className="text-gray-600">
                  Focus on sustainable change and building internal capabilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Delivering Results</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl text-[#FFCC33] mb-2">85%</div>
                  <p className="text-gray-600">Client satisfaction rate</p>
                </div>
                <div>
                  <div className="text-5xl text-[#FFCC33] mb-2">200+</div>
                  <p className="text-gray-600">Successful engagements</p>
                </div>
                <div>
                  <div className="text-5xl text-[#FFCC33] mb-2">$50M+</div>
                  <p className="text-gray-600">Value delivered to clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-4">Ready to Drive Transformation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our management consulting services can help achieve your goals
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#FFCC33] text-black px-8 py-4 hover:bg-[#FFD966] transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
