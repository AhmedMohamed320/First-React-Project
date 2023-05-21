import { Fragment, useContext, useRef, useState } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./cars.module.css";

const CardCars = (props) => {
    const [count, setCount] = useState(1);

    const handlePlusClick = () => {
        setCount(count + 1);
    };

    const handleMinusClick = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const cartCtx = useContext(CartContext);
    
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.textContent;
        const enteredAmountNumber = +enteredAmount;
        addToCartHandler(enteredAmountNumber);
    };

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            class: props.class,
            amount: amount,
            image: props.image,
        });
    };

    return (
        <Fragment>
            <div className={classes.image}>
                <img src={props.image} />
            </div>
            <div className={classes.details}>
                <p>
                    <span>{props.class}</span> <br />
                    {props.name}
                </p>
                <p>{props.description}</p>
            </div>
            <div className={classes.number}>
                <div className={classes.part1}>
                    <p>
                        <ion-icon name="people-outline"></ion-icon>
                        <span>{props.seats} Seats</span>
                    </p>
                    <p>
                        <ion-icon name="albums-outline"></ion-icon>
                        <span>{props.luggage} Luggage</span>
                    </p>
                </div>
                <div className={classes.part2}>
                    <div className={classes.change} onClick={handleMinusClick}>
                        -
                    </div>
                    <div className={classes.count} ref={amountInputRef}>{count}</div>
                    <div className={classes.change} onClick={handlePlusClick}>
                        +
                    </div>
                </div>
            </div>
            <button type="submit" onClick={submitHandler}>
                add to cart
            </button>
        </Fragment>
    );
};

export default CardCars;
