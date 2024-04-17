const express = require('express');  
const app = express(); 
const bodyParser = require("body-parser");
const path = require("path");
const { errorMiddleware } = require('expressive-error-handler');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const user =require('./routes/userRoute')

app.use('/api/v1',user)



// app.use(express.static(path.join(__dirname, '../clint/dist')))
// app.get('*' , (req, res) =>{
//     res.sendFile(path.resolve(__dirname , '../clint/dist/index.html'))
// })

// for 404 routes  Errors  and retrun normal pages for show 404 page
app.use(function (req, res) {
    res.status(404).json({ error: "Route not found" });
  });

  // Middleware for Errors
app.use(errorMiddleware);

module.exports = app

