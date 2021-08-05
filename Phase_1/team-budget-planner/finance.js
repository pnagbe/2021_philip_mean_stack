function displayData(){
    let storageData = localStorage.getItem("tableData");
    let parseData = JSON.parse(storageData);
    
    var tableContent="";
    var tableHeader="<table border='1' class='table table-hover w-50'><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>";
        tableContent="<tr><td>"+parseData.cname+"</td><td>"+parseData.pname+"</td><td>"+parseData.bname+"</td></tr>";
    var endTable="</table>";
    var button="<a href='main.html' class='btn btn-primary'>Back</a>";

    tableContent = tableHeader+tableContent+endTable+button;
    document.getElementById("main").innerHTML=tableContent;
}