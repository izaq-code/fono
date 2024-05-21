$(document).ready(function() {
    function carregarPacientes() {
        $.ajax({
            url: '../Paciente/PHP/listar_pacientes.php',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                const tabelaPacientes = $('#tabela-pacientes');
                const mensagem = $('#mensagem');

                // Verificar e exibir mensagem
                if (data.mensagem) {
                    mensagem.text(data.mensagem);
                }

                // Preencher a tabela com os dados dos pacientes
                if (data.pacientes.length > 0) {
                    data.pacientes.forEach(paciente => {
                        const row = `
                            <tr>
                                <td>${paciente.cod_paciente}</td>
                                <td>${paciente.nome_paciente}</td>
                                <td>${paciente.cpf_paciente}</td>
                                <td>${paciente.rg_paciente}</td>
                                <td>${paciente.data_nascimento}</td>
                                <td>${paciente.nome_responsavel}</td>
                                <td>${paciente.telefone_paciente}</td>
                                <td>${paciente.carteira_convenio}</td>
                                <td>${paciente.nacionalidade_paciente}</td>
                                <td>${paciente.contato_emergencia}</td>
                                <td>${paciente.cpf_responsavel}</td>
                                <td>${paciente.cep_paciente}</td>
                                <td>${paciente.endereco}</td>
                                <td>${paciente.numero_endereco}</td>
                                <td>${paciente.bairro}</td>
                                <td>${paciente.numero_responsavel}</td>
                                <td>
                                    <button><a href="atualizar.php?id=${paciente.cod_paciente}">Editar</a></button>
                                </td>
                            </tr>
                        `;
                        tabelaPacientes.append(row);
                    });
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Erro ao carregar pacientes:', textStatus, errorThrown);
            }
        });
    }

    carregarPacientes();
});
