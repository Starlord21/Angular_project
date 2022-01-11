var express = require("express")
var routes = express.Router()

routes.use("/api/user",require("../controllers/UserController"))
routes.use("/api/userauth",require("../controllers/UserAuthController"))

module.exports=routes;