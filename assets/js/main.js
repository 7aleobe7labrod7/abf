/* ========================================================= */
/* main.js - Lógica de Interfaz y Formulario AJAX            */
/* ========================================================= */

document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos del DOM
    const nav = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item-btn');
    const sections = ['inicio', 'manifiesto', 'experiencia', 'proyectos', 'contacto'];
    
    const form = document.getElementById('contactForm');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open').children[0];
    const menuIconClose = document.getElementById('menu-icon-close').children[0];
    
    // Función global para scroll suave (usada por los botones del menú)
    window.scrollToSection = function(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Cierra el menú móvil si está abierto
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuIconOpen.classList.remove('hidden');
                menuIconClose.classList.add('hidden');
            }
        }
    };
    
    // ------------------------------------------
    // 1. MANEJO DE MENÚ MÓVIL
    // ------------------------------------------
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuIconOpen.classList.toggle('hidden');
            menuIconClose.classList.toggle('hidden');
        });
    }

    // ------------------------------------------
    // 2. MANEJO DE SCROLL (sticky nav, sección activa)
    // ------------------------------------------
    const handleScroll = () => {
        // Efecto de fondo en la barra de navegación (simula 'scrolled')
        if (window.scrollY > 50) {
            nav.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-md');
            nav.classList.remove('bg-transparent');
        } else {
            nav.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-md');
            nav.classList.add('bg-transparent');
        }

        // Determinar la sección activa para resaltar el menú
        let currentActive = null;
        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentActive = sectionId;
                    break;
                }
            }
        }

        navItems.forEach(btn => {
            const id = btn.getAttribute('data-id');
            // Resetear y aplicar clase 'activa'
            btn.classList.remove('text-amber-700', 'font-medium');
            btn.classList.add('text-stone-600', 'hover:text-amber-700');
            
            if (id === currentActive) {
                btn.classList.add('text-amber-700', 'font-medium');
                btn.classList.remove('text-stone-600', 'hover:text-amber-700');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al inicio

    // ------------------------------------------
    // 3. MANEJO DEL FORMULARIO (AJAX + Formspree)
    // ------------------------------------------
    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const formStatus = document.getElementById('formStatus');
            const submitButton = document.getElementById('submitButton');
            
            // Deshabilitar botón para evitar doble clic
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            formStatus.innerHTML = ''; 

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    formStatus.innerHTML = '<span class="text-green-600 font-bold">¡Mensaje enviado con éxito! Te contactaremos a la brevedad.</span>';
                    form.reset(); 
                } else {
                    formStatus.innerHTML = '<span class="text-red-600">Error al enviar. Por favor intenta de nuevo.</span>';
                }
            } catch (error) {
                formStatus.innerHTML = '<span class="text-red-600">Error de conexión. Intenta más tarde.</span>';
            } finally {
                // Re-habilitar botón después de un breve tiempo
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Enviar Mensaje';
                }, 3000);
            }
        });
    }
    
    // ------------------------------------------
    // 4. DUPLICAR CINTA DE IMÁGENES (Para loop infinito)
    // ------------------------------------------
    const filmTrack = document.getElementById('film-scroll-track');
    if (filmTrack) {
        // Esperamos un momento para asegurar que las imágenes se hayan renderizado
        setTimeout(() => {
             const originalContent = filmTrack.innerHTML;
            // Duplicar el contenido para que la animación CSS tenga un loop suave
            filmTrack.innerHTML = originalContent + originalContent; 
        }, 100);
       
    }
});