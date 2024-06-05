$(document).on('click', '.atualizar', function () {

    var form = $('#Cadastro');
    
    console.log('ID do formulário:', form);

    var id = $(this).data('id');
    console.log('ID do produto:', id);

    var nome = form.find('#nome').val();
    var preco = form.find('#preco').val();
    var imagem = form.find('#foto_produto').val();
    var categoria = form.find('#categoria').val();
    var descricao = form.find('#descricao').val();

    var produto = $(this).closest('.produto');
    var nome = produto.find('.produto-nome').text();
    console.log('Nome do produto:', nome);

    var preco = produto.find('p:contains("Preço:")').text().replace('Preço: ', '');
    console.log('Preço do produto:', preco);

    var quantidade = produto.find('.quantidade').text().replace(' em estoque', '');
    console.log('Quantidade do produto:', quantidade);

    var imagem = produto.find('img').attr('src');
    console.log('Imagem do produto:', imagem);

    var categoria = produto.find('.categoria').text();
    console.log('Categoria do produto:', categoria);

    var descricao = produto.find('.descricao').text();
    console.log('Descrição do produto:', descricao);


    window.location.href = '../../Cadastro_Produto/atualizar.html?id=' + id;

    $.ajax({
        url: '../PHP/atualizar_dados_produto.php',
        type: 'POST',
        data: {
            cod: id,
            nome: nome,
            preco: preco,
            quantidade: quantidade,
            imagem: imagem,
            categoria: categoria,
            descricao: descricao
        },
        success: function (response) {
            console.log('Produto atualizado com sucesso:', response);
            listarProdutos();
        },
        error: function (xhr, status, error) {
            console.error('Erro ao atualizar produto:', error);
            alert('Erro ao atualizar produto!');
        }
    });
});
