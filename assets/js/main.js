document.addEventListener('DOMContentLoaded', function() {
    const specsContainer = document.querySelector('.specs-content');
    const packageContent = document.querySelector('.package-container');

    // Función para alternar visibilidad
    function toggleContent() {
        if (specsContainer.style.display === 'none' || !specsContainer.style.display) {
            specsContainer.style.display = 'flex';
            packageContent.style.display = 'none';
        } else {
            specsContainer.style.display = 'none';
            packageContent.style.display = 'block';
        }
    }

    specsContainer.addEventListener('click', toggleContent);

    packageContent.addEventListener('click', toggleContent);

    packageContent.style.display = 'none';
});

const tooltip = document.getElementById('tooltip');

// Función para mostrar el tooltip y seguir el cursor
document.querySelectorAll('.specs-content, .package-content').forEach(container => {
    container.addEventListener('mousemove', (e) => {
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.pageX + 10}px`; // Posiciona 10px a la derecha del cursor
        tooltip.style.top = `${e.pageY + 10}px`;  // Posiciona 10px debajo del cursor
    });
    
    // Ocultar el tooltip cuando el cursor sale del área
    container.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
    //Codigo generado por ChatGPT
});
