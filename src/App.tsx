import "./App.scss";
import Hero from "./components/Hero";
import LinksSection from "./components/LinksSection";
import Header from "./layout/Header";

const App = () => (
  <div className="App fade-in">
    <Header />
    <Hero />
    <LinksSection />
  </div>
);

export default App;
