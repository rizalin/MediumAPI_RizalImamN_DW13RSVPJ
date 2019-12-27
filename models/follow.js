"use strict";
module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define(
    "follow",
    {
      user_id: DataTypes.INTEGER,
      following_user: DataTypes.INTEGER
    },
    {}
  );
  follow.associate = function(models) {
    follow.belongsTo(models.user, {
      as: "user",
      foreignKey: "user_id"
    });
    follow.belongsTo(models.user, {
      as: "following",
      foreignKey: "following_user"
    });
  };
  return follow;
};
