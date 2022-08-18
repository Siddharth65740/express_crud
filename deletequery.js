// load the module and create the reference of mongodb module
let mongoClient = require("mongodb").MongoClient;
//url Details
let url ="mongodb://localhost:27017";
// connect the database
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected")
        let db = client.db("Arham_Institute");
        // delete document using _id
        db.collection("Course").deleteOne({duration:"2 months"},(err,result)=> {
            if(!err){
                    if(result.deletedCount>0){
                            console.log("Record deleted successfully")
                    }else {
                            console.log("Record not present")
                    }
            }else {
                    console.log(err)
            }
            client.close();
        })
    }else {
        console.log(err);
    }
})