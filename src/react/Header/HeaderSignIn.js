import classes from "./header-signin.module.css";
import userIcon from "../../images/user-icon.png";

const HeaderSignIn = (props) => {
  return (
    <div className={classes.dropdown}>
      <div className={classes.hamburger}>
        <span className={classes["hamburger-top"]}></span>
        <span className={classes["hamburger-middle"]}></span>
        <span className={classes["hamburger-bottom"]}></span>
      </div>
      <img className={classes["user-icon"]} src={userIcon} alt="user-icon" />
    </div>
  );
};

export default HeaderSignIn;
