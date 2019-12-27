"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "articles",
      [
        {
          title: "Why Fake News is Candy to Our Brain",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla finibus aliquet.",
          brief:
            "Memory bias causes people to hold on to the (true and untrue) stories",
          image: "https://imgur.com/download/vRUSjFt",
          category_id: 3,
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "How Acupunture Saved Me From Unbearable Knee Pain",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla finibus aliquet.",
          brief: "Rediscovering mobility in spite of osteoarthritis",
          image: "https://imgur.com/download/vRUSjFt",
          category_id: 3,
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "The Latest Science on Chronic Pain is Fascinating",
          brief:
            "Experts can even predict who's likely to suffer or recover, based on brain structure and personality",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla finibus aliquet.",
          image: "https://imgur.com/download/vRUSjFt",
          category_id: 3,
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("articles", null, {});
  }
};
