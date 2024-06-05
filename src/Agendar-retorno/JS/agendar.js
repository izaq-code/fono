$(document).ready(function () {
    $('#agendar').submit(function (e) {
        e.preventDefault();

        var id = 1; //localStorage.getItem('id'); 

        var formData = $(this).serialize();
        formData += '&nome=' + id;

        $.ajax({
            url: './PHP/agendar.php',
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