import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../shared/AuthContext";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const logout = () =>{
    auth.clearAuth();
    navigate('/login');
  };

  return (
    <nav
      className={`w-full bg-purple-500 shadow top-0`}
      style={{ zIndex: 1000, height: 72 }} // Asegura que el menú esté por encima del contenido
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 relative">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-white">LOGO</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {/* ... (iconos de cierre de menú) */}
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {/* ... (iconos de hamburguesa) */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                    
                    
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
        <div
  className={`absolute top-full right-0 bg-purple-500 z-10 transform z-900 w-2/6 rounded-lg ${
    navbar
      ? "translate-x-0 opacity-100 transition-transform ease-in"
      : "translate-x-full opacity-0 transition-transform ease-in"
  } md:relative md:scale-y-100 md:opacity-100 md:flex md:space-x-6 md:bg-transparent md:transform-none md:space-y-0`}
>
            <ul className="items-center justify- space-y-8 md:flex md:space-x-6 md:space-y-0 mr-4">
              {/* ... (elementos del menú) */}
              <li className="text-white text-end hover:text-indigo-200">
              <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-white text-end hover:text-indigo-200">
              <NavLink to="/recipes">Recipes</NavLink>
              </li>
              <li className="text-white text-end hover:text-indigo-200">
              <NavLink to="/ingredients">Ingredients</NavLink>
              </li>
              {auth.isAuthenticated && (
                <li className="text-white text-end hover:text-indigo-200">
                <NavLink to="/profile">Profile</NavLink>
                </li>
              )}
              <li className="text-white text-end hover:text-indigo-200">
              <NavLink to="/contact">Contact</NavLink>
              </li>
              
            </ul>
            {navbar && (
              <div className="md:hidden space-y-4 mt-6 mb-3 mr-3 flex justify-end flex-col items-end">
                {/* ... (enlaces adicionales para dispositivos móviles) */}
                {auth.isAuthenticated ? (
                  <button onClick={logout}> 
                  <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" style={{color: "#ffffff",}} />
                  </button>
                ) : (
                  <>
                  <NavLink to="/register"
                    className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 block w-fit "
                  >
                    Register
                    </NavLink>
                    <NavLink to="/login"
                    className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 block w-20 flex justify-center"
                  >
                    <p>Login</p>
                  </NavLink>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          {/* ... (enlaces para dispositivos de escritorio) */}
          {auth.isAuthenticated ? (
            <button onClick={logout}> 
            <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" style={{color: "#ffffff",}} />
            </button>
          ) : (
            <>
            <NavLink to="/register"
            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
          >
            Register
            </NavLink>
            <NavLink to="/login"
            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
          >
            Login
            </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}