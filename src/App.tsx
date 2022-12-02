import Hero from "./layout/Hero";
import LinksSection from "./layout/LinksSection";
import Header from "./layout/Header";
import CardsSection from "./layout/CardsSection";
import CallToAction from "./layout/CallToAction";
import Footer from "./layout/Footer";

const App = () => (
  <div className="App fade-in">
    <Header />
    <Hero />
    <LinksSection />
    <CardsSection />
    <CallToAction />
    <Footer />
  </div>
);

export default App;
