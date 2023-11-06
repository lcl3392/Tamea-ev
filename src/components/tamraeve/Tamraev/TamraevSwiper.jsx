import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { TamraeveSwiperBox } from '../../styled/tamraStyle';

const TamraeveSwiper = () => {
    return (
        <TamraeveSwiperBox className="main_slider">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src="https://www.tamraev.com/static/img/main/main_slider_1.jpg" alt="탐라는 전기차 이미지" /></SwiperSlide>
                <SwiperSlide><img src="https://www.tamraev.com/static/img/main/main_slider_2.jpg" alt="탐라는 전기차 이미지" /></SwiperSlide>
                <SwiperSlide><img src="https://www.tamraev.com/static/img/main/main_slider_3.jpg" alt="탐라는 전기차 이미지" /></SwiperSlide>
            </Swiper>
        </TamraeveSwiperBox>
    );
};

export default TamraeveSwiper;