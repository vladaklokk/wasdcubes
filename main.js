document.addEventListener('keydown', function(event) {
    const obj = document.getElementById('yourObject');
    switch(event.key) {
      case 'W':
      case 'w':
        obj.style.top = (obj.offsetTop - 10) + 'px';
        break;
      case 'A':
      case 'a':
        obj.style.left = (obj.offsetLeft - 10) + 'px';
        break;
      case 'S':
      case 's':
        obj.style.top = (obj.offsetTop + 10) + 'px';
        break;
      case 'D':
      case 'd':
        obj.style.left = (obj.offsetLeft + 10) + 'px';
        break;
    }
  });
  
  let dragItem = null;
  
  document.addEventListener('dragstart', function(event) {
    dragItem = event.target;
  }, false);
  
  document.addEventListener('dragover', function(event) {
    event.preventDefault();
  }, false);
  
  document.addEventListener('drop', function(event) {
    event.preventDefault();
    if (dragItem) {
      const offsetX = event.clientX - dragItem.offsetWidth / 2;
      const offsetY = event.clientY - dragItem.offsetHeight / 2;
      dragItem.style.left = offsetX + 'px';
      dragItem.style.top = offsetY + 'px';
      console.log('X: ' + offsetX + ', Y: ' + offsetY);
      dragItem = null;
    }
  }, false);
  
  const mouseTarget = document.getElementById('mouseTargetElement');
  mouseTarget.addEventListener('mouseenter', function() {
    console.log('Миша наведена на зелений елемент');
  });