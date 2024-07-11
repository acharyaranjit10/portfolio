document.addEventListener('DOMContentLoaded', () => {
    // HAMBURGER START***************************
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
    // HAMBURGER ENDS***************************

    // HOME TEXT ANIMATION STARTS************************
    const paragraphs = [
        "A MERN Stack Developer,",
        "A Full Stack WebDeveloper,",
        "An avid learner."
        
    ];
    const typingTextElement = document.getElementById('typing-text');
    let currentIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < paragraphs[currentIndex].length) {
            typingTextElement.textContent += paragraphs[currentIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            setTimeout(erase, 1500); // Hold the text for a while before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingTextElement.textContent = paragraphs[currentIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 40); // Adjust backspace speed here
        } else {
            currentIndex = (currentIndex + 1) % paragraphs.length;
            setTimeout(type, 200); // Delay before starting to type the next paragraph
        }
    }
    
    type(); // Start the typing effect
    // HOME TEXT ANIMATION ENDS*********************************************


    // SCROLL ADJUST START*******************************


// Calculate the height of the fixed navbar
const navbarHeight = document.querySelector('.navbar').offsetHeight;

// Smooth scroll function
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    }
}

// Add event listeners to navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

    // SCROLL ADJUST ENDS*********************************


    
});
