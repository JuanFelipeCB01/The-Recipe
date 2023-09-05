import React from "react";
import { useAuth } from "../../shared/AuthContext";
import FormEditUser from "../../components/FormEditUser/FormEditUser";

export default function ProfilePage() {
  const { user } = useAuth();
  console.log(user);

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
        <FormEditUser userId={user._id} /> {/* Añade userId aquí */}
      </div>
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(/img/banner.png)` }}
      >
        <div className="dark:!border-navy-700 absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
          <img
            className="h-full w-full rounded-full"
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png"
            alt=""
          />
        </div>
      </div>
 
      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-navy-700 text-xl font-bold dark:text-white">
          Adela Parkson
        </h4>
        <h5 className="text-base font-normal text-gray-600">Product Manager</h5>
      </div>
 
      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-navy-700 text-2xl font-bold dark:text-white">
            17
          </h4>
          <p className="text-sm font-normal text-gray-600">Posts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-navy-700 text-2xl font-bold dark:text-white">
            9.7K
          </h4>
          <p className="text-sm font-normal text-gray-600">Followers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-navy-700 text-2xl font-bold dark:text-white">
            434
          </h4>
          <p className="text-sm font-normal text-gray-600">Following</p>
        </div>
      </div>

      
    </>
  );
}
