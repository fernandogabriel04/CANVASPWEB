var canvas = document.getElementById("cap2");
var context = canvas.getContext('2d');

// sprites
 var b1 = new Bola(context);
 b1.x = 100;
 b1.y = 200;
 b1.velocX = 20;
 b1.velocY = -10;
 b1.cor = 'red';
 b1.raio = 20;

 var b2 = new Bola(context);
 b2.x = 200;
 b2.y = 100;
 b2.velocX = -10;
 b2.velocY = 20;
 b2.cor = 'blue';
 b2.raio = 30;

 function Bola(context) {
    this.context = context;
    this.x = 0;
    this.y = 0;
    this.velocX = 0;
    this.velocY = 0;

    // atributo de desenho
    this.cor = 'black';
    this.raio = 10;
 }
 Bola.prototype = {
    atualizar: function() {
        var ctx = this.context;
        if (this.x < this.raio || this.x > ctx.canvas.width - this.raio)
            this.velocX *= -1;
        if (this.y < this.raio || this.y > ctx.canvas.height - this.raio)
            this.velocY *= -1;
            this.x += this.velocX;
            this.y += this.velocY;

    },
    desenhar: function() {
        var ctx = this.context;

        //guardar configurações atuais do context
        ctx.save();

        // configurar o contexto de acordo com a bola
        ctx.fillStyle = this.cor;

        //desenhando
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
        ctx.fill();

        //voltar às config anteriores
        ctx.restore();
    }
 }