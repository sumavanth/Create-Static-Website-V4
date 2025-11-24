import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, Network, Shield, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EnterpriseSolutions() {
  const solutions = [
    {
      icon: Network,
      title: 'Enterprise Resource Planning',
      description: 'Integrated ERP solutions that unify your business processes across finance, operations, and supply chain.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions to protect your enterprise data and ensure compliance.'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Modernize your enterprise with cloud-based solutions and cutting-edge technologies.'
    },
    {
      icon: Globe,
      title: 'Global Operations',
      description: 'Multi-country, multi-currency solutions for seamless global business operations.'
    }
  ];

  const features = [
    'Unified Business Platform',
    'Real-time Analytics & Reporting',
    'Scalable Cloud Architecture',
    'Mobile-First Solutions',
    'API-First Integration',
    'Advanced Automation',
    'AI & Machine Learning',
    'Enterprise-Grade Security'
  ];

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Supply chain optimization, production planning, and quality management.'
    },
    {
      name: 'Financial Services',
      description: 'Core banking, wealth management, and regulatory compliance solutions.'
    },
    {
      name: 'Healthcare',
      description: 'Patient management, medical records, and healthcare analytics.'
    },
    {
      name: 'Retail & E-Commerce',
      description: 'Omnichannel commerce, inventory management, and customer experience.'
    },
    {
      name: 'Professional Services',
      description: 'Project management, resource allocation, and time tracking.'
    },
    {
      name: 'Technology',
      description: 'Product lifecycle management and subscription billing.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop"
            alt="Enterprise Solutions"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Solutions</p>
            <h1 className="text-5xl mb-6">Enterprise Solutions</h1>
            <p className="text-xl text-gray-300">
              Comprehensive enterprise-grade solutions designed to transform your business operations, enhance productivity, and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Transform Your Enterprise</h2>
              <p className="text-gray-600 mb-4">
                Our enterprise solutions are built to address the complex challenges faced by large organizations. We combine industry-leading platforms with our deep expertise to deliver solutions that scale with your business.
              </p>
              <p className="text-gray-600 mb-4">
                From ERP and CRM to custom enterprise applications, we provide end-to-end solutions that integrate seamlessly with your existing systems while paving the way for future innovation.
              </p>
              <p className="text-gray-600">
                Whether you're looking to consolidate systems, improve operational efficiency, or enable digital transformation, our enterprise solutions deliver measurable results.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Enterprise transformation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Enterprise Solutions</h2>
            <p className="text-gray-600">Comprehensive platforms for modern enterprises</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Icon className="w-12 h-12 text-[#FFCC33] mb-4" />
                  <h3 className="text-xl mb-3">{solution.title}</h3>
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Enterprise Solution Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FFCC33] flex-shrink-0 mt-1" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Industry-Specific Solutions</h2>
            <p className="text-gray-600">Tailored enterprise solutions for your industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Our Implementation Approach</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-3">Discovery & Strategy</h3>
                <p className="text-gray-600">
                  Comprehensive assessment of your current state, business objectives, and technology landscape to define a clear roadmap.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-3">Architecture & Design</h3>
                <p className="text-gray-600">
                  Design scalable, secure enterprise architecture that supports your current needs and future growth.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-3">Implementation & Integration</h3>
                <p className="text-gray-600">
                  Deploy enterprise solutions with seamless integration to existing systems and minimal business disruption.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-3">Change Management</h3>
                <p className="text-gray-600">
                  Comprehensive training and change management to ensure successful adoption across your organization.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-3">Optimization & Support</h3>
                <p className="text-gray-600">
                  Ongoing optimization, enhancements, and enterprise support to maximize your technology investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#FFCC33]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Enterprise Solution Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl mb-2">Efficiency</div>
                <p>Streamlined operations and automated workflows</p>
              </div>
              <div>
                <div className="text-3xl mb-2">Scalability</div>
                <p>Grow without technology constraints</p>
              </div>
              <div>
                <div className="text-3xl mb-2">Insight</div>
                <p>Real-time data and analytics</p>
              </div>
              <div>
                <div className="text-3xl mb-2">Security</div>
                <p>Enterprise-grade protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our enterprise solutions can drive your business forward
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
