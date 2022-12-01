import React from "react";
import classes from "./header-right.module.css";
import HeaderLanguages from "./HeaderLanguages";
import HeaderSignIn from "./HeaderSignIn";

const HeaderRight = () => {
  return (
    <div className={classes.right}>
      <div>
        <a href="https://www.airbnb.com/host/homes" className={classes.host}>
          Become a Host
        </a>
      </div>
      <HeaderLanguages />
      <HeaderSignIn />
    </div>
  );
};

export default HeaderRight;
