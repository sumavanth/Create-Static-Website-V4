import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { Leadership } from './pages/Leadership';
import { Services } from './pages/Services';
import { Solutions } from './pages/Solutions';
import { Partners } from './pages/Partners';
import { ContactUs } from './pages/ContactUs';
import { PeopleSoft } from './pages/services/PeopleSoft';
import { OneStream } from './pages/services/OneStream';
import { Workday } from './pages/services/Workday';
import { NetSuite } from './pages/services/NetSuite';
import { SAP } from './pages/services/SAP';
import { Oracle } from './pages/services/Oracle';
import { EnterpriseSolutions } from './pages/solutions/EnterpriseSolutions';
import { RPA } from './pages/solutions/RPA';
import { ManagementConsulting } from './pages/solutions/ManagementConsulting';
import { StaffingSolutions } from './pages/solutions/StaffingSolutions';
import { DigitalTransformation } from './pages/solutions/DigitalTransformation';
import { CyberSecurity } from './pages/solutions/CyberSecurity';
import { OutsourcingServices } from './pages/solutions/OutsourcingServices';

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