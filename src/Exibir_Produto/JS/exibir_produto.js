
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



function listarProdutos() {
    var container = $('#dados_exibidos');

    $.ajax({
        url: '../PHP/exibir_produto.php',
        type: 'POST',
        dataType: 'json',
        success: function (produtos) {
            container.empty();
            
            produtos.forEach(function (produto) {
                var item = $('<div>').addClass('produto');

                var nome = $('<h3>').addClass('produto-nome').text(produto.nome);
                item.append(nome);

                var imgContainer = $('<div>').addClass('img-container');
                var imagem = $('<img>').attr('src', produto.imagem);
                imgContainer.append(imagem);
                item.append(imgContainer);

                var preco = $('<p>').text('Preço: ' + produto.preco);
                item.append(preco);

                var quantidade = $('<p>').addClass('quantidade').text(produto.quantidade + ' em estoque');
                item.append(quantidade);

                var categoria = $('<p>').addClass('categoria').text('Categoria: ' + produto.categoria).css('display', 'none');
                item.append(categoria);

                var descricao = $('<p>').addClass('descricao').text('Descrição: ' + produto.descricao).css('display', 'none');;
                item.append(descricao);

                // Div para botões de quantidade
                var divBotao = $('<div>').addClass('input-group');
                var botaoMenos = $('<button>').addClass('menos-btn').attr('type', 'button').text('-');
                var botaoQuantidade = $('<input>').addClass('quantidade-input').attr('type', 'Number').val('0').data('id', produto.cod);
                var botaoMais = $('<button>').addClass('mais-btn').attr('type', 'button').text('+');
                divBotao.append(botaoMenos, botaoQuantidade, botaoMais);
                item.append(divBotao);

                // Div para botões de confirmação
                var divConfirmacao = $('<div>').addClass('confirmacao-container');
                var botaoConfirmar = $('<button>').addClass('confirmar-btn').attr('type', 'button').html('<i class="bi bi-check-lg"></i>').data('id', produto.cod);
                var botaoCancelar = $('<button>').addClass('cancelar-btn').attr('type', 'button').html('<i class="bi bi-x"></i>');
                divConfirmacao.append(botaoConfirmar, botaoCancelar);
                item.append(divConfirmacao);

                //Div para atualizar
                var divAtualizar = $('<div>').addClass('atualizar-container');
                var botaoAtualizar = $('<button>').addClass('atualizar').attr('type', 'button').html('<i class="bi bi-pencil"></i>').data('id', produto.cod);
                divAtualizar.append(botaoAtualizar);
                item.append(divAtualizar);

                //Div para deletar
                var divDeletar = $('<div>').addClass('deletar-container');
                var botaoDeletar = $('<button>').addClass('deletar').attr('type', 'button').html('<i class="bi bi-x-octagon"></i>').data('id', produto.cod);
                divDeletar.append(botaoDeletar);
                item.append(divDeletar);

                container.append(item);
            });
        }
    });
}

$(document).ready(function () {
    listarProdutos();

    //função para cancelar
    $(document).on('click', '.cancelar-btn', function () {
        var botaoQuantidade = $(this).closest('.produto').find('.quantidade-input');
        botaoQuantidade.val(0);
    });

    //função para confirmar
    $(document).on('click', '.confirmar-btn', function () {
        var id = $(this).data('id');
        var botaoQuantidade = $(this).closest('.produto').find('.quantidade-input');
        var valorQuantidade = parseInt(botaoQuantidade.val());

        if (!isNaN(valorQuantidade)) {
            $.ajax({
                url: '../PHP/atualizar_estoque.php',
                type: 'POST',
                data: {
                    produto_id: id,
                    quantidade_nova: valorQuantidade,
                },
                success: function (response) {
                    console.log(response);
                    listarProdutos();
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


$('#searchInput').on('keyup', function () {
    var searchTerm = $(this).val().toLowerCase();
    $('.produto').each(function () {
        var nomeProduto = $(this).find('.produto-nome').text().toLowerCase();
        if (nomeProduto.includes(searchTerm)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

//Deletar algum produto 
$(document).on('click', '.deletar', function () {
    var id = $(this).data('id');

    if (confirm("Tem certeza que deseja deletar este produto?")) {
        $.ajax({
            url: '../PHP/deletar.php',
            type: 'POST',
            data: {
                cod: id
            },
            success: function (response) {
                console.log(response);
                listarProdutos();
            },
            error: function (xhr, status, error) {
                console.error("Erro ao deletar produto: " + error);
            }
        });
    }
});


