import { Fragment } from "react";
// import classes from "../../sass/_header.module.scss";
import classes from "./header.module.css";
import HeaderLogo from "./HeaderLogo";
import HeaderRight from "./HeaderRight";
import HeaderSearch from "./HeaderSearch";
import HeaderSmall from "./HeaderSmall";

const Header = ({ setSelectedOption }) => {
  return (
    <Fragment>
      <div className={classes["header"]}>
        <div className={classes["header-container"]}>
          <HeaderLogo setSelectedOption={setSelectedOption} />
          <HeaderSearch />
          <HeaderRight />
        </div>
      </div>
      <div className={classes["header-small"]}>
        <HeaderSmall />
      </div>
    </Fragment>
  );
};

export default Header;
