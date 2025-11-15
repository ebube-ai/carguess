var remark = document.querySelector(".remark");
var button = document.querySelector(".btn");

remark.classList.add("hide");

button.addEventListener("click",StartGuessGame)
function StartGuessGame(e){
e.preventDefault()

var guessCar = document.querySelector(".guesscar").value;
var remark = document.querySelector(".remark")
var remarkStatement = document.querySelector(".remarkstatement")
var carName = document.querySelector(".carname")
var carImg = document.querySelector(".carimg")

var cars =["Toyota", "BMW", "Lamborghini", "Tesla", "nissan"]

if(guessCar==""){
    setTimeout(() =>{
        remark.classList.remove("hide");
        remarkStatement.innerHTML ="Please guess a car";
        remark.style.backgroundColor = "red"
        setTimeout(() =>{
            remark.classList.add("hide")
        }, 3000)
    }, 200)
} else {
    remark.classList.remove("hide")
    var indexNumber = Math.round(Math.random()*2)
    carName.innerHTML = cars[indexNumber];
    guessCar = guessCar.toUpperCase()
}
    if(carName.innerHTML.toUpperCase() == guessCar){
        remarkStatement.innerHTML = "Congratulations, you guessed right!!"
        remark.style.backgroundColor = "green"
    } else{
        remarkStatement.innerHTML = "nope, Guess again"
        remark.style.backgroundColor = "red"
    }
    carImg.src = cars[indexNumber] + ".jpeg";
}
    