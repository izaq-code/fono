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
                                <td>${paciente.telefone_paciente}</td>
                                <td>${paciente.carteira_convenio}</td>
                                <td>${paciente.cep_paciente}</td>
                                <td>
                                <button onclick="editarPaciente(${paciente.cod_paciente})">Editar</button>
                                    <button onclick="excluirPaciente(${paciente.cod_paciente})">Excluir</button>
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
        // Armazenar o ID no localStorage e redirecionar para a página de atualização
        localStorage.setItem('pacienteId', id);
        window.location.href = 'atualizar_paciente.html';
    };

    // Função para excluir paciente
    window.excluirPaciente = function(id) {
        Swal.fire({
            title: "Tem certeza?",
            text: "Você realmente deseja excluir este paciente?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, exclua!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: './PHP/excluir_paciente.php',
                    type: 'POST',
                    data: { id: id },
                    success: function(response) {
                        const data = JSON.parse(response);
                        Swal.fire({
                            title: "Excluído!",
                            text: data.mensagem,
                            icon: "success"
                        }).then(() => {
                            location.reload();
                        });
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.error('Erro ao excluir paciente:', textStatus, errorThrown);
                        Swal.fire({
                            title: "Erro",
                            text: "Ocorreu um erro ao tentar excluir o paciente.",
                            icon: "error"
                        });
                    }
                });
            }
        });
    };
    

});
