// load the module and create the reference of mongodb module
let mongoClient = require("mongodb").MongoClient;
//url Details
let url ="mongodb://localhost:27017";

// connect the database
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected")
        let db = client.db("Arham_Institute");
        let employees = [
            {_id:18,name:"Seeta",salary:42000,deptId:100,city:"Delhi"},
            {_id:19,name:"Reeta",salary:49000,deptId:200,city:"Bangalore"},
            {_id:20,name:"Veeta",salary:36000,deptId:300,city:"Mumbai"}
        ]

        let Course=[
                    {"name":"Python","duration":"6 months","Fees":24000}

                   ]

        let SRO_OVERVIEW=[{"FTTH_CONN":"","status":"","remarks":""}]

        db.collection("SRO_OVERVIEW").insertMany(SRO_OVERVIEW,(err,result)=>{if(!err)
            {
                console.log("Record inserted successfully")
                console.log(result);
            }
            else
            {
                console.log(err);
            }
            client.close();
        })
        db.collection("Course").insertMany(Course,(err,result)=> {
            if(!err)
            {
                console.log("Record inserted successfully")
                console.log(result);
            }
            else
            {
                console.log(err);
            }
            client.close();
        })
    }else {
        console.log(err);
    }

})