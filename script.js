document.addEventListener('DOMContentLoaded', () => {
    // Add a staggering entrance animation to link cards
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            
            // Remove inline transition after animation completes so hover CSS works perfectly
            setTimeout(() => {
                card.style.transition = '';
            }, 500);
        }, 600 + (index * 150)); // Start after glass container fades in (600ms)
    });

    // 3D Tilt effect on hover
    const glassContainer = document.querySelector('.glass-container');
    
    document.addEventListener('mousemove', (e) => {
        if(window.innerWidth < 768) return; // Disable on mobile

        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        // Very subtle tilt around the center
        glassContainer.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(0)`;
    });

    // Reset tilt when mouse leaves
    document.addEventListener('mouseleave', () => {
        glassContainer.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)`;
        glassContainer.style.transition = `transform 0.5s ease`;
        
        setTimeout(() => {
            glassContainer.style.transition = '';
        }, 500);
    });
});
