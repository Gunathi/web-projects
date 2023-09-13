fetch('https://fakestoreapi.com/products')
.then((data) => data.json())
.then((completeData) => {
    //console.log(completeData[2]);
    let data1 = "";
    completeData.map((values) => {
        data1 += `<div class="card">
        <h2>${values.title}</h2>
        <img src=${values.image} alt="Phone">
        <p>${values.description}</p>
        <p class="price">$${values.price}</p>
        <i class="fa-solid fa-circle-plus"></i>
    </div>`
    })
    document.getElementById("cards").innerHTML = data1;
}).catch((err)=> {
    console.log(err);
})
