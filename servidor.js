import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;


// Ruta principal
app.get("/", (req, res) => {
  res.send("hola")
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
