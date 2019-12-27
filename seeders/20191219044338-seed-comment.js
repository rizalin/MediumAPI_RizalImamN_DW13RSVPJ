"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "comments",
      [
        {
          comment: "SILENCE LIBERAL",
          article_id: 1,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment: "SILENCE BOOMER",
          article_id: 1,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment: "Peace was never an option",
          article_id: 1,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("comments", null, {});
  }
};
