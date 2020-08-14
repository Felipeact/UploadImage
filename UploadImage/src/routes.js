const express = require('express')
const routes = express.Router()
const multer = require('./app/middlewares/multer')

const ProductController = require('./app/controllers/ProductController')
const HomeController = require('./app/controllers/HomeController')
const SearchController = require('./app/controllers/SearchController')



//home
routes.get('/', HomeController.index)

//search

routes.get('/products/search', SearchController.index)

//create
routes.get('/products/create', ProductController.create )
routes.post('/products', multer.array("photos", 6), ProductController.post)

//update
routes.get('/products/:id/edit', ProductController.edit)
routes.put('/products',multer.array("photos", 6), ProductController.put)

//delete
routes.delete('/products', ProductController.delete)

//show 
routes.get('/products/:id', ProductController.show)

//Alias
routes.get('/ads/create', function(req, res){
    return res.redirect("/products/create")
})





module.exports = routes