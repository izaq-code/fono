function listarProdutos() {
    var container = $('#dados_exibidos');

    $.ajax({
        url: '../PHP/exibir_produto.php',
        type: 'GET',
        dataType: 'json',
        success: function (produtos) {
            container.empty();

            produtos.forEach(function (produto) {
                var item = $('<div>').addClass('produto');

                var nome = $('<h3>').text(produto.nome);
                item.append(nome);

                var imgContainer = $('<div>').addClass('img-conteiner');
                var imagem = $('<img>').attr('src', produto.imagem);
                imgContainer.append(imagem);
                item.append(imagem);

                var preco = $('<p>').text('Preço: ' + produto.preco);
                item.append(preco);

                var quantidade = $('<p>').text('Quantidade: ' + produto.quantidade);
                item.append(quantidade);

                var botao = $('<button>').text('Adicionar Estoque').addClass('adicionar-estoque');
                botao.attr('data-id', produto.cod_produto);
                item.append(botao);

                container.append(item);
            });
        }
    });
}

$(document).ready(function () {
    listarProdutos();


    $(document).on('click', '.adicionar-estoque', function () {
        var id = $(this).data('id');
        console.log(id);
        $.ajax({
            url: '../PHP/atualizar.php',
            type: 'POST',
            data: {
                produto_id: id

            },
            success: function (quantidade_nova) {
                console.log("Quantidade atualizada com sucesso para " + quantidade_nova);

                var quantidadeElemento = $('[data-produto-id="' + id + '"] .quantidade');
                var novaQuantidade = parseInt(quantidade_nova);
                quantidadeElemento.text('Quantidade: ' + novaQuantidade);
            },
            error: function (xhr, status, error) {
                console.error("Erro ao atualizar quantidade: " + error);
            }
        });
    });
})