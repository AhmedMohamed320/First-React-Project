import { Fragment, useEffect, useState } from "react";
import classes from "./Testimonials.module.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "../../../../node_modules/swiper/react";
import "../../../../node_modules/swiper/swiper-bundle.css";
import car1 from "../../../assets/Cars/car-1.svg";
import star from "../../../assets/Star.svg"

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const Testimonials = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("testimonialsData.json")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <Fragment>
            <section className={`${classes.se5} container`}>
                <div className={classes.head}>
                    <p>Testimonials</p>
                    <p>Testimonials</p>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className={classes.slide}
                >
                    {
                        data.map((item,index)=>(
                            <SwiperSlide className={`${classes.card} `} key={index}>
                            <div className={classes.image}>
                                <img src={item.image} />
                            </div>
    
                            <p>
                                {item.description}
                            </p>
    
                            <div className={classes.rate}>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                            </div>
                            <p>{item.name} <span>Las vegas</span></p>
                        </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        </Fragment>
    );
};

export default Testimonials;
