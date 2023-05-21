import { Fragment } from "react";
import classes from "./Services.module.css";
import service_1 from "../../../assets/services-1.svg";
import service_2 from "../../../assets/services-2.svg";
import service_3 from "../../../assets/services-3.svg";

const About = () => {
    return (
        <Fragment>
            <section className={`${classes.se2} container`} id="ServicesPage">
                <div className={classes.head}>
                    <p>service</p>
                    <p>service</p>
                </div>
                <div className={classes.services}>
                    <div>
                        <img src={service_1} />
                        <p>car sales</p>
                        <p>
                            Car sales At YourCar, we offer a wide selection of
                            luxury vehicles for sale. Whether you're in the
                            market for a sleek sports car or a spacious SUV, we
                            have the perfect vehicle to fit your needs.
                        </p>
                    </div>
                    <div>
                        <img src={service_2} />
                        <p>car sales</p>
                        <p>
                            Car sales At YourCar, we offer a wide selection of
                            luxury vehicles for sale. Whether you're in the
                            market for a sleek sports car or a spacious SUV, we
                            have the perfect vehicle to fit your needs.
                        </p>
                    </div>
                    <div>
                        <img src={service_3} />
                        <p>car sales</p>
                        <p>
                            Car sales At YourCar, we offer a wide selection of
                            luxury vehicles for sale. Whether you're in the
                            market for a sleek sports car or a spacious SUV, we
                            have the perfect vehicle to fit your needs.
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default About;
