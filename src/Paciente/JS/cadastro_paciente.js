$(document).ready(function(){
    $('#cadastro_paciente').submit(function(e){
        e.preventDefault();

        var nome = $('#nome').prop('value');
        var cpf = $('#cpf').prop('value');
        var rg = $('#rg').prop('value');
        var data_nascimento = $('#data_nascimento').prop('value');
        var nome_responsavel = $('#nome_responsavel').prop('value');
        var telefone = $('#telefone').prop('value');
        var carteira_convenio = $('#carteira_convenio').prop('value');
        var nacionalidade = $('#nacionalidade').prop('value');
        var contato_emergencia = $('#contato_emergencia').prop('value');
        var cpf_responsavel = $('#cpf_responsavel').prop('value');
        var cep = $('#cep').prop('value');
        var endereco = $('#endereco').prop('value');
        var numero_endereco = $('#numero_endereco').prop('value');
        var bairro = $('#bairro').prop('value');
        var numero_responsavel = $('#numero_responsavel').prop('value');

        var Data = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            data_nascimento: data_nascimento,
            nome_responsavel: nome_responsavel,
            telefone: telefone,
            carteira_convenio: carteira_convenio,
            nacionalidade: nacionalidade,
            contato_emergencia: contato_emergencia,
            cpf_responsavel: cpf_responsavel,
            cep: cep,
            endereco: endereco,
            numero_endereco: numero_endereco,
            bairro: bairro,
            numero_responsavel: numero_responsavel,
        }

        $.ajax({
            type: 'POST',
            url: './PHP/cadastro_paciente.php',
            data: Data,
            success: function (response){
            console.log(response);
           
            }
        });
    });
});
