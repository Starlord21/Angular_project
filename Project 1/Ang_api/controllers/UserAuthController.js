var express = require("express")
var routes = express.Router()
var database = require("../config/database")
var collName = "user"
var monogodb = require("mongodb")
var sha1 =require("sha1")

var jwt = require("jsonwebtoken")

var MongoClient = monogodb.MongoClient

routes.post("/", (req, res)=>{
    // console.log(req.body);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        
        var db = con.db(database.dbName);
        db.collection("user").find({ email : req.body.email }).toArray((err, result)=>{
            if(result.length > 0)
            {
                if(result[0].password == sha1(req.body.password))
                {
                    if(result[0].status == 1){

                        var token = jwt.sign( result[0], database.encryptStr);
                        res.status(200).send({ success : true, token : token });
                    }else{

                        res.status(403).send({ success : false, type : 3});
                    }
                }
                else{

                    res.status(401).send({ success : false, type : 2});
                }
            }else{
                res.status(401).send({ success : false, type : 1});
            }
        })
    })
})

// routes.get("/",(req,res)=>{
//     res.send({success:true})
// })

module.exports=routes;