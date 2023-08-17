document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.getElementById('cursor');
  
    document.addEventListener('mousemove', function(e) {
      var x = e.clientX;
      var y = e.clientY;
  
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  
      // Verificar se o cursor está sobre o elemento específico
      var targetElement = document.getElementById('elemento-especifico');
      var isCursorOverTargetElement = isCursorOverElement(e, targetElement);
  
      // Adicionar ou remover classe para aumentar o tamanho do cursor
      if (isCursorOverTargetElement) {
        cursor.classList.add('large');
      } else {
        cursor.classList.remove('large');
      }
    });
  
    function isCursorOverElement(event, element) {
      var rect = element.getBoundingClientRect();
      var mouseX = event.clientX;
      var mouseY = event.clientY;
  
      return (
        mouseX >= rect.left &&
        mouseX <= rect.right &&
        mouseY >= rect.top &&
        mouseY <= rect.bottom
      );
    }
  });