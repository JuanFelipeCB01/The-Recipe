import React from "react";
import { useAuth } from "../../shared/AuthContext";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const { user } = useAuth();
  console.log(user);

  return (
  <>
      <div className="p-16">
        <section class="text-gray-600 body-font">
          <div class="container px-5 pt-8 mx-auto">
            <div class="text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Tu perfil</h1>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

    <section class="text-gray-600 body-font">
        <div class="container px-5 py-18 mx-auto">
          <div class="flex flex-wrap justify-center -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img src={user.image} alt={user.name} class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"/>
                <div>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-2 mb-4"></span>
                </div>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-2xl">{user.name}</h2>
                <p class="text-gray-500 text-2xl">Edad: {user.age} años</p>
                <p class="text-gray-500 text-2xl">Email: {user.email}</p>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section className="text-gray-600 body-font mt-10">
          <div class="h-full text-center ">
              {user.role === "admin" ? (
                <h2 class="text-gray-900 font-medium text-2xl">Recetas creadas</h2>
              ):(
                <h2 class="text-gray-500 text-2xl">Favoritos</h2>
              )}
          </div>
          <div className="container px-5 pt-8 mx-auto">
            <div className="flex flex-wrap justify-around -m-4">
              {user.recipes.length &&
                  user.recipes?.map((recipe) => (
                  <div
                    className="p-4 md:w-1/2 lg:w-1/3 w-full"
                    key={user._id}
                  >
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        src={recipe.image}
                        alt="Descripción de la imagen"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "50%",
                        }}
                      ></img>
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {recipe.chef?.name}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {recipe.name}
                        </h1>
                        <p className="leading-relaxed mb-3">
                          {recipe.description}
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-5">
                            <Link
                              to={`/recipes/${recipe._id}`}
                              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              Ver receta
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </Link>
                          </button>
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            {recipe.comments?.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section> 
  </>
  );
}
