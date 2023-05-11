$(document).ready(function () {
    $('#allproducts').on('click',function () {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((objectData) => {
                console.log(objectData[0].title);
                let tableData = '';
                objectData.map((values) => {
                    tableData += `<div class="card" style="width: 18rem;padding: 5px;margin: 5px;height: fit-content;">
                    <img src="${values.image}" class="card-img-top" alt="...">
                    <div class="card-body" style='height: fit-content;'>
                      <h5 class="card-title">${values.title}</h5>
                      <p class="card-text">${values.description}.</p>
                      <p class="card-text">Price :${values.price}.</p>
                      <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                  </div>`
                    
                    
                //     `<tr>
                // <td>${values.title}</td>
                // <td>${values.description}</td>
                // <td>${values.price}</td>
                // <td><img src='${values.image}'</td>
                // </tr>`
                });
                $('#cardsc').html(tableData)
            })

            
        // fetch('https://fakestoreapi.com/products/search?q=laptop')
        // .then(res=>res.json())
        // .then(console.log)
    })
    $('#allcategories').on('click',function () {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then((objectData) => {
                console.log(objectData[0].title);
                let tableData = '';
                objectData.map((values) => {
                    tableData += `<tr>
                <td>${values}</td>
                </tr>`
                });
                $('#c_table_body').html(tableData)
            }) 
    })
    $('#search').on('click',function () {
        fetch(`https://fakestoreapi.com/products/category/${$('#search_input').val()}`)
        .then(res => res.json())
        .then((objectData) => {
            console.log(objectData[0].title);
            let tableData = '';
            objectData.map((values) => {
                tableData += `<div class="card" style="width: 18rem;padding: 5px;margin: 5px;height: fit-content;">
                <img src="${values.image}" class="card-img-top" alt="...">
                <div class="card-body" style='height: fit-content;'>
                  <h5 class="card-title">${values.title}</h5>
                  <p class="card-text">${values.description}.</p>
                  <p class="card-text">Price :${values.price}.</p>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>`
            });
            $('#cardsc').html(tableData)
        })
    })
    
})