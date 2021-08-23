var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
function size() {
    var cartData = JSON.parse(localStorage.getItem('cartData') || "[]");
    document.getElementById('output').innerHTML = "Cart Size: " + cartData.length;
}
function add(name, price) {
    var product = new Product(name, price);
    var cartData = JSON.parse(localStorage.getItem('cartData') || "[]");
    cartData.push(product);
    localStorage.setItem('cartData', JSON.stringify(cartData));
    document.getElementById('output').innerHTML = "Cart Size: " + cartData.length;
}
function display() {
    var tableData = JSON.parse(localStorage.getItem('cartData'));
    var total = 0;
    var tableContent = "<table border='1' class='table table-hover w-50'><tr><th>Product Name</th><th>Price</th></tr>";
    tableData.forEach(function (key) {
        tableContent += "<tr><td>" + key.name + "</td><td>" + key.price + "</td></tr>";
        total += key.price;
    });
    tableContent += "</table><br/>Total Price: $" + total;
    document.getElementById("main").innerHTML = tableContent;
}
