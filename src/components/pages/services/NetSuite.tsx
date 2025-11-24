import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, ShoppingCart, Package, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NetSuite() {
  const capabilities = [
    {
      icon: TrendingUp,
      title: 'Financial Management',
      description: 'Comprehensive financial management with real-time visibility and control.'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Integrated e-commerce platform for seamless online and offline sales.'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Advanced inventory and order management across multiple locations.'
    },
    {
      icon: Users,
      title: 'CRM',
      description: 'Complete customer relationship management from lead to opportunity to sale.'
    }
  ];

  const services = [
    'NetSuite ERP Implementation',
    'NetSuite SuiteCommerce',
    'NetSuite CRM',
    'NetSuite OneWorld (Multi-subsidiary)',
    'Custom SuiteScript Development',
    'Integration Services',
    'NetSuite Optimization',
    'Training and Change Management'
  ];

  const modules = [
    'Financial Management',
    'Order Management',
    'Inventory Management',
    'Procurement',
    'CRM',
    'E-Commerce (SuiteCommerce)',
    'Project Management',
    'Professional Services Automation',
    'Warehouse Management',
    'Manufacturing',
    'Business Intelligence',
    'SuiteAnalytics'
  ];

  const benefits = [
    'Real-time Business Insights',
    'Scalable Cloud Platform',
    'Multi-subsidiary Management',
    'Global Business Management',
    'Automated Financial Processes',
    'Integrated E-Commerce',
    'Mobile Accessibility',
    'Reduced IT Costs'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1600&h=900&fit=crop"
            alt="NetSuite Solutions"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Services</p>
            <h1 className="text-5xl mb-6">NetSuite Solutions</h1>
            <p className="text-xl text-gray-300">
              Oracle NetSuite is the world's leading cloud ERP solution. We help businesses leverage NetSuite's powerful capabilities to streamline operations and drive growth.
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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="NetSuite platform"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6">Comprehensive Cloud ERP Solution</h2>
              <p className="text-gray-600 mb-4">
                Oracle NetSuite delivers a comprehensive, cloud-based business management solution that gives organizations complete visibility and control over their core business processes.
              </p>
              <p className="text-gray-600 mb-4">
                As an Oracle NetSuite Alliance Partner, Cryptoinfoline/Ijnag brings extensive experience in implementing and optimizing NetSuite for businesses of all sizes. Our partnership ensures you receive world-class implementation services backed by Oracle's robust resources.
              </p>
              <p className="text-gray-600">
                Together, Cryptoinfoline and NetSuite offer a comprehensive suite of solutions, from financial management and inventory control to customer relationship management and e-commerce. This allows our customers to have a very wide range of business needs met with one stop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alliance Partnership */}
      <section className="py-16 bg-[#FFCC33]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Cryptoinfoline / 1BTP and Oracle NetSuite</h2>
            <h3 className="text-2xl mb-4">Unlocking New Potential</h3>
            <p className="text-lg mb-8">
              Cryptoinfoline is proud to announce our alliance partnership with Oracle NetSuite, enhancing our ability to deliver comprehensive business solutions. This collaboration brings significant benefits to our clients:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl mb-3">Enhanced Expertise</h4>
                <p className="text-gray-600">
                  We gain access to NetSuite's robust resources, training, and tools, strengthening our expertise in cloud-based ERP, CRM, and e-commerce solutions. This empowers us to provide tailored implementations and optimizations that precisely align with your unique business needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl mb-3">Streamlined Operations</h4>
                <p className="text-gray-600">
                  By leveraging NetSuite's powerful platform, we can help you streamline your operations, improve efficiency, and drive growth. Our partnership ensures seamless integration and implementation, minimizing disruption and maximizing your return on investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">NetSuite Key Capabilities</h2>
            <p className="text-gray-600">All your business operations in one unified platform</p>
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
            <h2 className="text-4xl mb-8 text-center">Our NetSuite Services</h2>
            
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

      {/* NetSuite Modules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">NetSuite Modules & Features</h2>
            <p className="text-gray-600">Complete business management capabilities</p>
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

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">NetSuite Benefits</h2>
            <p className="text-gray-600">Why businesses choose NetSuite</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <CheckCircle className="w-8 h-8 text-[#FFCC33] mx-auto mb-3" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Our NetSuite Implementation Process</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-3">Discovery & Assessment</h3>
                <p className="text-gray-600">
                  We analyze your current business processes, systems, and requirements to create a comprehensive implementation plan.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-3">Design & Customization</h3>
                <p className="text-gray-600">
                  Configure NetSuite to match your business processes and develop custom scripts and workflows as needed.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-3">Data Migration</h3>
                <p className="text-gray-600">
                  Migrate data from legacy systems with accuracy and integrity, ensuring business continuity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-3">Testing & Training</h3>
                <p className="text-gray-600">
                  Comprehensive user acceptance testing and training to ensure your team is ready for go-live.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-3">Go-Live & Support</h3>
                <p className="text-gray-600">
                  Smooth transition to NetSuite with dedicated support and ongoing optimization services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Why Choose Our NetSuite Services?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Oracle Alliance Partner</h3>
                <p className="text-gray-600">
                  As an official Oracle NetSuite Alliance Partner, we have access to exclusive resources and support.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Industry Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of industry-specific requirements and best practices for NetSuite implementations.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Proven Methodology</h3>
                <p className="text-gray-600">
                  Time-tested implementation methodology that ensures on-time, on-budget project delivery.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Comprehensive Support</h3>
                <p className="text-gray-600">
                  From implementation through optimization, we provide end-to-end support for your NetSuite journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFCC33] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Transform Your Business with NetSuite?</h2>
          <p className="text-xl mb-8">Partner with us to unlock the full potential of Oracle NetSuite</p>
          <Link 
            to="/contact"
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            Contact Our NetSuite Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
