import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormCreateRecipe from '../../components/FormCreateRecipe/FormCreateRecipe';
import { useAuth } from "../../shared/AuthContext";





  

function RecipesPage() {

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9; 
  
  
  
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleAgregarRecetaClick = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const auth = useAuth();
  const { user } = useAuth();
  
  
  
  // Cantidad de recetas por página

  useEffect(() => {
    axios
      .get("http://localhost:5020/recipes")
      .then((response) => {
        setRecipes(response.data);

        // Extraer categorías únicas de las recetas
        const categories = response.data.map((recipe) => recipe.categories);
        const uniqueCategories = [...new Set(categories.flat())];
        setUniqueCategories(uniqueCategories.sort()); // Ordenar alfabéticamente
      })
      .catch((error) => {
        console.error("Error al obtener las recetas:", error);
      });
  }, []);

  // Función para manejar la selección de categorías
  const handleCategorySelection = (category) => {
    if (selectedCategories.includes(category)) {
      // Si la categoría ya está seleccionada, la eliminamos de la lista
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      // Si la categoría no está seleccionada, la agregamos a la lista
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Filtrar las recetas basadas en las categorías seleccionadas y el término de búsqueda
  const filteredRecipes = recipes.filter((recipe) => {
    // Filtrar por categorías seleccionadas (si hay categorías seleccionadas)
    if (selectedCategories.length > 0) {
      return (
        selectedCategories.every((category) =>
          recipe.categories.includes(category)
        ) && recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Si no hay categorías seleccionadas, solo aplicar la búsqueda por término
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Calcular el índice inicial y final de las recetas a mostrar en la página actual
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  // Función para cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Función para ir a la primera página
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  // Función para ir a la última página
  const goToLastPage = () => {
    const lastPage = Math.ceil(filteredRecipes.length / recipesPerPage);
    setCurrentPage(lastPage);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reiniciar a la primera página al cambiar la búsqueda
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  return (
    <>
      <div className="p-16">
        <div className="container px-5 pt-8 mx-auto">
          <div className="text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Recetas
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
        </div>



        {/* Barra de búsqueda */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-8 mx-auto flex flex-wrap items-center justify-center gap-2">
            <form className="w-full mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 shadow-lg rounded-full bg-white"
                  placeholder="Busca tu receta..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  required
                />
              </div>
            </form>

            {/* Filtro de categorías */}
            <div className="w-full mx-auto mt-4 relative">
              <button
                id="dropdownCheckboxButton"
                onClick={toggleDropdown}
                className={`text-white w-full h-12 bg-gradient-to-r from-violet-600 to-purple-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
                  isDropdownOpen ? "bg-blue-800" : ""
                }`}
                type="button"
              >
                Filtrar por categoría{" "}
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownDefaultCheckbox"
                className={`z-10 ${
                  isDropdownOpen ? "block" : "hidden"
                } w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-white border-2 border-violet-500 dark:divide-gray-600 max-h-60 overflow-y-auto`}
              >
                <ul
                  className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownCheckboxButton"
                >
                  {uniqueCategories.map((category, index) => (
                    <li key={index}>
                      <div className="flex items-center">
                        <input
                          id={`checkbox-item-${index}`}
                          type="checkbox"
                          value={category}
                          className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          onChange={() => handleCategorySelection(category)}
                          checked={selectedCategories.includes(category)}
                        />
                        <label
                          htmlFor={`checkbox-item-${index}`}
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-violet-500"
                        >
                          {category}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
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



      {/* Resultados de recetas */}

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-8 mx-auto">
            <div className="flex flex-wrap -m-4">
              {currentRecipes.length ? ( currentRecipes.map((recipe) => (
                  <div
                    className="p-4 md:w-1/2 lg:w-1/3 w-full"
                    key={recipe._id}
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
                          {recipe.chef.name}
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
                              Detalles
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
                            {recipe.comments.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No se encontraron recetas.</p>
              )}
            </div>
          </div>
        </section>

        {/* Paginación */}
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={goToFirstPage}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white ${
              currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : ""
            }`}
          >
            {"<<"}
          </button>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white ${
              currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : ""
            }`}
          >
            {"<"}
          </button>
          <ul className="flex space-x-2">
            {Array.from(
              { length: Math.ceil(filteredRecipes.length / recipesPerPage) },
              (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-3 py-2 rounded-xl text-white ${
                      currentPage === index + 1
                        ? "bg-gradient-to-r from-violet-600 to-purple-600"
                        : "bg-gradient-to-r from-violet-400 to-purple-400"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(filteredRecipes.length / recipesPerPage)
            }
            className={`px-3 py-2 rounded-xl  bg-gradient-to-r from-violet-600 to-purple-600 text-white ${
              currentPage === Math.ceil(filteredRecipes.length / recipesPerPage)
                ? "bg-gray-300 cursor-not-allowed"
                : ""
            }`}
          >
            {">"}
          </button>
          <button
            onClick={goToLastPage}
            disabled={
              currentPage === Math.ceil(filteredRecipes.length / recipesPerPage)
            }
            className={`px-3 py-2 rounded-xl  bg-gradient-to-r from-violet-600 to-purple-600 text-white ${
              currentPage === Math.ceil(filteredRecipes.length / recipesPerPage)
                ? "bg-gray-300 cursor-not-allowed"
                : ""
            }`}
          >
            {">>"}
          </button>
        </div>
      </div>
    </>
  );
}

export default RecipesPage;
