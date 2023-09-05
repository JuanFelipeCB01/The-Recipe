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
    <div className="p-16">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div className="overflow-hidden w-full m-4 flex justify-center bg-gray-50 rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row items-center shadow-md h-full  ">
                <div className="  md:w-1/2 overflow-hidden ">
                  <div className="flex flex-col items-center justify-center text-stone-400">
                    <ion-icon
                      name="logo-amplify"
                      className="text-5xl text-fuchsia-600"
                    ></ion-icon>
                    <div className="flex flex-col">
                    <div className="mb-16">
                      <section className="text-gray-600 body-font">
                        <div className="container px-5  mx-auto">
                          <div className="text-center">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Accede a tu cuenta</h1>
                            <div className="flex mt-6 justify-center">
                              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                      <form onSubmit={handleLogin}>
                        <div className="m-2">EMAIL</div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="border-b m-2  bg-gray-50 focus:outline-none"
                        />

                        <div className="m-2">CONTRASEÑA</div>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="border-b m-2  bg-gray-50  focus:outline-none"
                        />
                      <div className="flex m-2">
                        <input
                          className="border-b  border-stone-400 "
                          type="checkbox"
                        />
                        <div className="ml-1">Recordarme</div>
                      </div>
                      <div className="flex m-2">
                        <button 
                        type="submit"
                        className="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium">
                          INICIAR SESIÓN
                        </button>
                      </div>
                      </form>
                      {error && <p>{error}</p>}
                      <a href="/login" className="m-2 hover:text-purple-700">¿Has olvidado tu contraseña?</a>
                    </div>
                  </div>
                </div>
                <div className=" md:w-1/2 overflow-hidden ">
                  <img
                    src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693650432/food_menu_hmxsec.jpg"
                    alt=""
                    className=""
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
