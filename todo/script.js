let addtodobutton = document.getElementById('addtodo');
let toDoContainer = document.getElementById('toDoContainer');
let inputfield = document.getElementById('inputfield');

addtodobutton.addEventListener('click',function(){
    let paragraph =document.createElement('p');
    paragraph.innerText=inputfield.value;
    toDoContainer.appendChild(paragraph);
    inputfield.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration= 'line-through'
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
})