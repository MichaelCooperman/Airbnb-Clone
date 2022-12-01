import classes from "./filter-button.module.css";
import FilterIcon from "../../images/filter-icon.png";

const FilterButton = () => {
  return (
    <div className={classes["filter-button"]}>
      <button>
        <span className={classes["filter-align"]}>
          <img
            className={classes["filter-icon"]}
            src={FilterIcon}
            alt="Filter-Icon"
          />
          <span>Filters</span>
        </span>
      </button>
    </div>
  );
};

export default FilterButton;
