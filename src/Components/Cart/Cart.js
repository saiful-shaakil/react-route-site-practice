import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map((each) => (
        <p>
          {each.strMeal} <button>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
