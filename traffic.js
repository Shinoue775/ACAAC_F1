let currentLight = 0;
const lights = document.querySelectorAll('.circle');

function changeLight() {
    lights.forEach(light => light.style.backgroundColor = '#333');
    lights[currentLight].style.backgroundColor = getLightColor(currentLight);
    currentLight = (currentLight + 1) % lights.length;
}

function getLightColor(index) {
    switch (index) {
        case 0:
            return 'red';
        case 1:
            return 'yellow';
        case 2:
            return 'lime';
        default:
            return '#333';
    }
}

setInterval(changeLight, 2500);