import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import axios from "axios";

const customStyles = `
  .swiper-3d .swiper-slide-shadow {
    background: transparent !important;
  }
`;

export default function TopRecipesSlider() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5020/recipes")
      .then((response) => {
        setRecipes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las recetas:", error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center p-10">
        <h2>Top Recipes</h2>
      </div>
      <style>{customStyles}</style>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {recipes
          .sort((a, b) => b.likes - a.likes)
          .slice(0, 5)
          .map((recipe) => (
            <SwiperSlide key={recipe._id}>
              <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                  <div className="flex justify-center flex-wrap -m-4">
                    <div className="p-4 w-4/5">
                      <div className="h-full rounded-lg overflow-hidden border-solid border-2 border-sky-500 shadow-xl">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={recipe.image}
                          alt={recipe.name}
                        ></img>
                        <div className="p-6 bg-white">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {recipe.name}
                          </h1>
                          <p className="leading-relaxed mb-3">
                            {recipe.description}
                          </p>
                          <div className="flex items-center flex-wrap">
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              {recipe.likes} Likes
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              {recipe.comments.length} Comments
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
