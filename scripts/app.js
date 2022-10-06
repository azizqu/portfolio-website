// To 
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarNavDropdown');

navLinks.forEach((linkItem) =>{
    linkItem.addEventListener('click', () => {
        menuToggle.classList.remove('show');

    })
})

