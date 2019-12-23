require("express-group-routes");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  res.header("Access-Control-Allow-Method", "*");
  next();
});

const CategoriesController = require("./controllers/categories");
const ArticlesController = require("./controllers/articles");
const ByController = require("./controllers/articleByCategory");
const CommentController = require("./controllers/comment");
const AuthController = require("./controllers/auth");
const { authenticated } = require("./middleware");

app.group("/api/v1", router => {
  // login & register controller
  router.post("/login", AuthController.login);
  router.post("/register", AuthController.register);

  // CRUD for comments
  router.get("/article/:id/comments", CommentController.index);
  router.post("/article/:id/comment", CommentController.store);
  router.patch("/article/:id/comment", CommentController.update);
  router.delete("/article/:id/comment", CommentController.delete);

  // CRUD for categories
  router.get("/categories", CategoriesController.index);
  router.get("/category/:id", CategoriesController.show);
  router.post("/category", CategoriesController.store);
  router.patch("/category/:id", CategoriesController.update);
  router.delete("/category/:id", CategoriesController.delete);

  // API for latest article
  router.get("/article/latest-article", ArticlesController.limit);
  // API for article by user
  router.get("/user/:id/articles", ByController.byUser);

  // CRUD for articles
  router.get("/articles", ArticlesController.index);
  router.get("/article/:id", ArticlesController.show);
  router.post("/article", authenticated, ArticlesController.store);
  router.patch("/article/:id", authenticated, ArticlesController.update);
  router.delete("/article/:id", authenticated, ArticlesController.delete);

  // API for article per category
  router.get("/category/:id/articles", ByController.byCategory);

  // API for related article
  router.get("/category/:id/related", ByController.related);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log("Listening..."));
