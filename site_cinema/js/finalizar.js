// Aguarda até que a página esteja totalmente carregada
$(document).ready(function () {
    // Seleção de elementos do HTML "finalizar_compra" usando jQuery
    const painel = $("#painel");
    const formulario = $("#formulario");
    const quantidadeInteira = $("#quantidadeInteira");
    const quantidadeMeia = $("#quantidadeMeia");
    const precoTotalInteira = $("#precoTotalInteira");
    const precoTotalMeia = $("#precoTotalMeia");
    const subTotal = $("#subTotal");
    const precoTotalGeral = $("#precoTotalGeral");
    const iconUp = $(".icon-up");
    const iconDown = $(".icon-down");
    const botaoContinuar = $(".continuar");
    
    // Variável para rastrear se o formulário está visível
    let formularioVisivel = true;

    // Função para abrir o painel (formulário)
    function abrirPainel() {
        formulario.slideDown(); // Mostra o formulário com uma animação de deslize para baixo
        iconUp.css("display", "inline"); // Mostra o ícone para cima
        iconDown.css("display", "none"); // Oculta o ícone para baixo
        painel.addClass("painel-ativo"); // Adiciona uma classe para estilização ativa
        formularioVisivel = true;
    }
    // Função para fechar o painel (formulário)
    function fecharPainel() {
        formulario.slideUp(); // Oculta o formulário com uma animação de deslize para cima
        iconUp.css("display", "none"); // Oculta o ícone para cima
        iconDown.css("display", "inline"); // Mostra o ícone para baixo
        painel.removeClass("painel-ativo"); // Remove a classe para estilização ativa
        formularioVisivel = false;
    }
    // Adiciona um manipulador de eventos para alternar entre abrir e fechar o painel ao clicar nele
    painel.on("click", function () {
        if (formularioVisivel) {
            fecharPainel();
        } else {
            abrirPainel();
        }
    });

    // Abra o painel suavemente ao carregar a página
    abrirPainel();

    // Função para atualizar os preços e subtotal com base nas quantidades selecionadas
    function atualizarPreco() {
        const precoInteira = 24; // Preço da inteira
        const precoMeia = 12; // Preço da meia
        const quantidadeInteiraValue = parseInt(quantidadeInteira.val());
        const quantidadeMeiaValue = parseInt(quantidadeMeia.val());

        // Calcula os preços totais e subtotal
        const precoTotalInteiraValue = precoInteira * quantidadeInteiraValue;
        const precoTotalMeiaValue = precoMeia * quantidadeMeiaValue;
        const subTotalValue = precoTotalInteiraValue + precoTotalMeiaValue;
        const precoTotalGeralValue = precoTotalInteiraValue + precoTotalMeiaValue;

        // Atualiza os textos nos elementos HTML correspondentes
        precoTotalInteira.text("R$ " + precoTotalInteiraValue);
        precoTotalMeia.text("R$ " + precoTotalMeiaValue);
        subTotal.text("SUBTOTAL: R$ " + subTotalValue);
        precoTotalGeral.text("TOTAL A PAGAR: R$ " + precoTotalGeralValue);

        // Verificar se ambas as quantidades são iguais a zero
        const desativarBotao = quantidadeInteiraValue === 0 && quantidadeMeiaValue === 0;

        // Ativar ou desativar o botão "Continuar" e estilizá-lo conforme necessário
        botaoContinuar.prop("disabled", desativarBotao);
        botaoContinuar.toggleClass("botao-desativado", desativarBotao);
    }

    // Inicializar o botão "Continuar" como desativado
    atualizarPreco();

    // Adicionar manipuladores de eventos para atualizar o botão quando a quantidade muda
    quantidadeInteira.on("input", atualizarPreco);
    quantidadeMeia.on("input", atualizarPreco);

    // Função para mostrar a sobreposição com o mapa de poltronas
    function mostrarMapaPoltronas() {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('mapa-poltronas').style.display = 'block';
        criarPoltronas();
    }

    // Função para ocultar a sobreposição e o mapa de poltronas
    function fecharMapaPoltronas() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('mapa-poltronas').style.display = 'none';
        limparPoltronas();
    }

    // Adiciona um ouvinte de eventos ao botão "Continuar"
    document.getElementById('continuar-btn').addEventListener('click', mostrarMapaPoltronas);

    // Adiciona um ouvinte de eventos ao botão "Fechar" no mapa de poltronas
    document.getElementById('fechar-mapa').addEventListener('click', fecharMapaPoltronas);

    
    // Função para criar as poltronas no mapa com base na distribuição proposta
    function criarPoltronas() {
        var poltronasContainer = document.getElementById('poltronas-container');
        var letras = document.querySelectorAll('.letras li');
        var poltronasPorLetra = [18, 18, 18, 18, 18, 12, 6, 6, 6, 6, 6, 6]; // Distribuição proposta

        for (var i = 0; i < letras.length; i++) {
            var letra = letras[i].textContent.charAt(0);
            var quantidadePoltronas = poltronasPorLetra[i];

            var letraContainer = document.createElement('div');
            letraContainer.className = 'letra-container';
            letraContainer.textContent = letra;

            var poltronasCirculo = document.createElement('div');
            poltronasCirculo.className = 'poltronas-circulo';

            for (var j = 1; j <= quantidadePoltronas; j++) {
                var poltrona = document.createElement('div');
                poltrona.className = 'poltrona';
                poltrona.textContent = j;
                poltronasCirculo.appendChild(poltrona);
            }

            letraContainer.appendChild(poltronasCirculo);
            poltronasContainer.appendChild(letraContainer);
        }
    }

    // Função para limpar as poltronas quando o mapa é fechado
    function limparPoltronas() {
        var poltronasContainer = document.getElementById('poltronas-container');
        poltronasContainer.innerHTML = ''; // Remove todas as poltronas
    }
});
