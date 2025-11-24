import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, TrendingUp, Database, PieChart, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OneStream() {
  const capabilities = [
    {
      icon: Database,
      title: 'Financial Consolidation',
      description: 'Streamline financial consolidation and reporting with automated processes and real-time data.'
    },
    {
      icon: TrendingUp,
      title: 'Planning & Budgeting',
      description: 'Dynamic planning, budgeting, and forecasting capabilities for agile business decisions.'
    },
    {
      icon: PieChart,
      title: 'Reporting & Analytics',
      description: 'Advanced analytics and customizable dashboards for actionable business insights.'
    },
    {
      icon: RefreshCw,
      title: 'Data Integration',
      description: 'Seamless integration with existing ERP, CRM, and other enterprise systems.'
    }
  ];

  const services = [
    'OneStream Implementation',
    'Migration from Legacy CPM Systems',
    'Custom Application Development',
    'Marketplace Solutions Integration',
    'Financial Close Automation',
    'Reporting and Dashboard Design',
    'Training and User Adoption',
    'Managed Services and Support'
  ];

  const benefits = [
    'Unified CPM Platform',
    'Reduced IT Complexity',
    'Faster Financial Close',
    'Improved Data Accuracy',
    'Enhanced Reporting Capabilities',
    'Scalable Architecture',
    'Lower Total Cost of Ownership',
    'Cloud and On-Premise Options'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop"
            alt="OneStream Solutions"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Services</p>
            <h1 className="text-5xl mb-6">OneStream Solutions</h1>
            <p className="text-xl text-gray-300">
              Transform your corporate performance management with OneStream's unified platform for financial consolidation, planning, reporting, and analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"
                alt="OneStream platform"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6">Simplify Your Financial Processes</h2>
              <p className="text-gray-600 mb-4">
                OneStream is a market-leading Corporate Performance Management (CPM) software platform that unifies financial consolidation, planning, reporting, analytics, and financial data quality in a single solution.
              </p>
              <p className="text-gray-600 mb-4">
                As certified OneStream implementation partners, we help organizations replace disparate legacy systems with a unified platform that reduces complexity, improves accuracy, and accelerates financial close processes.
              </p>
              <p className="text-gray-600">
                Our team of OneStream experts delivers end-to-end implementation services, from initial planning and design through deployment, training, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">OneStream Key Capabilities</h2>
            <p className="text-gray-600">A comprehensive platform for modern finance teams</p>
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
            <h2 className="text-4xl mb-8 text-center">Our OneStream Services</h2>
            
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

      {/* Solution Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">OneStream Benefits</h2>
            <p className="text-gray-600">Transform your financial close and planning processes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors cursor-pointer">
                <CheckCircle className="w-8 h-8 text-[#FFCC33] mx-auto mb-3" />
                <p>{benefit}</p>
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
                <h3 className="text-2xl mb-3">1. Discovery & Planning</h3>
                <p className="text-gray-600">
                  We begin with a comprehensive assessment of your current processes, systems, and requirements to develop a tailored implementation roadmap.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-3">2. Design & Configuration</h3>
                <p className="text-gray-600">
                  Our experts design and configure your OneStream application based on best practices and your specific business needs.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-3">3. Data Migration & Integration</h3>
                <p className="text-gray-600">
                  We migrate your data from legacy systems and establish integrations with your existing enterprise applications.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-3">4. Testing & Training</h3>
                <p className="text-gray-600">
                  Comprehensive testing ensures data accuracy and system performance, while hands-on training prepares your team for success.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-3">5. Go-Live & Support</h3>
                <p className="text-gray-600">
                  We provide dedicated support during go-live and offer ongoing managed services to optimize your OneStream environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Why Choose Our OneStream Services?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl mb-3">Certified Professionals</h3>
                <p className="text-gray-600">
                  Our team includes certified OneStream implementation specialists with proven track records across multiple industries.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl mb-3">Accelerated Deployment</h3>
                <p className="text-gray-600">
                  Leverage our pre-built templates and accelerators to reduce implementation time and achieve faster ROI.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl mb-3">Marketplace Expertise</h3>
                <p className="text-gray-600">
                  We help you leverage OneStream's extensive marketplace solutions to extend functionality without custom development.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl mb-3">Continuous Innovation</h3>
                <p className="text-gray-600">
                  Stay current with regular updates and enhancements as we help you maximize the value of your OneStream investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFCC33] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Transform Your Financial Processes?</h2>
          <p className="text-xl mb-8">Discover how OneStream can streamline your CPM operations</p>
          <Link 
            to="/contact"
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            Schedule a OneStream Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
