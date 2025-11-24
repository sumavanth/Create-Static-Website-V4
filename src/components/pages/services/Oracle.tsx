import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, ArrowRight, Database, Cloud, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Oracle() {
  const solutions = [
    'Oracle E-Business Suite',
    'Oracle Cloud Applications',
    'Oracle Database',
    'Oracle Fusion Middleware',
    'Oracle Cloud Infrastructure',
    'Oracle Autonomous Database',
    'Oracle Analytics',
    'Oracle Integration Cloud'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Oracle Partner</p>
            <h1 className="text-5xl mb-6">Oracle Solutions & Services</h1>
            <p className="text-xl text-gray-300">
              Leverage the power of Oracle's comprehensive suite of enterprise applications, databases, and cloud infrastructure. Our Oracle-certified team delivers innovative solutions that drive business growth and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
                alt="Oracle Solutions"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6">Comprehensive Oracle Expertise</h2>
              <p className="text-gray-600 mb-6">
                As an Oracle partner, we specialize in implementing, integrating, and optimizing Oracle's full stack of enterprise solutions. From E-Business Suite to Cloud Applications, we help organizations maximize their Oracle investments.
              </p>
              <p className="text-gray-600 mb-6">
                Our Oracle practice combines technical expertise with industry knowledge to deliver solutions that meet your unique business requirements and drive digital transformation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC33]" />
                  <span>Oracle Certified Professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC33]" />
                  <span>End-to-End Implementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC33]" />
                  <span>24/7 Support & Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Oracle Solutions We Deliver</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <ArrowRight className="w-6 h-6 text-[#FFCC33] mb-3" />
                  <h3 className="text-xl mb-2">{solution}</h3>
                  <p className="text-gray-600 text-sm">
                    Expert implementation and support for {solution.toLowerCase()} to drive your business forward.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-Business Suite */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-6 text-center">Oracle E-Business Suite</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Comprehensive suite of integrated business applications for managing your entire enterprise operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3">Financials</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• General Ledger</li>
                  <li>• Accounts Payable</li>
                  <li>• Accounts Receivable</li>
                  <li>• Cash Management</li>
                  <li>• Fixed Assets</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3">Supply Chain</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Inventory Management</li>
                  <li>• Procurement</li>
                  <li>• Order Management</li>
                  <li>• Manufacturing</li>
                  <li>• Warehouse Management</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3">Human Resources</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Core HR</li>
                  <li>• Payroll</li>
                  <li>• Talent Management</li>
                  <li>• Learning Management</li>
                  <li>• Self-Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oracle Cloud */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-6 text-center">Oracle Cloud Applications</h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              Modern, cloud-native applications built for innovation, agility, and seamless integration.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Cloud className="w-12 h-12 text-[#FFCC33] mx-auto mb-4" />
                <h3 className="text-xl mb-2">ERP Cloud</h3>
                <p className="text-sm text-gray-300">Complete financial and operational management</p>
              </div>
              <div className="text-center">
                <Database className="w-12 h-12 text-[#FFCC33] mx-auto mb-4" />
                <h3 className="text-xl mb-2">HCM Cloud</h3>
                <p className="text-sm text-gray-300">Human capital management suite</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-[#FFCC33] mx-auto mb-4" />
                <h3 className="text-xl mb-2">SCM Cloud</h3>
                <p className="text-sm text-gray-300">Supply chain planning and execution</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-[#FFCC33] mx-auto mb-4" />
                <h3 className="text-xl mb-2">CX Cloud</h3>
                <p className="text-sm text-gray-300">Customer experience platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Database Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Oracle Database Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl mb-4">Oracle Autonomous Database</h3>
                <p className="text-gray-600 mb-4">
                  Self-driving, self-securing, and self-repairing database that eliminates manual management and reduces costs by up to 90%.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FFCC33] flex-shrink-0 mt-1" />
                    <span className="text-sm">Automated patching and upgrades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FFCC33] flex-shrink-0 mt-1" />
                    <span className="text-sm">Built-in security and encryption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FFCC33] flex-shrink-0 mt-1" />
                    <span className="text-sm">Elastic scaling on demand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FFCC33] flex-shrink-0 mt-1" />
                    <span className="text-sm">High availability and disaster recovery</span>
                  </li>
                </ul>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop"
                  alt="Oracle Database"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Our Oracle Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">Implementation</h3>
                <p className="text-gray-600 text-sm">
                  Full lifecycle implementation services from planning to go-live and beyond.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">Migration</h3>
                <p className="text-gray-600 text-sm">
                  Seamless migration to Oracle Cloud with minimal disruption to operations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">Integration</h3>
                <p className="text-gray-600 text-sm">
                  Connect Oracle with your existing systems for unified operations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">Customization</h3>
                <p className="text-gray-600 text-sm">
                  Tailor Oracle applications to meet your specific business requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">Optimization</h3>
                <p className="text-gray-600 text-sm">
                  Enhance performance and maximize ROI from your Oracle investments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">Support</h3>
                <p className="text-gray-600 text-sm">
                  24/7 managed services and application support for business continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFCC33] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Transform Your Business with Oracle</h2>
          <p className="text-xl mb-8">Partner with Oracle experts who deliver results</p>
          <Link 
            to="/contact"
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            Contact Our Oracle Team
          </Link>
        </div>
      </section>
    </div>
  );
}
