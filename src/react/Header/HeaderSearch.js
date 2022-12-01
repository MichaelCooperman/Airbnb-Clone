import classes from "./header-search.module.css";
import searchIcon from "../../images/search-icon.png";

const HeaderSearch = (props) => {
  return (
    <div className={classes["middle-wrapper"]}>
      <div className={classes.middle}>
        <button>Anywhere</button>
        <span></span>
        <button>Any week</button>
        <span></span>
        <button className={classes.guests}>Add guests</button>
        <div className={classes.search}>
          <img src={searchIcon} alt="search-img" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
