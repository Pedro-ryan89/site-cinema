$(document).ready(function() {
    const painel = $("#painel");
    const formulario = $("#formulario");
    const quantidadeInteira = $("#quantidadeInteira");
    const quantidadeMeia = $("#quantidadeMeia");
    const precoTotalInteira = $("#precoTotalInteira");
    const precoTotalMeia = $("#precoTotalMeia");
    const precoTotalGeral = $("#precoTotalGeral");
    const iconUp = $(".icon-up");
    const iconDown = $(".icon-down");

    let formularioVisivel = true;

    function abrirPainel() {
        formulario.slideDown();
        iconUp.css("display", "inline");
        iconDown.css("display", "none");
        painel.addClass("painel-ativo");
        formularioVisivel = true;
    }

    function fecharPainel() {
        formulario.slideUp();
        iconUp.css("display", "none");
        iconDown.css("display", "inline");
        painel.removeClass("painel-ativo");
        formularioVisivel = false;
    }

    painel.on("click", function() {
        if (formularioVisivel) {
            fecharPainel();
        } else {
            abrirPainel();
        }
    });

    // Abra o painel suavemente ao carregar a página
    abrirPainel();

    function atualizarPreco() {
        const precoInteira = 50; // Preço da inteira
        const precoMeia = 25; // Preço da meia
        const quantidadeInteiraValue = parseInt(quantidadeInteira.val());
        const quantidadeMeiaValue = parseInt(quantidadeMeia.val());

        const precoTotalInteiraValue = precoInteira * quantidadeInteiraValue;
        const precoTotalMeiaValue = precoMeia * quantidadeMeiaValue;
        const precoTotalGeralValue = precoTotalInteiraValue + precoTotalMeiaValue;

        precoTotalInteira.text("R$ " + precoTotalInteiraValue);
        precoTotalMeia.text("R$ " + precoTotalMeiaValue);
        precoTotalGeral.text("Preço Total: R$ " + precoTotalGeralValue);
    }

    quantidadeInteira.on("input", atualizarPreco);
    quantidadeMeia.on("input", atualizarPreco);
});