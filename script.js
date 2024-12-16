
var inVal = document.querySelector("input[type='text']");
var b = document.querySelector("button");
var listFinal = document.querySelector("#todoList");
var listArr = [];

function getItem(){
    if(inVal.value.length > 0){
        listArr.push(inVal.value);
    }  
    renderList();

    inVal.value = "";
}

function renderList(){
    listFinal.innerHTML = "";

    for(let item of listArr){
        listFinal.innerHTML += `<li>${item}</li>`;
    }
}

function imgChange(){
    document.querySelector("img").src = "https://res.cloudinary.com/dsnxbuuwh/image/upload/v1727098211/dddui1oov8g7ufceshah.jpg";
    document.querySelector("img").alt = "Me";
    document.querySelector("h1").innerText = "Easter Egg";
}

function changeAgain(){
    document.querySelector("img").src = "https://res.cloudinary.com/dsnxbuuwh/image/upload/v1725974806/l7sjo6zsjsadfhlimva4.jpg";
    document.querySelector("img").alt = "Mountain";
    document.querySelector("h1").innerText = "Me and my Mom";
}

b.addEventListener("click", getItem);
document.querySelector("img").addEventListener("mouseenter", imgChange);
document.querySelector("img").addEventListener("mouseleave", changeAgain);