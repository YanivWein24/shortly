import { useState } from "react";
import Button from "../components/Button";
import Logo from "../assets/svgs/logo.svg";
import Hamburger from "../components/Hamburger";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  return (
    <>
      <div className="header flex align-center">
        <div className="headerContainer flex align-center">
          <img src={Logo} alt="Logo" />
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
        <div className="headerContainer flex align-center">
          <p>login</p>
          <Button text="Sign Up" borderRadius="2rem" />
        </div>
        <Hamburger
          isActive={isActive}
          setIsActive={setIsActive}
          setFadeOut={setFadeOut}
        />
      </div>
      {isActive && (
        <div
          className={`navbar flex justify-center align-center ${
            isActive && fadeOut ? "slide-out-top" : "slide-in-top"
          }`}
        >
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
          <hr />
          <p>Login</p>
          <Button text="Sign Up" borderRadius="2rem" />
        </div>
      )}
    </>
  );
};

export default Header;
