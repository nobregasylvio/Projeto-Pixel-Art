const color = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');

color[0].style.backgroundColor = 'black';
color[1].style.backgroundColor = 'red';
color[2].style.backgroundColor = 'yellow';
color[3].style.backgroundColor = 'blue';

const inputColor = document.querySelector('#inputColor')
inputColor.addEventListener('change', () => {
  color[4].style.backgroundColor = inputColor.value;
})


color[0].classList.add('selected');

function changeColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function paintBoard({ target }) {
  const selectedColor = document.querySelector('.selected');
  const pixelStyle = target.style;
  pixelStyle.backgroundColor = selectedColor.style.backgroundColor;
  pixelStyle.opacity = 1;
}

for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', changeColor);
}

function clickPixel() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', paintBoard);
  }
}

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
    pixel[i].style.opacity = 0.5;
  }
}

const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearBoard);

function max50() {
  pixelBoard.innerHTML = '';
  for (let i = 0; i < 50 * 50; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('pixel');
    pixelBoard.appendChild(newDiv);
  }
  const size = 50 * 42;
  pixelBoard.style.width = `${size}px`;
  clickPixel();
}

function min5() {
  const input = document.querySelector('#board-size').value;
  if (input === '') return alert('Board inválido!');
  pixelBoard.innerHTML = '';
  for (let i = 0; i < 5 * 5; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('pixel');
    pixelBoard.appendChild(newDiv);
  }
  const size = 5 * 42;
  pixelBoard.style.width = `${size}px`;
  clickPixel();
}


function VerificaInput() {
  const input = document.querySelector('#board-size').value;
  if (input <= 15) {
    if (input < 5) return min5();
    pixelBoard.innerHTML = '';
    for (let i = 0; i < input * input; i += 1) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('pixel');
      pixelBoard.appendChild(newDiv);
    }
    const size = input * 42;
    pixelBoard.style.width = `${size}px`;
    clickPixel();
  }
}

const buttonVQV = document.querySelector('#generate-board');
buttonVQV.addEventListener('click', VerificaInput);

const randomColor = document.querySelector('#generate-color');
randomColor.addEventListener('click', () => {
  color[1].style.backgroundColor = `#${(Math.floor(Math.random() * 999999))}`;
  color[2].style.backgroundColor = `#${(Math.floor(Math.random() * 999999))}`;
  color[3].style.backgroundColor = `#${(Math.floor(Math.random() * 999999))}`;
});

const coresOriginais = document.querySelector('#originalColors');
coresOriginais.addEventListener('click', () => {
  color[1].style.backgroundColor = 'red';
  color[2].style.backgroundColor = 'yellow';
  color[3].style.backgroundColor = 'blue';
});

window.onload = () => {
  clickPixel();
  min5();
};
