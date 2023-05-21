import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import classes from "./Nav.module.css";
import Cart from "../../Cart/Cart";
import CartContext from "../../../store/cart-context";
const Nav = () => {
    const [isVisible, setIsVisible] = useState(false);
    function toggleVisibility() {
        setIsVisible(!isVisible);
    }
    // ------------------------------------
    const [bgColor, setBgColor] = useState("transparent");
    const myRef = useRef(null);
    useEffect(() => {
        const handleClick = () => {
            myRef.current.classList.toggle("active");
        };
        myRef.current.addEventListener("click", handleClick);
        return () => {
            myRef.current.removeEventListener("click", handleClick);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setBgColor("black");
            } else {
                setBgColor("transparent");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // ------------------------------------
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    // ------------------------------------

    return (
        <Fragment>
            <nav className="container" style={{ backgroundColor: bgColor }} > 
                <div className={classes.logo}>
                    <p>YourCar</p>
                </div>
                <ul className={classes.mainNav}>
                    <li>
                        <Link to="HomePage" spy={true} smooth={true} offset={-50} duration={500} >Home</Link>
                    </li>
                    <li>
                        <Link to="AboutPage" spy={true} smooth={true} offset={-50} duration={500} >About</Link>
                    </li>
                    <li>
                        <Link to="ServicesPage" spy={true} smooth={true} offset={-50} duration={500} >Services</Link>
                    </li>
                    <li>
                        <Link to="CarsPage" spy={true} smooth={true} offset={-50} duration={500} >Cars</Link>
                    </li>
                    <li>
                        <Link to="ContactPage" spy={true} smooth={true} offset={-50} duration={500} >Contact Us</Link>
                    </li>
                    <li>
                        <div
                            className={classes.cart}
                            onClick={toggleVisibility}
                        >
                            <span>{numberOfCartItems}</span>
                            <ion-icon name="cart-outline"></ion-icon>
                        </div>
                    </li>
                    <li className={`${classes.smallNav}`}ref={myRef}>
                        <ion-icon name="menu-outline"></ion-icon>
                        <div className={classes.sideNav}>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">about</a>
                                </li>
                                <li>
                                    <a href="#">services</a>
                                </li>
                                <li>
                                    <a href="#">car</a>
                                </li>
                                <li>
                                    <a href="#">contact</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                {isVisible && <Cart />}
            </nav>
        </Fragment>
    );
};

export default Nav;
