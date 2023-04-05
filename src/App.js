import Navbar from "./componets/Navbar/Navbar";
import Home from "./componet/Home/Home";
import Perfil from "./componett/Perfil/Perfil";
import CrearCuenta from "./compon/Crearcuenta/CrearCuenta";
import IniciarSecion from "./compon/Crearcuenta/Iniciar/IniciarSecion/IniciarSecion";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />

        <div className="perfil">
          <Perfil />
          <div className="crear cuenta">
            <CrearCuenta />
            <div className="iniciar secion">
              <IniciarSecion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
