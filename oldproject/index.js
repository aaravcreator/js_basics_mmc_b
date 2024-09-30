console.log("THIS IS FROM EXTERNAL JS FILE","NEXT",1);

var a = '20.99';
var b = '10.11';
var c = parseFloat(a) + parseFloat(b);

console.log(typeof a)

// var outputText = "SUM of " + a +  " and " + b + " is " + c.toFixed(2)

var outputText = `Sum of a: ${a} and b: ${b} is ${c.toFixed(2)}`
console.log(outputText)


// var num1 = 55 
// num1 = 66 // update
// var num1 = 88 // redeclare


// let num1 = 55
// num1 = 66 // update
// let num1 = 88 // error

const num1 = 66
//num1 = 88 // error update not allowed in constant data
//const num1 = 99 // error redeclare not allowed in constant data

console.log("The number is",num1)



// console.log("Sum of a and b is", c.toFixed(2));


console.log("-----------******--------------")


const headingElement = document.getElementById("heading")

console.log(headingElement)

headingElement.textContent = "THIS IS UPDATED HEADING BY JS"

const num_a = document.getElementById('num-a')
const num_b = document.getElementById('num-b')

let result = parseInt(num_a.value) + parseInt(num_b.value)
console.log(result)

const resultElement = document.getElementById('result')
resultElement.textContent = "Result " + result
console.log("Value is : ",num_a.value)



const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')

function handleAddition(){

    console.log('Button Clicked!')
    const num_a = document.getElementById('num-a')
    const num_b = document.getElementById('num-b')
    let result = parseInt(num_a.value) + parseInt(num_b.value)

    const resultElement = document.getElementById('result')
    resultElement.textContent = "Result " + result
}

// function expression 
const  handleSubtraction = ()=>{
    console.log('Button Clicked!')
    const num_a = document.getElementById('num-a')
    const num_b = document.getElementById('num-b')
    let result = parseInt(num_a.value) - parseInt(num_b.value)

    const resultElement = document.getElementById('result')
    resultElement.textContent = "Result " + result
}

addBtn.addEventListener("click", handleAddition )
subBtn.addEventListener("click", handleSubtraction )












