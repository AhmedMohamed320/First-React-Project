import { useContext } from "react";
import classes from "./cart.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.dataItem}>
                <p>{props.class}</p>
                <p>{props.name} </p>
                <div className={classes.edit}>
                    <div className={classes.change} onClick={props.onRemove}>
                        -
                    </div>
                    <div className={classes.count}>{props.amount}</div>
                    <div className={classes.change} onClick={props.onAdd}>
                        +
                    </div>
                    <ion-icon
                        name="trash-outline"
                        onClick={props.onDelete}
                    ></ion-icon>
                </div>
            </div>
            <div className={classes.imageItem}>
                <img src={props.image} />
            </div>
        </div>
    );
};

export default CartItem;
