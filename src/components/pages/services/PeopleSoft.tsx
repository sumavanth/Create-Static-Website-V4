import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, Users, Cog, BarChart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PeopleSoft() {
  const capabilities = [
    {
      icon: Users,
      title: 'HCM Solutions',
      description: 'Comprehensive human capital management for talent acquisition, core HR, and workforce management.'
    },
    {
      icon: BarChart,
      title: 'Financial Management',
      description: 'Complete financial management system including accounting, procurement, and expense management.'
    },
    {
      icon: Cog,
      title: 'Supply Chain',
      description: 'Streamlined supply chain operations with procurement, inventory, and order management.'
    },
    {
      icon: Shield,
      title: 'Campus Solutions',
      description: 'Complete student lifecycle management for higher education institutions.'
    }
  ];

  const services = [
    'PeopleSoft Implementation',
    'Upgrade and Migration Services',
    'Custom Development',
    'Integration Services',
    'Performance Optimization',
    'PeopleSoft Cloud Migration',
    'Training and Change Management',
    'Ongoing Support and Maintenance'
  ];

  const modules = [
    'Human Capital Management (HCM)',
    'Financial Management (FSCM)',
    'Enterprise Service Automation (ESA)',
    'Supplier Relationship Management (SRM)',
    'Campus Solutions (CS)',
    'PeopleTools and Integration Broker',
    'Fluid User Interface',
    'PeopleSoft Update Manager (PUM)'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop"
            alt="PeopleSoft Solutions"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Services</p>
            <h1 className="text-5xl mb-6">PeopleSoft Solutions</h1>
            <p className="text-xl text-gray-300">
              Oracle PeopleSoft delivers comprehensive business applications designed to address the most complex business requirements. Our expertise helps you maximize your PeopleSoft investment.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Transform Your Business with PeopleSoft</h2>
              <p className="text-gray-600 mb-4">
                PeopleSoft is a comprehensive suite of applications designed to meet the complex needs of modern enterprises. From human resources and financial management to supply chain and campus solutions, PeopleSoft provides a complete business platform.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of certified PeopleSoft consultants brings years of experience across all PeopleSoft modules, helping organizations implement, optimize, and maintain their PeopleSoft environments.
              </p>
              <p className="text-gray-600">
                Whether you're looking to implement PeopleSoft for the first time, upgrade your existing system, or optimize your current deployment, we have the expertise to ensure your success.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="PeopleSoft implementation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">PeopleSoft Key Capabilities</h2>
            <p className="text-gray-600">Comprehensive solutions for every business function</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <Icon className="w-12 h-12 text-[#FFCC33] mb-4" />
                  <h3 className="text-xl mb-3">{capability.title}</h3>
                  <p className="text-gray-600 text-sm">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Our PeopleSoft Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FFCC33] flex-shrink-0 mt-1" />
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">PeopleSoft Modules We Support</h2>
            <p className="text-gray-600">Expertise across the entire PeopleSoft ecosystem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors cursor-pointer">
                <p>{module}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Why Choose Our PeopleSoft Services?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Certified Expertise</h3>
                <p className="text-gray-600">
                  Our team consists of Oracle-certified PeopleSoft professionals with extensive implementation and support experience.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Industry Best Practices</h3>
                <p className="text-gray-600">
                  We follow Oracle's recommended best practices and leverage our experience from hundreds of implementations.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Rapid Implementation</h3>
                <p className="text-gray-600">
                  Our proven methodologies ensure faster time-to-value with minimal disruption to your operations.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  We provide continuous support and optimization services to ensure your PeopleSoft system evolves with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFCC33] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Optimize Your PeopleSoft Investment?</h2>
          <p className="text-xl mb-8">Let's discuss how we can help transform your PeopleSoft implementation</p>
          <Link 
            to="/contact"
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            Contact Our PeopleSoft Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
