import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Target, Eye, Award, Users } from 'lucide-react';

export function Company() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses through innovative IT and business consulting solutions that drive growth, efficiency, and sustainable success.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading consultancy partner recognized globally for delivering transformative business solutions and exceptional value.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality services and exceeding client expectations in every engagement.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients\' success is our success. We build lasting partnerships based on trust, transparency, and mutual growth.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Expert Consultants' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">About Us</p>
            <h1 className="text-5xl mb-6">Building Better Business Solutions</h1>
            <p className="text-xl text-gray-300">
              Ijnag Consultancy Services is a leading provider of IT and business consulting solutions, dedicated to helping organizations achieve their strategic objectives through innovative technology and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to transform businesses through technology, Ijnag Consultancy Services has grown into a trusted partner for organizations seeking to navigate the complex landscape of digital transformation.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced consultants brings together deep industry knowledge, technical expertise, and a passion for solving complex business challenges. We work collaboratively with our clients to understand their unique needs and deliver customized solutions that drive measurable results.
              </p>
              <p className="text-gray-600">
                From project management to system integration, from business consulting to technical implementation, we provide end-to-end services that help organizations optimize their operations, reduce costs, and accelerate growth.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#FFCC33]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Values & Philosophy</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <Icon className="w-12 h-12 text-[#FFCC33] mb-4" />
                  <h3 className="text-2xl mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">What Sets Us Apart</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Industry Expertise</h3>
                <p className="text-gray-600">
                  Our consultants bring decades of combined experience across multiple industries, ensuring that we understand the unique challenges and opportunities in your sector.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Flexible Engagement Models</h3>
                <p className="text-gray-600">
                  We offer flexible, scalable, and economical resource models that adapt to your needs - whether it's project-based, time and materials, or dedicated teams.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Proven Methodologies</h3>
                <p className="text-gray-600">
                  Our structured approach combines industry best practices with innovative thinking, ensuring successful project delivery every time.
                </p>
              </div>

              <div className="border-l-4 border-[#FFCC33] pl-6">
                <h3 className="text-2xl mb-2">Long-term Partnership</h3>
                <p className="text-gray-600">
                  We don't just deliver projects and walk away. We build lasting relationships and provide ongoing support to ensure your continued success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
