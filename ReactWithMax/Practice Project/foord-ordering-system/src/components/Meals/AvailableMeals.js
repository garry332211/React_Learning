import React, { useCallback, useEffect, useState } from "react";
import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItems";

const AvailableMeals = () => {
  const [mealsItem, setMealsitems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMeals = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://react-http-4dcfb-default-rtdb.firebaseio.com/movies/meals.json"
      );

      if (!response.ok) {
        throw new error("Something Went Wrong");
      }
      const data = await response.json();
      const loaddedMeals = [];

      for (const key in data) {
        loaddedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMealsitems(loaddedMeals);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const listAllMeals = mealsItem.map((meal) => (
    <MealItem
      id={meal.id} // this is new!
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="meals">
      <Card>
        {!isLoading && <ul>{listAllMeals}</ul>}
        {!isLoading && (
          <ul>
            {listAllMeals.length === 0 && (
              <p className="failed">No Menu Found</p>
            )}
          </ul>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p className="failed">Loading Meals</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
