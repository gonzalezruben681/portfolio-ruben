import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

const AppRoutes = () => {
  let routes = useRoutes([
    {path: "/", element: <Home />},
    {path: "/projects", element: <Projects />},
    {path: "/about", element: <About />},
    {path: "/contact", element: <Contact />},
    {path: "*", element: <NotFound />},
  ])
  return routes
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
}


export default App;
