import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecipesPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5020/recipes')
      .then((response) => {
        setRecipes(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error al obtener las recetas:', error);
      });
  }, []);

  return (
    <div>
        <h1>Recetas</h1>
        <ul>
            {recipes.length && recipes.map((recipe) => (
            <li key={recipe._id}>
                <h2>{recipe.name}</h2>
                <p>{recipe.description}</p>

                <ul>
                    {recipe.ingredients.length && recipe.ingredients?.map((ingredient) => (
                        <>
                        <li>
                        {ingredient?.ingredient?.name}
                        </li>
                        <li>
                        {ingredient?.quantity}
                        </li>
                        </>
                    ))}
                </ul>

                <ul>
                    {recipe.comments.length && recipe.comments?.map((comments) => (
                        <>
                        <li>
                        {comments?.name.name}
                        </li>
                        <li>
                        {comments?.content}
                        </li>
                        </>
                    ))}
                </ul>

                {/*                 
                <p>{recipe.country}</p>
                <p>{recipe.comments}</p>
                <p>{recipe.chef}</p>
                <p>{recipe.likes}</p> */}
            </li>
            ))}
        </ul>
    </div>
  );
}

export default RecipesPage;
// Asegúrate de importar y usar este componente en tu aplicación principal de React.

// Este código realizará una solicitud GET al backend cuando el componente se monte y mostrará las recetas en la página. Asegúrate de que tu servidor Node.js esté en funcionamiento y que la ruta /recipes esté configurada correctamente para devolver los datos de las recetas en formato JSON.




// name, description, ingredients, preparations, categories, country, comments, chef, image, likes



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from "react-router-dom";



// function RecipesPage(){
//     const [recipes, setRecipes] = useState([]);
//     // const [charactersCopy, setCharactersCopy] = useState([]);

//     const arrayRecipes = [...recipes];
//     const getRecipes = async () => {
//         const resultado = await axios('http://localhost:5020/recipes');
//         setRecipes(resultado.data);
//     }

//     useEffect(() => {
//         getRecipes();
//     }, [])

//     return (
//         <>
//         <h1>RecipesPage</h1>
//         <h2>{recipes.name}</h2>
//         </>
//     )
// }

// export default RecipesPage




// const CharactersPage = () => {
//     const [characters, setCharacters] = useState([]);
//     const [charactersCopy, setCharactersCopy] = useState([]);

// const arrayCharacter = [...characters];
//     const getCharacters = async () => {
//         const resultado = await axios('http://localhost:3333/characters');
//         setCharacters(resultado.data);
//     }

//     useEffect(() => {
//         getCharacters();
//     }, [])
//     useEffect(() => {
//       setCharactersCopy([...characters]);
//   }, [characters])

//   const filteredCharacters = (value) => {

//     const filtered = characters.filter((character => character.name.toLowerCase().includes(value.toLowerCase())));
//     console.log(filtered);
//     if (filtered.length > 0) {
//       setCharactersCopy ([...filtered])
//     } else {
//       setCharactersCopy([...arrayCharacter]);
//     }

//     (   <>
       
       
          
//        <div className='container'>

//        <div className='container-characters'>
//                 {charactersCopy.map((character, index) => (
//                     <div className='characters' key={index}>
//                     <Link to={`/characters/${character.id}`}>
//                         <img src={`http://localhost:3333/${character.image}`} alt={character.name} /> </Link> 
//                         <h2>{character.name}</h2>
//                     </div>
//                 ))}
//                 </div>
//             </div>
            
    
            
//             </>
//         );

// }