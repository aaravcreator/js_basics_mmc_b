

const bodyElement = document.body

// console.log(bodyElement.innerHTML)
bodyElement.style.backgroundColor = "yellow"
bodyElement.style.textAlign = "center"
// bodyElement.style.fontStyle = "italic"


const redBtn = document.querySelector('#red')

redBtn.addEventListener('click',()=>{
    bodyElement.style.backgroundColor = "red"
}
)

const greenBtn = document.querySelector('.green')

greenBtn.addEventListener('click',()=>{
    bodyElement.style.backgroundColor = "green"
}
)
