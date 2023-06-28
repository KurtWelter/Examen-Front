import React, { useEffect, useState } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/usuarios/");
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRegistration = async () => {
    const userData = {
      // Provide the user data here
      id: 4444,
      nombre: "KKK",
      apellido: "Doe",
      correo: "n.doe@example.com",
      contrasena: "password",
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/usuarios/",
        userData
      );
      console.log(response.data);
      // Handle the response
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle the error
    }
  };

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <p>Name: {user.nombre}</p>
          <p>Email: {user.correo}</p>
        </div>
      ))}
      <button onClick={handleRegistration}>Register User</button>
    </div>
  );
}

export default MyComponent;
