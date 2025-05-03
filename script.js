// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.feature-card, .screenshot, .developer-card');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const angleX = (mouseY - (cardY / window.innerHeight - 0.5)) * 10;
        const angleY = (mouseX - (cardX / window.innerWidth - 0.5)) * -10;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
    });
});

// Reset transform on mouse leave
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.feature-card, .screenshot, .developer-card');
    cards.forEach(card => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Animate elements on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.feature-card, .screenshot, .developer-card').forEach(el => {
    observer.observe(el);
});

// Add animation classes with 3D transforms
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px) rotateX(10deg)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

document.querySelectorAll('.screenshot').forEach(screenshot => {
    screenshot.style.opacity = '0';
    screenshot.style.transform = 'translateX(20px) rotateY(10deg)';
    screenshot.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

document.querySelector('.developer-card').style.opacity = '0';
document.querySelector('.developer-card').style.transform = 'translateY(20px) rotateX(10deg)';
document.querySelector('.developer-card').style.transition = 'opacity 0.5s ease, transform 0.5s ease';

// Add animation class
const animateClass = document.createElement('style');
animateClass.textContent = `
    .animate {
        opacity: 1 !important;
        transform: translate(0) rotateX(0) rotateY(0) !important;
    }
`;
document.head.appendChild(animateClass);

// Auto-sliding carousel
const carousel = document.querySelector('.screenshot-carousel');
const screenshots = document.querySelectorAll('.screenshot');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoSlideInterval;
let isMobile = window.innerWidth <= 768;

function updateCarousel(index) {
    // Remove active class from all screenshots and dots
    screenshots.forEach(screenshot => {
        screenshot.classList.remove('active');
        if (isMobile) {
            screenshot.style.display = 'none';
        }
    });
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current screenshot and dot
    screenshots[index].classList.add('active');
    if (isMobile) {
        screenshots[index].style.display = 'block';
    }
    dots[index].classList.add('active');

    // Update current index
    currentIndex = index;
}

function nextSlide() {
    const nextIndex = (currentIndex + 1) % screenshots.length;
    updateCarousel(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
    updateCarousel(prevIndex);
}

function startAutoSlide() {
    stopAutoSlide(); // Clear any existing interval
    autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
    updateCarousel(currentIndex);
});

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    // Preload images
    screenshots.forEach(screenshot => {
        const img = screenshot.querySelector('img');
        if (img) {
            img.onload = () => {
                console.log('Image loaded:', img.src);
            };
            img.onerror = () => {
                console.error('Error loading image:', img.src);
            };
        }
    });

    updateCarousel(0);
    startAutoSlide();
});

// Add click event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        updateCarousel(index);
        startAutoSlide();
    });
});

// Pause auto-slide on hover (desktop only)
if (!isMobile) {
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
}

// Touch events for mobile
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoSlide();
});

carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoSlide();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left
            nextSlide();
        } else {
            // Swipe right
            prevSlide();
        }
    }
}

// Add floating animation to the hero section
const heroContent = document.querySelector('.hero-content');
let floatY = 0;
let floatDirection = 1;

function animateFloat() {
    floatY += 0.1 * floatDirection;
    if (floatY > 20) floatDirection = -1;
    if (floatY < 0) floatDirection = 1;
    heroContent.style.transform = `translateY(${floatY}px) translateZ(50px)`;
    requestAnimationFrame(animateFloat);
}

animateFloat();

// Animated neural network for hero background
(function() {
    const canvas = document.getElementById('hero-bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    const nodes = [];
    let NODE_COUNT = 32;
    let MAX_DIST = 160;
    const COLORS = ['#FF8C00', '#FFA500', '#8b949e'];

    function setNetworkDensity() {
        if (window.innerWidth >= 769) {
            NODE_COUNT = 64; // Denser for PC
            MAX_DIST = 110;
        } else {
            NODE_COUNT = 32; // Lighter for mobile
            MAX_DIST = 160;
        }
    }

    function resize() {
        width = canvas.width = canvas.offsetWidth = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.offsetHeight = canvas.parentElement.offsetHeight;
        setNetworkDensity();
    }

    function randomBetween(a, b) {
        return a + Math.random() * (b - a);
    }

    function createNode() {
        return {
            x: randomBetween(0, width),
            y: randomBetween(0, height),
            r: randomBetween(3, 6),
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            dx: randomBetween(-0.12, 0.12),
            dy: randomBetween(-0.12, 0.12),
            alpha: randomBetween(0.5, 0.9)
        };
    }

    function drawNode(n) {
        ctx.save();
        ctx.globalAlpha = n.alpha;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, 2 * Math.PI);
        ctx.fillStyle = n.color;
        ctx.fill();
        ctx.restore();
    }

    function drawLine(n1, n2) {
        const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
        if (dist < MAX_DIST) {
            ctx.save();
            ctx.globalAlpha = 0.18 * (1 - dist / MAX_DIST);
            ctx.strokeStyle = n1.color;
            ctx.shadowColor = n1.color;
            ctx.shadowBlur = 8;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
            ctx.restore();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        // Draw lines first
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                drawLine(nodes[i], nodes[j]);
            }
        }
        // Draw nodes
        for (let n of nodes) {
            n.x += n.dx;
            n.y += n.dy;
            // Bounce off edges
            if (n.x < 0 || n.x > width) n.dx *= -1;
            if (n.y < 0 || n.y > height) n.dy *= -1;
            drawNode(n);
        }
        requestAnimationFrame(animate);
    }

    function init() {
        resize();
        nodes.length = 0;
        for (let i = 0; i < NODE_COUNT; i++) {
            nodes.push(createNode());
        }
        animate();
    }

    window.addEventListener('resize', () => {
        resize();
        nodes.length = 0;
        for (let i = 0; i < NODE_COUNT; i++) {
            nodes.push(createNode());
        }
    });
    setTimeout(init, 100);
})(); 
