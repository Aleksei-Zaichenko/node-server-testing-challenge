const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(newEmployee) {
  return db('employees').insert(newEmployee, "id");
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('employees');
}

function findById(id) {
  return null;
}
