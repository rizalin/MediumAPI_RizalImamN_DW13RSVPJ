const models = require("../models");
const Article = models.article;
const Category = models.category;
const User = models.user;
const Comment = models.comment;

exports.index = (req, res) => {
  Article.findAll({
    include: [
      {
        model: Category,
        as: "categoryId",
        attributes: ["id", "name"]
      },
      {
        model: User,
        as: "authorId",
        attributes: ["id", "name"]
      }
    ]
  }).then(articles => res.send(articles));
};

exports.limit = (req, res) => {
  Article.findAll({
    include: [
      {
        model: Category,
        as: "categoryId",
        attributes: ["id", "name"]
      },
      {
        model: User,
        as: "authorId",
        attributes: ["id", "name"]
      }
    ],
    order: [["id", "DESC"]],
    attributes: ["id", "title", "createdAt", "category_id", "author_id"],
    limit: 5
  }).then(articles => res.send(articles));
};

exports.show = (req, res) => {
  Article.findOne({
    where: { id: req.params.id },
    include: [
      { model: Comment, as: "comment" },
      {
        model: User,
        as: "authorId"
      }
    ]
  }).then(article => res.send(article));
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
