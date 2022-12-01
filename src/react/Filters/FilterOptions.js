import { Fragment } from "react";
import IMGS from "../../images/index.js";
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
              src={IMGS.amazingviews}
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
              src={IMGS.bedandbreakfast}
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
            <img className={classes.imgs} src={IMGS.cabins} alt="Cabins-img" />
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
              src={IMGS.creativespaces}
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
            <img className={classes.imgs} src={IMGS.farms} alt="Farms-img" />
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
            <img
              className={classes.imgs}
              src={IMGS.islands}
              alt="Islands-img"
            />
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
            <img
              className={classes.imgs}
              src={IMGS.mansions}
              alt="Mansions-img"
            />
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
            <img className={classes.imgs} src={IMGS.skiing} alt="Skiing-img" />
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
            <img
              className={classes.imgs}
              src={IMGS.tinyhomes}
              alt="TinyHomes-img"
            />
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
            <img className={classes.imgs} src={IMGS.omg} alt="OMG-img" />
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
