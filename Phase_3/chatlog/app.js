let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let http = require("http").Server(app);
let io = require("socket.io")(http);
let mongoose = require("mongoose");
app.use(bodyParser.urlencoded({extended:true}));

let url = "mongodb://localhost:27017/tcschatlog";

mongoose.pluralize(null);

mongoose.connect(url)
    .then(res=>{
        console.log("connected")
    })
    .catch(err=> {
        console.log(err);
    })

    let chatSchema = mongoose.Schema({
        _id: Number,
        name: String,
        message: String,
    });

    let chatModel = mongoose.model("Chat", chatSchema);


app.get('/', (req,res) => {
    res.sendFile(__dirname + "\\index.html");
});

io.on("connection",(socket)=> {

    socket.on("obj",(msg)=> {
        chatModel.insertMany(msg,(err,result)=> {
            if(!err){
                console.log(result);
            } else {
                console.log(err);
            }
        })
    })

})



http.listen(9090,()=>console.log("Server running on port number 9090"));