const express = require("express");
const server = express();
const cors = require("cors");

const router = require("./routers/index");
const { conn } = require("./DB_connection");
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://proyecto-integrador-jet.vercel.app/");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(cors());
server.use(express.json());
server.use("/rickandmorty", router);
conn.sync({ alter: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("Server raised in port: " + process.env.PORT);
  });
});
