$(document).ready(function () {
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
    const poltronasContainer = $('#poltronas-container');
    const overlayMapaPoltronas = $('#overlay, #mapa-poltronas');

    let formularioVisivel = true;

    function abrirFecharPainel() {
        formulario.slideToggle();
        iconUp.toggle();
        iconDown.toggle();
        painel.toggleClass("painel-ativo");
        formularioVisivel = !formularioVisivel;
    }

    painel.on("click", abrirFecharPainel);

    function atualizarPreco() {
        const precoInteira = 24;
        const precoMeia = 12;
        const quantidadeInteiraValue = parseInt(quantidadeInteira.val());
        const quantidadeMeiaValue = parseInt(quantidadeMeia.val());

        const precoTotalInteiraValue = precoInteira * quantidadeInteiraValue;
        const precoTotalMeiaValue = precoMeia * quantidadeMeiaValue;
        const subTotalValue = precoTotalInteiraValue + precoTotalMeiaValue;
        const precoTotalGeralValue = precoTotalInteiraValue + precoTotalMeiaValue;

        precoTotalInteira.text(`R$ ${precoTotalInteiraValue}`);
        precoTotalMeia.text(`R$ ${precoTotalMeiaValue}`);
        subTotal.text(`SUBTOTAL: R$ ${subTotalValue}`);
        precoTotalGeral.text(`TOTAL A PAGAR: R$ ${precoTotalGeralValue}`);

        const desativarBotao = quantidadeInteiraValue === 0 && quantidadeMeiaValue === 0;

        botaoContinuar.prop("disabled", desativarBotao).toggleClass("botao-desativado", desativarBotao);
    }

    atualizarPreco();

    quantidadeInteira.add(quantidadeMeia).on("input", function () {
        atualizarPreco();
        verificarPoltronasSelecionadas();
    });

    poltronasContainer.on('click', '.poltrona', function () {
        $(this).toggleClass('poltrona-selecionada');
        verificarPoltronasSelecionadas();
    });

    function toggleOverlayMapaPoltronas(show) {
        overlayMapaPoltronas.fadeToggle(show, function () {
            if (!show) {
                limparPoltronas();
            }
        });
    }

    function mostrarFecharMapaPoltronas() {
        const quantidadeInteiraValue = parseInt(quantidadeInteira.val());
        const quantidadeMeiaValue = parseInt(quantidadeMeia.val());

        if (quantidadeInteiraValue > 0 || quantidadeMeiaValue > 0) {
            toggleOverlayMapaPoltronas(true);
            criarPoltronas();
        }
    }

    function fecharMapaPoltronas() {
        toggleOverlayMapaPoltronas(false);
    }

    $('#continuar-btn').on('click', mostrarFecharMapaPoltronas);
    $('#fechar-mapa').on('click', fecharMapaPoltronas);

    function criarPoltronas() {
        for (let i = 1; i <= 216; i++) {
            $('<button>', { class: 'poltrona', text: i }).appendTo(poltronasContainer);
        }
    }

    function limparPoltronas() {
        poltronasContainer.empty();
    }

    $('#finalizar').on('click', function (event) {
        const poltronasSelecionadas = $('.poltrona-selecionada').length > 0;

        if (!poltronasSelecionadas) {
            event.preventDefault();
            alert('Por favor, selecione pelo menos uma poltrona.');
        } else {
            // window.location.href = "ingresso_comprado.html";
        }
    });

    function verificarPoltronasSelecionadas() {
        const quantidadeInteiraValue = parseInt(quantidadeInteira.val());
        const quantidadeMeiaValue = parseInt(quantidadeMeia.val());
        const totalIngressos = quantidadeInteiraValue + quantidadeMeiaValue;

        $('.poltrona').prop('disabled', false);
        const poltronasSelecionadas = $('.poltrona-selecionada').length;

        if (poltronasSelecionadas === totalIngressos) {
            $('.poltrona:not(.poltrona-selecionada)').prop('disabled', true);
        }
    }
});
