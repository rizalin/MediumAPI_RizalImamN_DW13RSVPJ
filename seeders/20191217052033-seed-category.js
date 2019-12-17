'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: "ONEZERO",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "ELEMENTAL",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "GEN",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "ZORA",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "FORGE",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "HUMAN PARTS",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "MARKED",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "LEVEL",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "HEATED",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "MODUS",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "MORE",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
