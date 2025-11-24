import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle, Bot, Clock, TrendingUp, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RPA() {
  const capabilities = [
    {
      icon: Bot,
      title: 'Process Automation',
      description: 'Automate repetitive, rule-based tasks to free up your workforce for higher-value activities.'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Robots work around the clock without breaks, ensuring continuous business operations.'
    },
    {
      icon: TrendingUp,
      title: 'Improved Accuracy',
      description: 'Eliminate human errors and ensure consistent, accurate execution of processes.'
    },
    {
      icon: Cpu,
      title: 'Intelligent Automation',
      description: 'Combine RPA with AI and ML for advanced decision-making and cognitive automation.'
    }
  ];

  const useCases = [
    'Invoice Processing & Accounts Payable',
    'Data Entry & Migration',
    'Report Generation & Distribution',
    'Customer Onboarding',
    'HR & Payroll Processing',
    'Compliance & Regulatory Reporting',
    'Email Processing & Response',
    'Order Management & Fulfillment',
    'IT Service Desk Automation',
    'Financial Close & Reconciliation'
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 65% through process automation',
      percentage: '65%'
    },
    {
      title: 'Faster Processing',
      description: 'Accelerate process execution and reduce cycle times significantly',
      percentage: '10x'
    },
    {
      title: 'Error Reduction',
      description: 'Minimize errors and improve data accuracy across operations',
      percentage: '90%'
    },
    {
      title: 'ROI Achievement',
      description: 'Typical return on investment within the first year',
      percentage: '300%'
    }
  ];

  const platforms = [
    'UiPath',
    'Automation Anywhere',
    'Blue Prism',
    'Microsoft Power Automate',
    'WorkFusion',
    'Pega RPA'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&h=900&fit=crop"
            alt="RPA Solutions"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Solutions</p>
            <h1 className="text-5xl mb-6">Robotic Process Automation</h1>
            <p className="text-xl text-gray-300">
              Transform your business operations with intelligent automation. Increase efficiency, reduce costs, and empower your workforce through RPA.
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
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop"
                alt="RPA automation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6">Automate for Excellence</h2>
              <p className="text-gray-600 mb-4">
                Robotic Process Automation (RPA) uses software robots to automate repetitive, rule-based tasks that previously required human intervention. By implementing RPA, organizations can dramatically improve efficiency, accuracy, and employee satisfaction.
              </p>
              <p className="text-gray-600 mb-4">
                Our RPA solutions help you identify automation opportunities, select the right technology platform, and implement robots that deliver measurable business value quickly.
              </p>
              <p className="text-gray-600">
                From simple task automation to complex intelligent process automation combining RPA with AI, we provide end-to-end RPA services tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">RPA Capabilities</h2>
            <p className="text-gray-600">Transform operations through intelligent automation</p>
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

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">RPA Use Cases</h2>
            <p className="text-gray-600">Common processes we automate across industries</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-[#FFCC33] flex-shrink-0 mt-1" />
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits with Stats */}
      <section className="py-16 bg-[#FFCC33]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Measurable RPA Benefits</h2>
            <p className="text-lg">Real impact on your business metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <div className="text-5xl mb-4 text-[#FFCC33]">{benefit.percentage}</div>
                <h3 className="text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Our RPA Implementation Process</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFCC33] rounded-full flex items-center justify-center text-xl">1</div>
                <div>
                  <h3 className="text-2xl mb-2">Process Discovery</h3>
                  <p className="text-gray-600">
                    Identify and prioritize automation opportunities based on ROI, complexity, and business impact.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFCC33] rounded-full flex items-center justify-center text-xl">2</div>
                <div>
                  <h3 className="text-2xl mb-2">Solution Design</h3>
                  <p className="text-gray-600">
                    Design the automation workflow, select the appropriate RPA platform, and define success metrics.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFCC33] rounded-full flex items-center justify-center text-xl">3</div>
                <div>
                  <h3 className="text-2xl mb-2">Bot Development</h3>
                  <p className="text-gray-600">
                    Build, test, and refine software robots following best practices and coding standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFCC33] rounded-full flex items-center justify-center text-xl">4</div>
                <div>
                  <h3 className="text-2xl mb-2">Deployment & Monitoring</h3>
                  <p className="text-gray-600">
                    Deploy robots to production and establish monitoring and governance frameworks.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFCC33] rounded-full flex items-center justify-center text-xl">5</div>
                <div>
                  <h3 className="text-2xl mb-2">Scale & Optimize</h3>
                  <p className="text-gray-600">
                    Expand automation across the enterprise and continuously optimize bot performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">RPA Platforms We Support</h2>
            <p className="text-gray-600">Leading automation technologies</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-[#FFCC33] transition-colors cursor-pointer">
                <p>{platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Why Choose Our RPA Services?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl mb-3">Proven Expertise</h3>
                <p className="text-gray-600">
                  Certified RPA professionals with extensive experience across multiple platforms and industries.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl mb-3">Fast ROI</h3>
                <p className="text-gray-600">
                  Our accelerated implementation approach delivers measurable results within weeks, not months.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl mb-3">Scalable Solutions</h3>
                <p className="text-gray-600">
                  Build a sustainable automation program that scales across your enterprise.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl mb-3">End-to-End Support</h3>
                <p className="text-gray-600">
                  From strategy through implementation and support, we're your RPA partner at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-4">Ready to Automate Your Processes?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how RPA can transform your operations and deliver rapid ROI
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#FFCC33] text-black px-8 py-4 hover:bg-[#FFD966] transition-colors"
          >
            Start Your RPA Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
