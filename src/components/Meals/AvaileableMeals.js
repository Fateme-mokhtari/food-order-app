import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvaileableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvaileableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(async () => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-app-f6375-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((e) => {
      setIsLoading(false);
      setError(e.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>loading</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        {/* {!isLoading && <p className={classes.MealsLoading}>...loading</p>} */}
      </Card>
    </section>
  );
};
export default AvaileableMeals;
