function listarProdutos() {
    var container = $('#dados_exibidos');

    $(document).on('click', '.menos-btn', function () {
        var botaoQuantidade = $(this).next('.quantidade-input');
        var currentValue = parseInt(botaoQuantidade.val());
        botaoQuantidade.val(currentValue - 1);
    });
    
    $(document).on('click', '.mais-btn', function () {
        var botaoQuantidade = $(this).prev('.quantidade-input');
        var currentValue = parseInt(botaoQuantidade.val());
        botaoQuantidade.val(currentValue + 1);
    });

    $.ajax({
        url: '../PHP/exibir_produto.php',
        type: 'POST',
        dataType: 'json',
        success: function (produtos) {
            container.empty();

            produtos.forEach(function (produto) {
                var item = $('<div>').addClass('produto');

                var nome = $('<h3>').text(produto.nome);
                item.append(nome);

                var imgContainer = $('<div>').addClass('img-container');
                var imagem = $('<img>').attr('src', produto.imagem);
                imgContainer.append(imagem);
                item.append(imgContainer);

                var preco = $('<p>').text('Preço: ' + produto.preco);
                item.append(preco);

                var quantidade = $('<p>').addClass('quantidade').text(produto.quantidade + ' em estoque');
                item.append(quantidade);

                var divBotao = $('<div>').addClass('input-group');
                var botaoMenos = $('<button>').addClass('menos-btn').attr('type', 'button').text('-');
                var botaoQuantidade = $('<input>').addClass('quantidade-input').attr('type', 'Number').val('0').data('id', produto.cod);
                var botaoMais = $('<button>').addClass('mais-btn').attr('type', 'button').text('+');

                var divConfirmacao = $('<div>').addClass('confirmacao-container');
                var botaoConfirmar = $('<button>').addClass('confirmar-btn').attr('type', 'button').text('Confirmar').data('id', produto.cod);
                var botaoCancelar = $('<button>').addClass('cancelar-btn').attr('type', 'button').text('Cancelar');

                divConfirmacao.append(botaoConfirmar, botaoCancelar);
                divBotao.append(botaoMenos, botaoQuantidade, botaoMais, divConfirmacao);
                item.append(divBotao);

                container.append(item);
            });
        }
    });
}

$(document).ready(function () {
    listarProdutos();

    $(document).on('click', '.cancelar-btn', function() {
        var botaoQuantidade = $(this).closest('.produto').find('.quantidade-input');
        botaoQuantidade.val(0);
    });
    
    $(document).on('click', '.confirmar-btn', function() {
        var id = $(this).data('id');
        var botaoQuantidade = $(this).closest('.produto').find('.quantidade-input');
        var valorQuantidade = parseInt(botaoQuantidade.val()); 

        if (!isNaN(valorQuantidade)) {
            $.ajax({
                url: '../PHP/atualizar.php',
                type: 'POST',
                data: {
                    produto_id: id,
                    quantidade_nova: valorQuantidade,
                },
                success: function (response) {
                    console.log(response);
                },
                error: function (xhr, status, error) {
                    console.error("Erro ao atualizar quantidade: " + error);
                }
            });
        } else {
            console.error("Quantidade inválida.");
        }
    });
});
