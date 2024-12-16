require("dotenv").config(); // Carga variables de entorno
const express = require("express");
const mailRouter = require("./src/routes/mailRoutes");

const app = express();

app.use(express.json());
app.use("/api", mailRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
