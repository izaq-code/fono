<?php
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $rg = $_POST['rg'];
    $data_nascimento = $_POST['data_nascimento'];
    $nome_responsavel = $_POST['nome_responsavel'];
    $telefone = $_POST['telefone'];
    $carteira_convenio = $_POST['carteira_convenio'];
    $nacionalidade = $_POST['nacionalidade'];
    $contato_emergencia = $_POST['contato_emergencia'];
    $cpf_responsavel = $_POST['cpf_responsavel'];
    $cep = $_POST['cep'];
    $endereco = $_POST['endereco'];
    $numero_endereco = $_POST['numero_endereco'];
    $bairro = $_POST['bairro'];
    $numero_responsavel = $_POST['numero_responsavel'];

    $sql = "INSERT INTO dados_paciente (nome_paciente, cpf_paciente, rg_paciente, data_nascimento, 
                nome_responsavel, telefone_paciente, carteira_convenio, nacionalidade_paciente, 
                contato_emergencia, cpf_responsavel, cep_paciente, endereco, numero_endereco, bairro, 
                numero_responsavel) VALUES ('$nome', '$cpf', '$rg', '$data_nascimento', '$nome_responsavel', '$telefone', '$carteira_convenio', '$nacionalidade', '$contato_emergencia', '$cpf_responsavel', '$cep', '$endereco', '$numero_endereco', '$bairro', '$numero_responsavel')";
    
 if ($conexao->query($sql) === TRUE) {
    echo "Inserido";
 } else {
    echo "Não inserido";
 }
}
?>