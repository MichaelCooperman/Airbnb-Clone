import classes from "./footer-main.module.css";
import globeIcon from "../../images/globe-icon.png";

const FooterMain = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-wrapper"]}>
        <div className={classes["footer-left"]}>
          <h2>© 2022 Airbnb, Inc.</h2>
          <span></span>
          <a href="https://www.airbnb.com/help/article/2855">Privacy</a>
          <span></span>
          <a href="https://www.airbnb.com/help/article/2908">Terms</a>
          <span></span>
          <a href="https://www.airbnb.com/sitemaps/v2">Sitemap</a>
          <span></span>
          <p>Destinations</p>
        </div>
        <div className={classes["footer-right"]}>
          <img src={globeIcon} alt="globe-icon" />
          <h2>English (US)</h2>
          <h2>$ USD</h2>
          <h2>Support & Resources</h2>
          <span></span>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
