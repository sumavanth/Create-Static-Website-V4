import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Handshake, Award, Globe, TrendingUp, Zap, Users } from 'lucide-react';
import { ClientLogoSection } from '../ClientLogoSection';

export function Partners() {
  const benefits = [
    {
      icon: Handshake,
      title: 'Strategic Alliances',
      description: 'We build long-term partnerships that create mutual value and drive innovation for our clients.'
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Our team holds numerous certifications from leading technology providers, ensuring best-in-class implementations.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Through our partner network, we deliver solutions and support across multiple regions and time zones.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Partner relationships keep us at the forefront of technology trends and emerging solutions.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Our Partners</p>
            <h1 className="text-5xl mb-6">Building Success Together</h1>
            <p className="text-xl text-gray-300">
              We collaborate with industry-leading technology partners to deliver cutting-edge solutions and exceptional value to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Logos Grid */}
      <ClientLogoSection 
        title="Trusted by Industry Leaders"
        description="We partner with the world's leading technology companies"
      />

      {/* Celigo Partnership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4">A Strategic Alliance for Seamless Business Solutions</h2>
              <h3 className="text-2xl text-[#FFCC33] mb-6">Partnership Announcement</h3>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <p className="text-lg text-gray-600 mb-6">
                Ijnag Consultancy Services, a leading provider of ERP and Business Solutions, is excited to announce a strategic alliance with Celigo, a premier integration platform. This collaboration marks a significant step towards enhancing our service offerings and empowering our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Zap className="w-8 h-8 text-[#FFCC33] flex-shrink-0" />
                  <div>
                    <h4 className="text-2xl mb-3">Core Benefit: Enhanced Data Integration</h4>
                    <p className="text-gray-600">
                      The primary focus of this partnership is to integrate Celigo's advanced integration technologies into Ijnag Consultancy Services's solutions. This will enable seamless data management and analysis, bridging the gap between disparate systems and providing a unified view of critical business information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <TrendingUp className="w-8 h-8 text-[#FFCC33] flex-shrink-0" />
                  <div>
                    <h4 className="text-2xl mb-3">Strengthened Market Position</h4>
                    <p className="text-gray-600">
                      This alliance reinforces Ijnag Consultancy Services's commitment to providing cutting-edge solutions. By incorporating Celigo's powerful integration capabilities, we are strengthening our position in the market and delivering a robust platform tailored to the evolving needs of businesses in today's dynamic landscape.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Users className="w-8 h-8 text-[#FFCC33] flex-shrink-0" />
                  <div>
                    <h4 className="text-2xl mb-3">User Experience Improvement</h4>
                    <p className="text-gray-600">
                      By leveraging Celigo's expertise, Ijnag Consultancy Services will deliver a more streamlined and comprehensive user experience. Clients can expect real-time, accurate, and insightful information, fostering informed decision-making and operational efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Globe className="w-8 h-8 text-[#FFCC33] flex-shrink-0" />
                  <div>
                    <h4 className="text-2xl mb-3">Comprehensive Solutions</h4>
                    <p className="text-gray-600">
                      Together, Ijnag Consultancy Services and NetSuite offer a comprehensive suite of solutions, from financial management and inventory control to customer relationship management and e-commerce. This will allow our customers to have a very wide range of business needs met with one stop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NetSuite Partnership */}
      <section className="py-16 bg-[#FFCC33]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4">Ijnag Consultancy Services / 1BTP and Oracle NetSuite</h2>
              <h3 className="text-2xl mb-6">Unlocking New Potential: Ijnag Consultancy Services's Alliance with Oracle NetSuite</h3>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <p className="text-lg text-gray-600 mb-6">
                Ijnag Consultancy Services is proud to announce our alliance partnership with Oracle NetSuite, enhancing our ability to deliver comprehensive business solutions. This collaboration brings significant benefits to our clients:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h4 className="text-2xl mb-4">Enhanced Expertise</h4>
                <p className="text-gray-600 mb-4">
                  We gain access to NetSuite's robust resources, training, and tools, strengthening our expertise in cloud-based ERP, CRM, and e-commerce solutions.
                </p>
                <p className="text-gray-600">
                  This empowers us to provide tailored implementations and optimizations that precisely align with your unique business needs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h4 className="text-2xl mb-4">Streamlined Operations</h4>
                <p className="text-gray-600 mb-4">
                  By leveraging NetSuite's powerful platform, we can help you streamline your operations, improve efficiency, and drive growth.
                </p>
                <p className="text-gray-600">
                  Our partnership ensures seamless integration and implementation, minimizing disruption and maximizing your return on investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Partnership Benefits</h2>
            <p className="text-gray-600">How our partnerships create value for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFCC33] rounded-full mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl mb-6">Become a Partner</h2>
                <p className="text-gray-600 mb-6">
                  Are you interested in partnering with us? We're always looking to expand our network of technology partners, resellers, and strategic alliances.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFCC33]">•</span>
                    <span className="text-gray-600">Access to our client base and market expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFCC33]">•</span>
                    <span className="text-gray-600">Joint marketing and co-selling opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFCC33]">•</span>
                    <span className="text-gray-600">Technical collaboration and knowledge sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFCC33]">•</span>
                    <span className="text-gray-600">Revenue growth through strategic partnership</span>
                  </li>
                </ul>
                <a 
                  href="/contact"
                  className="inline-block bg-[#FFCC33] text-black px-8 py-4 hover:bg-[#FFD966] transition-colors"
                >
                  Partner With Us
                </a>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                  alt="Partnership"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Certifications & Recognitions</h2>
            <p className="text-gray-600">Our commitment to excellence recognized by industry leaders</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'ISO 9001:2015 Certified',
              'CMMI Level 5',
              'Oracle Platinum Partner',
              'Celigo Integration Partner',
              'Oracle NetSuite Alliance Partner',
              'Microsoft Gold Partner',
              'SAP Gold Partner',
              'Workday Partner'
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <Award className="w-12 h-12 text-[#FFCC33] mx-auto mb-3" />
                <p className="text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}