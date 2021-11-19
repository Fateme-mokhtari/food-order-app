import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Order Food</h1>
        <button>cart</button>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="food"/>
      </div>
    </React.Fragment>
  );
};

export default Header;
