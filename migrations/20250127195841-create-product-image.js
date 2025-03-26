'use strict';
const ProductImage = require('../models/productImage');
const {getModelAttributes} = require('../utils/database');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const {tableName , attributes} = getModelAttributes(ProductImage);
    await queryInterface.createTable(tableName , attributes);
  },

  async down (queryInterface, Sequelize) {
    const tableName = getModelAttributes(ProductImage);
    await queryInterface.dropTable(tableName);
  }
};
