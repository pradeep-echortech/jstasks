console.log('Welcome to console');
document.body.style.fontWeight = 'bold';
let para = document.getElementsByTagName("p");
    para[0].style.fontSize = 50;
function show() {
    let str = document.getElementById('name').value;
    alert('Hi' + " " + str);
}
function buttonClick() {
    document.body.style.backgroundColor = 'orange';
    document.getElementById('main').innerHTML = "<h4>Welcome Meher!</h4> "
    let heading = document.getElementsByTagName('button');
    for (let i = 0; i < heading.length; i++) {
        heading[i].style.color = "white";
        heading[i].style.backgroundColor = "black";
    }
}
function radio() {
    let rb1 = document.getElementById('rb1');
    let rb2 = document.getElementById('rb2');
    if (rb1.checked == true)
        alert('Good ' + rb1.value)
    else if (rb2.checked == true)
        alert('Good ' + rb2.value)
    else
        alert('select any radio button')
}

function getTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    document.getElementById('time').innerHTML = `Time : ${h} : ${m} : ${s}`;
}
setInterval(getTime, 1000)

setInterval(()=>{
    let today = new Date();
    document.getElementById('date').innerHTML=today.toLocaleTimeString()
},1000)

    // let que = document.querySelectorAll(`button[class]`)
    // console.log(que);

// let b = prompt('Do you want to set timeout?')
//  const magic = setInterval(show,5000)


// let ele = document.getElementsByClassName('btn');
// console.log(ele);

// // document.getElementById('main').innerHTML="Heading changed"
// let element = document.getElementById('main');
// element=element.childNodes;
// element=element.className;
// console.log(element);
