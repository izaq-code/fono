$(document).ready(function() {

    function carregarVendedores() {
        $.ajax({
            url: '../PHP/select.php', 
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                $('#selectVendedores').empty();
                $('#selectVendedores').append($('<option>', {
                    value: '',
                    text: 'Selecione um vendedor'
                }));
                $.each(response, function(index, vendedor) {
                    $('#selectVendedores').append($('<option>', {
                        value: vendedor.id,
                        text: vendedor.nome
                    }));
                });
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    }
    
 
    carregarVendedores();

    $('#selectVendedores').change(function() {
        var vendedorId = $(this).val();
        var dataVenda = $('#dataVenda').val(); 

        $.ajax({
            url: '../PHP/busca.php', 
            type: 'GET',
            dataType: 'json',
            data: { 
                vendedor_id: vendedorId, 
                data_venda: dataVenda 
            },
            success: function(response) {
                $('#Relatorio').empty();
                
                if (response.length > 0) {
                    $.each(response, function(index, produto) {
                        var produtoHtml = '<div>';
                        produtoHtml += '<h3>' + produto.nome_produto + '</h3>';
                        produtoHtml += '<img src="' + produto.imagem_do_produto + '" alt="' + produto.nome_produto + '">';
                        produtoHtml += '<p>Preço: R$ ' + produto.preco_produto + '</p>';
                        produtoHtml += '</div>';
                        $('#Relatorio').append(produtoHtml);
                    });
                } else {
                    $('#Relatorio').html('<p>Nenhum produto vendido por este vendedor nesta data.</p>');
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});
