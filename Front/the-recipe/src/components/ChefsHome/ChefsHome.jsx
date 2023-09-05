import React from 'react'
import { NavLink } from 'react-router-dom';

const chef = {
  width: "100%",
  margin: "0 auto",
  clipPath: "ellipse(100% 55% at 40% 44%)",
  overflow: "hidden",
};


function ChefsHome(){
    return (
        <div >
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Aprende de Chefs profesionales
      </h1>
      <p class="mb-8 leading-relaxed">Todas nuestras recetas estan elaboradas por Chefs profesionales y adaptadas para todos los niveles.Aprende de profesionales y comparte tus avances con la comunidad.</p>
      <div class="flex justify-center">
      <button class="w-40 bg-violet-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded shadow-xl">
              <NavLink to="/register">
                Regístrate
              </NavLink>
</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <video autoPlay muted loop  className="video-slide rounded-xl">
            <source
              src="https://res.cloudinary.com/dc3pogjef/video/upload/v1693791074/Anuncio_para_Redes_Asia%CC%81tico_Restaurante_Entrega_a_Domicilio_6_fbzmhp.mp4"
              type="video/mp4"
            />
          </video>
    </div>
  </div>
</section>
        </div>
    )
}

export default ChefsHome
