const express = require("express")
const routes = express.Router()

// External Routes
const authRoutes = require("../src/authentication/routes/index")
const productRoutes = require("../src/products/routes/index")

routes.use("/auth", authRoutes)
routes.use("/product", productRoutes)

module.exports = routes