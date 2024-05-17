<?php
// Inclua o arquivo de conexão
include 'conexao.php';

// Inicialize uma variável para armazenar mensagens de erro ou sucesso
$mensagem = '';

// Verifique se há uma mensagem na URL (para exibir mensagens de erro ou sucesso)
if (isset($_GET['mensagem'])) {
    $mensagem = $_GET['mensagem'];
}

// Recupere a lista de pacientes do banco de dados
try {
    $stmt = $pdo->query("SELECT * FROM dados_paciente");
    $pacientes = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    // Se ocorrer um erro, exiba uma mensagem de erro
    $mensagem = "Erro ao recuperar pacientes: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listar Pacientes</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Listar Pacientes</h1>

    <!-- Exibir mensagens de erro ou sucesso, se houver -->
    <?php if (!empty($mensagem)): ?>
        <p><?php echo $mensagem; ?></p>
    <?php endif; ?>

    <!-- Exibir a tabela de pacientes -->
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>RG</th>
                <th>Data de Nascimento</th>
                <th>Nome do Responsável</th>
                <th>Telefone</th>
                <th>Carteira de Convênio</th>
                <th>Nacionalidade</th>
                <th>Contato de Emergência</th>
                <th>CPF do Responsável</th>
                <th>CEP</th>
                <th>Endereço</th>
                <th>Número</th>
                <th>Bairro</th>
                <th>Número do Responsável</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($pacientes as $paciente): ?>
                <tr>
                    <td><?php echo $paciente['cod_paciente']; ?></td>
                    <td><?php echo $paciente['nome_paciente']; ?></td>
                    <td><?php echo $paciente['cpf_paciente']; ?></td>
                    <td><?php echo $paciente['rg_paciente']; ?></td>
                    <td><?php echo $paciente['data_nascimento']; ?></td>
                    <td><?php echo $paciente['nome_responsavel']; ?></td>
                    <td><?php echo $paciente['telefone_paciente']; ?></td>
                    <td><?php echo $paciente['carteira_convenio']; ?></td>
                    <td><?php echo $paciente['nacionalidade_paciente']; ?></td>
                    <td><?php echo $paciente['contato_emergencia']; ?></td>
                    <td><?php echo $paciente['cpf_responsavel']; ?></td>
                    <td><?php echo $paciente['cep_paciente']; ?></td>
                    <td><?php echo $paciente['endereco']; ?></td>
                    <td><?php echo $paciente['numero_endereco']; ?></td>
                    <td><?php echo $paciente['bairro']; ?></td>
                    <td><?php echo $paciente['numero_responsavel']; ?></td>
                    <td>
                        <button><a href="atualizar.php?id=<?php echo $paciente['cod_paciente']; ?>">Editar</a></button>
                        <!-- Adicione links para outras ações, se necessário -->
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
