// load the module and create the reference of mongodb module
let mongoClient = require("mongodb").MongoClient;
//url Details
let url ="mongodb://localhost:27017";
// connect the database
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected")

        let db = client.db("ARHAM_INSTITUTE");
        // City update using _id
        db.collection("COURSE").updateOne({_id:34},{$set:{"name":"Go Language","Fees":45000}},(err,result)=> {
            if(!err){
                    if(result.modifiedCount>0){
                        console.log("Record updated successfully")
                    }else {
                        console.log("Record not present")
                    }

            }else {
                    console.log(err);
            }
            client.close();
        })

    }else {
        console.log(err);
    }
})