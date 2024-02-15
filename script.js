const board = document.getElementById('board');

for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.appendChild(square);
}
