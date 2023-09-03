import React, { useRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

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

    <section class="text-gray-600 body-font">
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

    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Comentarios</h1>
        <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-2/4 bg-white"
        >
            {recipe.preparations.length && recipe.preparations?.map((preparation) => (
                <SwiperSlide>
                <div class="p-4 flex flex-col text-center items-center">
                    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    <img
                        alt="team"
                        class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full border border-black"
                        src={recipe.chef.image}
                    ></img>
                    </div>
                    <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        {recipe.chef.name}
                    </h2>
                    
                    </div>
                </div>

                <p>{recipe.comments.name}</p>
                </SwiperSlide>

            
          ))}
      </Swiper>
      
      
    </div>
   
  </div>
</section>


    </>
  );
}

export default RecipeDetailPage;




// const customStyles = `
//   .swiper-3d .swiper-slide-shadow {
//     background: transparent !important;
//   }
// `;

// export default function TopRecipesSlider() {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5020/recipes")
//       .then((response) => {
//         setRecipes(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error al obtener las recetas:", error);
//       });
//   }, []);

//   return (
//     <>
//       <div class="flex justify-center p-10">
//         <h2>Top Recipes</h2>
//       </div>
//       {/* Agrega los estilos personalizados al componente */}
//       <style>{customStyles}</style>
//       <Swiper
//         effect={"cards"}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//       >
//         {recipes
//           .sort((a, b) => b.likes - a.likes) // Ordenar recetas por likes en orden descendente
//           .slice(0, 5) // Tomar los primeros 5 elementos
//           .map((recipe) => (
//             <SwiperSlide key={recipe.id}>
//               <section class="text-gray-600 body-font">
//                 <div class="container px-5  mx-auto">
//                   <div class="flex justify-center flex-wrap -m-4">
//                     <div class="p-4 w-4/5 ">
//                       <div class="h-full  rounded-lg overflow-hidden border-solid border-2 border-sky-500 shadow-xl">
//                         <img
//                           class="lg:h-48 md:h-36 w-full object-cover object-center "
//                           src={recipe.image}
//                           alt="blog"
//                         ></img>
//                         <div class="p-6 bg-white">
//                           <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//                             CATEGORY
//                           </h2>
//                           <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
//                             {recipe.title}
//                           </h1>
//                           <p class="leading-relaxed mb-3">
//                             {recipe.description}
//                           </p>
//                           <div class="flex items-center flex-wrap ">
//                             <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
//                               Learn More
//                               <svg
//                                 class="w-4 h-4 ml-2"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 stroke-width="2"
//                                 fill="none"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                               >
//                                 <path d="M5 12h14"></path>
//                                 <path d="M12 5l7 7-7 7"></path>
//                               </svg>
//                             </a>
//                             <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
//                               <svg
//                                 class="w-4 h-4 mr-1"
//                                 stroke="currentColor"
//                                 stroke-width="2"
//                                 fill="none"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                                 <circle cx="12" cy="12" r="3"></circle>
//                               </svg>
//                               {recipe.likes} Likes
//                             </span>
//                             <span class="text-gray-400 inline-flex items-center leading-none text-sm">
//                               <svg
//                                 class="w-4 h-4 mr-1"
//                                 stroke="currentColor"
//                                 stroke-width="2"
//                                 fill="none"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                               </svg>
//                               {recipe.comments} Comments
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </SwiperSlide>
//           ))}
//       </Swiper>

//     </>
//   );
// }
