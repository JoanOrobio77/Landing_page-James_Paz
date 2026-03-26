/**
 * Yo Soy James - Spiritual Landing Page
 * Smooth scroll, fade-in on scroll, hero particles
 */

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initScrollAnimations();
    initHeroParticles();
});

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Fade-in animations on scroll (calm, elegant)
 */
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section-fade');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            root: null,
            rootMargin: '0px 0px -60px 0px',
            threshold: 0.08
        }
    );

    sections.forEach((section) => observer.observe(section));
}

/**
 * Lightweight hero particles: created once, animated with CSS only (good performance + mobile)
 */
function initHeroParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const particleCount = isMobile ? 8 : 14;
    const floatClasses = ['particle--float-1', 'particle--float-2', 'particle--float-3', 'particle--float-4'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle ' + floatClasses[i % floatClasses.length];

        const size = 4 + Math.random() * 6;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 32 + Math.random() * 18;
        const delay = Math.random() * 20;

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.top = top + '%';
        particle.style.setProperty('--duration', duration + 's');
        particle.style.setProperty('--delay', -delay + 's');

        container.appendChild(particle);
    }
}
