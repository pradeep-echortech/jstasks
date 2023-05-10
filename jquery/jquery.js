// $(document).ready(function () {
// $('.btn').click(function () {

// $('#div1').fadeToggle()
// $('#div2').fadeToggle('slow')
// $('#div3').fadeToggle(2000)

//     $('.second').fadeToggle(1000)

//     $('.box').animate({
//         width: '+=250px',
//         height: '200px',
//         fontSize: '35px'
//     })

//     $('.second').html('<b>This is the changed paragraph</b>')

//     $('.second').toggleClass('box')

//     let color = $('div.box').css('background-color')
//     $('#third').css({
//         'background-color': color,
//         'color': 'red',
//         'font-size': '35px'
//     })
// })


// $('body').keydown(function (event) {
//     if (event.which == 72) {
//         $('.second').hide()
//     }
//     if (event.which == 83) {
//         $('.second').show()
//     }
// })

// $('input').focus(function (){
//     $(this).css('background-color','tomato')
// })
// $('input').blur(function (){
//     $(this).css('background-color','')
// })
// $('input').change(function (){
//     console.log($(this).val());
// })
// $('#register').submit(function (event) {
//     event.preventDefault()
//     console.log('Form Submitted Successfully');
// })


// })

// let intervel;
// $('#btn1').click(function () {
//     let inter = function () {
//         console.log('intervel is running')
//     }
//     intervel = setInterval(inter, 1000)
// })

// $('#btn2').click(function () {
//     clearInterval(intervel);
// }
// )

// var intervals = []
// var inte = null
// $('#btn3').on('click', function () {
//     // if(inte != null) return
//     let inter = function () {
//         console.log('intervel is running', new Date())
//     }
//     inte = setInterval(inter, 1000)
//     intervals.push(inte)
// })
// $('#btn4').on('click', function () {
//     // clearInterval(inte)
//     intervals.forEach(i => clearInterval(i))
//     intervals=[]
// })

$(document).ready(function () {
    // $.get('https://dummyjson.com/products',
    // function(data,status){
    //     console.log(data,status);
    // })
    // $.post('https://dummyjson.com/products/add',
    // { title: "this is title", body: "this is body"},
    // function(data,status){
    //     console.log(data,status);
    // })

    // fetch('https://dummyjson.com/products/2?select=title,price')
    // .then(res => res.json())
    // .then(console.log);

    // fetch('https://dummyjson.com/products/1',{
    //     method: 'put',
    //     headers: {'Content-Type':'application/json'},
    //     body:JSON.stringify({
    //         title:'iphone galaxy'
    //     })
    // })
    // .then(res => res.json())
    // .then(console.log);

    // fetch('https://dummyjson.com/carts/user/5')
    // .then(res => res.json())
    // .then(console.log)


    // add to cart

    // fetch('https://dummyjson.com/carts/add', {
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         userId: 1,
    //         products: [
    //             {
    //                 id: 1,
    //                 quantity: 1,
    //             },
    //             {
    //                 id: 50,
    //                 quantity: 2,
    //             },
    //         ]
    //     })
    // })
    //     .then(res => res.json())
    //     .then(console.log)

    // update cart

    // fetch('https://dummyjson.com/carts/1', {
    //     method: 'put',
    //     headers: { 'content-type': 'application/json' },
    //     body: JSON.stringify({
    //         merge: true,
    //         products:[
    //             {
    //                 id: 1 ,
    //                 quantity: 1,
    //             },
    //         ]
    //     })
    // })
    // .then(res => res.json())
    // .then(console.log)

    // fetch('https://dummyjson.com/todos')
    // .then(res => res.json())
    // .then(console.log)

    // fetch('https://dummyjson.com/users/1', {
    //     method: 'put',
    //     headers: { 'content-type': 'application/json' },
    //     body: JSON.stringify({
    //         lastName: 'Pradeep',
    //         age: 25,
    //     })
    // })
    //     .then(res => res.json())
    //     .then(console.log)

    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(console.log)
})