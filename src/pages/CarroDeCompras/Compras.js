import { Button } from "react-bootstrap";
import { useCarroDeCompras } from "../../context/CarroDeComprasContext";

const Compras = () => {
  const { items, agregarItem, eliminarItem, disminuirItem } =
    useCarroDeCompras();
  const total = items.reduce((accumulator, item) => {
    return accumulator + item.precio * item.cantidad;
  }, 0);
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
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>{item.cantidad}</td>
              <td>
                <Button
                  key={item.id}
                  onClick={() => {
                    disminuirItem(item.id);
                  }}
                >
                  -
                </Button>
              </td>
              <td>
                <Button
                  key={item.id}
                  onClick={() => {
                    eliminarItem(item.id);
                  }}
                >
                  X
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2"></td>
          <th>Total:</th>
          <td>{total}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Compras;
