import classes from "./header-logo.module.css";
import airbnbLogo from "../../images/airbnb-logo.png";
import airbnblogosm from "../../images/airbnb-logo-sm.png";
import requests from "../Cards/requests";

const HeaderLogo = ({ setSelectedOption }) => {
  return (
    <div className={classes.left}>
      <img
        onClick={() => setSelectedOption(requests.fetchTrending)}
        className={classes.airbnb}
        src={airbnbLogo}
        alt="airbnb-logo"
      />
      <img
        onClick={() => setSelectedOption(requests.fetchTrending)}
        className={classes.airbnbsm}
        src={airbnblogosm}
        alt={"airbnb-logo-sm"}
      />
    </div>
  );
};

export default HeaderLogo;
