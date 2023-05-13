import { useCarroDeCompras } from "../../context/CarroDeComprasContext";

const Compras = () => {
  const { items, agregarItem } = useCarroDeCompras();

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>{item.cantidad}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Compras;
