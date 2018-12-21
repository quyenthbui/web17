const express = require ("express");

const app = express();

// // request GET => https://localhost:6969/
// app.get("/",(request,response) => {
//     // response.send("Hello world");
//     // response.send(JSON.stringify({a:5,b:10}));
//     // response.send("<h1>Hello World " + Math.random() + "<h1>");
//     console.log(__dirname);
//     res.sendFile(__dirname + "/resource/index.html");
// });

// app.get("/about", (req,res) => {
//     //Show CV
// })

// app.listen(6969, (err) => {
//     if(err) console.log(err)
//     else console.log("Server start scuccess!");
// });

app.use(express.static("resources"));

app.get("/", (request, response) => {
    response.send("<h1> Hello world Bold " + Math.random() + "</h1>");
    console.log(__dirname);
    
});

app.get("/about", (req, res) =>{
    
    res.sendFile(__dirname + "/resources/index.html");

});

app.listen(6969, (err) => {
    if (err) console.log(err);
    else console.log("Server start success!");
});