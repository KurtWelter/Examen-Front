const express = require("express");
const app = express();
const PORT = 3000; // Puerto en el que se ejecutará el servidor

// Configuración de middleware para manejar datos JSON
app.use(express.json());

// Ruta para el registro de cuentas
app.post("/api/registro", (req, res) => {
  // Aquí puedes escribir el código para almacenar los datos de registro en una base de datos o cualquier otra lógica necesaria
  const { nombre, apellido, email, password } = req.body;

  // Ejemplo de respuesta exitosa
  res.status(200).json({ message: "Cuenta creada exitosamente" });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
