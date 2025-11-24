import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import serviceLogos from 'figma:asset/4984b7e49f38c9255e81f014e15607c76b417207.png';
import { HeroSlider } from '../HeroSlider';
import { ClientLogoSection } from '../ClientLogoSection';

export function Home() {
  const [activeTab, setActiveTab] = useState<'business' | 'consulting' | 'tech'>('business');

  const heroImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop'
  ];

  const services = [
    { title: 'HR', description: 'Human Resource management solutions tailored to your needs' },
    { title: 'Finance', description: 'Financial consulting and strategic planning services' },
    { title: 'CRM', description: 'Customer Relationship Management implementation' },
    { title: 'Customer Development', description: 'Build lasting relationships with your customers' },
  ];

  const consultingServices = [
    { title: 'Strategy Development', description: 'Define clear strategic direction for your business' },
    { title: 'Process Optimization', description: 'Streamline operations and improve efficiency' },
    { title: 'Change Management', description: 'Navigate organizational transformation successfully' },
    { title: 'Performance Management', description: 'Drive accountability and results' },
  ];

  const techServices = [
    { title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and migration services' },
    { title: 'System Integration', description: 'Connect your business systems seamlessly' },
    { title: 'Custom Development', description: 'Tailored software solutions for your needs' },
    { title: 'Cybersecurity', description: 'Protect your digital assets and data' },
  ];

  const tabContent = {
    business: {
      title: 'Business Solutions',
      description: 'The software development lifecycle (SDLC) project management services are just one example of the many ways in which an IT solution provider may assist organisations from both an IT and non-IT standpoint. We deliver comprehensive business solutions that drive growth and efficiency.',
      items: services,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    consulting: {
      title: 'Consulting Services',
      description: 'Our expert consultants bring years of experience in strategic IT consulting, project management, and service delivery. We help businesses optimize operations, streamline processes, and achieve their strategic objectives through proven methodologies.',
      items: consultingServices,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
    },
    tech: {
      title: 'Technology Solutions',
      description: 'Leverage cutting-edge technology to transform your business. Our technology solutions encompass cloud computing, system integration, custom development, and cybersecurity to help you stay ahead in the digital age.',
      items: techServices,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
    }
  };

  const solutions = [
    'Project Management as a Service',
    'Integrations As a Service',
    'Reports As a Service',
    'Custom Development Solutions',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <HeroSlider images={heroImages} />
        </div>
        
        {/* Yellow diagonal stripe */}
        <div 
          className="absolute top-0 right-0 bottom-0 w-1/3 bg-[#FFCC33]"
          style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl mb-6 font-bold leading-tight tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
              We Provide<br />
              IT & Business<br />
              Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Drive your Business through Consulting As a Service.<br />
              We provide Flexible, Scalable, Economical, Pay as you go<br />
              resource models by Workstream
            </p>
            <Link 
              to="/solutions"
              className="inline-block bg-[#FFCC33] text-black px-8 py-4 hover:bg-[#FFD966] transition-colors"
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Recently Completed Work */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-2">Recently Completed Work</p>
            <h2 className="text-4xl">Improve & Enhance the Tech Projects</h2>
          </div>

          {/* Service Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-12 max-w-4xl mx-auto">
            <button 
              onClick={() => setActiveTab('business')}
              className={`py-4 px-6 transition-colors ${
                activeTab === 'business' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              BUSINESS
            </button>
            <button 
              onClick={() => setActiveTab('consulting')}
              className={`py-4 px-6 transition-colors ${
                activeTab === 'consulting' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              CONSULTING
            </button>
            <button 
              onClick={() => setActiveTab('tech')}
              className={`py-4 px-6 transition-colors ${
                activeTab === 'tech' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              TECH SOLUTION
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src={tabContent[activeTab].image}
                alt={tabContent[activeTab].title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl mb-6">{tabContent[activeTab].title}</h3>
              <p className="text-gray-600 mb-8">
                {tabContent[activeTab].description}
              </p>
              <div className="space-y-4">
                {tabContent[activeTab].items.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#FFCC33] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome to Tech Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 w-32 h-32 border-4 border-[#FFCC33] rounded-full" style={{ borderStyle: 'dotted' }} />
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                  alt="Business professional"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div>
              <p className="text-[#FFCC33] uppercase tracking-wide mb-2">Welcome to Tech</p>
              <h2 className="text-4xl mb-6">Expert of Business IT Consulting</h2>
              <p className="text-gray-600 mb-8">
                Choose your Resource Model by Roles, Workstreams, Object Types, Modules and many more.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-2">Project Management as a service</h4>
                  <p className="text-sm text-gray-600">
                    Complete project management, including proposal response, planning, design, construction, testing, cutover, deployment, sustainment, optimization, and value realisation. Agile, hybrid, or waterfall.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2">Integrations As a Service</h4>
                  <p className="text-sm text-gray-600">
                    Integration Strategy, Current & Future State Architecture, Internal, External, Inbound, Outbound, Real-time, near real-time, or File-based, point-to-point, middleware designs, development, unit testing, integration testing, vendor coordination, deployment, sustainment, and optimization are all included in a package.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2">Reports As a Service</h4>
                  <p className="text-sm text-gray-600">
                    All Reports in a bundle encompass Reporting Strategy, Reporting Discovery, Statutory, Transactional, Management, External Reports design, development, unit testing, SIT, User Acceptability Testing, deployment, sustainment, and optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Why Choose Our Services</h2>
            <p className="text-gray-600">Delivering excellence through expertise and innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <CheckCircle className="w-12 h-12 text-[#FFCC33] mb-4" />
                <h3 className="text-xl mb-2">{solution}</h3>
                <p className="text-sm text-gray-600">
                  Professional solutions tailored to meet your specific business requirements and goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services - Service Logos */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h3 className="text-[#FFCC33] uppercase tracking-wide mb-2">OUR SERVICES</h3>
                <h2 className="text-4xl mb-4">We're Dedicated to Serve you All Time</h2>
                <p className="text-gray-300">
                  Review our service offerings to understand how we help clients to drive their business growth
                </p>
              </div>
              <div className="flex justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                  alt="Our Team"
                  className="w-full max-w-md h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <img src={serviceLogos} alt="Service Partners" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogoSection 
        title="Trusted by Leading Organizations"
        description="We partner with industry-leading companies to deliver exceptional results"
      />

      {/* CTA Section */}
      <section className="bg-[#FFCC33] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Get in touch with our experts today</p>
          <Link 
            to="/contact"
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}