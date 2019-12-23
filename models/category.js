"use strict";
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      name: DataTypes.STRING
    },
    {}
  );
  category.associate = function(models) {
    category.hasMany(models.article, {
      as: "article",
      foreignKey: "category_id"
    });
  };
  return category;
};
