const navbarToggle = document.querySelector('.navbar-toggle'); 
const navlinks = document.querySelector('.navlinks');

navbarToggle.addEventListener('click', event =>{
    if(navlinks.style.display === 'none'){
        event.target.innerText = 'X'
        navlinks.style.display = 'block'
    } else{
        event.target.innerText = 'O'
        navlinks.style.display = 'none'
    }
})