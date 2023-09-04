import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axios.js";
import { useAuth } from "../../shared/AuthContext.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/user/login", {
        email,
        password,
      });
      console.log(response.data);

       if(response.data.token){
        auth.saveUser(response);
        navigate(`/profile`);
      };

    } catch (err) {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <div>
      <div class="flex justify-center">
        <div class="flex flex-col justify-center">
          <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div class="overflow-hidden w-full m-4 flex justify-center bg-gray-50 rounded-lg shadow-xl">
              <div class="flex flex-col md:flex-row items-center shadow-md h-full  ">
                <div class="  md:w-1/2 overflow-hidden ">
                  <div class="flex flex-col items-center justify-center text-stone-400">
                    <ion-icon
                      name="logo-amplify"
                      class="text-5xl text-fuchsia-600"
                    ></ion-icon>
                    <div class="flex flex-col">
                    <div class="mb-16">
                      <section class="text-gray-600 body-font">
                        <div class="container px-5  mx-auto">
                          <div class="text-center">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Accede a tu cuenta</h1>
                            <div class="flex mt-6 justify-center">
                              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                      <form onSubmit={handleLogin}>
                        <div class="m-2">EMAIL</div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          class="border-b m-2  bg-gray-50 focus:outline-none"
                        />

                        <div class="m-2">CONTRASEÑA</div>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          class="border-b m-2  bg-gray-50  focus:outline-none"
                        />
                      <div class="flex m-2">
                        <input
                          class="border-b  border-stone-400 "
                          type="checkbox"
                        />
                        <div class="ml-1">Recordarme</div>
                      </div>
                      <div class="flex m-2">
                        <button 
                        type="submit"
                        class="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium">
                          INICIAR SESIÓN
                        </button>
                      </div>
                      </form>
                      {error && <p>{error}</p>}
                      <a href="/login" class="m-2 hover:text-purple-700">¿Has olvidado tu contraseña?</a>
                    </div>
                  </div>
                </div>
                <div class=" md:w-1/2 overflow-hidden ">
                  <img
                    src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693650432/food_menu_hmxsec.jpg"
                    alt=""
                    class=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Login;
