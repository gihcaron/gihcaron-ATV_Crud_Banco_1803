require ("dotenv").config();
const express = require("express");
const cors = require("cors");
const ingressoRoutes = require("./src/routes/ingressoRoutes");
const reportRoutes = require("./src/routes/reportRouter");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", ingressoRoutes);
app.use("/api", reportRoutes);

app.get("/", (req, res) => {
    res.send("Eu amo muito backend! ❤️");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(` Servidor Rodando em http://localhost:${PORT}`);
});