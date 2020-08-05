import React from 'react';
import first from '../../assets/images/slider/1.jpg'
import second from '../../assets/images/slider/2.jpg'
import third from '../../assets/images/slider/3.jpg'
import fourth from '../../assets/images/slider/4.jpg'
import SwiperCore, {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Pagination]);

const Slider = () => {

    return (
        <div className="slider">
            <Swiper slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}>
                <SwiperSlide tag="li"><img className="slider__img" src={first} alt="first"/></SwiperSlide>
                <SwiperSlide tag="li"><img className="slider__img" src={second} alt="second"/></SwiperSlide>
                <SwiperSlide tag="li"><img className="slider__img" src={third} alt="third"/></SwiperSlide>
                <SwiperSlide tag="li"><img className="slider__img" src={fourth} alt="fourth"/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider
