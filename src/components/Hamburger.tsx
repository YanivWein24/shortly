interface HamburgerProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setFadeOut: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger = ({ isActive, setIsActive, setFadeOut }: HamburgerProps) => {
  const fadeOutNavbar = () => {
    setFadeOut(true);
    setTimeout(() => (setFadeOut(false), setIsActive(false)), 500); // eslint-disable-line
  };

  return (
    <button
      className={`hamburger hamburger--collapse ${isActive && "is-active"}`}
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
