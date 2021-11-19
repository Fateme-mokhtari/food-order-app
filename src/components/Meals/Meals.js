import { Fragment } from "react";
import AvaileableMeals from "./AvaileableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaileableMeals />
    </Fragment>
  );
};
export default Meals;
