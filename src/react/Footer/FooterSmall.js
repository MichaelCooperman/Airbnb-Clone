import classes from "./footer-small.module.css";
import searchIcon from "../../images/search-icon-2.png";
import userIcon from "../../images/user-icon-2.png";
import heartIcon from "../../images/heart-icon.png";

const FooterSmall = () => {
  return (
    <div className={classes["footer-small"]}>
      <button>
        <img src={searchIcon} alt="explore-icon" />
        <p>Explore</p>
      </button>
      <button>
        <img className={classes.heart} src={heartIcon} alt="user-icon" />
        <p>Wishlists</p>
      </button>
      <button>
        <img src={userIcon} alt="heart-icon" />
        <p>Log in</p>
      </button>
    </div>
  );
};

export default FooterSmall;
