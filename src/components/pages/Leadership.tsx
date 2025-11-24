import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';
import founderImage from 'figma:asset/39a1657eb986dfdc3c4a85e62e3c0628244bdd2b.png';

export function Leadership() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Leadership Team</p>
            <h1 className="text-5xl mb-6">Meet Our Leaders</h1>
            <p className="text-xl text-gray-300">
              Our team is comprised of highly skilled industry experts. Cryptoinfoline's members come with years of experience in the fields of strategic IT consulting, project management, implementation and service delivery. With our expertise and dedication to excellence, we help businesses optimize their operations, streamline processes, and take their solutions to next level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square relative overflow-hidden bg-gray-200 rounded-lg shadow-lg">
                  <img
                    src={founderImage}
                    alt="Kishorkumar Ganji"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl mb-2">Kishorkumar Ganji</h2>
                <p className="text-[#FFCC33] text-2xl mb-6">Founder & CEO</p>
                <p className="text-gray-600 mb-6 text-lg">
                  Kishor is the Founder and CEO of Ijnag Consultancy Services with more than a decade of experience working for Big 4 companies in Canada and India where he had led numerous consulting engagements as a Project Manager, Technology and Process Integration Lead across various sectors including financial services, public sector and higher education.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-[#FFCC33] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="mailto:kganji@cryptoinfoline.com"
                    className="text-gray-600 hover:text-[#FFCC33] transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Our Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  10+
                </div>
                <h3 className="text-xl mb-2">Years of Experience</h3>
                <p className="text-gray-600 text-sm">
                  Proven track record in IT consulting and implementation
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  100+
                </div>
                <h3 className="text-xl mb-2">Projects Delivered</h3>
                <p className="text-gray-600 text-sm">
                  Successfully completed engagements across multiple sectors
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  Big 4
                </div>
                <h3 className="text-xl mb-2">Big 4 Experience</h3>
                <p className="text-gray-600 text-sm">
                  Leadership experience from top consulting firms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Industry Experience</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors">
                <h3 className="text-xl mb-2">Financial Services</h3>
                <p className="text-gray-600 text-sm">
                  Banking, insurance, and investment management
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors">
                <h3 className="text-xl mb-2">Public Sector</h3>
                <p className="text-gray-600 text-sm">
                  Government agencies and public services
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors">
                <h3 className="text-xl mb-2">Higher Education</h3>
                <p className="text-gray-600 text-sm">
                  Universities and educational institutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Core Competencies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">Strategic IT Consulting</h3>
                <p className="text-gray-600 text-sm">
                  Developing and implementing technology strategies that align with business objectives and drive digital transformation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">Project Management</h3>
                <p className="text-gray-600 text-sm">
                  Leading complex, large-scale projects with proven methodologies ensuring on-time, on-budget delivery.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">Technology Integration</h3>
                <p className="text-gray-600 text-sm">
                  Seamlessly integrating enterprise systems and applications to create unified, efficient technology ecosystems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">Service Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Implementing and optimizing IT service delivery frameworks to enhance operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Our Leadership Philosophy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Excellence & Innovation</h3>
                <p className="text-gray-600">
                  We are committed to delivering excellence in everything we do while continuously innovating to stay ahead of industry trends and bring cutting-edge solutions to our clients.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Client Success</h3>
                <p className="text-gray-600">
                  Our clients' success is our success. We build lasting partnerships based on trust, transparency, and a shared commitment to achieving business objectives.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Process Optimization</h3>
                <p className="text-gray-600">
                  We help businesses streamline their processes, eliminate inefficiencies, and implement best practices that drive operational excellence and sustainable growth.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Continuous Improvement</h3>
                <p className="text-gray-600">
                  We believe in continuous learning and improvement, ensuring that we remain at the forefront of technology and deliver maximum value to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}