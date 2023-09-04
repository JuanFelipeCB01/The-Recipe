import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function IngredientsDetailPage() {
  const { id } = useParams();
  const [ingredient, setIngredient] = useState();
  const [recipes, setRecipes] = useState([]);

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
            {/* <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div> */}
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

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Recetas que incluyen: {ingredient?.name}</h1>
            <div>
                <div>
                {recipes.map((recipe) => (   
                    <img src={recipe?.image} alt={recipe?.name}/>
                ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default IngredientsDetailPage;
