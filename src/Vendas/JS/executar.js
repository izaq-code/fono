$(document).ready(function () {

    function enviarFormulario(formData) {
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
    }

    $('#vender').submit(function (e) {
        e.preventDefault();
        var formData = $(this).serialize();
        enviarFormulario(formData);
    });

    $('#devolver').click(function (e) {
        e.preventDefault();
        $('#vender').find('[name="vendaa"]').val('0'); // Define o valor como 'false'
        var formData = $('#vender').serialize(); // Obtém os dados do formulário
        enviarFormulario(formData); // Envia o formulário
    });

});
