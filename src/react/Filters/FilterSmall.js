import FilterArrowLeft from "./FilterArrowLeft";
import FilterArrowRight from "./FilterArrowRight";
import FilterOptions from "./FilterOptions";
import classes from "./filters.module.css";

const FilterSmall = ({ setSelectedOption }) => {
  return (
    <div className={classes["filter-small-wrapper"]}>
      <FilterArrowLeft />
      <FilterOptions setSelectedOption={setSelectedOption} />
      <FilterArrowRight />
    </div>
  );
};

export default FilterSmall;
