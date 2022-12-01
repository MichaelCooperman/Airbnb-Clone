import classes from "./header-languages.module.css";
import globeIcon from "../../images/globe-icon.png";

const HeaderLanguages = (props) => {
  return (
    <div>
      <img className={classes.globe} src={globeIcon} alt="globe-icon" />
    </div>
  );
};

export default HeaderLanguages;
