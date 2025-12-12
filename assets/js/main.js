/* ========================================================= */
/* main.js - Lógica COMPLETA y Funcionalidad Estable */
/* ========================================================= */

// --- DATA PARA EL RENDERIZADO (El contenido que necesitas que aparezca) ---

const experiences = [
    {
        title: 'Planificación Urbana y Desarrollo Local',
        icon: '🏘️',
        description: 'Desarrollo proyectos urbanos, integrando diagnósticos, análisis urbano y estrategias de activación territorial. Mi experiencia se centra en la regeneración de espacios públicos, la planificación y desarrollo de infraestructura comunitaria y la articulación con comunidades e instituciones públicas para el desarrollo sostenible de los territorios.',
        domains: [
            'Análisis y diagnóstico urbano–territorial',
            'Diseño de espacios públicos y equipamiento',
            'Participación ciudadana y metodologías colaborativas',
            'Planificación local, coordinación institucional y gestión de proyectos públicos',
            'Enfoque inclusivo y perspectiva comunitaria'
        ],
        functions: [
            'Formulación y desarrollo de proyectos de mejoramiento urbano, espacios públicos e infraestructura',
            'Desarrollo e implementación de plan de intervención territorial, levantamiento socio-territorial y desarrollo de metodologías participativas',
            'Gestión y articulación entre actores locales, organizaciones comunitarias y equipos multisectoriales',
            'Presentación de proyectos ante equipos técnicos y autoridades gubernamentales',
            'Elaboración de memorias técnicas, planos y presupuestos para proyectos con financiamiento público'
        ]
    },
    {
        title: 'Coordinación de Expedientes Municipales',
        icon: '📋',
        description: 'Desarrollo y coordino expedientes municipales de diversa complejidad, integrando normativa urbana, levantamientos arquitectónicos, documentación técnica y tramitación municipal. Mi trabajo aborda permisos de edificación, obras menores, regularizaciones y análisis normativos, asegurando eficiencia en los procesos y cumplimiento de cada requerimiento de la Dirección de Obras Municipales.',
        domains: [
            'Análisis normativo OGUC, LGUC y ordenanzas locales',
            'Formularios INE, antecedentes técnicos y levantamientos planimétricos',
            'Regularización de viviendas y locales comerciales'
        ],
        functions: [
            'Elaboración de documentación técnica, planos, memorias y formularios',
            'Tramitación de expedientes en DOM, presencial y en línea',
            'Revisión normativa y verificación de cumplimiento normativo',
            'Coordinación con clientes, revisores y unidades municipales',
            'Consultas técnicas y resolución de observaciones'
        ]
    },
    {
        title: 'Mantención de Infraestructura en Contextos Mineros',
        icon: '⚙️',
        description: 'Desarrollo de planos constructivos, detalles técnicos y documentación en entornos mineros de alta exigencia bajo estándares BHP. Asisto en la planificación y mantención de infraestructura de obras, remodelaciones de espacios de trabajo y actualización de cartografía para asegurar continuidad operativa y eficiencia en la gestión de activos.',
        domains: [
            'Coordinación con equipos multidisciplinarios (ingenierías civiles, sanitarias y eléctricas)',
            'Levantamientos de infraestructura operativa, desarrollo técnico de estructuras, redes sanitarias y agua potable y remodelación funcional en espacios de trabajo',
            'Estándares de faena BHP, normativa sectorial y seguridad industrial'
        ],
        functions: [
            'Actualización y desarrollo de planos, sistemas de redes, detalles técnicos y constructivos',
            'Desarrollo de propuestas de mejora de instalaciones',
            'Levantamiento de información técnica y documentación en terreno',
            'Soporte en planificación de mantenciones y mejoras'
        ]
    }
];

// 

const education = [
    { 
        title: 'Diplomado en Modelamiento BIM', 
        institution: 'Instituto Euskadi', 
        year: 'En curso - 2025', 
        focus: 'Coordinación MEP y optimización de proyectos de infraestructura. Certificaciones: AutoCAD, BIM Arquitectura, BIM Estructuras, BIM MEP' 
    },
    { 
        title: 'Capacitación Subdivisión de Predios Rústicos (SPR)', 
        institution: 'Servicio Agrícola y Ganadero (SAG)', 
        year: '2025', 
        focus: 'Normativa y procedimientos para la subdivisión de predios rústicos según estándares actuales.' 
    },
    { 
        title: 'Diplomado en Desarrollo Local Inclusivo', 
        institution: 'Universidad Alberto Hurtado', 
        year: '2023', 
        focus: 'Políticas Públicas, Planificación Urbana Sostenible, Participación Ciudadana y gestión de proyectos de inversión pública' 
    },
    { 
        title: 'Diplomado en Coaching en PNL', 
        institution: 'Dharti, Escuela de crecimiento personal', 
        year: '2021', 
        focus: 'Herramientas de comunicación efectiva, mediación, liderazgo y facilitación de procesos participativos' 
    },
    { 
        title: 'Título de Arquitecta', 
        institution: 'Universidad de Viña del Mar', 
        year: '2019', 
        focus: 'Formación integral en diseño arquitectónico, urbanismo y planificación de proyectos.' 
    }
];

const projects = [
    { id: 1, title: 'Centro de Extensión Cultural Efímero', year: '2019', type: 'Proyecto de Título', location: 'Viña del Mar', description: 'Ágora marítima diseñada para activar temporalmente sectores subutilizados del borde costero mediante actividades culturales itinerantes', color: 'from-amber-100 to-orange-50', img: 'assets/img/proj-1.jpg' },
    { id: 2, title: 'Mejoramiento Villa Los Cántaros', year: '2023', type: 'Proyecto Comunitario', location: 'Paihuano', description: 'Recuperación de espacio público con enfoque participativo, incorporando áreas verdes, sombreaderos y equipamiento recreativo', color: 'from-green-100 to-emerald-50', img: 'assets/img/proj-2.jpg' },
    { id: 3, title: 'Mejoramiento Plaza Miguel Apey', year: '2023', type: 'Proyecto Comunitario', location: 'Paihuano', description: 'Modernización de plaza central con rutas accesibles, iluminación, mobiliario urbano y equipamiento recreativo', color: 'from-stone-100 to-neutral-50', img: 'assets/img/proj-3.jpg' }
];

// =============================================================
// FUNCIONES DE RENDERIZADO (Deben estar ANTES de DOMContentLoaded)
// =============================================================

function renderExperiences() {
    const container = document.getElementById('experiencia-grid');
    if (!container) return;
    
    // (Renderiza el HTML de Experiencias)
    container.innerHTML = experiences.map(exp => `
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-100">
            <div class="flex items-start gap-4 mb-6">
                <div class="text-5xl">${exp.icon}</div>
                <div class="flex-1">
                    <h3 class="text-2xl font-medium text-amber-900 mb-3">${exp.title}</h3>
                    <p class="text-stone-700 leading-relaxed">${exp.description}</p>
                </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8 mt-8">
                <div class="bg-amber-50 rounded-xl p-6">
                    <h4 class="text-lg font-medium text-amber-800 mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-amber-600"><path d="m9 18 6-6-6-6"/></svg> Áreas de Dominio
                    </h4>
                    <ul class="space-y-2">${exp.domains.map(d => `<li class="text-stone-700 text-sm flex items-start gap-2"><span class="text-amber-600 mt-1">•</span><span>${d}</span></li>`).join('')}</ul>
                </div>
                <div class="bg-stone-50 rounded-xl p-6">
                    <h4 class="text-lg font-medium text-stone-800 mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-stone-600"><path d="m9 18 6-6-6-6"/></svg> Funciones Clave
                    </h4>
                    <ul class="space-y-2">${exp.functions.map(f => `<li class="text-stone-700 text-sm flex items-start gap-2"><span class="text-stone-600 mt-1">•</span><span>${f}</span></li>`).join('')}</ul>
                </div>
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('formacion-grid');
    if (!container) return;
    
    // (Renderiza el HTML de Formación)
    container.innerHTML = education.map(edu => `
        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <h4 class="font-semibold text-amber-800 mb-2">${edu.title}</h4>
            <p class="text-sm text-stone-600 mb-1">${edu.institution}</p>
            <p class="text-xs text-amber-700 font-medium mb-3">${edu.year}</p>
            <p class="text-sm text-stone-700 leading-relaxed">${edu.focus}</p>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('proyectos-grid');
    if (!container) return;
    
    // (Renderiza el HTML de Proyectos)
    container.innerHTML = projects.map(proj => `
        <div class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="h-56 bg-gradient-to-br ${proj.color} overflow-hidden">
                <img src="${proj.img}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            </div>
            <div class="p-6">
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-medium text-amber-700 bg-amber-50 px-3 py-1 rounded-full">${proj.type}</span>
                    <span class="text-xs text-stone-500">${proj.year}</span>
                </div>
                <h3 class="text-xl font-semibold text-amber-900 mb-2">${proj.title}</h3>
                <p class="text-xs text-stone-500 mb-3 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    ${proj.location}
                </p>
                <p class="text-sm text-stone-700 leading-relaxed">${proj.description}</p>
            </div>
        </div>
    `).join('');
}

// =============================================================
// INICIO DE LA APLICACIÓN
// =============================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // --- FUNCIÓN DE INICIALIZACIÓN DE CONTENIDO ---
    // ESTAS LLAMADAS SON CRUCIALES Y SE EJECUTAN UNA SOLA VEZ
    renderExperiences();
    renderEducation();
    renderProjects();
    // renderResinCarousel(); // QUITAR ESTA LINEA PARA ESTABILIDAD
    
    // Elementos del DOM
    const nav = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item-btn');
    const sections = ['inicio', 'manifiesto', 'experiencia', 'proyectos', 'contacto'];
    
    const form = document.getElementById('contactForm');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.querySelector('#menu-icon-open');
    const menuIconClose = document.querySelector('#menu-icon-close');
    
    // Función global para scroll suave (usada por los botones del menú)
    window.scrollToSection = function(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                if (menuIconOpen && menuIconClose) {
                    menuIconOpen.classList.remove('hidden');
                    menuIconClose.classList.add('hidden');
                }
            }
        }
    };
    
    // MANEJO DE MENÚ MÓVIL
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (menuIconOpen && menuIconClose) {
                menuIconOpen.classList.toggle('hidden');
                menuIconClose.classList.toggle('hidden');
            }
        });
    }

    // MANEJO DE SCROLL (sticky nav, sección activa)
    const handleScroll = () => {
        // Efecto de fondo en la barra de navegación
        if (window.scrollY > 50) {
            nav.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-md');
            nav.classList.remove('bg-transparent');
        } else {
            nav.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-md');
            nav.classList.add('bg-transparent');
        }
        
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
            btn.classList.remove('text-amber-700', 'font-medium');
            btn.classList.add('text-stone-600', 'hover:text-amber-700');
            
            if (id === currentActive) {
                btn.classList.add('text-amber-700', 'font-medium');
                btn.classList.remove('text-stone-600', 'hover:text-amber-700');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // MANEJO DEL FORMULARIO
    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const formStatus = document.getElementById('formStatus');
            const submitButton = document.getElementById('submitButton');
            
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
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Enviar Mensaje';
                }, 3000);
            }
        });
    }
    
    // DUPLICAR CINTA DE IMÁGENES (Solo se mantiene el código de forma de ejemplo, la cinta se duplica manualmente en el HTML para estabilidad)
    const filmTrack = document.getElementById('film-scroll-track');
    if (filmTrack) {
        // Se comenta la duplicación automática para usar la versión estática del HTML
        /*
        setTimeout(() => {
            const originalContent = filmTrack.innerHTML;
            filmTrack.innerHTML = originalContent + originalContent; 
        }, 100);
        */
    }
});