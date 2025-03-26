'use strict';
const data = require('../data/categories.json');
const Category = require('../models/category');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tableName = Category.tableName;
    await queryInterface.bulkInsert(tableName, data.map(category => ({...category})) , {});
  },

  async down (queryInterface, Sequelize) {
    const tableName = Category.tableName;
    await queryInterface.bulkDelete(tableName, null , {});
  }
};
