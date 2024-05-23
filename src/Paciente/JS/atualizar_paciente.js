$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pacienteId = urlParams.get('id');
    console.log(pacienteId);

    function carregarDadosPaciente(id) {
        $.ajax({
            url: '../PHP/obter_paciente.php',
            type: 'POST',
            data: { id: id },
            success: function(data) {
                if (data.sucesso) {
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
                } else {
                    $('#mensagem').text(data.mensagem);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Erro ao carregar dados do paciente:', textStatus, errorThrown);
            }
        });
    }

    carregarDadosPaciente(pacienteId);

    $('#atualizar_paciente').submit(function(e) {
        e.preventDefault();

        var dados = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: '../PHP/atualizar_paciente.php',
            data: dados,
            success: function(response) {
                var result = JSON.parse(response);
                $('#mensagem').text(result.mensagem);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Erro ao atualizar paciente:', textStatus, errorThrown);
            }
        });
    });
});
