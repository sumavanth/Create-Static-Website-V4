import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SAP() {
  const modules = [
    'SAP S/4HANA',
    'SAP ECC',
    'SAP BW/4HANA',
    'SAP SuccessFactors',
    'SAP Ariba',
    'SAP Concur',
    'SAP Analytics Cloud',
    'SAP Fiori',
    'SAP HANA',
    'SAP Cloud Platform',
    'SAP Integration Suite',
    'SAP Business One'
  ];

  const services = [
    'Implementation & Deployment',
    'System Integration',
    'Migration & Upgrade',
    'Custom Development',
    'Support & Maintenance',
    'Training & Change Management'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Enterprise Solutions</p>
            <h1 className="text-5xl mb-6">SAP Solutions & Services</h1>
            <p className="text-xl text-gray-300">
              Transform your business with SAP's industry-leading enterprise resource planning solutions. Our certified consultants help you leverage SAP technologies to drive digital transformation and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Comprehensive SAP Solutions</h2>
              <p className="text-gray-600 mb-6">
                As a trusted SAP partner, we deliver end-to-end solutions across the entire SAP ecosystem. From S/4HANA implementations to cloud migrations, our experts ensure seamless integration and maximum ROI.
              </p>
              <p className="text-gray-600 mb-6">
                Our SAP practice combines deep technical expertise with industry knowledge to deliver solutions that align with your business objectives and accelerate digital transformation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC33]" />
                  <span>Certified SAP Consultants</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC33]" />
                  <span>Proven Implementation Methodology</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC33]" />
                  <span>Industry Best Practices</span>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="SAP Solutions"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* S/4HANA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-6 text-center">SAP S/4HANA</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Modernize your business with SAP's intelligent ERP suite. S/4HANA provides real-time insights, simplified processes, and cloud-ready architecture for future-proof operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl mb-3">Finance</h3>
                <p className="text-gray-600 text-sm">Universal Journal, Asset Accounting, Treasury, Risk Management</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl mb-3">Supply Chain</h3>
                <p className="text-gray-600 text-sm">Material Management, Production Planning, Logistics, Procurement</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl mb-3">Manufacturing</h3>
                <p className="text-gray-600 text-sm">Production Planning, Quality Management, Plant Maintenance</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl mb-3">Sales</h3>
                <p className="text-gray-600 text-sm">Order Management, Pricing, Billing, Customer Service</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl mb-3">Analytics</h3>
                <p className="text-gray-600 text-sm">Real-time Reporting, Embedded Analytics, Predictive Intelligence</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl mb-3">Master Data</h3>
                <p className="text-gray-600 text-sm">Governance, Data Quality, Centralized Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">SAP Modules & Solutions</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {modules.map((module, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-[#FFCC33] transition-colors">
                  <p>{module}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Our SAP Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <ArrowRight className="w-6 h-6 text-[#FFCC33] mb-3" />
                  <h3 className="text-xl mb-2">{service}</h3>
                  <p className="text-gray-600 text-sm">
                    Expert {service.toLowerCase()} services tailored to your business needs and objectives.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Implementation Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="mb-2">Discover</h3>
                <p className="text-sm text-gray-600">Requirements analysis and solution design</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="mb-2">Prepare</h3>
                <p className="text-sm text-gray-600">Project planning and team mobilization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="mb-2">Explore</h3>
                <p className="text-sm text-gray-600">Process design and system configuration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">4</span>
                </div>
                <h3 className="mb-2">Realize</h3>
                <p className="text-sm text-gray-600">Build, test, and validate solution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">5</span>
                </div>
                <h3 className="mb-2">Deploy</h3>
                <p className="text-sm text-gray-600">Go-live and post-production support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Why Choose Our SAP Services</h2>
            <p className="text-gray-300 mb-12">
              Partner with certified SAP experts who deliver results-driven implementations and ongoing support to maximize your SAP investment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-2">200+</div>
                <p className="text-[#FFCC33]">SAP Projects Delivered</p>
              </div>
              <div>
                <div className="text-4xl mb-2">50+</div>
                <p className="text-[#FFCC33]">Certified Consultants</p>
              </div>
              <div>
                <div className="text-4xl mb-2">98%</div>
                <p className="text-[#FFCC33]">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFCC33] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Transform with SAP?</h2>
          <p className="text-xl mb-8">Let's discuss how SAP can drive your digital transformation</p>
          <Link 
            to="/contact"
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            Contact Our SAP Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
