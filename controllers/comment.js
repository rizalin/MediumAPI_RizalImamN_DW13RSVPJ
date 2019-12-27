const models = require("../models");
const Article = models.article;
const Category = models.category;
const User = models.user;
const Comment = models.comment;

exports.index = (req, res) => {
  Comment.findAll({
    include: [
      { model: Article, as: "article", attributes: ["id", "title"] },
      { model: User, as: "member", attributes: ["id", "name"] }
    ],
    where: { article_id: req.params.id }
  })
    .then(comment => res.send(comment))
    .catch(err => console.log(err));
};

exports.store = (req, res) => {
  Comment.create(req.body).then(comment => {
    res.send({
      message: "success",
      comment
    });
  });
};

exports.update = (req, res) => {
  Comment.update(req.body, {
    where: { user_id: req.body.user_id, article_id: req.params.id }
  }).then(comment => {
    res.send({
      message: "success",
      comment
    });
  });
};

exports.delete = (req, res) => {
  Comment.destroy({
    where: { id: req.body.id }
  }).then(comment => {
    res.send({
      message: "success",
      comment
    });
  });
};
