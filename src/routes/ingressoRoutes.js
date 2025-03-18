const express = require("express");
const router = express.Router();
const ingressoController = require("../controllers/ingressoController");

router.post("ingressos", ingressoController.getAllUsers);
router.get("ingressos/:id", ingressoController.getUser);
router.get("ingressos", ingressoController.createUser);
router.put("ingressos/:id", ingressoController.updateUser);
router.delete("ingressos/:id", ingressoController.deleteUser);

module.exports = router;
