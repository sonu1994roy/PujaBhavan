const mongoose = require("mongoose");
 const DB_URI = 'mongodb+srv://gnoindeveloper:glofaa1234@cluster0.m55jsrs.mongodb.net/sonu'
const databaseConnections = () =>{
    mongoose.connect(DB_URI ,{
        
    }).then((data)=>{
        console.log(`data base connected on port ${data}`)
    })
}

module.exports = databaseConnections