function getData(){
    let cname = document.getElementById('clientname').value;
    let pname = document.getElementById('projname').value;
    let bname = document.getElementById('budget').value;

    let formData = {'client':cname, 'project':pname, 'budget':bname};

    let tableData = JSON.parse(localStorage.getItem("tableData") || "[]");
    tableData.push(formData);
    localStorage.setItem("tableData",JSON.stringify(tableData));
}