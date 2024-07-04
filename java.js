// JavaScript code for changing navigation background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#ffcc00';
    } else {
        nav.style.backgroundColor = '#003366';
    }
});

// JavaScript code for changing font color of menu items on hover
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ffcc00';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = '#fff';
    });
});
