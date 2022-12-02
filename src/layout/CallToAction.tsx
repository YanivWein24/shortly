import Button from "../components/Button";

const CallToAction = () => (
  <div className="cta flex">
    <h1>Boost your links today</h1>
    <Button
      borderRadius="2rem"
      text="Get Started"
      onClick={() => window.scrollTo({ top: 350, behavior: "smooth" })}
    />
  </div>
);

export default CallToAction;
