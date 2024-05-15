<?php

include_once("conexao.php");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
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
    
    $cadastro = "INSERT INTO dados_paciente (nome_paciente, cpf_paciente, rg_paciente, data_nascimento, nome_responsavel, telefone_paciente, carteira_convenio, nacionalidade_paciente, contato_emergencia, cpf_responsavel, cep_paciente, estado_civil, sexo, tipo_sanguineo, numero_responsavel)
                 VALUES ('$nome', '$cpf', '$rg', '$data_nascimento', '$nome_responsavel', '$telefone', '$carteira_convenio', '$nacionalidade', '$contato_emergencia', '$cpf_responsavel', '$cep', '$estado_civil', '$sexo', '$tipo_sanguineo', '$numero_responsavel');";
    

    if ($conexao->query($cadastro) === TRUE) {
        echo "Inserção realizada com sucesso";
    } else {
        echo "Erro na inserção: " . $conexao->error;
    }
}
$conexao->close();
?>