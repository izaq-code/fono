<?php
// Inclua o arquivo de conexão
include 'conexao.php';

// Verifique se o ID do paciente foi fornecido na URL
if (isset($_GET['id'])) {
    $id_paciente = $_GET['id'];

    // Recupere os dados do paciente do banco de dados
    try {
        $stmt = $pdo->prepare("SELECT * FROM dados_paciente WHERE cod_paciente = :id");
        $stmt->execute([':id' => $id_paciente]);
        $paciente = $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        // Se ocorrer um erro, redirecione com uma mensagem de erro
        header("Location: listar_pacientes.php?erro=" . urlencode("Erro ao recuperar dados do paciente: " . $e->getMessage()));
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
    
    try {
        // Prepare a declaração SQL para atualização
        $sql = "UPDATE dados_paciente SET
                    nome_paciente = :nome,
                    cpf_paciente = :cpf,
                    rg_paciente = :rg,
                    data_nascimento = :data_nascimento,
                    nome_responsavel = :nome_responsavel,
                    telefone_paciente = :telefone,
                    carteira_convenio = :carteira_convenio,
                    nacionalidade_paciente = :nacionalidade,
                    contato_emergencia = :contato_emergencia,
                    cpf_responsavel = :cpf_responsavel,
                    cep_paciente = :cep,
                    endereco = :endereco,
                    numero_endereco = :numero_endereco,
                    bairro = :bairro,
                    numero_responsavel = :numero_responsavel
                WHERE
                    cod_paciente = :id";
        $stmt = $pdo->prepare($sql);

        // Execute a declaração preparada
        $stmt->execute([
            ':id' => $id_paciente,
            ':nome' => $nome,
            ':cpf' => $cpf,
            ':rg' => $rg,
            ':data_nascimento' => $data_nascimento,
            ':nome_responsavel' => $nome_responsavel,
            ':telefone' => $telefone,
            ':carteira_convenio' => $carteira_convenio,
            ':nacionalidade' => $nacionalidade,
            ':contato_emergencia' => $contato_emergencia,
            ':cpf_responsavel' => $cpf_responsavel,
            ':cep' => $cep,
            ':endereco' => $endereco,
            ':numero_endereco' => $numero_endereco,
            ':bairro' => $bairro,
            ':numero_responsavel' => $numero_responsavel
        ]);

        // Redirecione de volta à página de listagem com uma mensagem de sucesso
        header("Location: listar_pacientes.php?sucesso=" . urlencode("Dados do paciente atualizados com sucesso"));
        exit();
    } catch (PDOException $e) {
        // Se ocorrer um erro, redirecione com uma mensagem de erro
        header("Location: listar_pacientes.php?erro=" . urlencode("Erro ao atualizar dados do paciente: " . $e->getMessage()));
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atualizar Paciente</title>
</head>
<body>
    <h1>Atualizar Paciente</h1>
    <form method="post">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" value="<?php echo $paciente['nome_paciente']; ?>" required><br><br>
        
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" value="<?php echo $paciente['cpf_paciente']; ?>" required><br><br>

        <label for="rg">RG:</label>
        <input type="text" id="rg" name="rg" value="<?php echo $paciente['rg_paciente']; ?>" required><br><br>
        
        <label for="data_nascimento">Data de Nascimento:</label>
        <input type="date" id="data_nascimento" name="data_nascimento" value="<?php echo $paciente['data_nascimento']; ?>" required><br><br>

        <label for="nome_responsavel">Nome do Responsável:</label>
        <input type="text" id="nome_responsavel" name="nome_responsavel" value="<?php echo $paciente['nome_responsavel']; ?>" required><br><br>

        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" name="telefone" value="<?php echo $paciente['telefone_paciente']; ?>" required><br><br>

        <label for="carteira_convenio">Carteira de Convênio:</label>
        <input type="text" id="carteira_convenio" name="carteira_convenio" value="<?php echo $paciente['carteira_convenio']; ?>" required><br><br>

        <label for="nacionalidade">Nacionalidade:</label>
        <input type="text" id="nacionalidade" name="nacionalidade" value="<?php echo $paciente['nacionalidade_paciente']; ?>" required><br><br>

        <label for="contato_emergencia">Contato de Emergência:</label>
        <input type="text" id="contato_emergencia" name="contato_emergencia" value="<?php echo $paciente['contato_emergencia']; ?>" required><br><br>

        <label for="cpf_responsavel">CPF do Responsável:</label>
        <input type="text" id="cpf_responsavel" name="cpf_responsavel" value="<?php echo $paciente['cpf_responsavel']; ?>" required><br><br>

        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" value="<?php echo $paciente['cep_paciente']; ?>" required><br><br>

        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" value="<?php echo $paciente['endereco']; ?>" required><br><br>

        <label for="numero_endereco">Número:</label>
        <input type="text" id="numero_endereco" name="numero_endereco" value="<?php echo $paciente['numero_endereco']; ?>" required><br><br>

        <label for="bairro">Bairro:</label>
        <input type="text" id="bairro" name="bairro" value="<?php echo $paciente['bairro']; ?>" required><br><br>

        <label for="numero_responsavel">Número do Responsável:</label>
        <input type="text" id="numero_responsavel" name="numero_responsavel" value="<?php echo $paciente['numero_responsavel']; ?>" required><br><br>
        
        <button type="submit">Atualizar</button>
    </form>
    <script src="../Paciente/JS/atualizar_paciente.js"></script>
</body>
</html>