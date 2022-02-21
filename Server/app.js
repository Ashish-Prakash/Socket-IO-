const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello Express</h1>")
})

app.listen(4000, function(){
    console.log("App Started");
})