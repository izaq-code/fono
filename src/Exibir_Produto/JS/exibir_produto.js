function listarProdutos() {
    var container = $('#dados_exibidos');

    $.ajax({
        url: './PHP/exibir_produto.php',
        type: 'GET',
        dataType: 'json',
        success: function(produtos) {
            container.empty();

            produtos.forEach(function(produto) {
                var item = $('<div>').addClass('produto');

                var nome = $('<h3>').text(produto.nome);
                item.append(nome);

                var imagem = $('<img>').attr('src', produto.imagem).css('maxWidth', '100px');
                item.append(imagem);

                var preco = $('<p>').text('Preço: ' + produto.preco);
                item.append(preco);

                var quantidade = $('<p>').text('Quantidade: ' + produto.quantidade);
                item.append(quantidade);

                container.append(item);
            });
        }
    });
}

$(document).ready(function() {
    listarProdutos();
});