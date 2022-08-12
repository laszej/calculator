const input = document.getElementById("input")
const input1 = document.getElementById("input1")
const calculator = document.getElementById("calculator")
const operatorsDiv = document.getElementById("operatorsDiv")

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."]

const operators = ["÷", "×", "-", "+", "=", "C"]

let calculate

let previous

let hidden

let numbersString=""
let numbersArray = []
let operatorsArray = []
let operatorsString=""

function calc(){
numbers.forEach((item, index)=>{
let el = document.createElement("div")
el.classList.add("el")
el.innerHTML = item
el.id = index
el.value = item
calculator.append(el)
el.addEventListener("click", (e)=>{
    numbersArray.push(e.target.value)
    input1.innerHTML = numbersArray.join("")
})

})

operators.forEach((item, index)=>{
    let el = document.createElement("div")
    el.id = index
    el.innerHTML = item
    el.value = item
    if(el.id < 4) { el.classList.toggle("special-el")}
    else{
    el.classList.add("el")  } 
    
    operatorsDiv.append(el)
    el.addEventListener("click", (e)=>{
        
        operatorsString =  input1.innerHTML += e.target.value
        if(e.target.value === "+" || e.target.value === "-" || e.target.value === "×" || 
        e.target.value === "÷"){
        hidden = document.querySelectorAll(".special-el")
        hidden.forEach((item=>{item.style.visibility="hidden"}))
        operatorsArray.push(e.target.value)
        previous ? a = previous :
        a = numbersArray.slice(0).join(""); numbersArray=[]}
        console.log("a: ", a)
        if(e.target.value === "C"){location.reload()}
        b = numbersArray.slice(0).join("");
        console.log("b: ", b)
        numbersArray=[];
        if(e.target.value === "="){
            hidden.forEach((item=>{item.style.visibility="visible"}))
            kalc(a, b)}
       
    })
    })
}

function kalc(a, b){
console.log(operatorsArray)
if(operatorsArray[0]==="+")
{calculate = (parseFloat(a) + parseFloat(b)).toPrecision(10);
}

else if(operatorsArray[0]==="-")
    {calculate = (parseFloat(a) - parseFloat(b)).toPrecision(10);} 

else if(operatorsArray[0]==="×")
     {calculate = (parseFloat(a) * parseFloat(b)).toPrecision(10);}

else if(operatorsArray[0]==="÷")
    {calculate = (parseFloat(a) / parseFloat(b)).toPrecision(10);
     calculate.indexOf(".")===0 ? calculate = calculate.slice(0,1) : calculate = calculate} 

previous = calculate
input.innerHTML = previous
input1.innerHTML = input1.innerHTML=`${a} ${operatorsArray[0]} ${b}`
operatorsArray = [] 
console.log(operatorsArray)

}

calc()

