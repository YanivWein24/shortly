import HeroSVG from "../assets/svgs/illustration-working.svg";
import Button from "./Button";

const Hero = () => (
  <div className="hero flex">
    <img src={HeroSVG} alt="working" />
    <div className="getStarted">
      <h1>More than just shorter links</h1>

      <p>
        {/* eslint-disable-next-line */}
        Build your brand's recognition and get detailed insights on how your{" "}
        links are performing.
      </p>
      <Button text="Get Started" borderRadius="2rem" />
    </div>
  </div>
);

export default Hero;
