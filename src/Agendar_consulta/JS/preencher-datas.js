$('#hora').on('change', function () {

    var selecionado = this.value;

    $.ajax({
        type: 'POST',
        url: './PHP/preencher-datas.php',
        data: {
            selecionado: selecionado
        },
        dataType: 'json',
        success: function (ddd) {
            exiba(ddd);
        },
        error: function (xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText;
            console.error('Error:', errorMessage); // Exibe o erro no console
        }
    })
})

function exx(ddd) {
    //iterando sobre os elementos do bd e drecionando para o html



}

