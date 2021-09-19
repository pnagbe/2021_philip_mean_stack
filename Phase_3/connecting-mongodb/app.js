let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let app = express();
app.use(bodyParser.urlencoded({extended:true}))

let url= "mongodb://localhost:27017/meanstack";

mongoose.pluralize(null);
mongoose.connect(url)
    .then(res=>{
        console.log("connected")
    })
    .catch(err=> {
        console.log(err);
    })


    let courseSchema = mongoose.Schema({
        _id: Number,
        name: String,
        desc: String,
        amount: Number
    });

    let courseModel = mongoose.model("Course", courseSchema);

    app.get("/",(request, response)=> {
        response.sendFile(__dirname+"\\index.html");
    })

    app.get("/addCourse",(request, response)=> {
        response.sendFile(__dirname+"\\addCourse.html");
    })

    app.get("/updateCourse",(request, response)=> {
        response.sendFile(__dirname+"\\updateCourse.html");
    })

    app.get("/deleteCourse",(request, response)=> {
        response.sendFile(__dirname+"\\deleteCourse.html");
    })


    app.post("/add",(request, response)=> {
        let courseInfo = request.body;

        courseModel.insertMany(courseInfo,(err,result)=> {
            if(!err){
                response.send(result);
            } else {
                response.send(err);
            }
        })
    })

    app.post("/update",(request, response)=> {
        let courseInfo = request.body;

        courseModel.updateOne({__id:courseInfo.courseID},{$set:{amount:courseInfo.amount}},(err,result)=> {
            if(!err){
                response.send("Course Updated.");
            } else {
                response.send(err);
            }
        })
    })

    app.post("/delete",(request, response)=> {
        let courseInfo = request.body;

        courseModel.findOneAndDelete(courseInfo,(err,result)=> {
            if(!err){
                response.send("Course Deleted.");
            } else {
                response.send(err);
            }
        })
    })

    app.get("/fetchCourses",(request, response)=> {
        courseModel.find({},(err,result)=> {
            if(!err){
                response.json(result);
            } else {
                response.send(err);
            }
        })
    })

    app.listen(9090,()=>console.log("Server running on port number 9090"));