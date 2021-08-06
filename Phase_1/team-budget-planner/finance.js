function displayData(){
    let storageData = JSON.parse(localStorage.getItem("tableData"));
    
    var tableContent="<table border='1' class='table table-hover w-50'><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>";
    storageData.forEach(key=>{

        tableContent+="<tr><td>"+key.client+"</td><td>"+key.project+"</td><td>"+key.budget+"</td></tr>"
    })
        tableContent+="</table>"
                    +"<a href='main.html' class='btn btn-primary'>Back</a>";
    
    document.getElementById("main").innerHTML=tableContent;
}