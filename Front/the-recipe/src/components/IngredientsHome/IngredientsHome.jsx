import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
  const limitedIngredients = filteredIngredients.slice(0, 6);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {limitedIngredients.length &&
              limitedIngredients.map((ingredient) => (
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={ingredient.id}>
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src={ingredient.image}
                    />
                    <div className="flex-grow">
                      <h2 className="text-gray-900 title-font font-medium">
                        {ingredient.name}
                      </h2>
                      <p className="text-gray-500">{ingredient.category}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default IngredientsHome;
