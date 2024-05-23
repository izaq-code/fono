document.addEventListener("DOMContentLoaded", function () {

    var selecionado = localStorage.getItem('codPaciente');


    $(document).ready(function () {
        $.ajax({
            type: 'POST',
            url: '../PHP/exibirValores.php',
            data: {
                selecionado: selecionado
            },
            dataType: 'json',
            success: function (data) {
                mostrar(data);
            },
            error: function (xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText;
                console.error('Erro ao cadastrar:', errorMessage); // Exibe o erro no console
                alert('Erro ao cadastrar: ' + errorMessage);
            }
        })
    })
})

function mostrar(data) {

    $('#nome_paciente').val(data[0].nome_paciente);
    $('# cpf_paciente').val(data[0].cpf_proprietario);
    $('#fabricante').val(data[0].fabricante);
    $('#marca').val(data[0].marca);
    $('#modelo').val(data[0].modelo);
    $('#motorizacao').val(data[0].motorizacao);
    $('#combustivel').val(data[0].combustivel);
    $('#sinistro').val(data[0].sinistro);
    $('#cambio').val(data[0].cambio);
    $('#cor').val(data[0].cor);
    $('#placa').val(data[0].placa);
    $('#chassi').val(data[0].chassi);
    $('#hodometro').val(data[0].hodometro);
    t = $('#status_veiculo');
    t.empty();
    t.append(data[0].status_veiculo);

}