import classes from "./Footer.module.css";
import favicon from "../../assets/favicon.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className={classes.footer}>
      <img src={favicon} className={classes.favicon} />
      <p className={classes.subclass}>Made with ♡.</p>
      <p className={classes.subclass}>© {year} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
