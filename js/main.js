const canvasRectangle = document.getElementById("canvasRectangle");
const canvasTriangle = document.getElementById("canvasTriangle");
const canvasFeather = document.getElementById("canvasFeather");
const canvasLines = document.getElementById("canvasLines");
const canvasArcos = document.getElementById("canvasArcos");
const canvasCurvas = document.getElementById("canvasCurvas");
const canvasCubicas = document.getElementById("canvasCubicas");

function drawRectangle() {
    const ctx = canvasRectangle.getContext("2d");
    if (canvasRectangle.getContext) {
        ctx.fillStyle = "blue";
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
}

function drawTriangle() {
    const ctx = canvasTriangle.getContext("2d");
    if (canvasTriangle.getContext) {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.moveTo(25, 100);
        ctx.lineTo(125, 100);
        ctx.lineTo(75, 25);
        ctx.fill();
    }
}

function drawFeather() {
    if (canvasFeather.getContext) {
        const ctx = canvasFeather.getContext("2d");
        //ctx.strokeStyle("green")
        ctx.beginPath();
        ctx.strokeStyle='blue';
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
        ctx.stroke();
    }
}

function drawLines() {
    //ctx.fillStyle = "rgb(125,125,125)";
    if (canvasLines.getContext) {

        const ctx = canvasLines.getContext("2d");

        ctx.fillStyle='blue';
        // Triángulo relleno
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        ctx.strokeStyle='blue';
        // Triángulo contorneado
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
    }
}


function drawArcos() {
    if (canvasArcos.getContext) {
        const ctx = canvasArcos.getContext("2d");

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                ctx.fillStyle='blue';
                ctx.strokeStyle='blue';
                ctx.beginPath();
                const x = 25 + j * 50; // Coordenada x
                const y = 25 + i * 50; // Coordenada y
                const radius = 20; // Radio del Arco
                const startAngle = 0; // Punto inicial del Círculo
                const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
                const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario

                ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

                if (i > 1) {
                    ctx.fill();
                } else {
                    ctx.stroke();
                }
            }
        }
    }
}

function drawCurvasCuadraticasdeBezier() {
    if (canvasCurvas.getContext) {
        const ctx = canvasCurvas.getContext("2d");
        ctx.strokeStyle='blue';

        // Ejemplo de curvas cuadráticas
        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();
    }
}

function drawCurvasCubicasdeBezier() {
    if (canvasCubicas.getContext) {
      const ctx = canvasCubicas.getContext("2d");
      ctx.fillStyle='blue';
  
      // Ejemplo de curvas cúbicas
      ctx.beginPath();
      ctx.moveTo(75, 40);
      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
      ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
      ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
      ctx.fill();
    }
  }
  

drawRectangle();
drawTriangle();
drawFeather();
drawLines();
drawArcos();
drawCurvasCuadraticasdeBezier();
drawCurvasCubicasdeBezier();