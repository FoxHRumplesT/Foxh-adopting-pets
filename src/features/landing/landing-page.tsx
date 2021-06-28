import './landing-page.sass'
import Header from "./components/header/header";
import Hero from './components/hero/hero';
import ProfessionalServices from './components/professional-services/professional-services';
import AboutUs from './components/about-us/about-us';
import Shop from './components/shop/shop';
import OurServices from './components/our-services/our-services';
import Testimonials from './components/testimonials/testimonials';
import Footer from './components/footer/footer';

const LandingPage = () => {
  return (
    <div className="wrapper-landing">
      <Header />
      <Hero />
      <ProfessionalServices />
      <AboutUs />
      <Shop />
      <OurServices />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;