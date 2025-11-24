import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from 'figma:asset/fc4a7f2c4f5c238cb5928f70172c7c72565bd3ee.png';

export function Header() {
  const location = useLocation();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const aboutPages = [
    { name: 'Company', path: '/company' },
    { name: 'Leadership', path: '/leadership' },
  ];

  const servicePages = [
    { name: 'PeopleSoft', path: '/services/peoplesoft' },
    { name: 'NetSuite', path: '/services/netsuite' },
    { name: 'OneStream', path: '/services/onestream' },
    { name: 'SAP', path: '/services/sap' },
    { name: 'Oracle', path: '/services/oracle' },
  ];

  const solutionPages = [
    { name: 'Enterprise Solutions', path: '/solutions/enterprise' },
    { name: 'Digital Transformation', path: '/solutions/digital-transformation' },
    { name: 'Robotic Process Automation', path: '/solutions/rpa' },
    { name: 'Cyber Security', path: '/solutions/cybersecurity' },
    { name: 'Management Consulting', path: '/solutions/consulting' },
    { name: 'Outsourcing Services', path: '/solutions/outsourcing' },
    { name: 'Staffing Solutions', path: '/solutions/staffing' },
  ];

  const isActivePath = (path: string) => location.pathname === path;
  const isActiveSection = (paths: string[]) => paths.some(path => location.pathname.startsWith(path));

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Ijnag Consultancy Services" className="h-12" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`transition-colors ${
              isActivePath('/')
                ? 'text-[#FFCC33]'
                : 'text-gray-700 hover:text-[#FFCC33]'
            }`}
          >
            Home
          </Link>

          <div 
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors py-2 ${
                isActiveSection(['/company', '/leadership'])
                  ? 'text-[#FFCC33]'
                  : 'text-gray-700 hover:text-[#FFCC33]'
              }`}
            >
              About
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 transition-all duration-200 ${
              aboutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              {aboutPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className={`block px-4 py-2 transition-colors ${
                    isActivePath(page.path)
                      ? 'bg-[#FFCC33] text-black'
                      : 'text-gray-700 hover:bg-[#FFCC33] hover:text-black'
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>

          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors py-2 ${
                location.pathname.startsWith('/services')
                  ? 'text-[#FFCC33]'
                  : 'text-gray-700 hover:text-[#FFCC33]'
              }`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-56 transition-all duration-200 ${
              servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              <Link
                to="/services"
                className={`block px-4 py-2 transition-colors ${
                  isActivePath('/services')
                    ? 'bg-[#FFCC33] text-black'
                    : 'text-gray-700 hover:bg-[#FFCC33] hover:text-black'
                }`}
              >
                All Services
              </Link>
              {servicePages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className={`block px-4 py-2 transition-colors ${
                    isActivePath(page.path)
                      ? 'bg-[#FFCC33] text-black'
                      : 'text-gray-700 hover:bg-[#FFCC33] hover:text-black'
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>

          <div 
            className="relative group"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors py-2 ${
                location.pathname.startsWith('/solutions')
                  ? 'text-[#FFCC33]'
                  : 'text-gray-700 hover:text-[#FFCC33]'
              }`}
            >
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64 transition-all duration-200 ${
              solutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              <Link
                to="/solutions"
                className={`block px-4 py-2 transition-colors ${
                  isActivePath('/solutions')
                    ? 'bg-[#FFCC33] text-black'
                    : 'text-gray-700 hover:bg-[#FFCC33] hover:text-black'
                }`}
              >
                All Solutions
              </Link>
              {solutionPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className={`block px-4 py-2 transition-colors ${
                    isActivePath(page.path)
                      ? 'bg-[#FFCC33] text-black'
                      : 'text-gray-700 hover:bg-[#FFCC33] hover:text-black'
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/partners"
            className={`transition-colors ${
              isActivePath('/partners')
                ? 'text-[#FFCC33]'
                : 'text-gray-700 hover:text-[#FFCC33]'
            }`}
          >
            Partners
          </Link>

          <Link
            to="/contact"
            className={`transition-colors ${
              isActivePath('/contact')
                ? 'text-[#FFCC33]'
                : 'text-gray-700 hover:text-[#FFCC33]'
            }`}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}