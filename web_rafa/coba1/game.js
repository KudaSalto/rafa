document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const scoreElement = document.getElementById('score-value');
    const gridSize = 20;
    let snake = [{ x: 5, y: 5 }];
    let direction = 'right';
    let food = generateFood();
    let score = 0;
  
    function drawBoard() {
      board.innerHTML = '';
      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          board.appendChild(cell);
        }
      }
    }
  
    function drawSnake() {
      snake.forEach((segment) => {
        const index = segment.x + segment.y * gridSize;
        const cell = board.children[index];
        cell.classList.add('snake');
      });
    }
  
    function drawFood() {
      const index = food.x + food.y * gridSize;
      const cell = board.children[index];
      cell.classList.add('food');
    }
  
    function drawScore() {
      scoreElement.textContent = score;
    }
  
    function moveSnake() {
      const head = { ...snake[0] };
  
      switch (direction) {
        case 'up':
          head.y = (head.y - 1 + gridSize) % gridSize;
          break;
        case 'down':
          head.y = (head.y + 1) % gridSize;
          break;
        case 'left':
          head.x = (head.x - 1 + gridSize) % gridSize;
          break;
        case 'right':
          head.x = (head.x + 1) % gridSize;
          break;
      }
  
      snake.unshift(head);
  
      if (head.x === food.x && head.y === food.y) {
        score += 10;
        food = generateFood();
      } else {
        snake.pop();
      }
    }
  
    function generateFood() {
      let newFood;
      do {
        newFood = {
          x: Math.floor(Math.random() * gridSize),
          y: Math.floor(Math.random() * gridSize),
        };
      } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
      return newFood;
    }
  
    function checkCollision() {
      const head = snake[0];
      return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
    }
  
    function gameLoop() {
      moveSnake();
      if (checkCollision()) {
        alert('Game Over! Score: ' + score);
        resetGame();
        return;
      }
      drawBoard();
      drawSnake();
      drawFood();
      drawScore();
      setTimeout(gameLoop, 200);
    }
  
    function resetGame() {
      snake = [{ x: 5, y: 5 }];
      direction = 'right';
      food = generateFood();
      score = 0;
      gameLoop();
    }
  
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowUp':
          direction = 'up';
          break;
        case 'ArrowDown':
          direction = 'down';
          break;
        case 'ArrowLeft':
          direction = 'left';
          break;
        case 'ArrowRight':
          direction = 'right';
          break;
      }
    });
  
    drawBoard();
    drawSnake();
    drawFood();
    drawScore();
    gameLoop();
  });
  