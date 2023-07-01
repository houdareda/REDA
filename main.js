let btnMenu = document.getElementById('btn-menu');
let navLink = document.querySelector('.nav-links');

btnMenu.onclick = () => {
    btnMenu.classList.toggle('fa-times') 
    navLink.classList.toggle('active')
}

