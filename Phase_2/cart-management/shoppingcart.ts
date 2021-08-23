class Product {
    constructor(public name:string, public price:number){
        this.name = name;
        this.price = price;
    }
}

function size(){
    let cartData:Array<Product> = JSON.parse(localStorage.getItem('cartData') || "[]");
    document.getElementById('output').innerHTML="Cart Size: "+cartData.length;
}

function add(name:string, price:number){
    let product = new Product(name,price);
    let cartData:Array<Product> = JSON.parse(localStorage.getItem('cartData') || "[]");
    cartData.push(product);
    localStorage.setItem('cartData', JSON.stringify(cartData));
    document.getElementById('output').innerHTML="Cart Size: "+cartData.length;
}

function display(){
    let tableData = JSON.parse(localStorage.getItem('cartData'));
    
    var total:number = 0;
    let tableContent = "<table border='1' class='table table-hover w-50'><tr><th>Product Name</th><th>Price</th></tr>";
    tableData.forEach((key: { name: string; price: number; })=>{
        tableContent+="<tr><td>"+key.name+"</td><td>"+key.price+"</td></tr>"
        total+=key.price;
    })
        tableContent+="</table><br/>Total Price: $" + total;

    document.getElementById("main").innerHTML=tableContent;
}