var express = require("express")
var routes = express.Router()
var database = require("../config/database")
var collName = "admin"
var monogodb = require("mongodb")
var MongoClient = monogodb.MongoClient
var sha1 =require("sha1")
var jwt = require("jsonwebtoken")

routes.post("/",(req,res)=>{
    console.log(req.body)
    MongoClient.connect(database.dbUrl,(err,con)=>{
        var db = con.db(database.dbName);
        pass = sha1(req.body.password)
        db.collection(collName).find({username : req.body.username}).toArray((err,result)=>{
            if(result[0].username== req.body.username)
            {
                if(result[0].password == pass)
                {
                    var token = jwt.sign(result[0],database.encryptStr)
                    res.send({success :true, token : token})
                }
                else
                {
                    res.status(402).send({success : false, type : 2})
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