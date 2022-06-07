var canvas = document.getElementById("cap1");
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
    // reduzir img
    arte.drawImage(imagem, 50, 400, 32, 16);
    // ampliar img
    arte.drawImage(imagem, 200, 400, 128, 32);
}

            // pt2
    //clipping
var canvas2 = document.getElementById("cap1.2");
var arte2 = canvas2.getContext("2d")
var imagem2 = new Image();
imagem2.src = 'games-js-master/01/img/explosao.png';
imagem2.onload = function() {
    arte2.drawImage(
        imagem2,
        80,10,60,65,    //área de recorte (clipping)
        20,20,60,65     //desenho no canvas
    )
}
    //save e restore
arte2.fillStyle= 'red';
arte2.fillRect(20,100,25,25);
arte2.save();
arte2.fillStyle= 'yellow';
arte2.fillRect(70,100,25,25);
arte2.restore();
arte2.fillRect(120,100,25,25);

    // animation pag 23 - pag 26 = nao entendi.
//    var x = 30;
//    var y = 200;
//    var raio = 5;
//var anterior = new Date().getTime();
//requestAnimationFrame(levantarBola);
//function levantarBola() {
//    arte2.clearRect(0,0,canvas2.width, canvas2.height)  //apagar todo canvas anterior
//    arte2.beginPath();
//    arte2.arc(x,y,raio, 0, Math.PI*2);
//    arte2.fill();
//
//    var agora = new Date().getTime();
//    var anterior = agora;
//    var decorrido = agora - anterior;
//    var velocidade = 20;
//    x += velocidade * decorrido / 1000;
//
//    //y-=50;
// 
//}
//requestAnimationFrame(levantarBola)


//carro

function Carro(cor, velocidade){
    this.cor = cor;
    this.velocidade = velocidade;
    this.velocidadeAtual = 0;
}
var meuCarro = new Carro('amarelo', 250);
var oponente = new Carro('azul', 300);