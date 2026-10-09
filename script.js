// ==========================================================================
// MADHUMITHA PORTFOLIO - CLIENT INTERACTIONS & DYNAMICS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Typing Effect in Hero
    const words = [
        "Full Stack Developer",
        "B.Tech IT Student",
        "AI/ML Tech Explorer",
        "Docker & Cloud Enthusiast"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typingText");
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDelay = 1800;

    function typeEffect() {
        if (!typingElement) return;

        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentDelay = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentWord.length) {
            currentDelay = pauseDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            currentDelay = 400;
        }

        setTimeout(typeEffect, currentDelay);
    }

    typeEffect();

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // 3. Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    });

    // 4. One-Click Email Copy
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const emailVal = document.getElementById('emailVal');

    if (copyEmailBtn && emailVal) {
        copyEmailBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(emailVal.textContent.trim());
                const originalText = copyEmailBtn.textContent;
                copyEmailBtn.textContent = 'Copied!';
                copyEmailBtn.style.background = 'var(--accent-emerald)';
                copyEmailBtn.style.color = '#fff';

                setTimeout(() => {
                    copyEmailBtn.textContent = originalText;
                    copyEmailBtn.style.background = '';
                    copyEmailBtn.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy email:', err);
            }
        });
    }
});

// 5. Contact Form Handler
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('formFeedback');
    const sendBtn = document.getElementById('sendBtn');

    if (!feedback) return;

    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';

    // Simulate sending / preparing mailto
    setTimeout(() => {
        feedback.className = 'form-feedback success';
        feedback.textContent = `Thank you, ${name}! Your message note has been prepared. Opening your email app...`;
        feedback.classList.remove('hidden');

        // Create mailto fallback
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
        window.location.href = `mailto:madhumithamitha458@gmail.com?subject=${subject}&body=${body}`;

        sendBtn.disabled = false;
        sendBtn.textContent = 'Send Message';
        document.getElementById('contactForm').reset();
    }, 600);
}