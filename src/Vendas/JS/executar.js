$(document).ready(function () {
    $('#vender').submit(function (e) {
        e.preventDefault();

        var formData = $(this).serialize();
        formData += '&venda=true';

        $.ajax({
            url: './PHP/executar.php',
            type: 'POST',
            data: formData,
            success: function(response) {
                console.log('Resposta do servidor:', response); // Verifica a resposta do servidor
            },
            error: function(xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText;
                console.error('Erro ao enviar o formulário:', error);

            }
        });
    });

    $('#devolver').submit(function (e) {
        e.preventDefault();

        var formData = $(this).serialize();
        formData += '&venda=false';

        $.ajax({
            url: './PHP/executar.php',
            type: 'POST',
            data: formData,
            success: function(response) {
                console.log('Resposta do servidor:', response); // Verifica a resposta do servidor
            },
            error: function(xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText;
                console.error('Erro ao enviar o formulário:', error);

            }
        });
    });
});