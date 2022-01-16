var express =require("express")
var app = express()
var cors = require("cors")

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use(require("./config/routes"))

var port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server running with", port)
})