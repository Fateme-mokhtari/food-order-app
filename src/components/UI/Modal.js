import ReactDOM from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const Modal = (props) => {
  const prtalOverlay = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, prtalOverlay)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        prtalOverlay
      )}
    </Fragment>
  );
};
export default Modal;
