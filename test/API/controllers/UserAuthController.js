var express = require("express")
var routes = express.Router()
var database = require("../config/database")
var collName = "user"
var mongodb = require("mongodb")
var MongoClient = mongodb.MongoClient
var jwt = require("jsonwebtoken")
var sha1 = require("sha1")


routes.post("/login",(req,res)=>{
    
    console.log(req.body)
    
    
    MongoClient.connect(database.dbUrl,(err,con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find({username : req.body.username}).toArray((err,result)=>{
            if(result.length>0)
            {
                if(result[0].password == sha1(req.body.password))
                {
                    var token = jwt.sign(result[0],database.encryptStr)
                    res.send({success :true, token : token})
                }
                else
                {
                    res.status(401).send({success : false, type : 2})
                }
            }
            else
            {
                res.status(401).send({success : false, type : 1})
            }
        })

    })
})

module.exports=routes;