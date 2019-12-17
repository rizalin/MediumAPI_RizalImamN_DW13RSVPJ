const models = require('../models')
const Category = models.category
const User = models.user


exports.index = (req, res) => {
    Category.findAll().then(categories =>res.send(categories))
}


exports.show = (req, res) => {
    Category.findOne({id: req.params.id}).then(category=> res.send(category))
}

exports.store = (req, res) => {
    Category.create(req.body).then(category=> {
        res.send({
            message: "success",
            category
        })
    })
}

exports.update = (req, res) => {
    Category.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(category=> {
        res.send({
            message: "success",
            category
        })
    })
}


exports.delete = (req, res) => {
    Category.destroy({where: {id: req.params.id}}).then(category=> {
        res.send({
            message: "success",
            category
        })
    })
}