'use strict';
const data = require('../data/productImages.json');
const ProductImage = require('../models/productImage');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tableName = ProductImage.tableName;
    await queryInterface.bulkInsert(tableName, data.map(image => ({...image})) , {});
  },

  async down (queryInterface, Sequelize) {
    const tableName = ProductImage.tableName;
    await queryInterface.bulkDelete(tableName, null , {});
  }
};
