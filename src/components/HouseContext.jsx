import React, { useState, useEffect, createContext } from "react";

//data
import { housesData } from "../data/data";

//create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("همه شهرها");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("همه موارد");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("همه");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ["همه کشورها", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);
  useEffect(() => {
    const allproperties = houses.map((house) => house.type);
    const uniqueProperties = ["همه دسته ها", ...new Set(allproperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    //set loading..
    setLoading(true);

    const isDefault = (str) => {
      return str.split(" ").includes("همه");
    };

    //get min and max value of price and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all values selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      //if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      //if type is not default
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }
      //if type is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      // country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      // country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      // property and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    setTimeout(() => {
      setLoading(false);
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
