var canvas = document.getElementById("triangulo");
var arte = canvas.getContext('2d');
    // implementando rect
    // quadrado principal azul
arte.fillStyle = "blue";
arte.fillRect(100, 50, 100, 100);
    // contorno esquerdo
arte.lineWidth = 10;
arte.strokeStyle = 'red';
arte.strokeRect(95, 45, 30, 30);
    // contorno direito
arte.lineWidth = 10;
arte.strokeRect(160, 45, 30, 30);
    //contorno inferior
arte.lineWidth = 10;
arte.strokeRect(120, 100, 45, 35);
    // implementando path
arte.beginPath();
    // triangulo
arte.fill();
arte.lineWidth = 2;
arte.moveTo(150, 300);
arte.lineTo(250, 300);
arte.lineTo(150,200);
arte.lineTo(75,300);
arte.lineTo(150,300);
arte.stroke();

    // arco
    // esquerdo
arte.fillStyle = 'purple';
arte.beginPath();
arte.arc(300, 109, 40 , 90*Math.PI/180, 270*Math.PI/180, false);
arte.strokeStyle = 'blue';
arte.fill();
arte.stroke();
    // direito
arte.fillStyle = 'purple';
arte.beginPath();
arte.arc(310, 109, 40 , 90*Math.PI/180, 270*Math.PI/180, true);
arte.fill();
arte.stroke();

    // imagens

var imagem = new Image();
imagem.src = 'games-js-master/01/img/ovni.png'

imagem.onload = function() {
    //posição
    var x = 35;
    var y = 325;
    //repetir a img
    for (var i = 1; i <= 5; i++){
        arte.drawImage(imagem,x,y,65,32);
        x+=70;
    }
}
    // reduzir img
arte.drawImage(imagem, x, 400, 32, 16);
    // ampliar img
arte.drawImage(imagem, x, 400, 32, 16);