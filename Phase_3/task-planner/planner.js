let fs = require("fs");
let http = require("http");
let url = require("url");
const { table } = require("console");

let indexPage = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    <h3>Add Task</h3>
                    <form action="addTask">
                        <label>Emp ID:</label>
                        <input type="text" name="empID"/><br/>
                        <label>Task ID:</label>
                        <input type="text" name="taskID"/><br/>
                        <label>Task:</label>
                        <input type="text" name="task"/><br/>
                        <label>Deadline:</label>
                        <input type="date" name="deadline"/><br/>
                        <button type="submit">Add Task</button>
                    </form>
                    <h3>Delete Task</h3>
                    <form action="deleteTask">
                        <label>Task ID:</label>
                        <input type="text" name="taskID"/>
                        <button type="submit">Delete Task</button>
                    </form>
                    <h3>Show Tasks</h3>
                    <form action="showTasks">
                        <button type="submit">Show Tasks</button>
                    </form>
                </body>
                </html>
`
let tasksFile = "./tasks.json";
let msg = "";

let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url,true);
    if(urlInfo.path != "/favicon.ico"){
        if(urlInfo.pathname == "/addTask"){
            let data = urlInfo.query;
            if(fs.existsSync(tasksFile)){

                let fileInfo = JSON.parse(fs.readFileSync(tasksFile).toString());
                let result = fileInfo.find(key=> key.taskID == data.taskID);
                if(result == undefined){
                    fileInfo.push(data);
                    fs.writeFileSync(tasksFile, JSON.stringify(fileInfo));
                    msg = "Task Added";
                }
                else{
                    msg = "Duplicate task ID";
                }
            }
            else{
                fileInfo.push(data);
                let taskData = JSON.stringify(fileInfo);
                fs.writeFileSync(tasksFile, taskData );
                msg = "Task Added";
            }
        }
        else if(urlInfo.pathname == "/deleteTask"){
           let data = urlInfo.query;
           let fileInfo = JSON.parse(fs.readFileSync(tasksFile).toString());
           let result = fileInfo.find(key=> key.taskID == data.taskID);
           if(result != undefined){
                let delInfo = fileInfo.filter(key => key.taskID != result.taskID);
                fs.writeFileSync(tasksFile, JSON.stringify(delInfo));
                msg = "Task Deleted";
           }
           else{
               msg = "Invalid task ID";
           }
        }
        else if(urlInfo.pathname == "/showTasks"){
            let taskData = JSON.parse(fs.readFileSync(tasksFile).toString());
            let tableContent = `<table border=1><tr><th>Employee ID</th><th>Task ID</th><th>Task</th><th>Deadline</th></tr>`;
            taskData.forEach(key => {
                tableContent += `<tr><td>${key.empID}</td><td>${key.taskID}</td><td>${key.task}</td><td>${key.deadline}</td></tr>`
            })
            tableContent += "";
            response.write(tableContent);
        }
        else{
            msg = "&nbsp";
        }
        response.write("<p>"+msg+"</p>");
        response.write(indexPage);


    }
    response.end();
})

server.listen(9090,()=>console.log("Server running on port number 9090"))