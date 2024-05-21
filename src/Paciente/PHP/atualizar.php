<?php
// Inclua o arquivo de conexão
include 'conexao.php';

// Verifique se o ID do paciente foi fornecido na URL
if (isset($_GET['id'])) {
    $id_paciente = $_GET['id'];

    // Recupere os dados do paciente do banco de dados
    $sql = "SELECT * FROM dados_paciente WHERE cod_paciente = ?";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("i", $id_paciente);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0) {
        $paciente = $resultado->fetch_assoc();
    } else {
        // Se não houver paciente com o ID fornecido, redirecione com uma mensagem de erro
        header("Location: listar_pacientes.php?erro=" . urlencode("Paciente não encontrado"));
        exit();
    }
} else {
    // Se nenhum ID de paciente foi fornecido, redirecione com uma mensagem de erro
    header("Location: listar_pacientes.php?erro=" . urlencode("ID do paciente não fornecido"));
    exit();
}

// Verifique se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupere os dados do formulário
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

    // Prepare a declaração SQL para atualização
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
            WHERE
                cod_paciente = ?";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("sssssssssssssssi", $nome, $cpf, $rg, $data_nascimento, $nome_responsavel, $telefone, $carteira_convenio, $nacionalidade, $contato_emergencia, $cpf_responsavel, $cep, $endereco, $numero_endereco, $bairro, $numero_responsavel, $id_paciente);
    $stmt->execute();

    // Redirecione de volta à página de listagem com uma mensagem de sucesso
    header("Location: listar_pacientes.php?sucesso=" . urlencode("Dados do paciente atualizados com sucesso"));
    exit();
}
?>

