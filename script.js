function openFullscreen() {
  const iframe = document.querySelector('iframe');
  
  // Ajustar el iframe a 1920x1080 antes de entrar en pantalla completa
  iframe.style.width = '1920px'; // Fijar resolución a 1920px
  iframe.style.height = '1080px'; // Fijar resolución a 1080px
  iframe.style.position = 'absolute';
  iframe.style.top = '0';
  iframe.style.left = '0';

  // Solicitar pantalla completa después de ajustar el tamaño
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.mozRequestFullScreen) { // Firefox
    iframe.mozRequestFullScreen();
  } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) { // IE/Edge
    iframe.msRequestFullscreen();
  }
}

// Restaurar el tamaño original del iframe cuando se salga del modo pantalla completa
document.addEventListener('fullscreenchange', function () {
  const iframe = document.querySelector('iframe');

  if (!document.fullscreenElement) {
    // Restaurar el tamaño del iframe cuando salimos de la pantalla completa
    iframe.style.width = '768px'; // Ancho original
    iframe.style.height = '432px'; // Alto original
    iframe.style.position = 'relative'; // Posición original
    iframe.style.top = '0';
    iframe.style.left = '0';
  }
});
