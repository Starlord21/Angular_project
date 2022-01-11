var express = require("express")
var routes = express.Router()
var database = require("../config/database")
var collName = "user"
var monogodb = require("mongodb")
var sha1 =require("sha1")
const jsonwebtoken = require("jsonwebtoken")
var jwt = require("jsonwebtoken")

var MongoClient = monogodb.MongoClient

routes.post("/", (req, res)=>{
       MongoClient.connect(database.dbUrl,(err,con)=>{
           var db = con.db(database.dbName);
           db.collection(collName).find({email : req.body.email }).toArray((err,result)=>{
               if(result.length>0)
               {
                   if(result[0].password= sha1(req.body.password))
                   {
                    if(result[0].status==0)
                    {
                        // var token = jwt.sign({_id : result[0]._id, email : result[0].email }, database.encryptStr);
                        // res.status(200).send({ success : true, token : token });
                    }
                    else
                    {
                      res(403).status({success : false, type : 3})  
                    }

                   }
                   else
                   {
                       res(401).send({success : false, type : 2})
                   }
               }
               else
               {
                res(401).send({success : false, type : 1})
               }
           })
       })
})


module.exports=routes;