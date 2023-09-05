import React, { useRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const customStyles = `
  .swiper-3d .swiper-slide-shadow {
    background: transparent !important;
  }
`;

function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await axios.get(`http://localhost:5020/recipes/${id}`);
        setRecipe(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error en la solicitud Axios:", error);
      }
    }

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Cargando...</p>;
  }

  return (
    <>

    <section class="text-gray-600 body-font pt-16">
    <div class="container px-5 pt-8 mx-auto">
        <div class="text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{recipe.name}</h1>
        <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
        </div>
    </div>
    </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-4 mx-auto flex flex-col">
          <div class="lg:w-4/6 shadow-xl rounded-lg p-14 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={recipe.image}
              ></img>
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    alt="team"
                    class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full border border-black"
                    src={recipe.chef.image}
                  ></img>
                  {/* <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </svg> */}
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg font-bold">
                    {recipe.chef.name}
                  </h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base my-2.5">{recipe.description}</p>
                  <p class="leading-relaxed text-lg mb-4 underline font-bold">
                    Ingredientes:
                  </p>
                  <p class="text-base">
                    <ul>
                      {recipe.ingredients.length &&
                        recipe.ingredients?.map((ingredient) => (
                          <>
                            <li className="text-sm">
                              - {ingredient?.ingredient?.name} Cantidad:{" "}
                              {ingredient?.quantity}
                            </li>
                            {/* <li>Cantidad: {ingredient?.quantity}</li> */}
                          </>
                        ))}
                    </ul>
                  </p>

                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4 underline font-bold">
                  {" "}
                  Preparación:
                </p>
                <p>
                  <ul>
                    {recipe.preparations.length &&
                      recipe.preparations?.map((preparation) => (
                        <>
                          <li>
                            <p className="leading-8">- {preparation}</p>
                          </li>
                        </>
                      ))}
                  </ul>
                </p>

                <div className="text-right">
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-5">
                    <Link
                      to={`/recipes`}
                      class="text-indigo-500 inline-flex items-center hover:text-white"
                    >
                      Volver
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <>
      <div className="flex justify-center p-10">
        <section class="text-gray-600 body-font">
            <div class="container px-5 pt-8 mx-auto">
                <div class="text-center">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Comentarios</h1>
                <div class="flex mt-6 justify-center">
                    <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
                </div>
            </div>
        </section>
      </div>
      <style>{customStyles}</style>
      <Swiper effect={"cards"} grabCursor={true}  modules={[EffectCards]} className="mySwiper">
      {recipe.comments.length && recipe.comments?.map((comment) => (
            <SwiperSlide key={recipe._id}>
              <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                  <div className="flex justify-center flex-wrap -m-4">
                    <div className="p-4 w-2/4">
                      <div className="h-full rounded-lg overflow-hidden border-solid border-2 border-sky-500 shadow-xl">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={recipe.chef.image}
                          alt={recipe.chef.name}
                        ></img>
                        <div className="p-6 bg-white">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            {recipe.chef.name}
                          </h2>
                          <p className="leading-relaxed mb-3">
                            {comment.content}
                          </p>
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
                              {comment.likes} Likes
                            </span>
                            
                          
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
    </>
  );
}

export default RecipeDetailPage;
