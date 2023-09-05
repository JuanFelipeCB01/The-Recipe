import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../shared/AuthContext";

export default function NavBar() {
  const [scrollReached20Percent, setScrollReached20Percent] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();

  const isHomeRoute = location.pathname === "/";

  const logout = () => {
    auth.clearAuth();
    navigate("/login");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate the 20% scroll position
      const twentyPercent = (windowHeight * 40) / 100;

      // Check if the scroll position is greater than or equal to 20%
      if (scrollY >= twentyPercent) {
        setScrollReached20Percent(true);
      } else {
        setScrollReached20Percent(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed ${
        isHomeRoute
          ? scrollReached20Percent
            ? "bg-gradient-to-r from-violet-500 to-purple-500 rounded-b-3xl shadow-xl transition-all duration-300 ease-in-out"
            : "bg-transparent"
          : "bg-gradient-to-r from-violet-500 to-purple-500 rounded-b-3xl shadow-xl"
      } top-0`}
      style={{ zIndex: 1000, height: 72 }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/dc3pogjef/image/upload/v1693815536/bowl-with-spoon-svgrepo-com_1_mvy5p5.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Reciper
          </span>
        </a>
        <div className="flex md:order-2 gap-3">
          {auth.isAuthenticated ? (
            <button
              onClick={logout}
              className={`${
                isHomeRoute
                  ? scrollReached20Percent
                    ? "px-4 py-2 text-white bg-gradient-to-r from-orange-600 to-orange-600 rounded-md shadow hover:bg-gray-800 transition-all duration-1000 ease-in-out"
                    : "px-4 py-2 text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-md shadow hover:bg-gray-800"
                  : "px-4 py-2 text-white bg-gradient-to-r from-orange-600 to-orange-600 rounded-md shadow hover:bg-gray-800"
              }`}
            >
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                size="xl"
                style={{ color: "#ffffff" }}
              />
            </button>
          ) : (
            <>
              <NavLink
                to="/register"
                className={`${
                  isHomeRoute
                    ? scrollReached20Percent
                      ? "hidden md:block px-4 py-2 text-white bg-gradient-to-r from-orange-600 to-orange-600 rounded-md shadow hover:bg-gray-800 transition-all duration-1000 ease-in-out"
                      : "hidden md:block px-4 py-2 text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-md shadow hover:bg-gray-800"
                    : "hidden md:block px-4 py-2 text-white bg-gradient-to-r from-orange-600 to-orange-600 rounded-md shadow hover:bg-gray-800"
                }`}
                onClick={closeMenu}
              >
                Registrate
              </NavLink>
              <NavLink
                to="/login"
                className={`${
                  isHomeRoute
                    ? scrollReached20Percent
                      ? "hidden md:block px-4 py-2 text-white bg-gradient-to-r from-orange-600 to-orange-600 rounded-md shadow hover:bg-gray-800 transition-all duration-1000 ease-in-out"
                      : "hidden md:block  px-4 py-2 text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-md shadow hover:bg-gray-800 "
                    : "hidden md:block px-4 py-2 text-white bg-gradient-to-r from-orange-600 to-orange-600 rounded-md shadow hover:bg-gray-800 "
                }`}
                onClick={closeMenu}
              >
                Accede
              </NavLink>
            </>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none hover:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center  md:bg-transparent p-3 rounded-lg justify-between items-center w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 font-medium rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-violet-500 md:bg-transparent text-white ">
            <li className=" md:bg-transparent rounded-lg  hover:bg-violet-700">
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="bg-transparent rounded-lg  hover:bg-violet-700">
              <NavLink to="/recipes" onClick={closeMenu}>
                Recipes
              </NavLink>
            </li>
            <li className="bg-transparent rounded-lg  hover:bg-violet-700">
              <NavLink to="/ingredients" onClick={closeMenu}>
                Ingredients
              </NavLink>
            </li>
            {auth.isAuthenticated && (
              <li className="bg-transparent rounded-lg  hover:bg-violet-700">
                <NavLink to="/profile" onClick={closeMenu}>
                  Profile
                </NavLink>{" "}
              </li>
            )}
            <li className="bg-transparent rounded-lg  hover:bg-violet-700">
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Botones de Login y Register */}
          {!auth.isAuthenticated && (
            <div className="mt-1 space-y-1">
              <NavLink
                to="/login"
                className="md:hidden block px-4 py-2 text-white bg-gradient-to-r from-orange-600 to-orange-600 rounded-md shadow hover:bg-gray-800 transition-all duration-1000 ease-in-out"
                onClick={closeMenu}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="md:hidden block px-4 py-2 text-white bg-gradient-to-r from-orange-600 to-orange-600 rounded-md shadow hover:bg-gray-800 transition-all duration-1000 ease-in-out"
                onClick={closeMenu}
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
