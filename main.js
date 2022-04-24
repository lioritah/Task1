function drawRectangle() {
  const myCanvas = document.querySelector("#myCanvas");
  const painter = myCanvas.getContext("2d");
  let x = document.querySelector(`#x`).value;
  let y = document.querySelector(`#y`).value;
  let w = document.querySelector(`#w`).value;
  let h = document.querySelector(`#h`).value;
  painter.fillStyle = `blue`;
  painter.fillRect(x, y, w, h);

  painter.beginPath();
  painter.strokeStyle = "blue";
  painter.strokeRect(w, h, x, y);
  painter.stroke();
  localStorage.setItem("x", x);
  localStorage.setItem("y", y);
  localStorage.setItem("height", h);
  localStorage.setItem("width", w);
}

function clearCanvas() {
  const myCanvas = document.querySelector(`#myCanvas`);
  const painter = myCanvas.getContext(`2d`);

  painter.clearRect(0, 0, 600, 400);
}
function onWindowLoad() {
  const width = document.querySelector("#w");
  width.value = localStorage.getItem("width");
  const height = document.querySelector("#h");
  height.value = localStorage.getItem("height");
  const x = document.querySelector("#x");
  x.value = localStorage.getItem("x");
  const y = document.querySelector("#y");
  y.value = localStorage.getItem("y");
  const btn = document.querySelector(`#btn`);
  btn.onclick = drawRectangle;
  const btnRest = document.querySelector(`#btnRest`);
  btnRest.onclick = clearCanvas;
}

window.onload = onWindowLoad;
