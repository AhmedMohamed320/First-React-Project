import { Fragment } from "react";
import car1 from "../../../assets/some cars/Car1.svg";
import car2 from "../../../assets/some cars/Car2.svg";
import car3 from "../../../assets/some cars/Car3.svg";
import car4 from "../../../assets/some cars/Car4.svg";
import car5 from "../../../assets/some cars/Car5.svg";
import car6 from "../../../assets/some cars/Car6.svg";
import car7 from "../../../assets/some cars/Car7.svg";
import car8 from "../../../assets/some cars/Car8.svg";
import car9 from "../../../assets/some cars/Car9.svg";

import classes from "./someCars.module.css";

const SomeCars = () => {
    return (
        <Fragment>
            <section className={`${classes.se4} container`}>
                <div>
                    <img src={car1} />
                </div>
                <div>
                    <img src={car2} />
                </div>
                <div>
                    <img src={car3} />
                </div>
                <div>
                    <img src={car4} />
                </div>
                <div>
                    <div>
                        <p>Tesla Model 3</p>
                        <p>Disruptive, avant-garde, futuristic, innovative.</p>
                        <button>contact</button>
                    </div>
                    <img src={car5} />
                </div>
                <div>
                    <img src={car6} />
                </div>
                <div>
                    <img src={car7} />
                </div>
                <div>
                    <img src={car8} />
                </div>
                <div>
                    <img src={car9} />
                </div>
            </section>
        </Fragment>
    );
};

export default SomeCars;
