// Variables globales para compartir
let currentShareTitle = '';
let currentShareURL = '';

// Navegación activa
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar navegación en scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    // Navegación suave
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animaciones al scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }, observerOptions);
    
    // Observar elementos
    document.querySelectorAll('.project-card, .chatbot-card, .feature-card, .timeline-item, .publication-item').forEach(el => {
        observer.observe(el);
    });
    
    console.log('%c✨ Portafolio 2025 - Javier Benítez Laínez', 'color: #e67e22; font-size: 16px; font-weight: bold;');
    console.log('%cEcosistema de Innovación Educativa', 'color: #2c3e50; font-size: 12px;');
});

// ===== FUNCIONES PARA COMPARTIR =====

function compartir(titulo, url) {
    currentShareTitle = titulo;
    currentShareURL = url;
    
    const modal = document.getElementById('shareModal');
    const shareTitle = document.getElementById('shareTitle');
    shareTitle.textContent = titulo;
    modal.style.display = 'block';
}

function cerrarModal() {
    const modal = document.getElementById('shareModal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('shareModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

function compartirEn(plataforma) {
    const texto = `Descubre: ${currentShareTitle}`;
    let url = '';
    
    switch(plataforma) {
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(currentShareURL)}`;
            break;
        case 'linkedin':
            url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentShareURL)}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentShareURL)}`;
            break;
    }
    
    if (url) {
        window.open(url, '_blank', 'width=600,height=400');
        cerrarModal();
    }
}

function copiarEnlace() {
    navigator.clipboard.writeText(currentShareURL).then(function() {
        const copyBtn = document.querySelector('.share-btn.copy');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
        copyBtn.style.background = '#27ae60';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }).catch(function(err) {
        console.error('Error al copiar:', err);
        alert('No se pudo copiar el enlace');
    });
}

// Compartir portafolio completo
function compartirPortafolio(plataforma) {
    const titulo = 'Portafolio 2025 - Javier Benítez Laínez';
    const descripcion = 'Ecosistema educativo innovador para la enseñanza del español';
    const url = window.location.href;
    const texto = `${titulo} - ${descripcion}`;
    let shareURL = '';
    
    switch(plataforma) {
        case 'twitter':
            shareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(url)}`;
            break;
        case 'linkedin':
            shareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        case 'facebook':
            shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
    }
    
    if (shareURL) {
        window.open(shareURL, '_blank', 'width=600,height=400');
    }
}

function copiarURL() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(function() {
        const copyBtn = document.querySelector('.social-btn.copy');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
        copyBtn.style.background = 'rgba(39, 174, 96, 0.9)';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }).catch(function(err) {
        console.error('Error al copiar:', err);
        alert('No se pudo copiar el enlace');
    });
}

// Accesibilidad con teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
    }
    // Cerrar modal con Escape
    if (e.key === 'Escape') {
        cerrarModal();
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('user-is-tabbing');
});

// Smooth scroll para navegadores antiguos
(function() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js';
        document.head.appendChild(script);
    }
})();
