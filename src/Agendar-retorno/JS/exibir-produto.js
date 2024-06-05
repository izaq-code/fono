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
                var botaoAtualizar = $('<button>').addClass('atualizar').attr('type', 'button').text('Atualizar').data('id', produto.cod);
                divAtualizar.append(botaoAtualizar);
                item.append(divAtualizar);

                //Div para deletar
                var divDeletar = $('<div>').addClass('deletar-container');
                var botaoDeletar = $('<button>').addClass('deletar').attr('type', 'button').text('Deletar').data('id', produto.cod);
                divDeletar.append(botaoDeletar);
                item.append(divDeletar);

                container.append(item);
            });
        }
    });
}