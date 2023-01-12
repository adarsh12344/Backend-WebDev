const express = require("express");
const app = express();
app.get("/",function(request,response){      //  "/" represent get request
    response.send("<h1>Hello world!</h1>");
});    

app.get("/contact",function(request,response){
    response.send("Contact me at adarsh@gmail.com");
});

app.get("/about",function(request,response){
    response.send("<h2>This website is owned by Adarsh Thakur</h2>");
});

app.get("/hobbies",function(request,response){
    response.send("<h2>Hobbies  - Sleeping </h2>");
});



app.listen(3000 , function(){
    console.log("Server started on port 3000 ");     //-------> port is basically like a radio channel in which are server is tuned
});

