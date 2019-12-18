const models = require("../models");
const Article = models.article;
const Category = models.category;
const User = models.user;

exports.byCategory = (req, res) => {
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
    where: {
      category_id: req.params.id
    }
  }).then(articles => res.send(articles));
};
