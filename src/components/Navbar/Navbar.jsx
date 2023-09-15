import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light flex-row sm:text-lg bg-white">
      <a href="#" className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span className="text-cyan-700 self-center text-2xl font-semibold whitespace-nowrap">
          Rúben portfolio
        </span>
      </a>
      <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
     
      <ul className="flex items-center gap-3 max-md:hidden">
        <li>
          <NavLink to="/">INICIO</NavLink>
        </li>
        <li>
          <NavLink to="/">PROYECTOS</NavLink>
        </li>
        <li>
          <NavLink to="/">SOBRE MI</NavLink>
        </li>
        <li>
          <NavLink to="/">CONTACTO</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
