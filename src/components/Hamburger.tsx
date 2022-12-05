import { HamburgerProps } from "../assets/types/HamburgerProps";

const Hamburger = ({ isActive, setIsActive, setFadeOut }: HamburgerProps) => {
  const fadeOutNavbar = () => {
    setFadeOut(true);
    setTimeout(() => (setFadeOut(false), setIsActive(false)), 300); // eslint-disable-line
  };

  return (
    <button
      className={`hamburger hamburger--stand ${isActive && "is-active"}`}
      type="button"
      onClick={() => (isActive === false ? setIsActive(true) : fadeOutNavbar())}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
};

export default Hamburger;
