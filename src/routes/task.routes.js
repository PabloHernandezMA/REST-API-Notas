//Rutas de Tasks
const { Router } = require("express"); //Traigo solo la funcion Router
const router = Router();

router.get("/", (req, res) => {
  res.send("Tasks");
});

router.post("/", (req, res) => {
  res.json("Saving a new Task");
});

module.exports = router;
