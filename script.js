// script.js
// 1. Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// 2. Click Animation for Buttons
document.querySelectorAll('.social-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});

// 3. Mouse hover effect
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const mainElement = document.querySelector('main');
    const rect = mainElement.getBoundingClientRect();
    
    const xRotation = (clientY - rect.top - rect.height/2) / 10;
    const yRotation = (clientX - rect.left - rect.width/2) / 10;
    
    mainElement.style.transform = `
        perspective(1000px)
        rotateX(${-xRotation}deg)
        rotateY(${yRotation}deg)
    `;
});