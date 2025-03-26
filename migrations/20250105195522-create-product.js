'use strict';
/** @type {import('sequelize-cli').Migration} */
const ProductModel = require('../models/product');
const {getModelAttributes} = require('../utils/database');
module.exports = {
  async up(queryInterface, Sequelize) {
    const {tableName , attributes} = getModelAttributes(ProductModel);
    await queryInterface.createTable(tableName , attributes);
  },
  async down(queryInterface, Sequelize) {
    const tableName = getModelAttributes(ProductModel);
    await queryInterface.dropTable(tableName);
  }
};