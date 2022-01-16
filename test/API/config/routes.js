var express = require("express")
var routes = express.Router()

routes.use("/api/visitor",require("../controllers/VisitorController"))
routes.use("/api/teachers",require("../controllers/TeachersController"))
routes.use("/api/userauth",require("../controllers/UserAuthController"))

module.exports=routes;