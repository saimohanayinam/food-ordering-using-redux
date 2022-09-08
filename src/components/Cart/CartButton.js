import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const counter = useSelector(State =>  State.cart.totalQuantity)

  const toggle = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{counter}</span>
    </button>
  );
};

export default CartButton;
