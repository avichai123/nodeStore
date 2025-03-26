'use strict';
const User = require('../models/user');
const {getModelAttributes} = require('../utils/database');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const {tableName , attributes} = getModelAttributes(User);
    await queryInterface.createTable(tableName , attributes);
  },

  async down (queryInterface, Sequelize) {
    const tableName = getModelAttributes(User);
    await queryInterface.dropTable(tableName);
  }
};

