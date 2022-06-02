var canvas = document.getElementById("triangulo");
var context = canvas.getContext('2d');
    // implementando rect
    // quadrado principal azul
context.fillStyle = "blue";
context.fillRect(100, 50, 100, 100);
    // contorno esquerdo
context.lineWidth = 10;
context.strokeStyle = 'red';
context.strokeRect(95, 45, 30, 30);
    // contorno direito
context.lineWidth = 10;
context.strokeStyle = 'red';
context.strokeRect(160, 45, 30, 30);
    //contorno inferior
context.lineWidth = 10;
context.strokeStyle = 'red';
context.strokeRect(120, 100, 45, 35);
    // implementando path
    // triangulo
context.beginPath();
context.fill();
context.stroke();
context.moveTo(150, 300);
context.lineTo(250, 300);
context.lineTo(150,200);
context.lineTo(75,300);
context.lineTo(150,300);

// context.moveTo(75, 300);
// context.lineTo(250, 300);
// context.lineTo(150,200);
context.stroke();
