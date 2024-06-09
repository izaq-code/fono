$(document).ready(function () {
    $('#agendar').submit(function (e) {
        e.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            url: './PHP/agendar.php',
            type: 'POST',
            data: formData,
            success: function(response) {
                console.log('Resposta do servidor:', response); // Verifica a resposta do servidor
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "agendamento realizado com sucesso!",
                    showConfirmButton: false,
                    timer: 1500
                  }).then(() => {
                    window.location.href = 'http://localhost/fono/src/Paciente/listar_pacientes.html';
                });
            },
            error: function(xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText;
                console.error('Erro ao enviar o formulário:', error);

            }
        });
    });
});