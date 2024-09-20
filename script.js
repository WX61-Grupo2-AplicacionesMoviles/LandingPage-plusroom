let indiceActual = 0;

function toggleContent(contentId) {
    const contentSections = document.querySelectorAll('.content');

    contentSections.forEach(section => {
        if (section.id === contentId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }  
    });
}

function moverCarrusel(direccion) {
    const pista = document.querySelector('.carousel-track');
    const elementos = document.querySelectorAll('.carta');
    const totalElementos = elementos.length;

    indiceActual += direccion;

    if (indiceActual < 0) {
        indiceActual = totalElementos - 1;
    } else if (indiceActual >= totalElementos) {
        indiceActual = 0;
    }

    const nuevoValorTransform = -indiceActual * 100;
    pista.style.transform = `translateX(${nuevoValorTransform}%)`;
}


document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburgerButton.addEventListener('click', function() {
      nav.classList.toggle('active'); 
  });
});



