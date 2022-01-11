var express = require("express")
var routes = express.Router()
var database = require("../config/database")
var collName = "user"
var monogodb = require("mongodb")
var sha1 =require("sha1")

var MongoClient = monogodb.MongoClient

routes.post("/", (req, res)=>{
        req.body.status = 0
        req.body.password= sha1(req.body.password)
      MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).insertOne(req.body, ()=>{
            res.send({ success : true });
        })
    })
 
})


module.exports=routes;