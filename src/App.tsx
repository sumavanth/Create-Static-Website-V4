import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { Company } from './components/pages/Company';
import { Leadership } from './components/pages/Leadership';
import { Services } from './components/pages/Services';
import { Solutions } from './components/pages/Solutions';
import { Partners } from './components/pages/Partners';
import { ContactUs } from './components/pages/ContactUs';
import { PeopleSoft } from './components/pages/services/PeopleSoft';
import { OneStream } from './components/pages/services/OneStream';
import { Workday } from './components/pages/services/Workday';
import { NetSuite } from './components/pages/services/NetSuite';
import { SAP } from './components/pages/services/SAP';
import { Oracle } from './components/pages/services/Oracle';
import { EnterpriseSolutions } from './components/pages/solutions/EnterpriseSolutions';
import { RPA } from './components/pages/solutions/RPA';
import { ManagementConsulting } from './components/pages/solutions/ManagementConsulting';
import { StaffingSolutions } from './components/pages/solutions/StaffingSolutions';
import { DigitalTransformation } from './components/pages/solutions/DigitalTransformation';
import { CyberSecurity } from './components/pages/solutions/CyberSecurity';
import { OutsourcingServices } from './components/pages/solutions/OutsourcingServices';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/peoplesoft" element={<PeopleSoft />} />
            <Route path="/services/onestream" element={<OneStream />} />
            <Route path="/services/workday" element={<Workday />} />
            <Route path="/services/netsuite" element={<NetSuite />} />
            <Route path="/services/sap" element={<SAP />} />
            <Route path="/services/oracle" element={<Oracle />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/enterprise" element={<EnterpriseSolutions />} />
            <Route path="/solutions/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/solutions/rpa" element={<RPA />} />
            <Route path="/solutions/cybersecurity" element={<CyberSecurity />} />
            <Route path="/solutions/consulting" element={<ManagementConsulting />} />
            <Route path="/solutions/outsourcing" element={<OutsourcingServices />} />
            <Route path="/solutions/staffing" element={<StaffingSolutions />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}