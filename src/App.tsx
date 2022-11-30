import "./App.scss";
import Hero from "./layout/Hero";
import LinksSection from "./layout/LinksSection";
import Header from "./layout/Header";

const App = () => (
  <div className="App fade-in">
    <Header />
    <Hero />
    <LinksSection />
  </div>
);

export default App;
