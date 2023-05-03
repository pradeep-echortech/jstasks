let form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    let obj = Object.fromEntries(fd);
    console.log(obj);

    const json = JSON.stringify(obj)
    localStorage.setItem('form', json)
})