import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/axios.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateRecipeForm() {
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
      const formattedIngredients = ingredientsList.map(
        (ingredientId, index) => ({
          ingredient: ingredientId,
          quantity: ingredientQuantities[index],
        })
      );

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
        setMessage("Recipe registered successfully!");
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div>
      <h2>Recipe Registration</h2>
      <form onSubmit={createRecipe} className="bg-violet-400 p-2">
        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* Description */}
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        {/* Ingredients */}
        <div className="bg-violet-200">
          <label>Ingredients:</label>
          {ingredientsList.map((ingredient, index) => (
            <div key={index}>
              <select
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
                    <option key={ingredientData._id} value={ingredientData._id}>
                      {ingredientData.name}
                    </option>
                  ))}
              </select>
              <input
                type="text"
                value={ingredientQuantities[index]}
                onChange={(e) => {
                  const newIngredientQuantities = [...ingredientQuantities];
                  newIngredientQuantities[index] = e.target.value;
                  setIngredientQuantities(newIngredientQuantities);
                }}
                placeholder="Cantidad"
                required
              />
              {index > 0 && (
                <button type="button" onClick={() => removeIngredient(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addIngredient}>
            Add Ingredient
          </button>
        </div>
        {/* Preparations */}
        <div className="bg-violet-200">
          <label>Preparations:</label>
          {preparationsList.map((preparation, index) => (
            <div key={index}>
              <input
                type="text"
                value={preparation}
                onChange={(e) => {
                  const newPreparationsList = [...preparationsList];
                  newPreparationsList[index] = e.target.value;
                  setPreparationsList(newPreparationsList);
                }}
                required
              />
              {index > 0 && (
                <button type="button" onClick={() => removePreparation(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addPreparation}>
            Add Preparation
          </button>
        </div>
        {/* Categories */}
        <div className="bg-violet-200">
          <label>Categories:</label>
          {categoriesList.map((category, index) => (
            <div key={index}>
              <input
                type="text"
                value={category}
                onChange={(e) => {
                  const newCategoriesList = [...categoriesList];
                  newCategoriesList[index] = e.target.value;
                  setCategoriesList(newCategoriesList);
                }}
                required
              />
              {index > 0 && (
                <button type="button" onClick={() => removeCategory(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addCategory}>
            Add Category
          </button>
        </div>
        {/* Country */}
        <div>
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        {/* Chef */}
        <div className="bg-violet-200">
          <label>Chef:</label>
          <select
            value={selectedChef}
            onChange={(e) => setSelectedChef(e.target.value)}
            required
          >
            <option value="">Selecciona un chef</option>
            {chefs.length > 0 &&
              chefs.map((chefData) => (
                <option key={chefData._id} value={chefData._id}>
                  {chefData.name}
                </option>
              ))}
          </select>
        </div>
        {/* Image */}
        <div>
          <label>Image:</label>
          <input
            type="file"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateRecipeForm;
