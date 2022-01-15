var express = require("express")
var routes = express.Router()
var database = require("../config/database")
var collName = "user"
var monogodb = require("mongodb")
var sha1 =require("sha1")
var jwt = require("jsonwebtoken")


var MongoClient = monogodb.MongoClient








// sending data to user on angular by id 
routes.get("/", (req, res)=>{
    // console.log(req.headers);
    if(req.headers.authorization){
        var token = JSON.parse(req.headers.authorization);
        var data = jwt.decode(token, database.encryptStr);
        if(data){
            // console.log(data);
            var id = monogodb.ObjectId(data._id);
            MongoClient.connect(database.dbUrl, (err, con)=>{
                var db = con.db(database.dbName);
                db.collection(collName).find({ _id : id }).toArray((err, result)=>{
                    res.send(result[0]);
                    
                })
            })

        }else{
            res.status(401).send({ success : false, msg : "Unauthorized User"});

        }
    }else{
        res.status(401).send({ success : false, msg : "Unauthorized User"});
    }
})

routes.put("/:id",(req,res)=>{
    console.log(req.body)
    var id = monogodb.ObjectId(req.params.id)
    delete req.body._id;
    MongoClient.connect(database.dbUrl,(err,con)=>{
        var db =con.db(database.dbName);
        db.collection(collName).updateMany({_id : id},{$set : req.body},()=>{
            res.send({success : true})
        })
    })
})
routes.put("/changepass/:id",(req,res)=>{
    console.log(req.body)
    var id = monogodb.ObjectId(req.params.id)
    delete req.body._id;
    delete req.body.re_password
    var pass = sha1(req.body.oldpass)
    var newpass = sha1(req.body.password)

    MongoClient.connect(database.dbUrl,(err,con)=>{
        var db =con.db(database.dbName);
        db.collection(collName).find({_id : id}).toArray((err,result)=>{
            if(result[0].password != pass)
            {
                res.status(401).send({success : false, msg : "old password didn't match"})
            }
            else
            {
                db.collection(collName).updateMany({_id : id},{$set : {password: newpass}},()=>{
                    res.send({success : true})
                })
            }
        })

        
    })
})

module.exports=routes;