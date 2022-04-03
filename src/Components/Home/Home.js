import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);

  //useEffect to load data
  useEffect(() => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  //add to cart button handler
  const handleAddToCart = (selectedItem) => {
    const exist = cart.find((item) => item.idMeal === selectedItem.idMeal);
    if (!exist) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    }
  };

  // search function for onchange
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
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              {meals.map((meal) => (
                <Food
                  key={meal.idMeal}
                  meal={meal}
                  handleAddToCart={handleAddToCart}
                ></Food>
              ))}
            </div>
          </div>
          <div className="col-4">
            {cart.map((each) => (
              <Cart cart={cart}></Cart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
