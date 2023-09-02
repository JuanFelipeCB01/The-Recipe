import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693576483/Presentacio%CC%81n_para_sitio_web_y_mo%CC%81vil_elegante_y_moderna_tonos_tierra_pastel_1_vmmgao.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693576483/Presentacio%CC%81n_para_sitio_web_y_mo%CC%81vil_elegante_y_moderna_tonos_tierra_pastel_1_vmmgao.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693576483/Presentacio%CC%81n_para_sitio_web_y_mo%CC%81vil_elegante_y_moderna_tonos_tierra_pastel_1_vmmgao.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693576483/Presentacio%CC%81n_para_sitio_web_y_mo%CC%81vil_elegante_y_moderna_tonos_tierra_pastel_1_vmmgao.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693576483/Presentacio%CC%81n_para_sitio_web_y_mo%CC%81vil_elegante_y_moderna_tonos_tierra_pastel_1_vmmgao.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693576483/Presentacio%CC%81n_para_sitio_web_y_mo%CC%81vil_elegante_y_moderna_tonos_tierra_pastel_1_vmmgao.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693576483/Presentacio%CC%81n_para_sitio_web_y_mo%CC%81vil_elegante_y_moderna_tonos_tierra_pastel_1_vmmgao.jpg"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
