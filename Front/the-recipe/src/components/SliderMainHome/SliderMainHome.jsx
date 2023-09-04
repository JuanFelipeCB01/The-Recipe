import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';


export default function App() {
  const videoStyle = {
    width: "100%",
    maxHeight: "600px",
    objectFit: "cover",
  };

  const swiperContainerStyle = {
    width: "100%",
    margin: "0 auto",
    clipPath: "ellipse(100% 55% at 40% 44%)",
    overflow: "hidden",
  };

  return (
    <div style={swiperContainerStyle}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video autoPlay muted loop style={videoStyle} className="video-slide">
            <source
              src="https://res.cloudinary.com/dc3pogjef/video/upload/v1693791075/Anuncio_para_Redes_Asia%CC%81tico_Restaurante_Entrega_a_Domicilio_8_igxllh.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay muted loop style={videoStyle} className="video-slide">
            <source
              src="https://res.cloudinary.com/dc3pogjef/video/upload/v1693791075/Anuncio_para_Redes_Asia%CC%81tico_Restaurante_Entrega_a_Domicilio_7_clwjri.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay muted loop style={videoStyle} className="video-slide">
            <source
              src="https://res.cloudinary.com/dc3pogjef/video/upload/v1693791074/Anuncio_para_Redes_Asia%CC%81tico_Restaurante_Entrega_a_Domicilio_6_fbzmhp.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        {/* Agrega más diapositivas de video según sea necesario */}
      </Swiper>
    </div>
  );
}








