import React, { useState } from 'react';
import Ingredients from './Ingredients';

const Recepts = () => {
    const [meal, setMeal] = useState();
    return (
        <div id='recept'>
        <input
          type="radio"
          id="cupcake"
          name="meal"
          value="cupcake"
          onClick={(e) => setMeal(e.target.value)}
        ></input>
        <label htmlFor="meal">Cupcake</label>
        <input
          type="radio"
          id="ceasar"
          name="meal"
          value="ceasar"
          onClick={(e) => setMeal(e.target.value)}
        ></input>
        <label htmlFor="meal">Chicken Caesar</label>
        <input
          type="radio"
          id="pizza"
          name="meal"
          value="pizza"
          onClick={(e) => setMeal(e.target.value)}
        ></input>
        <label htmlFor="meal">Pizza Pepperoni</label>
        <Ingredients meal={meal} />
      </div>
    );
};

export default Recepts;