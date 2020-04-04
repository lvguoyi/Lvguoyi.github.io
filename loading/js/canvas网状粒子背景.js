/** @type {HTMLCanvasElement}  */
var canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var key = false;
var dots = [];
var dot = [];
var mx;
let cor;
var my;
for (var i = 0; i < 200; i++) {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var xa = (Math.random() * 2 - 1) / 1.5;
  var ya = (Math.random() * 2 - 1) / 1.5;

  dots.push({
    x,
    y,
    xa,
    ya
  });
}
canvas.onmousemove = function(e) {
  key = true;
  (md.x = e.offsetX), (md.y = e.offsetY);
};

dots.forEach(function(e, i) {
  var dd = new Bb(e.x, e.y, 1, e.xa, e.ya, 0);
  db(dd.x, dd.y, 1);

  dot.push(dd);
});
var md = new Bb(mx, my, 1, 0, 0, 1);
dot.push(md);

// 主程序
setInterval(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dot.forEach(function(e, i) {
    e.move();

    for (var i = 0; i < dot.length; i++) {
      if (e === dot[i] || e.x === null || e.y === null) continue;
      // console.log(e.x - dot[i].x);
      if (e.x - dot[i].x > 50 || e.y - dot[i].y > 50) continue;
      if (e.x - dot[i].x < -50 || e.y - dot[i].y < -50) continue;
      var lif = (e.x - dot[i].x + (e.y - dot[i].y)) / 100;
      if (e.name == 1 && e.x > 0) {
        let cx = e.x - dot[i].x;
        let cy = e.y - dot[i].y;
        // console.log(cx);
        dot[i].x += cx * 0.01;
        dot[i].y += cy * 0.01;
      }
      dl(e.x, e.y, dot[i].x, dot[i].y, lif,cor);
    }
    db(e.x, e.y, 1, 0, 0);
  });
}, 10);

// console.log(dot);

function Bb(x, y, r, xa, ya, name) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xa = xa;
  this.ya = ya;
  this.name = name;
}
Bb.prototype.move = function() {
  if (this.x > canvas.width) {
    this.xa = -this.xa;
  } else if (this.y > canvas.height) {
    this.ya = -this.ya;
  } else if (this.x < 0) {
    this.xa = -this.xa;
  } else if (this.y < 0) {
    this.ya = -this.ya;
  }

  this.x = this.x + this.xa;
  this.y = this.y + this.ya;
};

function dl(x, y, x1, y1, i,cor) {
  ctx.beginPath();
  ctx.strokeStyle = cor
  ctx.fillStyle = '#345c5c';
  ctx.lineWidth = i;
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.stroke();
  ctx.closePath();
}

function db(x, y, r, cor) {
  ctx.beginPath();
  ctx.fillStyle = cor;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}