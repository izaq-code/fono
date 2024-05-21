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
$sql = "SELECT * FROM dados_paciente";
$resultado = $conexao->query($sql);

$pacientes = array();

// Verificar se a consulta retornou resultados
if ($resultado->num_rows > 0) {
    while ($paciente = $resultado->fetch_assoc()) {
        $pacientes[] = $paciente;
    }
} else {
    // Se não houver pacientes, exiba uma mensagem
    $mensagem = "Não há pacientes cadastrados.";
}

// Retornar a lista de pacientes e a mensagem como um JSON
echo json_encode(['pacientes' => $pacientes, 'mensagem' => $mensagem]);
?>

