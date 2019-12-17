const models = require('../models')
const Article = models.article
const Category = models.category



exports.index = (req, res) => {
    Article.findAll({
        include: [{
            model: Category,
            as: "categoryID"
        }]
    }).then(articles =>res.send(articles))
}


exports.show = (req, res) => {
    Article.findOne({id: req.params.id}).then(article=> res.send(article))
}

exports.store = (req, res) => {
    Article.create(req.body).then(article=> {
        res.send({
            message: "success",
            article
        })
    })
}

exports.update = (req, res) => {
    Article.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(category=> {
        res.send({
            message: "success",
            article
        })
    })
}


exports.delete = (req, res) => {
    Article.destroy({where: {id: req.params.id}}).then(article=> {
        res.send({
            message: "success",
            article
        })
    })
}