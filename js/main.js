// Saber Curioso - JavaScript principal

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 Saber Curioso - Listo para descubrir!');
    
    // Manejo del formulario de newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('.email-input');
            const email = emailInput.value.trim();
            
            if (email) {
                // Simulación de envío
                alert(`¡Gracias por suscribirte con: ${email}!\nTe enviaremos curiosidades pronto.`);
                emailInput.value = '';
                
                // Aquí luego integrarías con tu servicio de email
                // Ej: Buttondown, ConvertKit, etc.
            }
        });
    }
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Efecto hover mejorado para tarjetas de artículo
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});