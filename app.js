document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbar = document.querySelector('.navbar');

    navbarToggle.addEventListener('click', function() {
        navbar.classList.toggle('collapsed');
        navbarToggle.classList.toggle('change');
    });
});

function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}