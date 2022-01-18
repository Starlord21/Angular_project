var express =require("express")
var app = express()
var cors = require("cors")


const MONGODB_URI = "mongodb+srv://kartik:90129012@cluster0.srf2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const url = `mongodb+srv://sample_user:<password>@my-sample-cluster-b3ugy.mongodb.net/<dbname>?retryWrites=true&w=majority`;



 

app.use(express.static(__dirname+"/assets"))
app.use(express.json())
app.use(express.urlencoded())
// app.use(cors(corsOptions))
app.use(cors())

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.use(require("./config/routes"))
app.get("*",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})



 
var port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server running with", port)
})