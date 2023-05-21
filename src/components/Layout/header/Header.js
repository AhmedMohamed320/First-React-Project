import { Fragment } from "react";
import classes from "../header/Header.module.css";

const Header = () => {
    return (
        <Fragment>
            <header className="container" id="HomePage">
                <div className={classes.text}>
                    <p>Find the perfect car for you at YourCar.</p>
                    <p>
                    We offer a wide range of cars that cater to your needs and budget. Visit us today and drive away with your dream car!
                    </p>
                    <button>
                        <p>Discover</p>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </button>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
