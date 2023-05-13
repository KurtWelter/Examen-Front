import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext(undefined);

export default function CarroDeComprasContextProvider({ children }) {
  const [items, setItems] = useState([]);

  const agregarItem = (item) => {
    const index = items.findIndex((producto) => producto.id === item.id);

    if (index === -1) {
      setItems((valorAnterior) => [...valorAnterior, { ...item, cantidad: 1 }]);
    } else {
      const listaActualizada = [...items];
      listaActualizada[index].cantidad += 1;
      setItems(listaActualizada);
    }
  };

  const eliminarItem = (itemId) => {
    const listaActualizada = items.filter((producto) => producto.id !== itemId);
    setItems(listaActualizada);
  };

  const disminuirItem = (itemId) => {
    const index = items.findIndex((producto) => producto.id === itemId);

    if (index !== -1) {
      const listaActualizada = [...items];
      listaActualizada.splice(index, 1);
      setItems(listaActualizada);
    }
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <Context.Provider
      value={{ items, agregarItem, eliminarItem, disminuirItem }}
    >
      <>{children}</>
    </Context.Provider>
  );
}

export const useCarroDeCompras = () => {
  return useContext(Context);
};
