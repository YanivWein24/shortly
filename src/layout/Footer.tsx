import Logo from "../assets/svgs/logo-white.svg";
import Facebook from "../assets/svgs/icon-facebook.svg";
import Twitter from "../assets/svgs/icon-twitter.svg";
import Instagram from "../assets/svgs/icon-instagram.svg";
import Pinterest from "../assets/svgs/icon-pinterest.svg";

const Footer = () => (
  <div className="footer">
    <div className="logoContainer">
      <img src={Logo} alt="Logo" />
    </div>
    <div className="row">
      <p className="bold">Features</p>
      <p>Link Shortening</p>
      <p>Branded Links</p>
      <p>Analytics</p>
    </div>
    <div className="row">
      <p className="bold">Resources</p>
      <p>Blog</p>
      <p>Developers</p>
      <p>Support</p>
    </div>
    <div className="row">
      <p className="bold">Company</p>
      <p>About</p>
      <p>Our Team</p>
      <p>Careers</p>
      <p>Contact</p>
    </div>
    <div className="socials">
      <img src={Facebook} alt="facebook" />
      <img src={Twitter} alt="twitter" />
      <img src={Pinterest} alt="pinterest" />
      <img src={Instagram} alt="instagram" />
    </div>
  </div>
);

export default Footer;
