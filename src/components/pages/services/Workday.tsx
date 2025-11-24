import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, Users, DollarSign, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Workday() {
  const capabilities = [
    {
      icon: Users,
      title: 'Human Capital Management',
      description: 'Complete HCM suite for talent management, payroll, and workforce planning.'
    },
    {
      icon: DollarSign,
      title: 'Financial Management',
      description: 'Modern cloud financial management for accounting, procurement, and analytics.'
    },
    {
      icon: Briefcase,
      title: 'Planning',
      description: 'Enterprise planning and analytics for finance, HR, and operations.'
    },
    {
      icon: Award,
      title: 'Talent Optimization',
      description: 'Attract, develop, and retain top talent with Workday Talent solutions.'
    }
  ];

  const services = [
    'Workday HCM Implementation',
    'Workday Financial Management',
    'Workday Planning Implementation',
    'Workday Recruiting',
    'Workday Learning',
    'Integration Services',
    'Report and Dashboard Development',
    'Post-Implementation Support'
  ];

  const modules = [
    'Workday HCM',
    'Workday Financial Management',
    'Workday Planning',
    'Workday Recruiting',
    'Workday Learning',
    'Workday Payroll',
    'Workday Time Tracking',
    'Workday Talent Management',
    'Workday Benefits',
    'Workday Compensation',
    'Workday Prism Analytics',
    'Workday Extend'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop"
            alt="Workday Solutions"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Services</p>
            <h1 className="text-5xl mb-6">Workday Solutions</h1>
            <p className="text-xl text-gray-300">
              Empower your organization with Workday's cloud-based enterprise solutions for finance, HR, and planning. We help you achieve digital transformation success.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Transform Your Enterprise with Workday</h2>
              <p className="text-gray-600 mb-4">
                Workday is a leading provider of enterprise cloud applications for finance, human resources, and planning. Built from the ground up for the cloud, Workday provides a unified system that helps organizations adapt and thrive in a rapidly changing world.
              </p>
              <p className="text-gray-600 mb-4">
                As certified Workday implementation partners, we bring deep expertise across all Workday applications. Our team of experienced consultants has successfully delivered hundreds of Workday projects across various industries.
              </p>
              <p className="text-gray-600">
                From initial planning through deployment and beyond, we provide comprehensive services to ensure your Workday implementation delivers maximum value to your organization.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                alt="Workday implementation"
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
            <h2 className="text-4xl mb-4">Workday Key Capabilities</h2>
            <p className="text-gray-600">Comprehensive cloud solutions for modern enterprises</p>
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
            <h2 className="text-4xl mb-8 text-center">Our Workday Services</h2>
            
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

      {/* Workday Modules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Workday Modules We Implement</h2>
            <p className="text-gray-600">Complete expertise across the Workday ecosystem</p>
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

      {/* Implementation Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Our Implementation Methodology</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFCC33] rounded-full flex items-center justify-center text-xl">1</div>
                <div>
                  <h3 className="text-2xl mb-2">Project Planning</h3>
                  <p className="text-gray-600">
                    Define project scope, timeline, resources, and success criteria aligned with your business objectives.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFCC33] rounded-full flex items-center justify-center text-xl">2</div>
                <div>
                  <h3 className="text-2xl mb-2">Design & Configuration</h3>
                  <p className="text-gray-600">
                    Configure Workday to match your business processes using industry best practices and proven templates.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFCC33] rounded-full flex items-center justify-center text-xl">3</div>
                <div>
                  <h3 className="text-2xl mb-2">Build & Test</h3>
                  <p className="text-gray-600">
                    Develop integrations, reports, and custom configurations, followed by comprehensive testing.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFCC33] rounded-full flex items-center justify-center text-xl">4</div>
                <div>
                  <h3 className="text-2xl mb-2">Deploy</h3>
                  <p className="text-gray-600">
                    Execute a smooth go-live with data migration, end-user training, and comprehensive support.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFCC33] rounded-full flex items-center justify-center text-xl">5</div>
                <div>
                  <h3 className="text-2xl mb-2">Optimize</h3>
                  <p className="text-gray-600">
                    Continuous improvement through regular updates, enhancements, and optimization initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Why Choose Our Workday Services?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Certified Expertise</h3>
                <p className="text-gray-600">
                  Our consultants hold multiple Workday certifications and bring extensive implementation experience.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successful delivery of Workday projects across multiple industries and organization sizes.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Industry Best Practices</h3>
                <p className="text-gray-600">
                  We leverage Workday's recommended practices and our own proven methodologies for successful implementations.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">End-to-End Support</h3>
                <p className="text-gray-600">
                  From initial planning through post-go-live support, we're with you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFCC33] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Transform with Workday?</h2>
          <p className="text-xl mb-8">Let's discuss how Workday can drive your digital transformation</p>
          <Link 
            to="/contact"
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            Contact Our Workday Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
