import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, Users, Clock, Award, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StaffingSolutions() {
  const services = [
    {
      icon: Users,
      title: 'Contract Staffing',
      description: 'Flexible contract resources for project-based needs and temporary assignments.'
    },
    {
      icon: Briefcase,
      title: 'Permanent Placement',
      description: 'Find the right full-time talent to join your team permanently.'
    },
    {
      icon: Clock,
      title: 'Staff Augmentation',
      description: 'Extend your team with skilled professionals on-demand.'
    },
    {
      icon: Award,
      title: 'Executive Search',
      description: 'Specialized recruitment for senior leadership and executive positions.'
    }
  ];

  const specializations = [
    'IT & Technology',
    'Finance & Accounting',
    'HR & Administration',
    'Project Management',
    'Business Analysis',
    'Data & Analytics',
    'Software Development',
    'Cloud & Infrastructure',
    'Cybersecurity',
    'ERP Consultants',
    'CRM Specialists',
    'Digital Marketing'
  ];

  const benefits = [
    'Access to Pre-Vetted Talent Pool',
    'Reduced Time-to-Hire',
    'Flexible Engagement Models',
    'Cost-Effective Solutions',
    'Quality Assurance',
    'Ongoing Support & Management',
    'Scalable Resources',
    'Industry Expertise'
  ];

  const process = [
    {
      step: 'Requirement Analysis',
      description: 'Understand your needs, culture, and specific skill requirements'
    },
    {
      step: 'Talent Sourcing',
      description: 'Leverage our network to identify qualified candidates'
    },
    {
      step: 'Screening & Evaluation',
      description: 'Comprehensive assessment of technical and soft skills'
    },
    {
      step: 'Presentation',
      description: 'Present top candidates with detailed profiles and recommendations'
    },
    {
      step: 'Onboarding',
      description: 'Smooth integration of selected candidates into your team'
    },
    {
      step: 'Ongoing Support',
      description: 'Continuous support throughout the engagement period'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop"
            alt="Staffing Solutions"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Solutions</p>
            <h1 className="text-5xl mb-6">Staffing Solutions</h1>
            <p className="text-xl text-gray-300">
              Connect with top talent to power your projects and grow your team. Our staffing solutions provide the right people at the right time.
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Staffing services"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6">Your Trusted Talent Partner</h2>
              <p className="text-gray-600 mb-4">
                Finding the right talent can be challenging. Our staffing solutions connect you with pre-vetted, highly skilled professionals who can hit the ground running and deliver immediate value.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you need temporary resources for a specific project, contract staff for seasonal needs, or permanent employees to grow your team, we provide flexible staffing solutions tailored to your requirements.
              </p>
              <p className="text-gray-600">
                Our extensive network of qualified professionals across technology, finance, operations, and other functions ensures you get access to the best talent in the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Staffing Services</h2>
            <p className="text-gray-600">Flexible solutions for all your talent needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <Icon className="w-12 h-12 text-[#FFCC33] mb-4" />
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Specializations</h2>
            <p className="text-gray-600">Expert talent across multiple domains</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors cursor-pointer">
                <p>{spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Our Staffing Process</h2>
            
            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFCC33] rounded-full flex items-center justify-center text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">{item.step}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Why Choose Our Staffing Solutions?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FFCC33] flex-shrink-0 mt-1" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Flexible Engagement Models</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-4">Contract</h3>
                <p className="text-gray-600 mb-4">
                  Short to medium-term engagements for project-based needs or temporary coverage.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Flexible duration</li>
                  <li>• Quick deployment</li>
                  <li>• No long-term commitment</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-4">Contract-to-Hire</h3>
                <p className="text-gray-600 mb-4">
                  Evaluate candidates before making a permanent hiring decision.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Try before you buy</li>
                  <li>• Reduced hiring risk</li>
                  <li>• Smooth transition</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-4">Permanent</h3>
                <p className="text-gray-600 mb-4">
                  Full-time permanent placements for long-term team growth.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Comprehensive search</li>
                  <li>• Quality guarantee</li>
                  <li>• Cultural fit focus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-[#FFCC33]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Our Staffing Advantage</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl mb-2">48hrs</div>
                <p>Average time to present candidates</p>
              </div>
              <div>
                <div className="text-4xl mb-2">95%</div>
                <p>Client satisfaction rate</p>
              </div>
              <div>
                <div className="text-4xl mb-2">10K+</div>
                <p>Professionals in our network</p>
              </div>
              <div>
                <div className="text-4xl mb-2">500+</div>
                <p>Successful placements annually</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Industries We Serve</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Technology', 'Financial Services', 'Healthcare', 'Manufacturing', 'Retail', 'Consulting', 'E-Commerce', 'Telecommunications', 'Government'].map((industry, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-4">Need Top Talent for Your Team?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your staffing requirements and find the perfect candidates
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#FFCC33] text-black px-8 py-4 hover:bg-[#FFD966] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
