const { Router } = require("express");
const {
  getAllMateriel,
  addMateriel,
  updateMateriel,
  deleteMateriel,
} = require("../controller/materiel.controller");

const materielRoute = Router();

materielRoute.get("/api/materiels", getAllMateriel);

materielRoute.post("/api/materiels", addMateriel);

materielRoute.patch("/api/materiels/:id", updateMateriel);

materielRoute.delete("/api/materiels/:id", deleteMateriel);

module.exports = materielRoute;
