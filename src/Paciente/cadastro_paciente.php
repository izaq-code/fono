<?php
// Inclua o arquivo de conexão
include 'conexao.php';

// Verifique se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupere os dados do formulário
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $rg = $_POST['rg'];
    $data_nascimento = $_POST['data_nascimento'];
    $nome_responsavel = $_POST['nome_responsavel'];
    $telefone = $_POST['telefone'];
    $convenio = $_POST['convenio'];
    $nacionalidade = $_POST['nacionalidade'];
    $contato_emergencia = $_POST['contato_emergencia'];
    $cpf_responsavel = $_POST['cpf_responsavel'];
    $cep = $_POST['cep'];
    $endereco = $_POST['endereco'];
    $numero_endereco = $_POST['numero_endereco'];
    $bairro = $_POST['bairro'];
    $numero_responsavel = $_POST['numero_responsavel'];

    // Prepare a declaração SQL para inserção
    $sql = "INSERT INTO dados_paciente (
                    nome_paciente, cpf_paciente, rg_paciente, data_nascimento, 
                    nome_responsavel, telefone_paciente, carteira_convenio, nacionalidade_paciente,
                    contato_emergencia, cpf_responsavel, cep_paciente, endereco, 
                    numero_endereco, bairro, numero_responsavel
                ) VALUES (
                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
                )";
    $stmt = $conexao->prepare($sql);

    if ($stmt) {
        // Associe os parâmetros
        $stmt->bind_param("sssssssssssssss", $nome, $cpf, $rg, $data_nascimento, $nome_responsavel, $telefone, $convenio, $nacionalidade, $contato_emergencia, $cpf_responsavel, $cep, $endereco, $numero_endereco, $bairro, $numero_responsavel);
        
        // Execute a declaração preparada
        if ($stmt->execute()) {
            echo "Inserção realizada com sucesso";
        } else {
            echo "Erro na execução da declaração: " . $stmt->error;
        }

        // Feche a declaração
        $stmt->close();
    } else {
        echo "Erro na preparação da declaração: " . $conexao->error;
    }

    // Feche a conexão
    $conexao->close();
}
?>
