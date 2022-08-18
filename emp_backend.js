let express=require("express")
const {response, request, urlencoded, json} = require("express");

let app=express()
let cors=require("cors")

app.use(cors())

// load the module and create the reference of mongodb module
let mongoClient = require("mongodb").MongoClient;
//url Details
let url ="mongodb://localhost:27017";

// connect the database
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/SRO_OVERVIEW",(request,response)=>{
    mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected")
        let db = client.db("Arham_Institute");


        db.collection("SRO_OVERVIEW_1").insertOne(request.body,(err,result)=> {
            if(!err){
                console.log("Record inserted successfully")
                console.log(result);
                response.json({"msg":"record inserted successfully"});
            }else {
                console.log(err);
                response.send({"msg":"record is not inserted successfully"});
            }
            client.close();
        })
    }else {
        console.log(err);
    }

})
})

app.get("/SRO_OVERVIEW",(request,response)=>{

    //employees:Array<any>=[]

    mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected")
        let db = client.db("Arham_Institute");
         db.collection("SRO_OVERVIEW").find().toArray(function (error, result){
             if(!error){
                 return response.json(result);
             }
             else
             {
                 console.log(error);
             }
         })

    }else {
        console.log(err);
        response.json({"msg":"error retrieve records"})
    }

})

})



// app.post("/employees",(request,response)=>{
//     mongoClient.connect(url,(err,client)=> {
//     if(!err){
//         console.log("Connected")
//         let db = client.db("Arham_Institute");
//
//
//         db.collection("employee").insertOne(request.body,(err,result)=> {
//             if(!err){
//                 console.log("Record inserted successfully")
//                 console.log(result);
//                 response.json({"msg":"record inserted successfully"});
//             }else {
//                 console.log(err);
//                 response.send({"msg":"record is not inserted successfully"});
//             }
//             client.close();
//         })
//     }else {
//         console.log(err);
//     }
//
// })
// })
//
// app.get("/employees",(request,response)=>{
//
//     //employees:Array<any>=[]
//
//     mongoClient.connect(url,(err,client)=> {
//     if(!err){
//         console.log("Connected")
//         let db = client.db("Arham_Institute");
//          db.collection("employee").find().toArray(function (error, result){
//              if(!error){
//                  return response.json(result);
//              }
//              else
//              {
//                  console.log(error);
//              }
//          })
//
//     }else {
//         console.log(err);
//         response.json({"msg":"error retrieve records"})
//     }
//
// })
//
// })




app.listen(9090,()=>{console.log("server is running at port no:9090")})
