const express = require("express");
const request = require("request");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function(req, res){
//   res.sendFile(__dirname + "/signup.html");
// })
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res){
  const fName = req.body.fName;
  const lName = req.body.lName;
  const email = req.body.email;

  console.log(fName, lName, email);
})

app.listen(3000, function(){
  console.log("The server is running on port 3000.");
});
