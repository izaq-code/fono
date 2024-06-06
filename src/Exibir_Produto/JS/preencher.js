$(document).ready(function () {
    var idProduto = localStorage.getItem('idProduto');
    if (idProduto) {
        
        $.ajax({
            url: '../Exibir_Produto/PHP/preencher.php',
            type: 'POST',
            data: { id: idProduto },
            dataType: 'json',
            success: function (response) {
                
                $('#id').val(idProduto);
                $('#nome').val(response.nome_produto);
                $('#preco').val(response.preco_produto);
                $('#categoria').val(response.categoria_produto);
                $('#descricao').val(response.descricao_produto);
                
                if(response.imagem_do_produto) {
                    $('#foto_placeholder').html('<img src="' + response.imagem_do_produto + '" alt="Imagem do Produto">');
                }
            },
            error: function (xhr, status, error) {
                console.error("Erro ao buscar dados do produto: " + error);
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao buscar dados do produto',
                    text: 'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.'
                });
            }
        });
    }

});
