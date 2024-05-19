$(document).ready(function() {
    // Requisição AJAX para obter a lista de pacientes do arquivo PHP
    $.ajax({
        url: 'PHP/listar_pacientes.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Limpar a lista de pacientes antes de adicionar os novos
            $('#lista-pacientes').empty();

            // Iterar sobre os pacientes e adicioná-los à lista
            $.each(data, function(index, paciente) {
                $('#lista-pacientes').append('<li>Nome: ' + paciente.nome_paciente + ', Idade: ' + paciente.idade + '</li>');
            });
        },
        error: function(xhr, status, error) {
            console.error('Erro ao obter lista de pacientes:', error);
        }
    });
});
