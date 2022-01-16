var express = require("express")
var routes = express.Router()
var database = require("../config/database")

var collName = "filetypes"
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

 routes.post("/",(req,res)=>{
   console.log(req.body)
   delete req.body._id
    MongoClient.connect(database.dbUrl,(err,con)=>{
      var db = con.db(database.dbName);
      db.collection(collName).insertOne(req.body, ()=>{
        res.send({ success : true });
      })
    })
  })

  routes.delete("/:id",(req,res)=>{
    var id = monogodb.ObjectId(req.params.id)
    delete req.body._id
    MongoClient.connect(database.dbUrl,(err,con)=>{
      var db = con.db(database.dbName)
      db.collection(collName).deleteMany({_id : id},()=>{
        res.send({success:true})
      })
    })
     
  })

  routes.get("/:id", (req, res)=>{
    var id = monogodb.ObjectId(req.params.id);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find({ _id : id }).toArray((err, result)=>{
            res.send(result[0]);
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


module.exports=routes;