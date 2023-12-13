document.addEventListener("DOMContentLoaded", function () {
    const svg = document.querySelector(".flying-svg");
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const svgRect = svg.getBoundingClientRect();
    const svgWidth = svgRect.width;
    const svgHeight = svgRect.height;
    let x = 0;
    let y = 0;
    let speedX = 2;
    let speedY = 2;

    function updatePosition() {
        let deltaTime = 16; // Время между кадрами (примерно 60 FPS)

        let nextX = x + speedX * deltaTime / 16;
        let nextY = y + speedY * deltaTime / 16;

        if (nextX < 0 || nextX + svgWidth > screenWidth) {
            speedX = -speedX;
        }

        if (nextY < 0 || nextY + svgHeight > screenHeight) {
            speedY = -speedY;
        }

        x += speedX * deltaTime / 16;
        y += speedY * deltaTime / 16;

        svg.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(updatePosition);
    }

    updatePosition();
});
