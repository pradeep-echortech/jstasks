$(document).ready(function () {
    console.log('bbbjnjnm')
    let items = localStorage.getItem('cart')
    items = JSON.parse(items)
    let tableData = '';
    items.map((values,index) => {
        let pic;
        console.log(values.images)
        pic = values.images[0]
        tableData += `<div class="card" style="width: 18rem;padding: 5px;margin: 5px;height: fit-content;">
                    <img src="${pic}" class="card-img-top" alt="...">
                    <div class="card-body" style='height: fit-content;'>
                      <h5 class="card-title">${values.title}</h5>
                      <p class="card-text">${values.description}.</p>
                      <p class="card-text">Price : $ ${values.price}.</p>
                      <p class="card-text">quantity :${values.count}.</p>
                      <a class="btn btn-primary" id="product${values.id}">Buy Now</a>
                      <button class="btn btn-danger ms-4" id="remove${index}">remove</button>
                    </div>
                  </div>`
    });
    $('#cartdisplay').html(tableData)
    items.map((values,ind) => {
        $(`#remove${ind}`).click(function () {
            console.log(ind);
            let remove = items.filter((val,index) => index!==ind)
            localStorage.setItem('cart', JSON.stringify(remove))
            window.location.reload()
        })
    })
})