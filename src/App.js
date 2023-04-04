import Navbar from "./componets/Navbar/Navbar";
import Home from "./componet/Home/Home";
import Perfil from "./componett/Perfil/Perfil";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />

        <div className="perfil">
          <Perfil />
        </div>
      </div>
    </div>
  );
}

export default App;
