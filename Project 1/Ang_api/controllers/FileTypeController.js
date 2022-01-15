var express = require("express")
var routes = express.Router()
var database = require("../config/database")

var collName = "filtypes"
var monogodb = require("mongodb")
 MongoClient = monogodb.MongoClient



 routes.get("/",(req,res)=>{
    MongoClient.connect(database.dbUrl,(err,con)=>{
      var db = con.db(database.dbName);
      db.collection(collName).find().toArray((err,result)=>{
        res.send(result);
      })
    })
  })

       


module.exports=routes;