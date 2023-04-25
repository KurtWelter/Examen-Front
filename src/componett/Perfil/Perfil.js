const Perfil = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Producto</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>John Doe</td>
          <td>Product A</td>
          <td>$24.900</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jane Smith</td>
          <td>Product B</td>
          <td>$17.900</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Smith</td>
          <td>Product C</td>
          <td>$7.500</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Perfil;
