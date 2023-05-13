import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CrearCuenta from "./pages/Crearcuenta/CrearCuenta";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./Layout";
import Perfil from "./pages/Perfil/Perfil";
import IniciarSesion from "./pages/IniciarSesion/IniciarSesion";
import AboutUs from "./pages/AboutUs/AboutUs";
import Compras from "./pages/CarroDeCompras/Compras";
import CarroDeComprasContextProvider from "./context/CarroDeComprasContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/registro",
        element: <CrearCuenta />,
      },
      {
        path: "/perfil",
        element: <Perfil />,
      },
      {
        path: "/iniciar-sesion",
        element: <IniciarSesion />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/cart",
        element: <Compras />,
      },
    ],
  },
  //{
  // path: "/registro",
  // element: <CrearCuenta />,
  //},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CarroDeComprasContextProvider>
      <RouterProvider router={router} />
    </CarroDeComprasContextProvider>
  </React.StrictMode>
);
