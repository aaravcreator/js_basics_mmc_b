const productsElement = document.getElementById('products')



const products = [
    {
        name:"BANANA",
        price: 1.00,
        quantity: 10
    },
    {
        name:"PINEAPPLE",
        price: 2.00,
        quantity: 5
    }
]


console.log(products[0].name) // Banana


let html = ""
products.forEach((product)=>{
    console.log(product.name)
    console.log(product.price)
    console.log(product.quantity)

    let productHtml = `<h1>${product.name}</h1>
    <p> Price Rs. ${product.price} </p>
    <p> Stock ${product.quantity}</p>
    <hr>
    `
    html = html + productHtml
    // html += productHtml
})

productsElement.innerHTML = html




















const product_dataElement = document.getElementById('products-data')

fetch('https://dummyjson.com/posts').then(
    res=>res.json()
).then(
    data =>{
        console.log(data['posts'])

        const posts = data['posts']
        let html = ''
        posts.forEach((post)=>{
            html += `
            <h1>${post.title}</h1>
            <p> ${post.body}</p>
            <br>
            `

        })

        product_dataElement.innerHTML = html
    }
).catch((error)=>{
    console.log(error)
})

