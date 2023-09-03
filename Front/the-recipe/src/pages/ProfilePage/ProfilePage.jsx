import React from "react";
import { useAuth } from "../../shared/AuthContext";


export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <>
    <h1>Profile Page</h1>
    <div>
      <img src={user.image} alt={user.name} />
      <h2>{user.name}</h2>
      <p>Edad: {user.age}</p>
      <p>Email: {user.email}</p>
      <div>
        <h2>Recetas</h2>
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
      <div>
        <h3>Comentarios</h3>
        <ul>
          {user.comments.length &&
            user.comments?.map((comments) => (
              <li>
                <p>{comments.content}</p>
                <p>Fecha del comentario: {comments.updatedAt}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
    </>
  );
};