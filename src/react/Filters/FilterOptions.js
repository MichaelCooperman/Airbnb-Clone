import { Fragment } from "react";
import IMGS from "../../images";
import classes from "./filter-options.module.css";
import requests from "../Cards/requests.js";
// import Amazingviews from "../../images/filters/Amazingviews.jpg";
// import Bedandbreakfast from "../../images/filters/Bedandbreakfasts.jpg";
// import Cabins from "../../images/filters/Cabins.jpg";
// import CreativeSpaces from "../../images/filters/Creativespaces.jpg";
// import Farms from "../../images/filters/Farms.jpg";
// import Islands from "../../images/filters/Islands.jpg";
// import Mansions from "../../images/filters/Mansions.jpg";
// import Skiing from "../../images/filters/Skiing.jpg";
// import TinyHomes from "../../images/filters/Tinyhomes.jpg";
// import OMG from "../../images/filters/OMG.jpg";

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
              // src={Amazingviews}
              src={IMGS.amazingviews}
              alt="Amazingviews-img"
            />
            <div className={classes["des-size"]}>
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
              // src={Bedandbreakfast}
              src={IMGS.bedandbreakfast}
              alt="Bed&Breakfast-img"
            />
            <div className={classes["des-size"]}>
              <span>Bed & Breakfast</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchCabins)}
        >
          <span>
            <img
              className={classes.imgs}
              // src={Cabins}
              src={IMGS.cabins}
              alt="Cabins-img"
            />
            <div className={classes["des-size"]}>
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
              // src={CreativeSpaces}
              src={IMGS.creativespaces}
              alt="CreativeSpaces-img"
            />
            <div className={classes["des-size"]}>
              <span>Creative Spaces</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchFarms)}
        >
          <span>
            <img
              className={classes.imgs}
              // src={Farms}
              src={IMGS.farms}
              alt="Farms-img"
            />
            <div className={classes["des-size"]}>
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
              // src={Islands}
              src={IMGS.islands}
              alt="Islands-img"
            />
            <div className={classes["des-size"]}>
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
              // src={Mansions}
              src={IMGS.mansions}
              alt="Mansions-img"
            />
            <div className={classes["des-size"]}>
              <span>Mansions</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchSkiing)}
        >
          <span>
            <img
              className={classes.imgs}
              // src={Skiing}
              src={IMGS.skiing}
              alt="Skiing-img"
            />
            <div className={classes["des-size"]}>
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
              // src={TinyHomes}
              src={IMGS.tinyhomes}
              alt="TinyHomes-img"
            />
            <div className={classes["des-size"]}>
              <span>Tiny Homes</span>
            </div>
          </span>
        </button>
        <button
          className={classes["btn"]}
          onClick={() => setSelectedOption(requests.fetchOmg)}
        >
          <span>
            <img
              className={classes.imgs}
              // src={OMG}
              src={IMGS.omg}
              alt="OMG-img"
            />
            <div className={classes["des-size"]}>
              <span>OMG!</span>
            </div>
          </span>
        </button>
      </div>
    </Fragment>
  );
};

export default FilterOptions;
