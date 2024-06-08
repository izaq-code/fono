$('#retorno').on('change', function () {

    var selecionado = this.value;


var container = $('#dados_exibidos');

$.ajax({
    url: '../PHP/exibir-produto.php',
    type: 'POST',
    data: {
        selecionado: selecionado
    },
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


            container.append(item);
        });
    }
});

});
