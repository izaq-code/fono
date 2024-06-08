$(document).ready(function() {

    function select() {
        $.ajax({
            url: '../PHP/select.php',
            type: 'POST',
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

    function Vendas() {
        $.ajax({
            url: '../PHP/relatorio.php',
            type: 'POST',
            dataType: 'json',
            success: function(response) {
                exibirRelatorios(response);
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    }

    function filtrarVendas() {
        var vendedorId = $('#selectVendedores').val();
        var dataInicio = $('#dataInicio').val();
        var dataFim = $('#dataFim').val();

        $.ajax({
            url: '../PHP/relatorio.php',
            type: 'POST',
            dataType: 'json',
            data: {
                vendedor_id: vendedorId,
                data_inicio: dataInicio,
                data_fim: dataFim
            },
            success: function(response) {
                exibirRelatorios(response);
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    }

    function exibirRelatorios(relatorios) {
        $('#Relatorio').empty();

        if (relatorios.length > 0) {
            $.each(relatorios, function(index, venda) {
                var statusClass = venda.status === 'Em análise' ? 'status-em-analise' : 'status-finalizado';
                var vendaHtml = '<div class="venda">';
                vendaHtml += '<h4>Vendedor : ' + venda.nome_vendedor + '</h4>';
                vendaHtml += '<p>Produto: ' + venda.nome_produto + '</p>';
                vendaHtml += '<p>Status: <span class="status-bolinha ' + statusClass + '"></span> ' + venda.status + '</p>';
                vendaHtml += '<button class="detalhes-btn" data-id="' + venda.id + '">Ver Detalhes</button>';
                vendaHtml += '</div>';
                $('#Relatorio').append(vendaHtml);
            });

            $('.detalhes-btn').click(function() {
                var vendaId = $(this).data('id');
                window.location.href = 'detalhes.html?id=' + vendaId;
            });
        } else {
            $('#Relatorio').html('<p>Nenhuma venda encontrada.</p>');
        }
    }

    $('#relatorio').submit(function(event) {
        event.preventDefault();
        filtrarVendas();
    });

    $('#selectVendedores').change(function() {
        if ($(this).val() === '') {
            Vendas();
        }
    });

    select();
    Vendas();

});
