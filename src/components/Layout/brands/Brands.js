import { Fragment } from "react";
import brand_1 from "../../../assets/BMW.svg";
import brand_2 from "../../../assets/Mercedes.svg";
import brand_3 from "../../../assets/Nissan.svg";
import brand_4 from "../../../assets/Suzuki.svg";
import brand_5 from "../../../assets/Toyota.svg";
import brand_6 from "../../../assets/Volvo.svg";
import brand_7 from "../../../assets/brand_1.svg";
import brand_8 from "../../../assets/subaru.svg";
import classes from "./brands.module.css";

const Brands = () => {
    return (
        <Fragment>
            <section className={`${classes.se6} container`}>
                <img src={brand_1} />
                <img src={brand_2} />
                <img src={brand_3} />
                <img src={brand_4} />
                <img src={brand_5} />
                <img src={brand_6} />
                <img src={brand_7} />
                <img src={brand_8} />
            </section>
        </Fragment>
    );
};

export default Brands;
