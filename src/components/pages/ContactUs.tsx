import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: 'Texas',
      address: '4535 Westminster Ave Aubrey',
      state: 'TX 76227-1889',
      phone: '+1 (437) 984-6781',
      email: 'contact@ijnag.in'
    },
    {
      city: 'Oshawa',
      address: '285 Taunton Rd E Oshawa',
      state: 'L1G 3V2',
      phone: '+1 (437) 984-6781',
      email: 'contact@ijnag.in'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#FFCC33] uppercase tracking-wide mb-4">Get In Touch</p>
            <h1 className="text-5xl mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Have a question or ready to start your project? We'd love to hear from you. Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFCC33] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (437) 984-6781</p>
                    <p className="text-gray-600 text-sm">Mon-Fri 9am-6pm IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFCC33] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <p className="text-gray-600">contact@ijnag.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFCC33] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-1">Head Office</h3>
                    <p className="text-gray-600">My CoOffice, NSL Centrum Mall, 2nd Floor, Road no 1, KPHB Phase 1 & 2,</p>
                    <p className="text-gray-600">Opp. BSNL Office Road, KPHB Colony, Hyderabad, Telangana 500072</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFCC33] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us more about your project or inquiry..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="bg-[#FFCC33] hover:bg-[#FFD966] text-black w-full md:w-auto"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Offices</h2>
            <p className="text-gray-600">Visit us at any of our global locations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-4">{office.city}</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#FFCC33] flex-shrink-0 mt-0.5" />
                    <span>{office.address}<br />{office.state}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#FFCC33]" />
                    <span>{office.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#FFCC33]" />
                    <span>{office.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Our Location
    </h2>
    <p className="text-gray-600 mb-4">
      My CoOffice, NSL Centrum Mall, 2nd Floor, Road No 1, KPHB Phase 1 & 2,
      Opp. BSNL Office Road, KPHB Colony, Hyderabad, Telangana 500072
    </p>
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps?q=My%20CoOffice%20NSL%20Centrum%20Mall%20KPHB&z=17&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="bg-[#FFCC33] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Schedule a free consultation with our experts today</p>
          <Button className="bg-black text-white hover:bg-gray-800">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
