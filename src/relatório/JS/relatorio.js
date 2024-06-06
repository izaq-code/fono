$(document).ready(function () {
    listarRelatorioVendas();
});

function listarRelatorioVendas() {
    var container = $('#Relatorio');

    $.ajax({
        url: './PHP/relatorio.php',
        type: 'POST',
        dataType: 'json',
        success: function (vendas) {
            container.empty();

            var table = $('<table>').addClass('relatorio-table');
            var headerRow = $('<tr>');
            headerRow.append($('<th>').text('Nome do Vendedor'));
            headerRow.append($('<th>').text('Nome do Produto'));
            headerRow.append($('<th>').text('Data da Venda'));
            table.append(headerRow);

            vendas.forEach(function (venda) {
                var row = $('<tr>');
                row.append($('<td>').text(venda.nome_vendedor));
                row.append($('<td>').text(venda.nome_produto));
                row.append($('<td>').text(venda.data_venda));
                table.append(row);
            });

            container.append(table);
        },
        error: function (xhr, status, error) {
            console.error("Ocorreu um erro ao recuperar os dados do servidor: " + error);
        }
    });
}
