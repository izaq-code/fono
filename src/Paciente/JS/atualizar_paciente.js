$(document).ready(function() {
    var pacienteId = localStorage.getItem('pacienteId');

    if (pacienteId) {
        // Carregar os dados do paciente para edição
        $.ajax({
            url: './PHP/obter_paciente.php',
            type: 'POST',
            data: { id: pacienteId },
            dataType: 'json',
            success: function(data) {
                if (data.paciente) {
                    $('#id').val(data.paciente.cod_paciente);
                    $('#nome').val(data.paciente.nome_paciente);
                    $('#cpf').val(data.paciente.cpf_paciente);
                    $('#rg').val(data.paciente.rg_paciente);
                    $('#data_nascimento').val(data.paciente.data_nascimento);
                    $('#nome_responsavel').val(data.paciente.nome_responsavel);
                    $('#telefone').val(data.paciente.telefone_paciente);
                    $('#carteira_convenio').val(data.paciente.carteira_convenio);
                    $('#nacionalidade').val(data.paciente.nacionalidade_paciente);
                    $('#contato_emergencia').val(data.paciente.contato_emergencia);
                    $('#cpf_responsavel').val(data.paciente.cpf_responsavel);
                    $('#cep').val(data.paciente.cep_paciente);
                    $('#endereco').val(data.paciente.endereco);
                    $('#numero_endereco').val(data.paciente.numero_endereco);
                    $('#bairro').val(data.paciente.bairro);
                    $('#numero_responsavel').val(data.paciente.numero_responsavel);

                    // Preencher os demais campos do formulário com os dados do paciente aqui
                } else {
                    $('#mensagem').text('Paciente não encontrado');
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Erro ao obter paciente:', textStatus, errorThrown);
            }
        });

        // Submeter o formulário de atualização
        $('#atualizar_paciente').submit(function(event) {
            event.preventDefault();

            // Verificar se o campo de ID está preenchido
            var id = $('#id').val();
            if (!id) {
                $('#mensagem').text('ID do paciente não fornecido');
                return;
            }

            var formData = $(this).serialize();

            $.ajax({
                url: './PHP/atualizar_paciente.php',
                type: 'POST',
                data: formData,
                dataType: 'json',
                success: function(data) {
                    $('#mensagem').text(data.mensagem);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('Erro ao atualizar paciente:', textStatus, errorThrown);
                }
            });
        });
    } else {
        $('#mensagem').text('ID do paciente não fornecido');
    }
});
