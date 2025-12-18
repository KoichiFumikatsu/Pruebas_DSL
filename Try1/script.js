/*
========================================
FUNCIONALIDAD PRINCIPAL - LEGALSURVEY
========================================
Archivo: script.js
Descripción: Archivo JavaScript principal para el proyecto LegalSurvey
Incluye funcionalidad para página de encuesta y galería de ideas
========================================
*/

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // FUNCIONALIDAD PARA PÁGINA DE ENCUESTA
    // ========================================
    
    // Seleccionar todas las opciones de respuesta
    const options = document.querySelectorAll('.option');
    
    // Agregar evento de clic a cada opción
    options.forEach(option => {
        option.addEventListener('click', function() {
            // Eliminar la clase 'selected' de todas las opciones
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Agregar la clase 'selected' a la opción clickeada
            this.classList.add('selected');
            
            // Habilitar el botón 'Siguiente'
            const nextButton = document.querySelector('.nav-button.next');
            if (nextButton) {
                nextButton.disabled = false;
            }
        });
    });
    
    // ========================================
    // FUNCIONALIDAD PARA PÁGINA DE IDEAS
    // ========================================
    
    // Seleccionar todas las tarjetas de idea
    const ideaCards = document.querySelectorAll('.idea-card');
    
    // Agregar evento de clic a cada tarjeta de idea
    ideaCards.forEach(card => {
        card.addEventListener('click', function() {
            // En una aplicación real, esto navegaría a la página específica de la idea
            const ideaTitle = this.querySelector('.idea-title').textContent;
            console.log('Navegando a idea:', ideaTitle);
            
            // Para fines de demostración, mostramos una alerta
            alert(`Navegando a: ${ideaTitle}`);
        });
    });
    
    // ========================================
    // FUNCIONALIDAD COMÚN - NAVEGACIÓN
    // ========================================
    
    // Seleccionar todos los enlaces de navegación
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Agregar evento de clic a cada enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevenir el comportamiento por defecto del enlace
            e.preventDefault();
            
            // Eliminar la clase 'active' de todos los enlaces
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Agregar la clase 'active' al enlace clickeado
            this.classList.add('active');
            
            // En una aplicación real, esto navegaría a la página correspondiente
            const linkText = this.textContent.trim();
            console.log('Navegando a:', linkText);
            
            // Para fines de demostración, mostramos una alerta según el enlace
            if (linkText === 'Ideas') {
                // En una aplicación real, esto redirigiría a ideas.html
                window.location.href = 'ideas.html';
            } else if (linkText === 'Encuesta') {
                // En una aplicación real, esto redirigiría a index.html
                window.location.href = 'index.html';
            } else if (linkText === 'Contáctanos') {
                alert('Navegando a la página de Contacto');
            }
        });
    });
    
    // ========================================
    // FUNCIONALIDAD PARA BOTÓN AGREGAR IDEA
    // ========================================
    
    // Seleccionar el botón para agregar nueva idea
    const addIdeaBtn = document.querySelector('.add-idea-btn');
    
    // Agregar evento de clic al botón si existe
    if (addIdeaBtn) {
        addIdeaBtn.addEventListener('click', function() {
            // En una aplicación real, esto abriría un formulario para agregar una nueva idea
            console.log('Abriendo formulario para agregar nueva idea');
            
            // Para fines de demostración, mostramos una alerta
            alert('Abriendo formulario para agregar nueva idea');
        });
    }
    
    // ========================================
    // FUNCIONALIDAD PARA BOTONES DE NAVEGACIÓN DE PREGUNTAS
    // ========================================
    
    // Seleccionar botones de navegación de preguntas
    const backButton = document.querySelector('.nav-button.back');
    const nextButton = document.querySelector('.nav-button.next');
    
    // Agregar evento de clic al botón "Anterior" si existe
    if (backButton) {
        backButton.addEventListener('click', function() {
            // En una aplicación real, esto navegaría a la pregunta anterior
            console.log('Navegando a la pregunta anterior');
            
            // Para fines de demostración, mostramos una alerta
            alert('Navegando a la pregunta anterior');
        });
    }
    
    // Agregar evento de clic al botón "Siguiente" si existe
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            // Verificar si el botón está habilitado
            if (!this.disabled) {
                // En una aplicación real, esto navegaría a la siguiente pregunta
                console.log('Navegando a la siguiente pregunta');
                
                // Para fines de demostración, mostramos una alerta
                alert('Navegando a la siguiente pregunta');
            }
        });
    }
    
    // ========================================
    // FUNCIONALIDAD PARA NOTIFICACIONES
    // ========================================
    
    // Seleccionar el icono de notificaciones
    const notificationIcon = document.querySelector('.notification');
    
    // Agregar evento de clic al icono de notificaciones si existe
    if (notificationIcon) {
        notificationIcon.addEventListener('click', function() {
            // En una aplicación real, esto mostraría el panel de notificaciones
            console.log('Mostrando panel de notificaciones');
            
            // Para fines de demostración, mostramos una alerta
            alert('Tienes 3 notificaciones nuevas');
        });
    }
    
    // ========================================
    // FUNCIONALIDAD PARA AVATAR DE USUARIO
    // ========================================
    
    // Seleccionar el avatar de usuario
    const userAvatar = document.querySelector('.user-avatar');
    
    // Agregar evento de clic al avatar de usuario si existe
    if (userAvatar) {
        userAvatar.addEventListener('click', function() {
            // En una aplicación real, esto mostraría el menú de usuario
            console.log('Mostrando menú de usuario');
            
            // Para fines de demostración, mostramos una alerta
            alert('Menú de usuario: Perfil, Configuración, Cerrar sesión');
        });
    }
});