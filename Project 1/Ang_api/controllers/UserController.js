var express = require("express")
var routes = express.Router()
var database = require("../config/database")
var collName = "user"
var monogodb = require("mongodb")

var MongoClient = monogodb.MongoClient
var pdfmake = require("pdfmake")

var sha1 =require("sha1")

pdfmake.addFonts({
	Roboto: {
		normal: './assets/fonts/Roboto-Regular.ttf',
		bold: './assets/fonts/Roboto-Medium.ttf',
		italics: './assets/fonts/Roboto-Italic.ttf',
		bolditalics: './assets/fonts/Roboto-MediumItalic.ttf'
	}
});



routes.post("/", (req, res)=>{
     
  var docDefinition = {
    content: [
      { text : "Profile", style : "header"},
          {
              style : "tableExample",
              table : {
                  body :
                  [
                  ['Name', 'Email', 'Address','city','contact','gender'],
                  [req.body.fullname,req.body.email,req.body.address,req.body.city,req.body.contact,req.body.gender ]
                  ]
              }
          }
    ]
  };

   var pdf = pdfmake.createPdf(docDefinition);
   pdf.write('files/basics.pdf').then(() => {
	 console.log("success");
   }, err => {
	 console.error(err);
   });
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
  console.log(req.body)
  var id = monogodb.ObjectId(req.params.id);
  delete req.body._id;
  MongoClient.connect(database.dbUrl, (err, con)=>{
      var db = con.db(database.dbName);
      db.collection(collName).updateMany({ _id : id },{$set : req.body},()=>{
          
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
  console.log(req.body)
  var id = monogodb.ObjectId(req.params.id)
  MongoClient.connect(database.dbUrl,(err,con)=>{
    var db = con.db(database.dbName);
    db.collection(collName).find({_id : id}).toArray((err,result)=>{
      res.send(result);
    })
  })
});

module.exports=routes;