import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UpdateIngredient from "../../components/UpdateIngredient/UpdateIngredient";
import { useAuth } from "../../shared/AuthContext";

function IngredientsDetailPage() {
  const auth = useAuth()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [message, setMessage] = useState("");

  const { id } = useParams();
  const [ingredient, setIngredient] = useState();
  const [recipes, setRecipes] = useState([]);
  const [display, setDisplay] = useState(false);

  const displayForm = () =>{
        setDisplay(!display)
  }

  const handleDeleteIngredient = async (e) => { 
    e.preventDefault();
     try {
      const response = await axios.delete(`http://localhost:5020/ingredients/${id}`, {   
      })
      if (response.status === 200) {
        setMessage("Ingredient deleted");
        navigate("/ingredients");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    }
  }

  const getRecipes = async () => {
    try {
        const item = await axios.get(`http://localhost:5020/ingredients/${id}`);
        setIngredient(item.data);
        const { data } = await axios.get('http://localhost:5020/recipes');
        const filteredRecipes = data.filter((recipe) => {
          return recipe?.ingredients?.some((recipeIngredient) => {
            // console.log('1', recipeIngredient.ingredient.name)
            // console.log('2', item.data.name)
            // console.log('5', recipeIngredient.ingredient.name === item.data.name)
            return recipeIngredient?.ingredient?.name === item?.data?.name;
            })
        });

        console.log('45', filteredRecipes)
        setRecipes(filteredRecipes); 
        
    } catch (error) {
        console.error(500); 
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {ingredient?.name}
            </h1>
            <p class="mb-8 leading-relaxed">{ingredient?.description}</p>
            <div class="mb-8">
              <p>Valor energético: {ingredient?.energeticValue}</p>
              <p>Grasas: {ingredient?.totalFat}</p>
              <p>Grasas saturadas: {ingredient?.saturatedFat}</p>
              <p>Carbohidratos: {ingredient?.carbs}</p>
              <p>Azúcares: {ingredient?.sugars}</p>
              <p>Sodio: {ingredient?.sodium}</p>
            </div>
            {auth.isAuthenticated && user.role === "admin" && (
              <div class="flex justify-center">
                <button  onClick={displayForm} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Actualizar</button>
                <button onClick={handleDeleteIngredient} class="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Borrar</button>
              </div>
            )}
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={ingredient?.image}
            />
          </div>
        </div>
      </section>
      {display&&<UpdateIngredient ingredient={ingredient}/>}
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 pt-8 mx-auto">
            <div class="text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Recetas con {ingredient?.name}</h1>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
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
    </div>
  );
}

export default IngredientsDetailPage;
