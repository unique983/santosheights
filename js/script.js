//Menu//
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('menu-toggle').checked = false;
    });
});

//FORMULARIO//
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const successMessage = document.getElementById('success-message');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Muestra el mensaje de éxito
        successMessage.classList.remove('hidden');

        // Limpia el formulario
        form.reset();
    });
});
