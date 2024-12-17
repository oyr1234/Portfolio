document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP Text Plugin
    gsap.registerPlugin(TextPlugin);

    // Animated Roles
    const roles = ['Software enginering student', 'AI developer'];
    const roleElement = document.getElementById('roleText');
    let currentRoleIndex=0;
    function animateRoles() {
        gsap.to(roleElement, {
            duration: 2,
            text: {
                value: roles[currentRoleIndex],
                delimiter: ''
            },
            ease: 'power1.inOut',
            repeat: 1,
            yoyo: true,
            onComplete: () => {
                // Move to next role, loop back to start if at end
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                
                // Short delay before next animation
                setTimeout(animateRoles, 1000);
            }
        });
    }


    animateRoles();

    // Subtle Scroll Animations
    gsap.utils.toArray('.skill-item').forEach(item => {
        gsap.fromTo(item, 
            { 
                opacity: 0, 
                y: 50 
            },
            { 
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out'
            }
        );
    });

    // Navigation Highlight on Scroll
    const sections = gsap.utils.toArray('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => updateNavigation(navLinks[i]),
            onLeaveBack: () => updateNavigation(navLinks[i - 1])
        });
    });

    function updateNavigation(link) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (link) link.classList.add('active');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Timeline Animation
    const timelineItems = gsap.utils.toArray('.timeline-item');

    timelineItems.forEach((item, index) => {
        gsap.fromTo(item, 
            { 
                opacity: 0, 
                y: 50 
            },
            { 
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'power2.out',
                delay: index * 0.2 // Stagger the animations
            }
        );
    });

    // Experience Cards Animation
   /* const experienceCards = gsap.utils.toArray('.experience-card');

    experienceCards.forEach((card, index) => {
        gsap.fromTo(card, 
            { 
                opacity: 0, 
                scale: 0.8 
            },
            { 
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: 'back.out(1.7)',
                delay: index * 0.2
            }
        );
    });
    */

    // Navigation Active State
   /* const navLinks = document.querySelectorAll('.nav-links a');
    const sections = gsap.utils.toArray('section');

    sections.forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => updateNavigation(navLinks[i]),
            onLeaveBack: () => updateNavigation(navLinks[i - 1])
        });
    });

    function updateNavigation(link) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (link) link.classList.add('active');
    }
        */
});
