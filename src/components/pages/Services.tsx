import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Code, Database, LineChart, Users, Briefcase, Settings, Cloud, Shield } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Build tailored software solutions that perfectly fit your business requirements and scale with your growth.',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'API Development & Integration',
        'Legacy System Modernization'
      ]
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Transform your data into actionable insights with our comprehensive analytics and business intelligence solutions.',
      features: [
        'Data Warehouse Design',
        'Business Intelligence',
        'Predictive Analytics',
        'Data Visualization'
      ]
    },
    {
      icon: LineChart,
      title: 'Business Consulting',
      description: 'Strategic consulting services to optimize your operations, improve efficiency, and drive business growth.',
      features: [
        'Process Optimization',
        'Change Management',
        'Digital Strategy',
        'Operational Excellence'
      ]
    },
    {
      icon: Users,
      title: 'HR Solutions',
      description: 'Comprehensive human resource management solutions to streamline your HR processes and enhance employee experience.',
      features: [
        'HRIS Implementation',
        'Talent Management',
        'Workforce Planning',
        'Performance Management'
      ]
    },
    {
      icon: Briefcase,
      title: 'Project Management',
      description: 'End-to-end project management services ensuring on-time, on-budget delivery with quality outcomes.',
      features: [
        'Project Planning & Execution',
        'Agile/Waterfall Methodologies',
        'Risk Management',
        'Stakeholder Communication'
      ]
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamlessly connect your business systems and applications for improved efficiency and data flow.',
      features: [
        'Enterprise Integration',
        'API Management',
        'Middleware Solutions',
        'Real-time Data Sync'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Migrate, manage, and optimize your cloud infrastructure for scalability, security, and cost-efficiency.',
      features: [
        'Cloud Migration',
        'Cloud Architecture',
        'DevOps Implementation',
        'Cloud Cost Optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Protect your business with robust security solutions and ensure compliance with industry regulations.',
      features: [
        'Security Assessments',
        'Compliance Management',
        'Data Protection',
        'Security Training'
      ]
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Retail & E-commerce',
    'Manufacturing',
    'Technology',
    'Education'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Our Services</p>
            <h1 className="text-5xl mb-6">Comprehensive IT & Business Solutions</h1>
            <p className="text-xl text-gray-300">
              From strategy to implementation, we provide end-to-end services that drive digital transformation and business success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">What We Offer</h2>
            <p className="text-gray-600">Tailored solutions to meet your unique business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-[#FFCC33] mb-4" />
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-start">
                        <span className="text-[#FFCC33] mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Our Service Approach</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl mb-2">1. Discovery & Analysis</h3>
                  <p className="text-gray-600">
                    We start by understanding your business challenges, objectives, and existing systems to create a comprehensive roadmap.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl mb-2">2. Strategy & Planning</h3>
                  <p className="text-gray-600">
                    Develop a detailed strategy and implementation plan aligned with your business goals and budget.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl mb-2">3. Implementation</h3>
                  <p className="text-gray-600">
                    Execute the plan with our expert team, ensuring quality delivery and minimal disruption to your operations.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl mb-2">4. Support & Optimization</h3>
                  <p className="text-gray-600">
                    Provide ongoing support and continuous optimization to ensure long-term success and value realization.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                alt="Service approach"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Industries We Serve</h2>
            <p className="text-gray-600">Expertise across multiple sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors cursor-pointer">
                <p>{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Models */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Flexible Engagement Models</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-4">Project-Based</h3>
                <p className="text-gray-600">
                  Fixed scope, timeline, and budget for well-defined projects with clear deliverables.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-4">Time & Materials</h3>
                <p className="text-gray-600">
                  Flexible engagement where you pay for the time and resources used, ideal for evolving requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-4">Dedicated Team</h3>
                <p className="text-gray-600">
                  Your own dedicated team of experts working exclusively on your projects and initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFCC33] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Let's discuss how our services can benefit your business</p>
          <a 
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
