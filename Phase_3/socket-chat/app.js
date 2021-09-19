let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);


app.get('/', (req,res) => {
    res.sendFile(__dirname + "\\index.html");
});

let questions = ["What is your name?","How did you get here?","How was your day?","When is your birthday?","Do you like apples?"];
io.on("connection",(socket)=> {

    socket.on("obj",(msg)=> {
        let question = questions[Math.floor(Math.random() * 5)];
        socket.emit("obj1","Chatbot: "+question);
    })

})



http.listen(9090,()=>console.log("Server running on port number 9090"));