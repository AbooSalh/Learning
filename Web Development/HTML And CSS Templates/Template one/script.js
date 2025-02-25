let links = document.querySelector('header .links ');
links.addEventListener('click', ()=>{
    links.querySelector('ul').classList.toggle('active');
    document.querySelector("header .links").classList.toggle("active");
})