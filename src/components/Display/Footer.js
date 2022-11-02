import "./Footer.css";
import favicon from "./../../assets/favicon.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="main-class">
      <img src={favicon} className="favicon" />
      <p className="sub-class">Made with ♡.</p>
      <p className="sub-class">© {year} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
