'use strict';
const ProductCategory = require('../models/productCategories');
const {getModelAttributes} = require('../utils/database');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const {tableName , attributes} = getModelAttributes(ProductCategory);
    await queryInterface.createTable(tableName , attributes);
  },

  async down (queryInterface, Sequelize) {
    const tableName = getModelAttributes(ProductCategory);
    await queryInterface.dropTable(tableName);
  }
};

