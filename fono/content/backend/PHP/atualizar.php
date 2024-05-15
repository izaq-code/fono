<?php

include_once ("conexao.php");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $cod = $_POST['nome'];
    $nome = $_POST['Nome_paciente'];
    $cpf = $_POST['cpf'];
    $rg = $_POST['rg'];
    $data_nascimento = $_POST['data'];
    $nome_responsavel = $_POST['nome_responsavel'];
    $telefone = $_POST['Telefone'];
    $carteira_convenio = $_POST['carterinha'];
    $nacionalidade = $_POST['Nacionalidade'];
    $contato_emergencia = $_POST['Contato_emergencia'];
    $cpf_responsavel = $_POST['cpf_responsavel'];
    $cep = $_POST['cep'];
    $estado_civil = $_POST['estado_civil'];
    $sexo = $_POST['sexo'];
    $tipo_sanguineo = $_POST['tipo_sanguineo'];
    $numero_responsavel = $_POST['Numero_responsavel'];

    $cadastro = "UPDATE dados_paciente
                    SET 
                    nome_paciente = '$nome',
                    rg_paciente = '$rg',
                    data_nascimento = '$data_nascimento',
                    nome_responsavel = '$nome_responsavel',
                    telefone_paciente = '$telefone',
                    carteira_convenio = '$carteira_convenio',
                    nacionalidade_paciente = '$nacionalidade',
                    contato_emergencia = '$contato_emergencia',
                    cpf_responsavel = '$cpf_responsavel',
                    cep_paciente = '$cep',
                    estado_civil = '$estado_civil',
                    sexo = '$sexo',
                    tipo_sanguineo = '$tipo_sanguineo',
                    numero_responsavel = '$numero_responsavel'
                    WHERE cod_paciente = '$cod';
    ";


    if ($conexao->query($cadastro) === TRUE) {
        echo "Inserção realizada com sucesso";
    } else {
        echo "Erro na inserção: " . $conexao->error;
    }
}
$conexao->close();
?>