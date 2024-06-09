$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var vendaId = urlParams.get('id');

    if (vendaId) {
        $.ajax({
            url: '../PHP/detalhes.php',
            type: 'POST',
            dataType: 'json',
            data: {
                id: vendaId
            },
            success: function(response) {
                if (response.status === 'Em análise') {
                    var detalhesHtml = '<p>Produto: ' + response.nome_produto + '</p>';
                    detalhesHtml += '<p>Preço: ' + response.preco_produto + '</p>';
                    detalhesHtml += '<p>Data da Venda: ' + response.data + '</p>';
                    detalhesHtml += '<img src="' + response.imagem_produto + '" alt="Imagem do Produto" />';
                    detalhesHtml += '<p><span style="display: none;"> ' + response.status + '</span></p>';
                    detalhesHtml += ' <textarea id="descricao" name="message" rows="4" placeholder="Mensagem" required></textarea>';
                    detalhesHtml += '<button id="salvarDescricao">Enviar</button>';
                    $('#detalhesVenda').html(detalhesHtml);

                    $('#salvarDescricao').click(function() {
                        var descricao = $('#descricao').val();
                        $.ajax({
                            url: '../../relatório/PHP/detalhes.php',
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                id: vendaId,
                                descricao: descricao
                            },
                            success: function(response) {
                                alert(response.message);
                                window.location.reload();
                            },
                            error: function(xhr, status, error) {
                                console.error(xhr.responseText);
                            }
                        });
                    });
                } else if (response.status === 'Finalizado') {
                    var detalhesHtml = '<p>Produto: ' + response.nome_produto + '</p>';
                    detalhesHtml += '<p>Preço: ' + response.preco_produto + '</p>';
                    detalhesHtml += '<p>Data da Venda: ' + response.data + '</p>';
                    detalhesHtml += '<img src="' + response.imagem_produto + '" alt="Imagem do Produto" />';
                    detalhesHtml += '<p><span style="display: none;"> ' + response.status + '</span></p>';
                    detalhesHtml += '<p>Descrição: ' + response.descricao + '</p>';
                    detalhesHtml += '<input id="descricao" value="' + response.descricao + '"></input>';
                    detalhesHtml += '<button id="atualizarDescricao">Atualizar Descrição</button>';
                    $('#detalhesVenda').html(detalhesHtml);

                    $('#atualizarDescricao').click(function() {
                        var descricao = $('#descricao').val();
                        $.ajax({
                            url: '../../relatório/PHP/detalhes.php',
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                id: vendaId,
                                descricao: descricao
                            },
                            success: function(response) {
                                alert(response.message);
                                window.location.reload();
                            },
                            error: function(xhr, status, error) {
                                console.error(xhr.responseText);
                            }
                        });
                    });
                } else {
                    var detalhesHtml = '<p>Produto: ' + response.nome_produto + '</p>';
                    detalhesHtml += '<p>Preço: ' + response.preco_produto + '</p>';
                    detalhesHtml += '<p>Data da Venda: ' + response.data + '</p>';
                    detalhesHtml += '<img src="' + response.imagem_produto + '" alt="Imagem do Produto" />';
                    detalhesHtml += '<p><span style="display: none;"> ' + response.status + '</span></p>';
                    detalhesHtml += '<p>Descrição: ' + response.descricao + '</p>';
                    $('#detalhesVenda').html(detalhesHtml);
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    } else {
        $('#detalhesVenda').html('<p>ID da venda não fornecido.</p>');
    }
});
