import { useRef } from "react";
import { useState } from "react/cjs/react.development";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const isEmpty = (value) => value.trim() === "";

  const isFiveChar = (value) => value.trim().length === 5;

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid =isFiveChar(enteredPostalCode);

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;
    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    if (!formIsValid) {
      console.log("form is not valid");
      return;
    }
  };
  const nameInputClasses = `${classes["form-control"]} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const streetInputClasses = `${classes["form-control"]} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const postalCodeInputClasses = `${classes["form-control"]} ${
    formInputValidity.postalCode ? "" : classes.invalid
  }`;
  const cityInputClasses = `${classes["form-control"]} ${
    formInputValidity.city ? "" : classes.invalid
  }`;

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>please enter valid name!</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>please enter valid street!</p>}
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && <p>please enter valid post code!</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>please enter valid city!</p>}

      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          cancel
        </button>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default Checkout;
