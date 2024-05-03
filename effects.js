// Code pour générer des gouttes d'eau aléatoires sur la page

function createRain() {
    const rainDrops = document.createElement('div');
    rainDrops.className = 'raindrops';
    rainDrops.style.left = Math.random() * window.innerWidth + 'px';
    rainDrops.style.animationDuration = Math.random() * 2 + 3 + 's';
    rainDrops.style.opacity = Math.random();
    document.body.appendChild(rainDrops);

    setTimeout(() => {
        rainDrops.remove();
    }, 5000);
}

setInterval(createRain, 500);
