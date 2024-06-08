$('#nome').on('change', function () {

    var selecionado = this.value;

    $.ajax({
        type: 'POST',
        url: '../PHP/preencher-informacoes.php',
        data: {
            selecionado: selecionado
        },
        dataType: 'json',
        success: function (date) {
            exiba(date);
        },
        error: function (xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText;
            console.error('Error:', errorMessage); // Exibe o erro no console
        }
    })
})

function exiba(date) {
    //iterando sobre os elementos do bd e drecionando para o html
    q = $('#nomec');
    q.empty();
    q.append(date.nome_paciente);

    w = $('#cpf');
    w.empty();
    w.append(date.cpf_paciente);

    e = $('#tel');
    e.empty();
    e.append(date.telefone_paciente);  
}