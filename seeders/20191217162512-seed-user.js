'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'arujisama@guguru.com',
        password: 'xxx',
        name: 'Kokkoro',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('users', null, {});
    
  }
};
