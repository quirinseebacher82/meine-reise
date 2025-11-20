// Einfaches Mobile-Menü (wenn später ein Burger-Menü eingebaut wird)
console.log("Script geladen: Reiseblog JS aktiv");

// Smooth Scrolling für interne Links
const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Beispiel: Dynamische Jahreszahl im Footer (falls du später einen Footer einbaust)
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Beispiel: einfache Animation für Section-Boxen
const boxes = document.querySelectorAll('.section-box');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

boxes.forEach(box => {
    box.style.opacity = 0;
    box.style.transform = "translateY(20px)";
    box.style.transition = "0.6s ease";
    observer.observe(box);
});
