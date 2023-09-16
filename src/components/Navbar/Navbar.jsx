import { NavLink } from "react-router-dom";
import MyLogo from "../../assets/logo_ruben_dark.png";
import { ReactComponent as Oscuro } from "../../assets/oscuro.svg";

const Navbar = () => {
  const activeStyle =
    "hover:text-zinc-700 font-bold underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light flex-row sm:text-lg bg-zinc-100">
      <a href="/" className="flex items-center">
        <img src={MyLogo} className="h-10 mr-3" alt="Flowbite Logo" />
      </a>
      <div className="flex items-center gap-4">
        <div className="hidden h-6 w-6 rounded-full bg-black max-md:flex items-center justify-center  ">
          <Oscuro className="h-4 w-4 bg-transparent" />
        </div>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <ul className="flex items-center gap-5 max-md:hidden font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeStyle : `${undefined} hover:text-zinc-700`
            }
          >
            INICIO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeStyle : `${undefined} hover:text-zinc-700`
            }
          >
            PROYECTOS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeStyle : `${undefined} hover:text-zinc-700`
            }
          >
            SOBRE MI
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeStyle : `${undefined} hover:text-zinc-700`
            }
          >
            CONTACTO
          </NavLink>
        </li>
        <li>
          <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center ">
            <Oscuro className="h-4 w-4 bg-transparent" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
