import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function IngredientsHome() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5020/ingredients')
      .then((response) => {
        setIngredients(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener las recetas:', error);
      });
  }, []);

  // Nombres de ingredientes individuales a buscar
  const ingredientNamesToDisplay = [
    'pechuga de pollo',
    'tomate',
    'limón',
    'plátano',
    'huevo',
    'salmón',
  ];

  // Filtrar los ingredientes cuyo nombre está en la lista
  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredientNamesToDisplay.includes(ingredient.name.toLowerCase())
  );

  // Limitar el mapeo a seis elementos
  const limitedIngredients = filteredIngredients.slice(0, 4);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Top Ingredientes
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Descubre todo tipo de Ingredientes y conoce sus propiedades y usos en infinidad de recetas.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {limitedIngredients.length &&
              limitedIngredients.map((ingredient) => (
              
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" shadow-xl px-4 py-6 rounded-lg flex flex-col justify-center items-center">
          <img src={ingredient.image} className='rounded-xl h-24  object-cover'/>
          <h2 class="title-font font-medium text-xl text-gray-900 mt-2">{ingredient.name}</h2>
          <p class="leading-relaxed">{ingredient.energeticValue}</p>
        </div>
      </div>
              ))}
              <div className='w-full flex justify-center mt-8'>
              <button class="w-40 bg-violet-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded shadow-xl">
              <NavLink to="/ingredients">
                Ver más
              </NavLink>
</button>
</div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default IngredientsHome;
