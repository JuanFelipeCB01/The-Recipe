import React from 'react'
import SliderMainHome from '../SliderMainHome/SliderMainHome'
import { NavLink } from 'react-router-dom'

function AboutUsHome() {
  return (
    <div>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Bienvenido a Reciper</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-2 lg:w-1/3">
        <div class=" bg-white bg-opacity-75 px-4 pt-8 pb-12 rounded-xl overflow-hidden text-center relative shadow-xl">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-transparent text-indigo-500 mb-5 flex-shrink-0">
          <img src='https://res.cloudinary.com/dc3pogjef/image/upload/v1693867298/sandwich_454602_3_iq4z7g.png'/>
        </div>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Descubre</h1>
          <p class="leading-relaxed mb-3">Aprende recetas de todo tipo en nuestra web, donde encontrarás platos de todas las partes del mundo y categorías especiales para cada ocasión.</p>
          <button class="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 mt-4 rounded">
          <NavLink to="recipes">
                Ver más
              </NavLink>
</button>
        </div>
        
      </div>
      <div class="p-2 lg:w-1/3">
        <div class=" bg-white bg-opacity-75 px-4 pt-8 pb-12 rounded-xl overflow-hidden text-center relative shadow-xl">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-transparent text-indigo-500 mb-5 flex-shrink-0">
          <img src='https://res.cloudinary.com/dc3pogjef/image/upload/v1693867771/brussel-sprouts_8886068_2_lavns9.png'/>
        </div>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Aprende</h1>
          <p class="leading-relaxed mb-3">Conoce todo tipo de Ingredientes y sus usos para mejorar tu dieta y cambiar tus habitos alimentarios a unos mas saludables. No te pierdas las novedades. </p>
          <button class="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 mt-4 rounded">
          <NavLink to="ingredients">
                Ver más
              </NavLink>
</button>
        </div>
        
      </div>
      <div class="p-2 lg:w-1/3">
        <div class=" bg-white bg-opacity-75 px-4 pt-8 pb-12 rounded-xl overflow-hidden text-center relative shadow-xl">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-transparent text-indigo-500 mb-5 flex-shrink-0">
          <img src='https://res.cloudinary.com/dc3pogjef/image/upload/v1693868001/chat_1519760_m43jbr.png'/>
        </div>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Descubre</h1>
          <p class="leading-relaxed mb-3">Únete a nuestra comunidad de amantes de la cocina y descubre un mundo de posibilidades culinarias en nuestra web. Aquí, encontrarás recetas de todo tipo, desde exquisitos.</p>
          <button class="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 mt-4 rounded">
          <NavLink to="recipes">
                Ver más
              </NavLink>
</button>
        </div>
        
      </div>

      


    </div>
  </div>
</section>
    </div>
  )
}

export default AboutUsHome
