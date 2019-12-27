const models = require("../models");
const User = models.user;
const Follow = models.follow;

exports.store = (req, res) => {
  Follow.create(req.body, {
    include: [
      { model: User, as: "user" },
      { model: User, as: "following" }
    ]
  }).then(follow => {
    res.send({
      message: "success",
      follow
    });
  });
};

exports.index = (req, res) => {
  Follow.findAll({
    include: [
      { model: User, as: "user", attributes: ["name"] },
      { model: User, as: "following", attributes: ["name"] }
    ],
    attributes: ["id"]
  })
    .then(follow => res.send(follow))
    .catch(err => console.log(err));
};
