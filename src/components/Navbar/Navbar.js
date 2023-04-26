import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className={`${s.navbar} ${s.text}`}>
        <img src="/assets/img/pet.PNG" alt="Muestra el Logo de la compañia" />
        <Link className={`${s.text}`} to="/">
          Home
        </Link>
        <Link className={`${s.text}`} to="/perfil">
          Perfil
        </Link>
        <Link className={`${s.text}`} to="/about">
          About us
        </Link>
        <Link className={`${s.text}`} to="/cart">
          Carro de Compras
        </Link>
        <Link className={`${s.text}`} to="/iniciar-sesion">
          Iniciar Sesion
        </Link>
        <Link className={`${s.text}`} to="/registro">
          Crear Cuenta
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
