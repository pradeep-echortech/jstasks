$(document).ready(function () {
  let items = localStorage.getItem('cart')
  items = JSON.parse(items)
  let tableData = '';
  let totalData = '';
  items.map((values,index) => {
    let pic;
    pic = values.images[0]

    totalData += `<tr class="text-center">
                <td>${values.id}</td>
                <td>${values.title}</td>
                <td>${values.price}</td>
                <td><input type="number" value=${values?.count} min="1" ></td>
                <td><button id='remove${index}' class="btn btn-danger ms-4" >remove</button></td>
                </tr>`

    $('#c_table_body').html(totalData)
    
    
    tableData += `<div class="card" style="width: 18rem;padding: 5px;margin: 5px;height: fit-content;">
    <img src="${pic}" class="card-img-top" alt="...">
    <div class="card-body" style='height: fit-content;'>
    <h5 class="card-title">${values.title}</h5>
    <p class="card-text">${values.description}.</p>
    <p class="card-text">Price : $ ${values.price}.</p>
    
    </div>
    </div>`
  });
  $('#checkoutdisplay').html(tableData)
  items.map((values,ind)=>{
    $(`#remove${ind}`).click(function () {
      let remove = items.filter((val, index) => index !== ind)
      localStorage.setItem('cart', JSON.stringify(remove))
      window.location.reload()
    })
  })
    

  var table = document.getElementById("check"), sumVal = 0;
  for (var i = 1; i < table.rows.length; i++) {
    sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML) * parseInt(table.rows[i].cells[3].children[0].value);
    // console.log(`${parseInt(table.rows[i].cells[2].('value'))}`);
  }
  $('#val').html(`Total Amout = $ ${sumVal}`)

})