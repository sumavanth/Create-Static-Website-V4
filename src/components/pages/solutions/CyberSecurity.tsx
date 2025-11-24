import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, Shield, Lock, Eye, AlertTriangle, Database, Cloud, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CyberSecurity() {
  const services = [
    'Security Assessment',
    'Penetration Testing',
    'Security Architecture',
    'Identity & Access Management',
    'Cloud Security',
    'Network Security',
    'Application Security',
    'Incident Response',
    'Security Monitoring',
    'Compliance & Governance',
    'Security Training',
    'Threat Intelligence'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Security Solutions</p>
            <h1 className="text-5xl mb-6">Cyber Security Services</h1>
            <p className="text-xl text-gray-300">
              Protect your business from cyber threats with comprehensive security solutions. Our expert team helps you build resilient defenses, ensure compliance, and maintain business continuity in an evolving threat landscape.
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
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
                alt="Cyber Security"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6">Comprehensive Security Solutions</h2>
              <p className="text-gray-600 mb-6">
                In today's digital landscape, cybersecurity is critical to business success. We provide end-to-end security services to protect your assets, data, and reputation from evolving cyber threats.
              </p>
              <p className="text-gray-600 mb-6">
                Our certified security professionals use industry best practices and cutting-edge technologies to design, implement, and manage robust security programs tailored to your business needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC33]" />
                  <span>Certified Security Experts (CISSP, CEH, CISM)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC33]" />
                  <span>24/7 Security Monitoring & Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFCC33]" />
                  <span>Compliance & Regulatory Expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Our Security Services</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:bg-[#FFCC33] transition-colors text-center">
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Security Focus Areas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Shield className="w-12 h-12 text-[#FFCC33] mx-auto mb-4" />
                <h3 className="text-xl mb-3">Threat Protection</h3>
                <p className="text-sm text-gray-600">
                  Advanced threat detection and prevention to safeguard against malware, ransomware, and zero-day attacks.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Lock className="w-12 h-12 text-[#FFCC33] mx-auto mb-4" />
                <h3 className="text-xl mb-3">Data Protection</h3>
                <p className="text-sm text-gray-600">
                  Encryption, DLP, and data security measures to protect sensitive information at rest and in transit.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Eye className="w-12 h-12 text-[#FFCC33] mx-auto mb-4" />
                <h3 className="text-xl mb-3">Security Monitoring</h3>
                <p className="text-sm text-gray-600">
                  24/7 SOC services with real-time monitoring, threat intelligence, and rapid incident response.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Users className="w-12 h-12 text-[#FFCC33] mx-auto mb-4" />
                <h3 className="text-xl mb-3">Identity Management</h3>
                <p className="text-sm text-gray-600">
                  IAM solutions with MFA, SSO, and privileged access management for secure user authentication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Comprehensive Security Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <AlertTriangle className="w-10 h-10 text-[#FFCC33] mb-4" />
                <h3 className="text-2xl mb-4">Risk Assessment & Management</h3>
                <p className="text-gray-600 mb-4">
                  Identify, assess, and mitigate security risks across your organization.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Vulnerability assessments</li>
                  <li>• Risk quantification and prioritization</li>
                  <li>• Security posture evaluation</li>
                  <li>• Remediation planning</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Shield className="w-10 h-10 text-[#FFCC33] mb-4" />
                <h3 className="text-2xl mb-4">Penetration Testing</h3>
                <p className="text-gray-600 mb-4">
                  Ethical hacking to identify vulnerabilities before attackers do.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• External and internal pen testing</li>
                  <li>• Web application testing</li>
                  <li>• Social engineering assessments</li>
                  <li>• Red team exercises</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Cloud className="w-10 h-10 text-[#FFCC33] mb-4" />
                <h3 className="text-2xl mb-4">Cloud Security</h3>
                <p className="text-gray-600 mb-4">
                  Secure your cloud infrastructure and applications across AWS, Azure, and GCP.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud security architecture</li>
                  <li>• Configuration management</li>
                  <li>• Cloud access security broker (CASB)</li>
                  <li>• Container security</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Database className="w-10 h-10 text-[#FFCC33] mb-4" />
                <h3 className="text-2xl mb-4">Compliance & Governance</h3>
                <p className="text-gray-600 mb-4">
                  Meet regulatory requirements and maintain security governance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• GDPR, HIPAA, PCI-DSS compliance</li>
                  <li>• Security policy development</li>
                  <li>• Audit support</li>
                  <li>• GRC platform implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Incident Response & Recovery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="mb-2">Detect</h3>
                <p className="text-sm text-gray-600">24/7 monitoring to identify security incidents</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="mb-2">Contain</h3>
                <p className="text-sm text-gray-600">Rapid response to isolate threats</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="mb-2">Eradicate</h3>
                <p className="text-sm text-gray-600">Remove threats and vulnerabilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFCC33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">4</span>
                </div>
                <h3 className="mb-2">Recover</h3>
                <p className="text-sm text-gray-600">Restore operations and strengthen defenses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Our Security Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl mb-2">500+</div>
                <p className="text-[#FFCC33]">Security Assessments</p>
              </div>
              <div>
                <div className="text-5xl mb-2">99.9%</div>
                <p className="text-[#FFCC33]">Threat Detection Rate</p>
              </div>
              <div>
                <div className="text-5xl mb-2">15min</div>
                <p className="text-[#FFCC33]">Avg. Response Time</p>
              </div>
              <div>
                <div className="text-5xl mb-2">Zero</div>
                <p className="text-[#FFCC33]">Breaches for Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Industry Certifications</h2>
            <p className="text-gray-600 mb-8">
              Our security professionals hold top industry certifications
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-gray-50 px-6 py-3 rounded-lg">CISSP</div>
              <div className="bg-gray-50 px-6 py-3 rounded-lg">CEH</div>
              <div className="bg-gray-50 px-6 py-3 rounded-lg">CISM</div>
              <div className="bg-gray-50 px-6 py-3 rounded-lg">CISA</div>
              <div className="bg-gray-50 px-6 py-3 rounded-lg">OSCP</div>
              <div className="bg-gray-50 px-6 py-3 rounded-lg">Security+</div>
              <div className="bg-gray-50 px-6 py-3 rounded-lg">CCSP</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFCC33] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Secure Your Business Today</h2>
          <p className="text-xl mb-8">Protect your assets with comprehensive cybersecurity solutions</p>
          <Link 
            to="/contact"
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            Schedule Security Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
