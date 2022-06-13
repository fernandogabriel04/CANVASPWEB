// criando loop animação
 var animacao = new Animacao();
 animacao.novoSprite(b1);
 animacao.novoSprite(b2);
// ligando
animacao.ligar()

function Animacao(){
    this.sprites = [];
    this.ligado = false;
}
Animacao.prototype = {
    novoSprite: function(sprite) {
        this.sprites.push(sprite);        
    },
    ligar: function() {
        this.ligado = true;
        this.proximoFrame();
    },
    desligar: function() {
        this.ligado = false;
    },
    proximoFrame: function() {
        // posso continuar?
        if (! this.ligado) return;
        // limpando tela ou desenhando fundo a cada ciclo
        this.limparTela();
        // atualizamos o estado dos sprites
        for (var i in this.sprites)
        this.sprites[i].atualizar();
        // desenhamos os sprites
        for (var i in this.sprites)
        this.sprites[i].desenhar();
        // chamamos o proximo ciclo
        var animacao = this;
        requestAnimationFrames(function() { 
            animacao.proximoFrame();
        });

        limparTela: function() {
            var ctx = this.context;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        function Animacao(context) {
            this.context = context;
            this.sprites = [];
            this.ligado = false;
        }
        
        var animacao = new Animacao(context);

    }
}
 