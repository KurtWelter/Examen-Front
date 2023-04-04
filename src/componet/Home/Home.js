import s from "./Home.module.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <div className="home">
      <h2 class="Heading-title pl-3 mt-3">
        <p class={`${s.p}`}>Alimentos Perros</p>
      </h2>
      <div class="container overflow-hidden text-center">
        <div class="row gy-5">
          <div class="col-6">
            <div class="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img class={`${s.img}`} src="/assets/img/perro.jpg" />
                <Card.Body>
                  <Card.Title class={`${s.title}`}>Purina </Card.Title>
                  <Card.Text>One +Plus Large Breed Adulto $24.900</Card.Text>
                  <Button class={`${s.button}`}>Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img class={`${s.img}`} src="/assets/img/pedigree.PNG" />
                <Card.Body>
                  <Card.Title class={`${s.title}`}>Pedigree </Card.Title>
                  <Card.Text>Pedigree Adulto 12/2K $18.990</Card.Text>
                  <Button class={`${s.button}`}>Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img
                  class={`${s.img}`}
                  src="/assets/img/championdog.jpg"
                />
                <Card.Body>
                  <Card.Title class={`${s.title}`}>Champion Dog </Card.Title>
                  <Card.Text>
                    Champion Dog Recetas de Pate sabor Pollo 315g $7.900
                  </Card.Text>
                  <Button class={`${s.button}`}>Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img class={`${s.img}`} src="/assets/img/american.jpg" />
                <Card.Body>
                  <Card.Title class={`${s.title}`}>
                    American Journey{" "}
                  </Card.Title>
                  <Card.Text>
                    American Journey Protein & Grains Salmon, Brown Rice &
                    Vegetables Recipe Dry Dog Food $27.900
                  </Card.Text>
                  <Button class={`${s.button}`}>Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <h2 class="Heading-title pl-3 mt-3">
        <p class={`${s.p}`}>Alimentos Gatos</p>
      </h2>
      <div class="container overflow-hidden text-center">
        <div class="row gy-5">
          <div class="col-6">
            <div class="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img class={`${s.img}`} src="/assets/img/gato.png" />
                <Card.Body>
                  <Card.Title class={`${s.title}`}>Purina </Card.Title>
                  <Card.Text>Dry Cat Food para 3-6 meses $18.900</Card.Text>
                  <Button class={`${s.button}`}>Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img class={`${s.img}`} src="/assets/img/gato2.jpg" />
                <Card.Body>
                  <Card.Title class={`${s.title}`}>Meow Mix </Card.Title>
                  <Card.Text>Comida de gato adulto $24.900</Card.Text>
                  <Button class={`${s.button}`}>Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img class={`${s.img}`} src="/assets/img/whiskas.jpg" />
                <Card.Body>
                  <Card.Title class={`${s.title}`}>Whiskas </Card.Title>
                  <Card.Text>
                    Sobres Whiskas de sabor Pollo, 12 sobres $17.900
                  </Card.Text>
                  <Button class={`${s.button}`}>Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img class={`${s.img}`} src="/assets/img/purina.png" />
                <Card.Body>
                  <Card.Title class={`${s.title}`}>Purina </Card.Title>
                  <Card.Text>
                    Alimento humedo sabor Chiken & Cheese Entree $7.500{" "}
                  </Card.Text>
                  <Button class={`${s.button}`}>Comprar</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
