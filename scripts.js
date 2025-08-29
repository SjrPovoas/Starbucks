/*
JavaScript não é Java
Variáveis (Qualquer Linguagem de Programação)
    - São um pedacinho da memória do computador que você separa paraguardar O QUE VOCÊ QUISER

Função - Um pedacinho de código que ... Só executa quando é chamado.
console.log() - ferramenta do JS que, tudo que eu colocar ali dentro, ele mostra na tela

    Algoritimo - São os Passos para fazer algo
    Lógica de Programação
[X] Descobrir quando o usuário clicou no botão
[X] Quem é a imagem que eu vou trocar
[X] Trocar a imagem principal
[X] Colocar a imagem desejada
[ ] Trocar a cor de fundo

document = HTML
querySelector = selecionar o que eu quiser no HTML

    Sucesso = Método + Ambiente + Esforço

    "Leitura"
-Estou indo no HTML, procurando por alguém. Esse alguém tem uma classe e quando eu encontrar esse alguém, eu guardo meu pedacinho no meu espaço da minha variável
*/
let imagem = document.querySelector(".imagem-copo")

function trocaImagem(endereco){
    imagem.src = endereco
   /*console.log(endereco)*/  
}
/*"Leitura"
Toda vez que a função trocaImagem é chamada ela troca a imagem.src="img/img1.png"
-Forma Dinâmica para isso é: dentro dos parênteses = variável
*/