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
routes.put("/:id", (req, res)=>{
  var id = monogodb.ObjectId(req.params.id);
  delete req.body._id;
  MongoClient.connect(database.dbUrl, (err, con)=>{
      var db = con.db(database.dbName);
      db.collection(collName).updateMany({ _id : id },{$set : req.body},()=>{
          res.send({ success : true });
      })
  })
})

routes.get("/",(req,res)=>{
  MongoClient.connect(database.dbUrl,(err,con)=>{
    var db = con.db(database.dbName);
    db.collection(collName).find().toArray((err,result)=>{
      res.send(result);
    })
  })
})
routes.get("/:id",(req,res)=>{
  var id = monogodb.ObjectId(req.params.id)
  MongoClient.connect(database.dbUrl,(err,con)=>{
    var db = con.db(database.dbName);
    db.collection(collName).find({_id : id}).toArray((err,result)=>{
      res.send(result);
    })
  })
})

module.exports=routes;