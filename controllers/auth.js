const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;
exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ where: { email, password } }).then(user => {
    if (user) {
      const token = jwt.sign({ userId: user.id }, "arujisama");
      res.send({
        user: { email: user.email },
        token
      });
    } else {
      res.send({
        error: true,
        message: "Wrong Email or Password!"
      });
    }
  });
};

exports.register = (req, res) => {
  User.create(req.body).then(user => {
    const token = jwt.sign({ userId: user.id }, "arujisama");
    res.send({
      user: { email: user.email },
      token
    });
  });
};
