function getData(){
    let title = document.getElementById("title").value;
    let article = document.getElementById("article").value;
    let image = document.getElementById("image").value;

    let formData = {'titlename':title, 'articlename':article, 'imagename':image};

    let blogData = JSON.parse(localStorage.getItem("blogData") || "[]");
    blogData.push(formData);
    localStorage.setItem("blogData", JSON.stringify(blogData));
}

function displayData(){
    let cardData = JSON.parse(localStorage.getItem("blogData"));
    let cardContent = "";

    cardData.forEach(key=>{
        if(key.titlename != ""){
            cardContent += "<div class='card col-sm-3'>"
                            +"<div class='card-body'><span style='font-weight: bold;'>"+key.titlename+"</span><br/>"+key.articlename+"</div>"
                            +"<img class='card-img-bottom' height='200px' src="+key.imagename+" alt='Card image cap'>"
                          +"</div>";
            }
        })
  
    document.getElementById('display').innerHTML=cardContent;
}

