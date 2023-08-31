import express from "express";
import { require } from "./utils.js";

const users = require("./users.json");

const app = express();

// Home de la API
app.get("/", (req, res) => {
  res.send("<h1>API REST de usuarios</h1>");
});

// Obtener todos los usuarios
app.get("/users", (req, res) => {
  // Si no hay usuarios
  if (users.length === 0) {
    return res.status(404).json({ error: "No hay usuarios" });
  }
  // Si hay usuarios
  return res.json(users);
});

// Obtener un usuario por su id
app.get("/users/:id", (req, res) => {
  // Obtener el id
  const id = req.params.id;
  res.send(`Usuario ${id}`);
});

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
