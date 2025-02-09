import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollTop.jsx';
import Upperheader from './components/upperheader';
import Header from './components/header';
import Hero from './components/hero';
import Slider from './components/slider';
import Affiliations from './components/affilitaion';
import Intro from './components/intro';
import Hajj from './components/hajj';
import Gallery from './components/gallery.jsx';
import Privatetour from './components/privatetour.jsx';
import Ourteam from './components/ourteam.jsx';
import Reviews from './components/reviews.jsx';
import Footer from './components/footer.jsx';
import PdfViewer from './components/pdfviewer.jsx';
import Video from './components/testimonials.jsx';
import HajjSection from './components/HajjSection.jsx';
import ContactSection from './components/contactsection.jsx';
import Aboutsection from './components/aboutsection.jsx';
import Quote from './components/quote.jsx';
import ServicesSection from './components/services/servicessection.jsx';
import FAQS from './components/quicklinks/footerfaqs.jsx'
import TravelersInstructions from './components/quicklinks/instructions.jsx';
import TermsandConditions from "./components/quicklinks/terms&conditions.jsx"
import RefundPolicy from "./components/quicklinks/refundpolicy.jsx"
import Tours from "./components/tours/tours.jsx"
import Honeymoontour from "./components/tours/honeymoontours.jsx"
import InternationalTours from "./components/tours/internationaltours.jsx"

const App = () => {
  return (
    <Router>
     
      <div className='bg-gradient-to-r from-teal-50 to-blue-50'>
        {/* Upper Header */}
        <Upperheader />

        {/* Sticky Header */}
        <Header />
        <ScrollToTop />
        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div className='overflow-hidden'>
                <Hero />
                <Slider />
                <Affiliations />
                <Intro />
                
                <Hajj />
                <Gallery />
                <Privatetour />
                <Video />
                <Quote />
              </div>
            }
          />
          <Route path="/about" element={<Aboutsection />} />
          <Route path="/private-tour" element={<Privatetour />} />
          <Route path="/honeymoon-tour" element={<Honeymoontour />} />
          <Route path="/view-itinerary" element={<PdfViewer />} />
          <Route path="/hajj-umrah" element={<HajjSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/FAQS" element={<FAQS />} />
          <Route path="/travelers-instructions" element={<TravelersInstructions />} />
          <Route path="/terms&conditions" element={<TermsandConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/tours" element={<Tours />} />
          
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
