import React, { useEffect, useState } from "react";
import Food from "../Food/Food";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const search = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="container">
      <div className="d-flex mt-3 align-items-center justify-content-center">
        <input
          onChange={search}
          className="w-50 p-2"
          placeholder="Search Your Favourite Food"
          type="text"
        />{" "}
        <button className="bg-success p-2">Search</button>
      </div>
      <br />
      <div className="row">
        {meals.map((meal) => (
          <Food key={meal.idMeal} meal={meal}></Food>
        ))}
      </div>
    </div>
  );
};

export default Home;
