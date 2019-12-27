"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    user.hasMany(models.follow, {
      as: "user",
      foreignKey: "id"
    });
    user.hasMany(models.follow, {
      as: "following",
      foreignKey: "id"
    });
  };
  return user;
};
