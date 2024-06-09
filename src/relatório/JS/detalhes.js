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
                    var detalhesHtml = '<div class="produto">';
                    detalhesHtml += '<h3>Produto</h3>';
                    detalhesHtml += '<p>' + response.nome_produto + '</p>';
                    detalhesHtml += '<p>Preço: ' + response.preco_produto + '</p>';
                    detalhesHtml += '<p>Data da Venda: ' + response.data + '</p>';
                    detalhesHtml += '<div class="img-container"><img src="' + response.imagem_produto + '" alt="Imagem do Produto" /></div>';
                    detalhesHtml += '<p>Descrição:</p>';
                    detalhesHtml += '<textarea id="descricao" class="descricao-input" name="message" rows="4" placeholder="Mensagem" required minlength="10000" style="width: 100%; box-sizing: border-box; margin: 10px 0; padding: 10px; font-family: inherit;">' + response.descricao + '</textarea>';
                    detalhesHtml += '<button id="salvarDescricao" class="detalhes-btn">Enviar</button>';
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
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Relatorio feito com secesso!",
                                    showConfirmButton: false,
                                    timer: 1500
                                  }).then(() => {
                                    window.location.reload();
                                });
                            },
                            error: function(xhr, status, error) {
                                console.error(xhr.responseText);
                            }
                        });
                    });
                } else if (response.status === 'Finalizado') {
                    var detalhesHtml = '<div class="relatorio">';
                    detalhesHtml += '<h4>Relatório</h4>';
                    detalhesHtml += '<div class="descricao">' + response.descricao + '</div>';
                    detalhesHtml += '</div>';
                    detalhesHtml += '<div class="produto">';
                    detalhesHtml += '<h3>Produto</h3>';
                    detalhesHtml += '<p>' + response.nome_produto + '</p>';
                    detalhesHtml += '<p>Preço: ' + response.preco_produto + '</p>';
                    detalhesHtml += '<p>Data da Venda: ' + response.data + '</p>';
                    detalhesHtml += '<div class="img-container"><img src="' + response.imagem_produto + '" alt="Imagem do Produto" /></div>';
                    detalhesHtml += '<p>Descrição:</p>';
                    detalhesHtml += '<textarea id="descricao" class="descricao-input" name="message" rows="4" placeholder="Mensagem" required minlength="10000" style="width: 100%; box-sizing: border-box; margin: 10px 0; padding: 10px; font-family: inherit;">' + response.descricao + '</textarea>';
                    detalhesHtml += '<button id="atualizarDescricao" class="detalhes-btn">Atualizar Descrição</button>';
                    detalhesHtml += '</div>';
                    
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
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Relatorio feito com secesso!",
                                    showConfirmButton: false,
                                    timer: 1500
                                  }).then(() => {
                                    window.location.reload();
                                });
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
