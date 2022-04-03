import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Food = (props) => {
  const { strMeal, strInstructions, strMealThumb } = props.meal;
  return (
    <div className="w-25 mb-5">
      <CardGroup>
        <Card>
          <Card.Img className="w-100" variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Card.Text>
              {strInstructions.length > 100
                ? strInstructions.slice(0, 200)
                : strInstructions}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button>Add to Cart</button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Food;
