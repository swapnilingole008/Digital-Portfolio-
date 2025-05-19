document.addEventListener('DOMContentLoaded', () => {
    // Navigation functionality
    const navIcons = document.querySelectorAll('.nav-icon');
    const sections = document.querySelectorAll('.section');

    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Navigation click handler
    navIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Remove active class from all icons and sections
            navIcons.forEach(i => i.classList.remove('active'));
            sections.forEach(s => {
                s.classList.add('hidden');
                s.classList.remove('animate-fade-in');
            });

            // Add active class to clicked icon
            icon.classList.add('active');

            // Show corresponding section with animation
            const sectionId = icon.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            targetSection.classList.remove('hidden');
            targetSection.classList.add('animate-fade-in');
        });
    });

    // Project Links
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');
            window.open(url, '_blank');
        });
    });

    // Skill Cards Animation
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Contact Links
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.05)';
            link.style.color = 'var(--color-primary)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
            link.style.color = 'var(--color-secondary)';
        });
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.project-overlay').classList.add('opacity-100');
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('.project-overlay').classList.remove('opacity-100');
        });
    });

    // Add scroll reveal animations
    const revealElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .contact-item');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}); 