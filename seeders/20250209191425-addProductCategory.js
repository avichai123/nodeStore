'use strict';
const data = require('../data/productCategories.json');
const ProductCategory = require('../models/productCategories');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tableName = ProductCategory.tableName;
    await queryInterface.bulkInsert(tableName, data.map(product => ({...product})) , {});
  },

  async down (queryInterface, Sequelize) {
    const tableName = ProductCategory.tableName;
    await queryInterface.bulkDelete(tableName, null , {});
  }
};
