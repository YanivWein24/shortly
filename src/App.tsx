import "./App.scss";
import Hero from "./components/Hero";
import LinksContainer from "./components/LinksContainer";
import Header from "./layout/Header";

const App = () => (
  <div className="App fade-in">
    <Header />
    <Hero />
    <LinksContainer />
  </div>
);

export default App;
