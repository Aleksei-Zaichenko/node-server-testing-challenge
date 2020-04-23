const express = require("express");

const Employees = require("../employees/employeesModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/employees", (req, res) => {
  Employees.getAll()
    .then(employees => {
      res.status(200).json(employees);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
