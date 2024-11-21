var canvas = document.getElementById('beerCanvas');
var ctx = canvas.getContext('2d');
var particles = [];
var particleCount = 140;

function resizeCanvas() {
    var oldWidth = canvas.width;
    var oldHeight = canvas.height;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles.forEach((p) => {
        p.x = (p.x / oldWidth) * canvas.width;
        p.y = (p.y / oldHeight) * canvas.height;
    });
}

function particle() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.speed = Math.random() * 10;
    this.radius = Math.random() * 20;
    this.opacity = Math.random() / 10;
}

for (var i = 0; i < particleCount; i++) {
    particles.push(new particle());
}

function loop() {
    requestAnimationFrame(loop);
    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,' + p.opacity + ')';
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fill();
        p.y -= p.speed;
        if (p.y <= -10) {
            particles[i] = new particle();
        }
    }
}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();
loop();
