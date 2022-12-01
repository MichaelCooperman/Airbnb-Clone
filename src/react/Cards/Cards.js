import { useEffect, useState } from "react";
import classes from "./cards.module.css";
import Card from "./Card";

const Cards = ({ selectedOption }) => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch(selectedOption);
      const responseData = await response.json();

      const loadedHouses = [];

      for (const key in responseData) {
        loadedHouses.push({
          key: key,
          id: key,
          location: responseData[key].Location,
          distance: responseData[key].Distance,
          date: responseData[key].Date,
          price: responseData[key].Price,
          rating: responseData[key].Rating,
          image: responseData[key].Image,
          link: responseData[key].Link,
        });
      }

      setHouses(loadedHouses);
    };

    fetchHouses();
  }, [selectedOption]);

  const houseCard = houses.map((house) => (
    <Card
      house={house}
      id={house.id}
      key={house.key}
      location={house.location}
      distance={house.distance}
      date={house.date}
      price={house.price}
      rating={house.rating}
      image={house.image}
      link={house.link}
    />
  ));

  return <div className={classes["card-container"]}>{houseCard}</div>;
};

export default Cards;
