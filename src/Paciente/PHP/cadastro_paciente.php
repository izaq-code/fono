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

    try {
        // Prepare a declaração SQL para inserção
        $sql = "INSERT INTO dados_paciente (
                    nome_paciente, cpf_paciente, rg_paciente, data_nascimento, 
                    nome_responsavel, telefone_paciente, carteira_convenio, nacionalidade_paciente,
                    contato_emergencia, cpf_responsavel, cep_paciente, endereco, 
                    numero_endereco, bairro, numero_responsavel
                ) VALUES (
                    :nome, :cpf, :rg, :data_nascimento, 
                    :nome_responsavel, :telefone, :convenio, :nacionalidade,
                    :contato_emergencia, :cpf_responsavel, :cep, :endereco, 
                    :numero_endereco, :bairro, :numero_responsavel
                )";
        $stmt = $pdo->prepare($sql);

        // Execute a declaração preparada
        $stmt->execute([
            ':nome' => $nome,
            ':cpf' => $cpf,
            ':rg' => $rg,
            ':data_nascimento' => $data_nascimento,
            ':nome_responsavel' => $nome_responsavel,
            ':telefone' => $telefone,
            ':convenio' => $convenio,
            ':nacionalidade' => $nacionalidade,
            ':contato_emergencia' => $contato_emergencia,
            ':cpf_responsavel' => $cpf_responsavel,
            ':cep' => $cep,
            ':endereco' => $endereco,
            ':numero_endereco' => $numero_endereco,
            ':bairro' => $bairro,
            ':numero_responsavel' => $numero_responsavel
        ]);

        // Retorna uma mensagem de sucesso
        echo "success";
    } catch (PDOException $e) {
        // Se ocorrer um erro, informe o usuário sobre o erro
        echo "Erro ao cadastrar paciente: " . $e->getMessage();
    }
}
?>