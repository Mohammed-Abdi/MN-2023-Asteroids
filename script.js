const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu ul');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuIcon.innerHTML = menu.classList.contains('show') 
        ? "<i class='bx bx-x'></i>"
        : "<i class='bx bx-menu'></i>";
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && menu.classList.contains('show')) {
        menu.classList.remove('show');
        menuIcon.innerHTML = "<i class='bx bx-menu'></i>";
    }
});
