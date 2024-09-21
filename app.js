// Hamburger toggle event
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
});

// Close the sidebar when a nav link is clicked
const navLinks = document.querySelectorAll('.sidebar-menu ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('hamburger').classList.remove('active');
        document.getElementById('sidebar').classList.remove('active');
    });
});
