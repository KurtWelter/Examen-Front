import s from "./Home.module.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCarroDeCompras } from "../../context/CarroDeComprasContext";
import { useEffect, useState } from "react";
import axios from "axios";

const productos = [
  {
    id: "1",
    nombre: "Purina",
    descripcion: "One +Plus Large Breed Adulto",
    precio: 24900,
    imagenURL: "/assets/img/perro.jpg",
    cantidad: 1,
  },
  {
    id: "2",
    nombre: "Pedigree",
    descripcion: "Pedigree Adulto 12/2K",
    precio: 18900,
    imagenURL: "/assets/img/pedigree.PNG",
    cantidad: 1,
  },
  {
    id: "3",
    nombre: "Champion Dog",
    descripcion: "Champion Dog Recetas de Pate sabor Pollo 315g",
    precio: 7900,
    imagenURL: "/assets/img/championdog.jpg",
    cantidad: 1,
  },
  {
    id: "4",
    nombre: "American Journey ",
    descripcion:
      "American Journey Protein & Grains Salmon, Brown Rice & Vegetables Recipe Dry Dog Food",
    precio: 27900,
    imagenURL: "/assets/img/american.jpg",
    cantidad: 1,
  },
  {
    id: "5",
    nombre: "Purina",
    descripcion: "Dry Cat Food para 3-6 meses",
    precio: 18900,
    imagenURL: "/assets/img/gato.png",
    cantidad: 1,
  },
  {
    id: "6",
    nombre: "Meow Mix",
    descripcion: "Comida de gato adulto",
    precio: 24900,
    imagenURL: "/assets/img/gato2.jpg",
    cantidad: 1,
  },
  {
    id: "7",
    nombre: "Whiskas",
    descripcion: "Sobres Whiskas de sabor Pollo, 12 sobres",
    precio: 17900,
    imagenURL: "/assets/img/whiskas.jpg",
    cantidad: 1,
  },
  {
    id: "8",
    nombre: "Purina",
    descripcion: "Alimento humedo sabor Chiken & Cheese Entree",
    precio: 7500,
    imagenURL: "/assets/img/purina.png",
    cantidad: 1,
  },
];

const Home = () => {
  const [data, setData] = useState({ alimentoPerro: [], alimentoGato: [] });

  useEffect(() => {
    getAlimentoPerro();
    getAlimentoGato();
  }, []);
  console.log(data);

  const getAlimentoPerro = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/alimentos-perros/"
      );
      //console.log(response);
      setData((prev) => ({ ...prev, alimentoPerro: response.data }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getAlimentoGato = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/alimentos-gatos/"
      );
      /*console.log(response);*/
      setData((prev) => ({ ...prev, alimentoGato: response.data }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const { agregarItem } = useCarroDeCompras();
  return (
    <div className="home">
      <h2 className="Heading-title pl-3 mt-3">
        <p className={`${s.p}`}>Alimentos</p>
      </h2>
      <div className="container overflow-hidden text-center">
        <Container>
          <Row className="g-2">
            {data.alimentoPerro.map((producto) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} key={producto.id}>
                  <Card style={{ color: "#000" }}>
                    <Card.Img className={`${s.img}`} src={producto.imagenURL} />
                    <Card.Body>
                      <Card.Title className={`${s.title}`}>
                        {producto.nombre}
                      </Card.Title>
                      <Card.Text>
                        {producto.descripcion} ${producto.precio}
                      </Card.Text>
                      <Button
                        onClick={() => {
                          agregarItem(producto);
                        }}
                        className={`${s.button}`}
                        type="submit"
                      >
                        Comprar
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
            {data.alimentoGato.map((producto) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} key={producto.id}>
                  <Card style={{ color: "#000" }}>
                    <Card.Img className={`${s.img}`} src={producto.imagenURL} />
                    <Card.Body>
                      <Card.Title className={`${s.title}`}>
                        {producto.nombre}
                      </Card.Title>
                      <Card.Text>
                        {producto.descripcion} ${producto.precio}
                      </Card.Text>
                      <Button
                        onClick={() => {
                          agregarItem(producto);
                        }}
                        className={`${s.button}`}
                        type="submit"
                      >
                        Comprar
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
