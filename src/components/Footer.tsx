import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from 'figma:asset/fc4a7f2c4f5c238cb5928f70172c7c72565bd3ee.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <img src={logo} alt="Ijnag Consultancy" className="h-12 mb-4 brightness-0 invert" />
            <h4 className="text-[#FFCC33] mb-3">Your Success, Our Commitment</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              At ICS, we understand that every business has unique challenges and goals. Our expert consulting services are tailored to deliver innovative, scalable, and results-driven solutions. With a commitment to excellence and client-first approach, we ensure your success at every step.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/peoplesoft" className="text-gray-400 hover:text-[#FFCC33] transition-colors">PeopleSoft</Link></li>
              <li><Link to="/services/netsuite" className="text-gray-400 hover:text-[#FFCC33] transition-colors">NetSuite</Link></li>
              <li><Link to="/services/onestream" className="text-gray-400 hover:text-[#FFCC33] transition-colors">OneStream</Link></li>
              <li><Link to="/services/sap" className="text-gray-400 hover:text-[#FFCC33] transition-colors">SAP</Link></li>
              <li><Link to="/services/oracle" className="text-gray-400 hover:text-[#FFCC33] transition-colors">Oracle</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions/enterprise" className="text-gray-400 hover:text-[#FFCC33] transition-colors">Enterprise Solutions</Link></li>
              <li><Link to="/solutions/digital-transformation" className="text-gray-400 hover:text-[#FFCC33] transition-colors">Digital Transformation</Link></li>
              <li><Link to="/solutions/rpa" className="text-gray-400 hover:text-[#FFCC33] transition-colors">RPA</Link></li>
              <li><Link to="/solutions/cybersecurity" className="text-gray-400 hover:text-[#FFCC33] transition-colors">Cyber Security</Link></li>
              <li><Link to="/solutions/consulting" className="text-gray-400 hover:text-[#FFCC33] transition-colors">Management Consulting</Link></li>
              <li><Link to="/solutions/outsourcing" className="text-gray-400 hover:text-[#FFCC33] transition-colors">Outsourcing Services</Link></li>
              <li><Link to="/solutions/staffing" className="text-gray-400 hover:text-[#FFCC33] transition-colors">Staffing Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>contact@ijnag.in</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+1 (437) 984 67817</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>My CoOffice, NSL Centrum Mall, Hyderabad, Telangana 500072</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Ijnag Consultancy Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}