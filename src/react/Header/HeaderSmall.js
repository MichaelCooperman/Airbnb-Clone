import React from "react";
import classes from "./header-small.module.css";
import searchIcon from "../../images/search-icon.png";
import filterIcon from "../../images/filter-icon.png";

const HeaderSmall = () => {
  return (
    <button className={classes["header-wrapper"]}>
      <div className={classes["search-container"]}>
        <div className={classes.search}>
          <img
            className={classes["search-icon"]}
            src={searchIcon}
            alt="search-img"
          />
        </div>
      </div>
      <div className={classes["search-info"]}>
        <div className={classes["where-to"]}>
          <h4>Where to?</h4>
        </div>
        <div className={classes["additional-text"]}>
          <p>Anywhere</p>
          <span></span>
          <p>Any week</p>
          <span></span>
          <p>Add guests</p>
        </div>
      </div>
      <div className={classes["filter-container"]}>
        <div className={classes["filter-icon"]}>
          <img src={filterIcon} alt="filter-icon" />
        </div>
      </div>
    </button>
  );
};

export default HeaderSmall;
