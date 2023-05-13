$(document).ready(function () {
    function addToCart(values) {
        let items = localStorage.getItem('cart')
        if (!items) {
            values = [values]
        }
        else {
            items = JSON.parse(items)
            values = [...items, values]
        }
        localStorage.setItem('cart', JSON.stringify(values))
        // console.log(items);

    }
    window.addToCart = addToCart
    $('#allproducts').on('click', function () {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((objectData) => {
                let tableData = '';
                objectData.products.map((values) => {
                    tableData += `<div class="card" style="width: 18rem;padding: 5px;margin: 5px;height: fit-content;">
                    <img src="${values.images[0]}" class="card-img-top" alt="...">
                    <div class="card-body" style='height: fit-content;'>
                      <h5 class="card-title">${values.title}</h5>
                      <p class="card-text">${values.description}.</p>
                      <p class="card-text">Price : $ ${values.price}.</p>
                      <a class="btn btn-primary" id="product${values.id}">Add To Cart</a>
                    </div>
                  </div>`
                });
                $('#cardsc').html(tableData)
                objectData.products.map(values => {
                    $(`#product${values.id}`).click(function () {
                        addToCart({
                            id: `${values.id}`,
                            title: `${values.title}`,
                            description: `${values.description}`,
                            price: `${values.price}`,
                            images: `${values.images}`
                        })
                    })
                })
            })
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(console.log)
    })

    // All categories
    $('#allcategories').on('click', function () {
        fetch('https://dummyjson.com/products/categories')
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

    // search bar
    $('#search').on('click', function () {
        fetch(`https://dummyjson.com/products/category/${$('#search_input').val()}`)
            .then(res => res.json())
            .then((objectData) => {
                console.log(objectData.products[0].title);
                let tableData = '';
                objectData.products.map((values) => {
                    tableData += `<div class="card" style="width: 18rem;padding: 5px;margin: 5px;height: fit-content;">
                    <img src="${values.images[0]}" class="card-img-top" alt="...">
                    <div class="card-body" style='height: fit-content;'>
                      <h5 class="card-title">${values.title}</h5>
                      <p class="card-text">${values.description}.</p>
                      <p class="card-text">Price :${values.price}.</p>
                      <a class="btn btn-primary" id="product${values.id}">Add To Cart</a>
                    </div>
                  </div>`
                });
                $('#cardsc').html(tableData)
                objectData.products.map(values => {
                    $(`#product${values.id}`).click(function () {
                        addToCart({
                            id: `${values.id}`,
                            title: `${values.title}`,
                            description: `${values.description}`,
                            price: `${values.price}`,
                            images: `${values.images}`
                        })
                    })
                })
            })
    })
})