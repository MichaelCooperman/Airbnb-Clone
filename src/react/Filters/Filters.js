import { Fragment } from "react";
import FilterButton from "./FilterButton";
import FilterOptions from "./FilterOptions";
import classes from "./filters.module.css";

const Filters = ({ setSelectedOption }) => {
  return (
    <Fragment>
      <div className={classes["filter-container"]}>
        <FilterOptions setSelectedOption={setSelectedOption} />
        <FilterButton />
      </div>
    </Fragment>
  );
};

export default Filters;
