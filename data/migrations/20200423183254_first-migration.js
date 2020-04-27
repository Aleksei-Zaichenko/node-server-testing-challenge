exports.up = function(knex, Promise) {
    return knex.schema.createTable('employees', tbl => {
      tbl.increments();
  
      tbl.string('name', 255).notNullable().index();
      tbl.string('department', 255).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    // undo the operation in up
    return knex.schema.dropTableIfExists('employees');
  };
  