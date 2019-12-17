require('express-group-routes')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 5000

app.use(bodyParser.json())
const CategoriesController = require('./controllers/categories')

app.group("/api/v1", (router) => {
    router.get("/categories", CategoriesController.index)
    router.get('/category/:id', CategoriesController.show)
    router.post('/category', CategoriesController.store)
    router.patch('/category/:id', CategoriesController.update)
    router.delete('/category/:id', CategoriesController.delete)

})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => console.log('Listening...'))