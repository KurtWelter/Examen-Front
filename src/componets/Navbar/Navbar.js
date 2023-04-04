import s from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav class="navbar bg-dark" data-bs-theme="dark">
      <nav className={`${s.navbar} ${s.text}`}>
        <div className="links">
          <img src="/assets/img/pet.PNG" alt="Muestra el Logo de la compañia" />
          <a className={`${s.text}`} href="Home.js">
            Home
          </a>
          <a className={`${s.text}`} href="/Perfil.js">
            Perfil
          </a>
          <a className={`${s.text}`} href="/create">
            About us
          </a>
          <a className={`${s.text}`} href="">
            Carro de Compras
          </a>
          <a className={`${s.text}`} href="">
            Iniciar Secion
          </a>
          <a className={`${s.text}`} href="">
            Crear Cuenta
          </a>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
