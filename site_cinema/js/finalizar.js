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

    // Função para marcar a poltrona como selecionada ao clicar nela
    $('#poltronas-container').on('click', '.poltrona', function() {
        $(this).toggleClass('poltrona-selecionada');
        verificarPoltronasSelecionadas(); // Verifica se há poltronas selecionadas ao clicar em uma poltrona
    });

    // Função para verificar se há pelo menos uma poltrona selecionada
    function verificarPoltronasSelecionadas() {
        const poltronasSelecionadas = $('.poltrona-selecionada').length > 0;
        // Habilita ou desabilita o botão "Finalizar" com base na presença de poltronas selecionadas
        botaoContinuar.prop('disabled', !poltronasSelecionadas);
        // Adiciona ou remove uma classe de estilo ao botão "Finalizar" conforme necessário
        botaoContinuar.toggleClass('botao-desativado', !poltronasSelecionadas);
    }

    function mostrarMapaPoltronas() {
        const quantidadeInteiraValue = parseInt(quantidadeInteira.val());
        const quantidadeMeiaValue = parseInt(quantidadeMeia.val());

        // Verifica se há pelo menos um ingresso selecionado na inteira ou meia
        if (quantidadeInteiraValue > 0 || quantidadeMeiaValue > 0) {
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('mapa-poltronas').style.display = 'block';
            criarPoltronas();
        }
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

    
    // Função para criar as poltronas no mapa
    function criarPoltronas() {
        var poltronasContainer = document.getElementById('poltronas-container');
        for (var i = 1; i <= 216; i++) {
            var poltrona = document.createElement('button');
            poltrona.className = 'poltrona';
            poltrona.textContent = i;
            poltronasContainer.appendChild(poltrona);
        }
    }

    // Função para limpar as poltronas quando o mapa é fechado
    function limparPoltronas() {
        var poltronasContainer = document.getElementById('poltronas-container');
        poltronasContainer.innerHTML = ''; // Remove todas as poltronas
    }
    // Evento de clique no botão "Finalizar"
    $('#finalizar').on('click', function(event) {
        // Verifica se há pelo menos uma poltrona selecionada
        const poltronasSelecionadas = $('.poltrona-selecionada').length > 0;

        // Se não houver poltronas selecionadas, cancela o comportamento padrão do botão
        if (!poltronasSelecionadas) {
            event.preventDefault(); // Impede o comportamento padrão do botão (não segue o link)
            alert('Por favor, selecione pelo menos uma poltrona.');
        } else {
            // Se houver poltronas selecionadas, segue para o link especificado
            // window.location.href = "ingresso_comprado.html"; // Descomente essa linha para redirecionar para o link
            // Você pode descomentar a linha acima para redirecionar para o link desejado
        }
    });
    // Função para verificar poltronas selecionadas com base nos ingressos comprados
    function verificarPoltronasSelecionadas() {
        const quantidadeInteiraValue = parseInt(quantidadeInteira.val());
        const quantidadeMeiaValue = parseInt(quantidadeMeia.val());
        const totalIngressos = quantidadeInteiraValue + quantidadeMeiaValue;

        // Desabilita as poltronas se a quantidade de ingressos ainda não foi selecionada
        $('.poltrona').prop('disabled', false); // Habilita todas as poltronas primeiro
        const poltronasSelecionadas = $('.poltrona-selecionada').length;

        // Desabilita as poltronas se a quantidade de poltronas selecionadas for igual ao total de ingressos
        if (poltronasSelecionadas === totalIngressos) {
            $('.poltrona:not(.poltrona-selecionada)').prop('disabled', true);
        }
    }

    // Resto do seu código...

    // Adicione chamadas para verificar as poltronas selecionadas sempre que a seleção de ingressos for alterada
    quantidadeInteira.on("input", function() {
        atualizarPreco();
        verificarPoltronasSelecionadas();
    });

    quantidadeMeia.on("input", function() {
        atualizarPreco();
        verificarPoltronasSelecionadas();
    });
});
