import { Fragment, useContext } from "react";
import classes from "./cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItemDeleteHandler = (id) => {
        cartCtx.deleteItem(id);
    };

    const cartItems = cartCtx.items.map((item, index) => (
        <CartItem
            key={index}
            class={item.class}
            name={item.name}
            amount={item.amount}
            image={item.image}
            onDelete={cartItemDeleteHandler.bind(null, item.id)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />
    ));

    const handleDeleteAll = () => {
        cartCtx.deleteAll();

    };

    return (
        <Fragment>
            {hasItems && (
                <div className={classes.cart}>
                    {cartItems}

                    <button className={classes.deleteAll} onClick={handleDeleteAll}>
                        <p>Delete All</p>
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </div>
            )}
        </Fragment>
    );
};

export default Cart;
