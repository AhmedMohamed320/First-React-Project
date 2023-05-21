import { Fragment, useEffect, useState, useContext } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "../../../../node_modules/swiper/react";
import "../../../../node_modules/swiper/swiper-bundle.css";
import classes from "./cars.module.css";
import CardCars from "./CardCars";
import CartContext from "../../../store/cart-context";

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const Cars = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("carsData.json")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            totalAmount: amount,
        });
    };

    return (
        <Fragment>
            <div className={`${classes.se3} container `} id="CarsPage">
                <div className={classes.text}>
                    <p>Cars</p>
                    <p>Cars</p>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    className={classes.slide}
                    breakpoints={{
                        1000: {
                            width: 1000,
                            slidesPerView: 2,
                        },
                        200: {
                            width: 500,
                            slidesPerView: 1,
                        },

                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide
                            className={`${classes.cardCar} `}
                            key={index}
                        >
                            <CardCars
                                key={index}
                                id={item.id}
                                image={item.image}
                                class={item.class}
                                name={item.name}
                                seats={item.seats}
                                luggage={item.luggage}
                                description={item.description}
                            ></CardCars>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Fragment>
    );
};

export default Cars;
