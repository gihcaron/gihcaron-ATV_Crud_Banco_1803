const express = require("express");
const router = express.Router();

const reportController = require("../controllers/reportController");

// Rota para exportar relatório em PDF
router.get("/report/pdf", reportController.exportIngressoPDF);

module.exports = router;