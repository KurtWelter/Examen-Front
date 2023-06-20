import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className={`${s.navbar} ${s.text}`}>
        <img src="/assets/img/pet.PNG" alt="Muestra el Logo de la compañia" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`${s.text} nav-link`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${s.text} nav-link`} to="/perfil">
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${s.text} nav-link`} to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${s.text} nav-link`} to="/cart">
                Carro de Compras
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${s.text} nav-link`} to="/iniciar-sesion">
                Iniciar Sesion
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${s.text} nav-link`} to="/registro">
                Crear Cuenta
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
