import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Affiliation from "./components/Affiliation";
import Products from "./components/Products";
import TargetMarket from "./components/TargetMarket";
import WhyUs from "./components/WhyUs";
import Achivements from "./components/Achivements";
import Contact from "./components/Contact";
import FooterPage from "./components/FooterPage";
import Product from "./components/Product"; // Assuming this is the detailed product view component
import AboutUs from "./components/AboutUs"; // Assuming this is the detailed product view component
import Careers from "./components/Careers"; // Assuming this is the detailed product view component
import { mouse } from "./assets/img";
import ScrollToTop from "./components/ScrollToTop";
// import SwiperBanner from "./components/Banner";
import BannerWrapper from "./components/BannerWrapper";
import Letsgetstarted from "./components/LetsGetStarted";
import EventDetails from "./components/EventDetails";
import OurExperties from "./components/OurExperties";
import WhatWeDoBest from "./components/WhatWeDoBest";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="h-[80px] md:h-14 bg-white" />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BannerWrapper />
                <Affiliation/>
                <Products />
                <TargetMarket />
                <WhyUs />
                <Letsgetstarted />
                
                <Achivements />
                <Contact />
                <div className="mouse">
                  <a href="/#">
                    <img src={mouse} alt="Mouse GIF" />
                  </a>
                </div>
              </>
            }
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ourexperties" element={<OurExperties />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/event-details/:eventId" element={<EventDetails />} />
        </Routes>
        <FooterPage />
      </Router>
    </div>
  );
}

export default App;