<?php
// Incluir o arquivo de conexão com o banco de dados
include_once('../../assets/php/conexao.php');

// Verificar se o método de requisição é POST
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obter os dados do formulário
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

    // Consulta SQL para atualizar o paciente
    $sql = "UPDATE dados_paciente SET 
                nome_paciente = ?, 
                cpf_paciente = ?, 
                rg_paciente = ?, 
                data_nascimento = ?, 
                nome_responsavel = ?, 
                telefone_paciente = ?, 
                carteira_convenio = ?, 
                nacionalidade_paciente = ?, 
                contato_emergencia = ?, 
                cpf_responsavel = ?, 
                cep_paciente = ?, 
                endereco = ?, 
                numero_endereco = ?, 
                bairro = ?, 
                numero_responsavel = ? 
            WHERE cod_paciente = ?";
    
    // Preparar a consulta
    $stmt = $conexao->prepare($sql);
    
    // Vincular os parâmetros e executar a consulta
    $stmt->bind_param('sssssssssssssssi', 
                        $nome, 
                        $cpf, 
                        $rg, 
                        $data_nascimento, 
                        $nome_responsavel, 
                        $telefone, 
                        $carteira_convenio, 
                        $nacionalidade, 
                        $contato_emergencia, 
                        $cpf_responsavel, 
                        $cep, 
                        $endereco, 
                        $numero_endereco, 
                        $bairro, 
                        $numero_responsavel, 
                        $id);
    
    if ($stmt->execute()) {
        $mensagem = "Pessoa atualizada com sucesso.";
    } else {
        $mensagem = "Erro ao atualizar pessoa.";
    }
    
    echo json_encode(['mensagem' => $mensagem]);
?>
