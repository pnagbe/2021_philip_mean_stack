function getData(){
    let cname = document.getElementById('clientname').value;
    let pname = document.getElementById('projname').value;
    let bname = document.getElementById('budget').value;

    let formData = {'cname':cname, 'pname':pname, 'bname':bname};

    localStorage.setItem("tableData",JSON.stringify(formData));
}