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

server.post("/employees", (req, res) => {
  const newEmmployee = req.body;

  Employees.insert(newEmmployee)
    .then(newId =>{
      res.status(201).json({message: 'employee was added successfully'});
    })
    .catch(
      res.status(500).json({message: error.message})
    )
});

module.exports = server;
