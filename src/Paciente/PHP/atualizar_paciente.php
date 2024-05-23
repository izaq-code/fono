<?php
include_once ('../../assets/conexao.php'); // Certifique-se de que o arquivo de conexão está incluído aqui

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 

        $id = $_POST['id'];
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

//new
        $sql = "UPDATE dados_paciente SET 
        cod_paciente = '$id',
        nome_paciente = '$nome', 
        cpf_paciente='$cpf', 
        rg_paciente= '$rg', 
        data_nascimento= '$data_nascimento', 
        nome_responsavel= '$nome_responsavel', 
        telefone_paciente= '$telefone', 
        carteira_convenio= '$carteira_convenio', 
        nacionalidade_paciente= '$nacionalidade',
        contato_emergencia= '$contato_emergencia',  
        cpf_responsavel= '$cpf_responsavel' , 
        cep_paciente='$cep ', 
        endereco='$endereco',  
        numero_endereco='$numero_endereco', 
        bairro= '$bairro',
        numero_responsavel='$numero_responsavel'
        WHERE cod_paciente= '$id'";

if ($conexao->query($sql) === TRUE) {
    echo "Atualização realizada com sucesso";
} else {
    echo "Erro na inserção: " . $conexao->error;
}


}
$conexao->close();
?>

