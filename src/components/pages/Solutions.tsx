import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CheckCircle, ArrowRight } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      title: 'Project Management as a Service',
      description: 'Complete end-to-end project management solutions for successful delivery',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      features: [
        'Proposal Response & Planning',
        'Design & Construction',
        'Testing & Quality Assurance',
        'Cutover & Deployment',
        'Sustainment & Optimization',
        'Value Realization',
        'Agile, Hybrid, or Waterfall Methodologies'
      ],
      benefits: [
        'Reduced project risks',
        'On-time delivery',
        'Cost optimization',
        'Quality assurance'
      ]
    },
    {
      title: 'Integrations As a Service',
      description: 'Seamless system integration for connected business operations',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      features: [
        'Integration Strategy Development',
        'Current & Future State Architecture',
        'Internal & External Integrations',
        'Real-time & Near Real-time Solutions',
        'File-based & Point-to-point Integration',
        'Middleware Design & Development',
        'Unit & Integration Testing',
        'Vendor Coordination'
      ],
      benefits: [
        'Improved data flow',
        'Reduced manual work',
        'Better system connectivity',
        'Enhanced efficiency'
      ]
    },
    {
      title: 'Reports As a Service',
      description: 'Comprehensive reporting solutions for informed decision-making',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      features: [
        'Reporting Strategy & Discovery',
        'Statutory Reporting',
        'Transactional Reports',
        'Management Reports',
        'External Reports',
        'Report Design & Development',
        'User Acceptance Testing',
        'Deployment & Sustainment'
      ],
      benefits: [
        'Better insights',
        'Faster decisions',
        'Compliance assurance',
        'Data visualization'
      ]
    },
    {
      title: 'HR Solutions',
      description: 'Transform your human resource management processes',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      features: [
        'HRIS Implementation',
        'Talent Acquisition & Management',
        'Performance Management Systems',
        'Employee Self-Service Portals',
        'Payroll Integration',
        'Training & Development Tracking',
        'Compliance Management'
      ],
      benefits: [
        'Streamlined HR processes',
        'Better talent management',
        'Improved compliance',
        'Enhanced employee experience'
      ]
    },
    {
      title: 'Finance Solutions',
      description: 'Financial management and planning tools for business growth',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      features: [
        'Financial Planning & Analysis',
        'Budgeting & Forecasting',
        'General Ledger Management',
        'Accounts Payable/Receivable',
        'Financial Reporting',
        'Cash Flow Management',
        'Compliance & Audit Support'
      ],
      benefits: [
        'Financial visibility',
        'Better cash flow',
        'Compliance adherence',
        'Strategic planning'
      ]
    },
    {
      title: 'CRM Solutions',
      description: 'Customer relationship management to drive sales and loyalty',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      features: [
        'CRM Implementation & Customization',
        'Sales Force Automation',
        'Marketing Automation',
        'Customer Service Management',
        'Analytics & Reporting',
        'Integration with Existing Systems',
        'Mobile CRM Solutions'
      ],
      benefits: [
        'Better customer insights',
        'Increased sales',
        'Improved retention',
        'Enhanced service'
      ]
    },
    {
      title: 'Customer Development',
      description: 'Build and nurture lasting customer relationships',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      features: [
        'Customer Journey Mapping',
        'Engagement Strategy Development',
        'Loyalty Program Design',
        'Customer Feedback Systems',
        'Retention Analytics',
        'Personalization Strategies',
        'Multi-channel Engagement'
      ],
      benefits: [
        'Higher retention rates',
        'Increased lifetime value',
        'Better satisfaction',
        'Brand loyalty'
      ]
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      features: [
        'Cloud Strategy & Planning',
        'Migration Services',
        'Cloud Architecture Design',
        'Multi-cloud Management',
        'Security & Compliance',
        'Cost Optimization',
        'DevOps Implementation'
      ],
      benefits: [
        'Scalability',
        'Cost efficiency',
        'Enhanced security',
        'Business agility'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Our Solutions</p>
            <h1 className="text-5xl mb-6">Comprehensive Business Solutions</h1>
            <p className="text-xl text-gray-300">
              Choose your resource model by roles, workstreams, object types, modules, and more. We provide flexible, scalable, and economical pay-as-you-go solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      {solutions.map((solution, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <ImageWithFallback
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h2 className="text-4xl mb-4">{solution.title}</h2>
                <p className="text-gray-600 mb-6">{solution.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#FFCC33] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl mb-3">Benefits:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#FFCC33]" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Our Solutions */}
      <section className="py-16 bg-[#FFCC33]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Why Choose Our Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl mb-2">Flexible</div>
                <p>Adapt to your changing business needs</p>
              </div>
              <div>
                <div className="text-3xl mb-2">Scalable</div>
                <p>Grow with your business</p>
              </div>
              <div>
                <div className="text-3xl mb-2">Economical</div>
                <p>Pay only for what you use</p>
              </div>
              <div>
                <div className="text-3xl mb-2">Expert</div>
                <p>Backed by industry expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss which solution is right for your organization
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[#FFCC33] text-black px-8 py-4 hover:bg-[#FFD966] transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
