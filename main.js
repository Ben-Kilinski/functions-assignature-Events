//task 1 
function myFunction() {
    console.log("alert")
}

document.body.innerHTML = `<div id="myDiv"></div>`
document.getElementById("myDiv").innerHTML = `<h1 id="myH1">Pass the mouse here</h1>`
document.getElementById("myH1").addEventListener("mouseover", myFunction);

//task 2 
document.body.innerHTML += `<h3 id="myH3">Pass the mouse here</h3>`
myH3.addEventListener("mouseover", functionTask2)
function functionTask2() {
    myH3.style = "color: tomato"
}