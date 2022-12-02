import { Fragment } from "react";
// import IMGS from "../../images";
import Amazingviews from "../../images/filters/Amazingviews.jpg";
import Bedandbreakfast from "../../images/filters/Bedandbreakfasts.jpg";
import Cabins from "../../images/filters/Cabins.jpg";
import CreativeSpaces from "../../images/filters/Creativespaces.jpg";
import Farms from "../../images/filters/Farms.jpg";
import Islands from "../../images/filters/Islands.jpg";
import Mansions from "../../images/filters/Mansions.jpg";
import Skiing from "../../images/filters/Skiing.jpg";
import TinyHomes from "../../images/filters/Tinyhomes.jpg";
import OMG from "../../images/filters/OMG.jpg";
import classes from "./filter-options.module.css";
import requests from "../Cards/requests.js";

const FilterOptions = ({ setSelectedOption }) => {
  return (
    <Fragment>
      <div className={classes["filter-box"]}>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchAmazingViews)}
        >
          <span>
            <img
              className={classes.imgs}
              src={Amazingviews}
              alt="Amazingviews-img"
            />
            <div>
              <span>Amazing Views</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchBedandbreakfast)}
        >
          <span>
            <img
              className={classes.imgs}
              src={Bedandbreakfast}
              alt="Bed&Breakfast-img"
            />
            <div>
              <span>Bed & Breakfast</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchCabins)}
        >
          <span>
            <img className={classes.imgs} src={Cabins} alt="Cabins-img" />
            <div>
              <span>Cabins</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchCreativespaces)}
        >
          <span>
            <img
              className={classes.imgs}
              src={CreativeSpaces}
              alt="CreativeSpaces-img"
            />
            <div>
              <span>Creative Spaces</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchFarms)}
        >
          <span>
            <img className={classes.imgs} src={Farms} alt="Farms-img" />
            <div>
              <span>Farms</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchIslands)}
        >
          <span>
            <img className={classes.imgs} src={Islands} alt="Islands-img" />
            <div>
              <span>Islands</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchMansions)}
        >
          <span>
            <img className={classes.imgs} src={Mansions} alt="Mansions-img" />
            <div>
              <span>Mansions</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchSkiing)}
        >
          <span>
            <img className={classes.imgs} src={Skiing} alt="Skiing-img" />
            <div>
              <span>Skiing</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchTinyhomes)}
        >
          <span>
            <img className={classes.imgs} src={TinyHomes} alt="TinyHomes-img" />
            <div>
              <span>Tiny Homes</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchOmg)}
        >
          <span>
            <img className={classes.imgs} src={OMG} alt="OMG-img" />
            <div>
              <span>OMG!</span>
            </div>
          </span>
        </button>
      </div>
    </Fragment>
  );
};

export default FilterOptions;
