import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/axios.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FormCreateRecipe() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [preparationsList, setPreparationsList] = useState([""]);
  const [ingredientsList, setIngredientsList] = useState([""]);
  const [ingredientQuantities, setIngredientQuantities] = useState([""]);
  const [ingredients, setIngredients] = useState([]);
  const [country, setCountry] = useState("");
  const [categoriesList, setCategoriesList] = useState([""]);
  const [chefs, setChefs] = useState([]);
  const [selectedChef, setSelectedChef] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5020/ingredients")
      .then((response) => {
        setIngredients(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los ingredientes");
      });

    axios
      .get("http://localhost:5020/user")
      .then((response) => {
        setChefs(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los chefs");
      });
  }, []);

  const addPreparation = () => {
    const newPreparationsList = [...preparationsList, ""];
    setPreparationsList(newPreparationsList);
  };

  const addCategory = () => {
    const newCategoriesList = [...categoriesList, ""];
    setCategoriesList(newCategoriesList);
  };

  const removePreparation = (index) => {
    if (preparationsList.length > 1) {
      const newPreparationsList = [...preparationsList];
      newPreparationsList.splice(index, 1);
      setPreparationsList(newPreparationsList);
    }
  };

  const removeCategory = (index) => {
    if (categoriesList.length > 1) {
      const newCategoriesList = [...categoriesList];
      newCategoriesList.splice(index, 1);
      setCategoriesList(newCategoriesList);
    }
  };

  const addIngredient = () => {
    const newIngredientsList = [...ingredientsList, ""];
    const newIngredientQuantities = [...ingredientQuantities, ""];
    setIngredientsList(newIngredientsList);
    setIngredientQuantities(newIngredientQuantities);
  };

  const removeIngredient = (index) => {
    if (ingredientsList.length > 1) {
      const newIngredientsList = [...ingredientsList];
      const newIngredientQuantities = [...ingredientQuantities];
      newIngredientsList.splice(index, 1);
      newIngredientQuantities.splice(index, 1);
      setIngredientsList(newIngredientsList);
      setIngredientQuantities(newIngredientQuantities);
    }
  };

  const createRecipe = async (e) => {
    e.preventDefault();
  
    try {
      const formattedIngredients = ingredientsList.map((ingredientId, index) => ({
        ingredient: ingredientId,
        quantity: ingredientQuantities[index],
      }));
  
      const response = await axiosInstance.post("/recipes", {
        name,
        description,
        country,
        image,
        preparations: preparationsList,
        categories: categoriesList,
        ingredients: formattedIngredients,
        chef: selectedChef,
      });
  
      if (response.status === 200) {
        const createdRecipeId = response.data._id;
  
        // Obtén el ID del usuario seleccionado
        const userId = selectedChef;
  
        // Realiza una solicitud PUT para actualizar el usuario con el ID de la receta creada
        const userResponse = await axiosInstance.put(
          `/user/recipes/${createdRecipeId}`,
          {
            userId: userId, // Cambia esto a userId
          }
        );
  
        if (userResponse.status === 200) {
          setMessage("¡Receta registrada con éxito!");
          navigate("/");
        }
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Se produjo un error. Por favor, inténtalo de nuevo más tarde.");
      }
    }
  };
  

  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 pb-24 pt-8 mx-auto">
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="block flex-wrap -m-2 ">
              <form onSubmit={createRecipe} className="p-2">
                {/* Name */}
                <div class="p-2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Nombre de la receta
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                {/* Description */}
                <div class="p-2">
                  <div class="relative">
                    <label
                      for="email"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Description:
                    </label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                {/* Ingredients */}
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Ingredients:
                    </label>
                    {ingredientsList.map((ingredient, index) => (
                      <div key={index}>
                        <select
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          id={`ingredient-${index}`}
                          name={`ingredient-${index}`}
                          value={ingredient}
                          onChange={(e) => {
                            const newIngredientsList = [...ingredientsList];
                            newIngredientsList[index] = e.target.value;
                            setIngredientsList(newIngredientsList);
                          }}
                          required
                        >
                          <option value="">Selecciona un ingrediente</option>
                          {ingredients.length > 0 &&
                            ingredients.map((ingredientData) => (
                              <option
                                key={ingredientData._id}
                                value={ingredientData._id}
                              >
                                {ingredientData.name}
                              </option>
                            ))}
                        </select>

                        <input
                          type="text"
                          id="ingredients"
                          name="ingrediente"
                          value={ingredientQuantities[index]}
                          onChange={(e) => {
                            const newIngredientQuantities = [
                              ...ingredientQuantities
                            ];
                            newIngredientQuantities[index] = e.target.value;
                            setIngredientQuantities(newIngredientQuantities);
                          }}
                          placeholder="Cantidad"
                          required
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        {index > 0 && (
                          <button
                            class="mr-0 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            type="button"
                            onClick={() => removeIngredient(index)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={addIngredient}
                      class="my-1.5 mr-0 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      Add Ingredient
                    </button>
                  </div>
                </div>

                {/* Preparations */}
                <div class="p-2">
                  <div class="relative">
                    <label
                      for="name"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Preparations:
                    </label>
                    {preparationsList.map((preparation, index) => (
                      <div key={index}>
                        <input
                          type="text"
                          id="preparation"
                          name="preparation"
                          value={preparation}
                          onChange={(e) => {
                            const newPreparationsList = [
                              ...preparationsList
                            ];
                            newPreparationsList[index] = e.target.value;
                            setPreparationsList(newPreparationsList);
                          }}
                          required
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />

                        {index > 0 && (
                          <button
                            class="my-2.5 mr-0 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            type="button"
                            onClick={() => removePreparation(index)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={addPreparation}
                      class="my-1.5 mr-0 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      Add Preparation
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div class="p-2">
                  <div class="relative">
                    <label
                      for="name"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Categories:
                    </label>
                    {categoriesList.map((category, index) => (
                      <div key={index}>
                        <input
                          type="text"
                          id="category"
                          name="category"
                          value={category}
                          onChange={(e) => {
                            const newCategoriesList = [...categoriesList];
                            newCategoriesList[index] = e.target.value;
                            setCategoriesList(newCategoriesList);
                          }}
                          required
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => removeCategory(index)}
                            class="my-2.5 mr-0 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addCategory}
                      class="my-1.5 mr-0 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      Add Category
                    </button>
                  </div>
                </div>

                {/* Country */}
                <div class="p-2">
                  <div class="relative">
                    <label
                      for="name"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Country:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                {/* Chef */}
                <div class="p-2">
                  <div class="relative">
                    <label
                      for="name"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Chef:
                    </label>
                    <select
                      value={selectedChef}
                      onChange={(e) => setSelectedChef(e.target.value)}
                      required
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="">Selecciona un chef</option>
                      {chefs.length > 0 &&
                        chefs.map((chefData) => (
                          <option
                            key={chefData._id}
                            value={chefData._id}
                          >
                            {chefData.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                {/* Image */}
                <div class="p-2">
                  <div class="relative">
                    <label
                      for="name"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Image:
                    </label>
                    <input
                      type="file"
                      id="name"
                      name="name"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div class="p-2 w-full">
                  <button
                    class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Agregar receta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormCreateRecipe;
