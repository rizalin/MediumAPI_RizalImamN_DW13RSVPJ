"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "comment",
    {
      article_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      comment: DataTypes.STRING
    },
    {}
  );
  comment.associate = function(models) {
    comment.belongsTo(models.article, {
      as: "article",
      foreignKey: "article_id"
    });
    comment.belongsTo(models.user, {
      as: "member",
      foreignKey: "user_id"
    });
  };
  return comment;
};
