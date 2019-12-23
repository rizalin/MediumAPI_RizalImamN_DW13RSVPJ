const models = require("../models");
const Article = models.article;
const Category = models.category;
const User = models.user;

// article by category
exports.byCategory = (req, res) => {
  Category.findOne({
    include: [
      {
        model: Article,
        as: "article",
        include: [
          {
            model: User,
            as: "authorId"
          }
        ]
      }
    ],
    where: {
      id: req.params.id
    }
  }).then(articles => res.send(articles));
};

//related article for article detail
exports.related = (req, res) => {
  Article.findAll({
    include: [
      {
        model: User,
        as: "authorId",
        attributes: ["id", "name"]
      }
    ],
    where: {
      category_id: req.params.id
    }
  }).then(articles => {
    const data = shuffle(articles);
    res.send(data);
  });
};

// article by user
exports.byUser = (req, res) => {
  Article.findAll({
    where: { author_id: req.params.id },
    include: [
      {
        model: User,
        as: "authorId",
        attributes: ["id", "name"]
      },
      {
        model: Category,
        as: "categoryId",
        attributes: ["id", "name"]
      }
    ]
  }).then(article => {
    res.send(article);
  });
};

//function for randoming related article
function shuffle(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const newArray = array[i];
    array[i] = array[j];
    array[j] = newArray;
  }
  return array;
}
