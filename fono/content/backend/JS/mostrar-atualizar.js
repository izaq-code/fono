document.getElementById('nome').addEventListener('change', function () {

    var selecionado = this.value;
    $(document).ready(function () {

        $.ajax({
            type: 'POST',
            url: './PHP/mostrar-atualizar.php',
            //contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: 'json',
            data: {
                selecionado: selecionado
            },
            success: function (data) {
                mostrar(data);
            }
        });
    });
})
function mostrar(data) {
    $('#Nome_paciente').val(data[0].nome_paciente);
    $('#cpf').val(data[0].cpf_paciente);
    $('#rg').val(data[0].rg_paciente);
    $('#data').val(data[0].data_nascimento);
    $('#nome_responsavel').val(data[0].nome_responsavel);
    $('#Telefone').val(data[0].telefone_paciente);
    $('#carterinha').val(data[0]. carteira_convenio);
    $('#Nacionalidade').val(data[0].nacionalidade_paciente);
    $('#Contato_emergencia').val(data[0].contato_emergencia);
    $('#cpf_responsavel').val(data[0].cpf_responsavel);
    $('#cep').val(data[0].cep_paciente);
    $('#estado_civil').val(data[0].estado_civil);
    $('#sexo').val(data[0].sexo);
    $('#tipo_sanguineo').val(data[0].tipo_sanguineo);
    $('#Numero_responsavel').val(data[0].numero_responsavel);
}
