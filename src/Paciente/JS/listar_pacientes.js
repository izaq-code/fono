$(document).ready(function() {
    function carregarPacientes() {

        $.ajax({
            url: './PHP/listar_pacientes.php',
            type: 'POST',
            dataType: 'json',
            success: function(data) {
                const tabelaPacientes = $('#tabela-pacientes');
                const mensagem = $('#mensagem');

                if (data.mensagem) {
                    mensagem.text(data.mensagem);
                }

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
                                <button onclick="editarPaciente(${paciente.cod_paciente})">Editar</button>
                                    <button onclick="excluirPaciente(${paciente.cod_paciente})">Excluir</button>
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

    window.editarPaciente = function(id) {
        // Redirecionar para a página de atualização com o ID do paciente na URL
        window.location.href = `atualizar_paciente.html?id=${id}`;
    };

    // Função para excluir paciente
    window.excluirPaciente = function(id) {
        if (confirm('Tem certeza que deseja excluir este paciente?')) {
            $.ajax({
                url: './PHP/excluir_paciente.php',
                type: 'POST',
                data: { id: id },
                success: function(response) {
                    const data = JSON.parse(response);
                    alert(data.mensagem);
                    location.reload();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('Erro ao excluir paciente:', textStatus, errorThrown);
                }
            });
        }
    };

});
