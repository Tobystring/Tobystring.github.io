// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link click behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID (without #)
        const targetSection = document.getElementById(targetId); // Find the section by ID

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add a Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Back to Top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

// Show/Hide Back-to-Top Button on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when Back-to-Top Button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});