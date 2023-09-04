
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormCreateRecipe from '../../components/FormCreateRecipe/FormCreateRecipe';
import { useAuth } from "../../shared/AuthContext";




function RecipesPage(){
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleAgregarRecetaClick = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const auth = useAuth();
  const { user } = useAuth();

  
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

      <div className="pt-16">
        <section class="text-gray-600 body-font">
          <div class="container px-5 pt-8 mx-auto">
            <div class="text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Recetas</h1>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
          </div>
        </section>
      </div>


      {auth.isAuthenticated && user.role === "admin" && (
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <button onClick={handleAgregarRecetaClick} class="flex mx-auto mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-0">+ Agregar Receta</button>
        </div>
      </section> )}


      {mostrarFormulario && <FormCreateRecipe/>}



      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 pt-8 mx-auto">
            <div class="flex flex-wrap -m-4">
            {recipes.length && recipes.map((recipe) => (
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img src={recipe.image} alt="Descripción de la imagen"></img>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {recipe.chef.name}
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        {recipe.name}
                    </h1>
                    <p class="leading-relaxed mb-3">
                        {recipe.description}
                    </p>
                    <div class="flex items-center flex-wrap ">
                      

                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-5">
                        <Link to={`/recipes/${recipe._id}`} class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Detalles
                          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        
                        </Link>
                      </button>

                      <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        {recipe.comments.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );

}

export default RecipesPage;
// Asegúrate de importar y usar este componente en tu aplicación principal de React.