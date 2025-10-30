window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.about-transicion .img-sobreMi');
    let current = 0;
    const total = images.length;
    const interval = 8000; // 8 segundos por imagen

    // Inicializa: solo la primera visible
    images.forEach((img, index) => {
        img.style.opacity = index === 0 ? '1' : '0';
        img.style.transform = 'scale(1) translate(0,0)';
        img.style.transition = 'opacity 1s ease, transform 8s ease';
    });

    function showNext() {
        // Oculta la actual
        images[current].style.opacity = '0';
        images[current].style.transform = 'scale(1.1) translate(-5px, -5px)';

        // Incrementa índice
        current = (current + 1) % total;

        // Muestra la siguiente
        images[current].style.opacity = '1';
        images[current].style.transform = 'scale(1.05) translate(5px, 5px)';
    }

    setInterval(showNext, interval);
});


// Función que agranda la imagen al pasar el mouse
function agrandar(img) {
  // Aplica una transformación que aumenta el tamaño de la imagen al 120%
  img.style.transform = "scale(1.2)";
  
  // Agrega una transición suave para que el cambio no sea brusco (duración: 0.5 segundos)
  img.style.transition = "transform 0.5s";
}

// Función que devuelve la imagen a su tamaño original cuando se quita el mouse
function reducir(img) {
  // Restablece la escala de la imagen a su tamaño normal (100%)
  img.style.transform = "scale(1)";
}

// Función que muestra u oculta la descripción
function mostrarDescripcion(elemento) {
    // Busca el texto oculto dentro de este contenedor
    const texto = elemento.querySelector('.texto-habilidad');
    
    // Alterna la clase 'activa' para mostrar u ocultar
    texto.classList.toggle('activa');
}

function mostrarMensaje(boton) {
  boton.innerText = "¡Gracias por visitar!";
  boton.style.backgroundColor = "#28a745"; // cambia a verde
  boton.style.transition = "0.3s";

  // Si quieres mostrar un mensaje flotante o alerta:
  alert("Redirigiendo a mi repositorio de GitHub...");
}
