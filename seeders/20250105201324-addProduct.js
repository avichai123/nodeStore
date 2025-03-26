'use strict';
const data = require('../data/products.json');
const ProductModel = require('../models/product');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tableName = ProductModel.tableName;
    const createdAt = new Date();
    const updatedAt = new Date();
    await queryInterface.bulkInsert(tableName, data.map(product => ({createdAt , updatedAt , ...product})) , {});
  },

  async down (queryInterface, Sequelize) {
    const tableName = ProductModel.tableName;
    await queryInterface.bulkDelete(tableName, null , {});
  }
};
