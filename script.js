//const h2 = document.createElement('h2')
//h2.textContent = "The content added by Javascript"

//document.querySelector('body').appendChild(h2)

//const x = document.getElementById('adrienne')
//x.addEventListener("mouseover", myFunction)

//function myFunction() {
//    ${"adrienne"}.attributes('src', 'images/Adrienne2.JPG')
//}

//function onHoverA(x) {
    //x.src = "images/Adrienne2.JPG"
    //document.getElementById('adrienne').src='images/Adrienne2.JPG'
    //${"#adrienne"}.attr('src', 'images/Adrienne2.JPG')
}
//function offHoverA() {
    //${"#adrienne"}.attr('src', 'images/AdriennePaquin.jpg')
//}
const a = document.getElementById("adrienne")

function aOnHover() {
    document.getElementById("adrienne").innerHTML = "<img src= \"images/Adrienne2.JPG\">"
    //a.src = "images/Adrienne2.JPG"
}
function aOffHover() {
    document.getElementById("adrienne").innerHTML = "<img src= \"images/AdriennePaquin.JPG\">"
    //a.src = "images/AdriennePaquin.jpg"
}

a.addEventListener('mouseover', aOnHover)
a.addEventListener('mouseout', aOffHover)

const submit = document.getElementById("submit")

function formAlert() {
    alert ('Thanks for your input! We\'ll be in touch soon!')
}
submit.addEventListener('click', formAlert)