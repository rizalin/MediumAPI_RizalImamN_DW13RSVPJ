'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('articles', [
      {
        title: "Plastic Surgeons Are Using Eye-Tracking Tech to Make Better Breasts",
        brief: "But the eye doesn't necessarily gaze at what is beautiful",
        writer: 'Thomas McMullan',
        category_id: 2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla finibus aliquet. Curabitur eget dignissim justo, at dapibus leo. Vestibulum hendrerit pulvinar vestibulum. Praesent iaculis faucibus feugiat. Donec et mi at nunc sollicitudin accumsan. Nam quis semper diam, non fermentum tellus. Praesent mollis ligula sit amet mauris interdum, quis pharetra ipsum congue. Ut a tortor eleifend, porttitor tellus eu, tempus ex. Morbi scelerisque, tellus ac porttitor ornare, massa tellus iaculis odio, id finibus turpis metus sed augue.",
        img: 'https://imgur.com/download/vRUSjFt',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The iPhone Could Be Banned in Russia by 2020',
        brief: "A 'Digital Iron Curtain' is descending over part of the world",
        writer: 'Aimee Pearcy',
        category_id: 2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla finibus aliquet. Curabitur eget dignissim justo, at dapibus leo. Vestibulum hendrerit pulvinar vestibulum. Praesent iaculis faucibus feugiat. Donec et mi at nunc sollicitudin accumsan. Nam quis semper diam, non fermentum tellus. Praesent mollis ligula sit amet mauris interdum, quis pharetra ipsum congue. Ut a tortor eleifend, porttitor tellus eu, tempus ex. Morbi scelerisque, tellus ac porttitor ornare, massa tellus iaculis odio, id finibus turpis metus sed augue.",
        img: 'https://imgur.com/download/vRUSjFt',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'How to Delete Your Slack Message',
        brief: "If you're concerned about message retention, solutions are just a few clicked away",
        writer: 'Aimee Pearcy',
        category_id: 2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla finibus aliquet. Curabitur eget dignissim justo, at dapibus leo. Vestibulum hendrerit pulvinar vestibulum. Praesent iaculis faucibus feugiat. Donec et mi at nunc sollicitudin accumsan. Nam quis semper diam, non fermentum tellus. Praesent mollis ligula sit amet mauris interdum, quis pharetra ipsum congue. Ut a tortor eleifend, porttitor tellus eu, tempus ex. Morbi scelerisque, tellus ac porttitor ornare, massa tellus iaculis odio, id finibus turpis metus sed augue.",
        img: 'https://imgur.com/download/vRUSjFt',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
