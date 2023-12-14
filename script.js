//your JS code here. If required.
const container = document.getElementById('colorBoard');

  for (let i = 0; i < 300; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }