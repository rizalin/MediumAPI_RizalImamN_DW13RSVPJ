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

app.group("/api/v1", router => {
  router.get("/categories", CategoriesController.index);
  router.get("/category/:id", CategoriesController.show);
  router.post("/category", CategoriesController.store);
  router.patch("/category/:id", CategoriesController.update);
  router.delete("/category/:id", CategoriesController.delete);

  router.get("/articles", ArticlesController.index);
  router.get("/article/latest-article", ArticlesController.limit);
  router.get("/article/:id", ArticlesController.show);
  router.post("/article", ArticlesController.store);
  router.patch("/article/:id", ArticlesController.update);
  router.delete("/article/:id", ArticlesController.delete);

  router.get("/category/:id/articles", ByController.byCategory);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log("Listening..."));
