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
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const CategoriesController = require("./controllers/categories");
const ArticlesController = require("./controllers/articles");
const ByController = require("./controllers/articleByCategory");
const CommentController = require("./controllers/comment");
const AuthController = require("./controllers/auth");
const FollowController = require("./controllers/follow");
const { authenticated } = require("./middleware");

app.group("/api/v1", router => {
  // login & register controller
  router.post("/login", AuthController.login);
  router.post("/register", AuthController.register);

  // CRUD for comments
  router.get("/article/:id/comments", CommentController.index);
  router.post("/article/:id/comment", authenticated, CommentController.store);
  router.patch("/article/:id/comment", authenticated, CommentController.update);
  router.delete(
    "/article/:id/comment",
    authenticated,
    CommentController.delete
  );

  // CRUD for categories
  router.get("/categories", CategoriesController.index);
  router.get("/category/:id", CategoriesController.show);
  router.post("/category", authenticated, CategoriesController.store);
  router.patch("/category/:id", authenticated, CategoriesController.update);
  router.delete("/category/:id", authenticated, CategoriesController.delete);

  // API for latest article
  router.get("/article/latest-article", ArticlesController.limit);
  // API for article by user
  router.get("/user/:id/articles", ByController.byUser);
  // API for related article
  router.get("/article/related", ByController.related);

  // CRUD for articles
  router.get("/articles", ArticlesController.index);
  router.get("/article/:id", ArticlesController.show);
  router.post("/article", authenticated, ArticlesController.store);
  router.patch("/article/:id", authenticated, ArticlesController.update);
  router.delete("/article/:id", authenticated, ArticlesController.delete);

  // API for article per category
  router.get("/category/:id/articles", ByController.byCategory);

  // API for follow
  router.post("/follow", authenticated, FollowController.store);
  router.get("/follows", authenticated, FollowController.index);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log("Listening..."));
