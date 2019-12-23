"use strict";
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define(
    "article",
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      brief: DataTypes.STRING,
      image: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      author_id: DataTypes.INTEGER
    },
    {}
  );
  article.associate = function(models) {
    article.belongsTo(models.category, {
      as: "categoryId",
      foreignKey: "category_id"
    });
    article.belongsTo(models.user, {
      as: "authorId",
      foreignKey: "author_id"
    });
    article.hasMany(models.comment, {
      as: "comment",
      foreignKey: "article_id"
    });
  };
  return article;
};
