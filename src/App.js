import logo from './logo.svg';
import './App.css';
import IntroSection from "./component/intro/Intro";
import ContactSection from "./component/contact-section/ContactSection";
import DisclaimerSection from "./component/disclaimer/Disclaimer";
import FooterSection from "./component/footer/Footer";
import Map from "./component/map/Map";

function App() {
  return (
    <div className="App">
    <IntroSection />
    <ContactSection />
    <Map />
    <DisclaimerSection />
    <FooterSection />
  </div>
  );
}

export default App;