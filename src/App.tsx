import "./App.scss";
import Hero from "./layout/Hero";
import LinksSection from "./layout/LinksSection";
import Header from "./layout/Header";
import CardsSection from "./layout/CardsSection";

const App = () => (
  <div className="App fade-in">
    <Header />
    <Hero />
    <LinksSection />
    <CardsSection />
  </div>
);

export default App;
