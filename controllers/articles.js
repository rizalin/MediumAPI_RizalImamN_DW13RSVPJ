const models = require("../models");
const Article = models.article;
const Category = models.category;
const User = models.user;

exports.index = (req, res) => {
  Article.findAll({
    include: [
      {
        model: Category,
        as: "categoryId"
      },
      {
        model: User,
        as: "authorId"
      }
    ]
  }).then(articles => res.send(articles));
};

exports.limit = (req, res) => {
  Article.findAll({
    include: [
      {
        model: Category,
        as: "categoryId"
      },
      {
        model: User,
        as: "authorId"
      }
    ],
    order: [["id", "DESC"]],
    limit: 5
  }).then(articles => res.send(articles));
};

exports.show = (req, res) => {
  Article.findOne({ id: req.params.id }).then(article => res.send(article));
};

exports.store = (req, res) => {
  Article.create(req.body).then(article => {
    res.send({
      message: "success",
      article
    });
  });
};

exports.update = (req, res) => {
  Article.update(req.body, { where: { id: req.params.id } }).then(category => {
    res.send({
      message: "success",
      article
    });
  });
};

exports.delete = (req, res) => {
  Article.destroy({ where: { id: req.params.id } }).then(article => {
    res.send({
      message: "success",
      article
    });
  });
};
