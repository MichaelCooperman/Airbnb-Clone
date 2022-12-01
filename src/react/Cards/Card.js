// import React, { useState, useEffect } from "react";
// import classes from "../../sass/_cards.module.scss";
import classes from "./card.module.css";
import IMGS from "../../images";

const Card = ({ house }) => {
  return (
    <a href={house.link} className={classes.cards}>
      <img src={house.image} alt="house-test" />
      <div className={classes.description}>
        <div className={classes.position}>
          <h4>{house.location}</h4>
          <span className={classes.rating}>
            <span>
              <img
                className={classes.ratingstar}
                src={IMGS.ratingstar}
                alt="star-icon"
              />
            </span>
            <span>{house.rating}</span>
          </span>
        </div>

        <div>
          <p>{house.distance} miles away</p>
        </div>
        <div>
          <p>{house.date}</p>
        </div>
        <div>
          <span className={classes.pricing}>
            <h3>${house.price}</h3> <span className={classes.night}>night</span>
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;
