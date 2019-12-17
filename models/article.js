'use strict';
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('article', {
    title: DataTypes.STRING,
    brief: DataTypes.STRING,
    writer: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  article.associate = function(models) {
    article.belongsTo(models.category, {
      as: 'categoryID',
      foreignKey: 'category_id'
    })
  };
  return article;
};