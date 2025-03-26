'use strict';
const Category = require('../models/category');
const {getModelAttributes} = require('../utils/database');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const {tableName , attributes} = getModelAttributes(Category);
    await queryInterface.createTable(tableName , attributes);
  },

  async down (queryInterface, Sequelize) {
    const tableName = getModelAttributes(Category);
    await queryInterface.dropTable(tableName);
  }
};

