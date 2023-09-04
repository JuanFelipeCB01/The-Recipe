import React from "react";
import { useAuth } from "../../shared/AuthContext";
import FormEditUser from "../../components/FormEditUser/FormEditUser";

export default function ProfilePage() {
  const { user } = useAuth();
  console.log(user);

  return (
  <>
      <div>
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
        <div class="container px-5 py-24 mx-auto">
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
                <div>
                  {user.role === "admin" ? (
                    <h2 class="text-gray-500 text-2xl">Recetas creadas</h2>
                  ):(
                    <h2 class="text-gray-500 text-2xl">Favoritos</h2>
                  )}
                  
                  <ul>
                    {user.recipes.length &&
                      user.recipes?.map((recipe) => (
                        <li>
                          <h3>{recipe.name}</h3>
                          <p>{recipe.description}</p>
                        </li>
                      ))}
                  </ul>
                </div>
                {/* <div>
                  <h3 class="text-gray-500 text-2xl">Comentarios</h3>
                  <ul>
                    {user.comments.length &&
                      user.comments?.map((comments) => (
                        <li>
                          <p>{comments.content}</p>
                          <p>Fecha del comentario: {comments.updatedAt}</p>
                        </li>
                      ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
    </section> 
  </>
  );
}
