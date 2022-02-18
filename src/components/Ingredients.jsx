import React from 'react';

const Ingredients = ({meal}) => {
    return (
        <div>
{meal === "cupcake" ? (
        <div>
          <ul>
            <li>wheat flour (200 grams);</li>
            <li>high fat sour cream (200 grams);</li>
            <li>chicken eggs (3 pieces);</li>
            <li>sugar (1 Cup);</li>
            <li>vanilla (4 grams);</li>
            <li>baking powder (2 teaspoons);</li>
            <li>margarine or butter (100 grams);</li>
            <img src="https://www.recipetineats.com/wp-content/uploads/2020/09/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-SQ.jpg" alt="cupcake" />
          </ul>
        </div>
      ) : (
        ""
      )}

      {meal === "ceasar" ? (
        <div>
          <ul>
            <li>1 medium ciabatta loaf (or 4 thick slices crusty white bread)</li>
            <li>3 tbsp olive oil</li>
            <li>2 skinless, boneless chicken breasts</li>
            <li>1 large cos or romaine lettuce, leaves separated</li>
            <li>1 garlic clove</li>
            <li>2 anchovies from a tin</li>
            <li>medium block parmesan or Grano Padano cheese for grating and shaving (you won't use it all)</li>
            <li>5 tbsp mayonnaise</li>
            <li>1 tbsp white wine vinegar</li>
            <img src="https://bluejeanchef.com/uploads/2019/03/Chicken-Caesar-2-640x800.jpg" alt="ceasar" />
          </ul>
        </div>
      ) : (
        ""
      )}

      {meal === "pizza" ? (
        <div>
          <ul>
            <li>2 eggs</li>
            <li>1 green onion, chopped</li>
            <li>2 teaspoons water</li>
            <li>1 teaspoon butter</li>
            <li>1 prebaked mini pizza crust</li>
            <li>1/3 cup shredded cheddar cheese</li>
            <li>1/4 cup pizza sauce</li>
            <li>12 slices pepperon</li>
            <img src="https://www.gastronom.ru/binfiles/images/20180123/b030b209.jpg" alt="pizza" />
          </ul>
        </div>
      ) : (
        ""
      )}
        </div>
    );
};

export default Ingredients;