let body = document.querySelector("body");
let text = document.querySelectorAll(".main-item__title");
let danger = true;
let olrt = "";
if (danger == true) {
    text.forEach(element => {
        element.innerHTML = olrt;
    });
    document.body.innerHTML = "";
    console.log("Bye bye")
} else {

}

