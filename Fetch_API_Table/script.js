
fetch('https://fakestoreapi.com/products')
.then((data) => data.json())
.then((completeData) => {
    let data1 = "";
    completeData.map((values) => {
        data1 += `<tr>
        <th scope="row">${values.title}</th>
        <td>${values.description}</td>
        <td>$${values.price}</td>
        <td><img src="${values.image}"></td>
      </tr>`
    })
    document.getElementById("table-body").innerHTML = data1;
}).catch((err) => {
    console.log(err);
})

