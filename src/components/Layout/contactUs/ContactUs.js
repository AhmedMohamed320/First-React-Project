import { Fragment } from "react";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
    return (
        <Fragment>
            <footer className={`${classes.footer} container`} id="ContactPage">
                <div>
                    <p>yourCar</p>
                    <p>
                        We are known for luxurious and premium chaffeur services
                        worldwide. We are simply the best you can find.
                    </p>
                    <p>
                        we are dedicated to providing our customers with a
                        first-class car buying, selling, and renting experience.
                    </p>
                </div>
                <div>
                    <p>News Letter</p>
                    <p>
                        Subscribe to our news letter for updates, news and
                        exclusive offers
                    </p>
                    <form>
                        <input type="email" placeholder="Email"></input>
                        <button>Subscribe</button>
                    </form>
                    <div className={classes.social}>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                </div>
                <div>
                    <p>contact</p>
                    <div>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <p>2038 2nd Avenue, Las Vegas, United States</p>
                    </div>
                    <div>
                    <ion-icon name="call-outline"></ion-icon>
                        <p>
                        01444773421423 <br/>
                        01477678449405
                        </p>
                    </div>
                    <div>
                    <ion-icon name="mail-outline"></ion-icon>
                        <p>info@YourCar.com</p>
                    </div>
                </div>                
            </footer>
            <div className={`${classes.end} container`}>
                <p>&copy; Copyright 2023 · <span>YourCar</span> All rights reserved </p>
            </div>
        </Fragment>
    );
};

export default ContactUs;
