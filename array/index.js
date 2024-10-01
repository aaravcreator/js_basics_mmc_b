console.log("THIS IS FROM ARRAY")
let numbers = [1,2,3,4,5]

console.log(numbers[0]) 
console.log(numbers[1]) // prints 2nd element
console.log(numbers.length) // prints length

numbers.push(6) // adds 6 to last of the array
console.log(numbers)
numbers.pop() // removes last element of the array
console.log(numbers)
numbers.shift() // removes first element of the array
console.log(numbers)

numbers[2] = 55 // modifies the element with index 2 to 55
console.log(numbers)

for (let i = 0; i< numbers.length ; i++){

    console.log(numbers[i])
}

console.log("---------")
for ( const number of numbers)
{
    console.log(number)
}

numbers.forEach(
    (number,index)=>{ 
        console.log("NUMBER IS ", number ,"indexx is ", index)
}
)

const doubledNumbers = numbers.map(
    (number)=>{
        return number*2
    }
)
console.log(doubledNumbers)


let meroNumbers = [1,4,7,8,9,13,15,20]
const evenNumbers = meroNumbers.filter(
    (num)=>{
        return num % 2 === 0  // modular division , checks if remainder is 0
    }
)
console.log(evenNumbers)


const data  = {
    name:"RAM KUMAR",
    age: 25,
    gender:"MALE",
    skills:["SINGING","DANCING","VOLLEYBALL",]
}
console.log(data.name)
console.log(data["age"]) // accessing properties using bracket notation

data.skills.forEach(
    (skill)=>{
    console.log(skill)
}
)



/*
console.log(data)
const json = JSON.stringify(data)
console.log(json)
console.log(JSON.parse(json))

fetch('https://dummyjson.com/posts').then(res=>{
    console.log(res.json())
    
    return res.json()}).then(data=>{
    // console.log(data)
})


*/





