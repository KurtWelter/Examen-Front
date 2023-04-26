import s from "./Home.module.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <div className="home">
      <h2 className="Heading-title pl-3 mt-3">
        <p className={`${s.p}`}>Alimentos Perros</p>
      </h2>
      <div className="container overflow-hidden text-center">
        <div className="row gy-5">
          <div className="col-6 col-xs-12">
            <div className="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img className={`${s.img}`} src="/assets/img/perro.jpg" />
                <Card.Body>
                  <Card.Title className={`${s.title}`}>Purina </Card.Title>
                  <Card.Text>One +Plus Large Breed Adulto $24.900</Card.Text>
                  <Button className={`${s.button}`} type="submit">
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-6 col-xs-12">
            <div className="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img
                  className={`${s.img}`}
                  src="/assets/img/pedigree.PNG"
                />
                <Card.Body>
                  <Card.Title className={`${s.title}`}>Pedigree </Card.Title>
                  <Card.Text>Pedigree Adulto 12/2K $18.990</Card.Text>
                  <Button className={`${s.button}`} type="submit">
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-6 col-xs-12">
            <div className="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img
                  className={`${s.img}`}
                  src="/assets/img/championdog.jpg"
                />
                <Card.Body>
                  <Card.Title className={`${s.title}`}>
                    Champion Dog{" "}
                  </Card.Title>
                  <Card.Text>
                    Champion Dog Recetas de Pate sabor Pollo 315g $7.900
                  </Card.Text>
                  <Button className={`${s.button}`} type="submit">
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-6 col-xs-12">
            <div className="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img
                  className={`${s.img}`}
                  src="/assets/img/american.jpg"
                />
                <Card.Body>
                  <Card.Title className={`${s.title}`}>
                    American Journey{" "}
                  </Card.Title>
                  <Card.Text>
                    American Journey Protein & Grains Salmon, Brown Rice &
                    Vegetables Recipe Dry Dog Food $27.900
                  </Card.Text>
                  <Button className={`${s.button}`} type="submit">
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <h2 className="Heading-title pl-3 mt-3">
        <p className={`${s.p}`}>Alimentos Gatos</p>
      </h2>
      <div className="container overflow-hidden text-center">
        <div className="row gy-5">
          <div className="col-6 col-xs-12">
            <div className="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img className={`${s.img}`} src="/assets/img/gato.png" />
                <Card.Body>
                  <Card.Title className={`${s.title}`}>Purina </Card.Title>
                  <Card.Text>Dry Cat Food para 3-6 meses $18.900</Card.Text>
                  <Button className={`${s.button}`} type="submit">
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-6 col-xs-12">
            <div className="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img className={`${s.img}`} src="/assets/img/gato2.jpg" />
                <Card.Body>
                  <Card.Title className={`${s.title}`}>Meow Mix </Card.Title>
                  <Card.Text>Comida de gato adulto $24.900</Card.Text>
                  <Button className={`${s.button}`} type="submit">
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-6 col-xs-12">
            <div className="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img
                  className={`${s.img}`}
                  src="/assets/img/whiskas.jpg"
                />
                <Card.Body>
                  <Card.Title className={`${s.title}`}>Whiskas </Card.Title>
                  <Card.Text>
                    Sobres Whiskas de sabor Pollo, 12 sobres $17.900
                  </Card.Text>
                  <Button className={`${s.button}`} type="submit">
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-6 col-xs-12">
            <div className="p-3">
              <Card style={{ color: "#000" }}>
                <Card.Img className={`${s.img}`} src="/assets/img/purina.png" />
                <Card.Body>
                  <Card.Title className={`${s.title}`}>Purina </Card.Title>
                  <Card.Text>
                    Alimento humedo sabor Chiken & Cheese Entree $7.500{" "}
                  </Card.Text>
                  <Button className={`${s.button}`} type="submit">
                    Comprar
                  </Button>
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
